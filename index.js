const contactsOperation = require("./contacts")
// const yargs = require("yargs");
// const {hideBin} = require("yargs/helpers")
const argv = require("yargs").argv;

const invokeAction = async({action, id, name, email, phone}) => {
    switch(action){
        case "list":
            const contacts = await contactsOperation.listContacts();
            console.log(contacts);
            break;

        case "get":
            const contact = await contactsOperation.getContactById(id);
            console.log(contact)
            break;

        case "add":
            const newContact = await contactsOperation.addContact({name, email, phone});
            console.log(newContact)
            break;

        case "remove":
            const removeContact = await contactsOperation.removeContact(id);
            console.log(removeContact)
            break;

        case "update":
            const updateContact = await contactsOperation.updateContact({id, name, email, phone})
            console.log(updateContact)
            break;

        default:
            console.log("Default")
    }
}

// const arr = hideBin(process.argv);
// const {argv} = yargs(arr);

invokeAction(argv)

// const id = "7";

// const data = {
//     name: "Lana",
//     email: "lana@gmail.com",
//     phone: 987654321
// }

// const updateData = {
//     name: "Lana",
//     email: "lana@gmail.com",
//     phone: 123456789
// }

// const updateId = "c82e00a6-d1b7-4dcc-9180-eafeb3d4591b";

// const removeId = "c82e00a6-d1b7-4dcc-9180-eafeb3d4591b";

// invokeAction({action: "listContacts"})
// invokeAction({action: "getContactById", id});
// invokeAction({action: "addContact", ...data});
// invokeAction({action: "removeContact", id: removeId});
// invokeAction({action: "updateContact", ...updateData, id: updateId});
















// const fs = require("fs/promises");
// const path = require("path")

// const contactsPath = "db/contacts.json"

// const contactsOperation = async (action, contactsPath, string) => {
//     switch(action){
//         case "read":
//             const text = await fs.readFile(contactsPath, "utf-8");
//             // console.log(text)
            
//             //Аналогично первому варианту
//             // const data = await fs.readFile(contactsPath);
//             // console.log(data.toString());
//             break;

//         //Добавляет текст в конец файла
//         case "add":
//             await fs.appendFile(contactsPath, string)
//             break;

//         //Полностью перезаписывает содержимое файла
//         case "replace":
//             await fs.writeFile(contactsPath, string);
//             break;

//         default:
//             console.log("Unknow action")
//     }
// }

// contactsOperation("read", contactsPath);
// // contactsOperation("add", contactsPath, "addaddadd")
// // contactsOperation("replace", contactsPath, "replacereplacereplace");