const fs = require("fs/promises");
const path = require("path")
const {v4} = require("uuid");

//Прописываем путь к файлу с контактами
const contactsPath = path.join(__dirname, "db/contacts.json")

//Функция для обновления json
const updateJson = async(contacts) => {
    //null & 2 - для визуально правильного отображения файла json
    return await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
}

//Получаем все контакты
const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  const contacts = JSON.parse(data)
  return contacts;

};

//Находим контакт по id
const getContactById = async (id) => {
    //Сначала получаем все контакты
  const contacts = await listContacts();
  const result = contacts.find((item) => item.id === `${id}`)

  if (!result) {
      return null;
  }
  return result;

};

//Удаляем конткт по id
const removeContact = async(id) => {
    //Сначала получаем все контакты
    const contacts = await listContacts();
    const idx = contacts.findIndex(item => item.id === id);
    if (idx === -1){
        return null
    }

    // Сплайс принимает 2 аргумента - с какого индекса удалять и сколько удалять
    const removeContact = contacts.splice(idx, 1)
    await updateJson(contacts)
    return removeContact;
}

//Добавляем новый контакт в конец файла
const addContact = async (data) => {
    const newContact = {...data, id: v4()}
    //Получаем все контакты
    const contacts = await listContacts();
    contacts.push(newContact);
    await updateJson(contacts)
    return newContact;
}

const updateContact = async ({id, name, email, phone}) => {
    //Получаем все контакты
    const contacts = await listContacts();
    const idx = contacts.findIndex(item => item.id === id);
    if (idx === -1){
        return null
    }
    contacts[idx] = {id, name, email, phone};
    await updateJson(contacts);

    return contacts[idx];
}

module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact,
    updateContact
}
