const myContacts = [
    {
        id :1,
        name : "Alva Avalon",
        phone : "+1 11101010",
        email : "alpha@avalon.org",
        favorite : true,
        rating : 9,
        tag : ["popular", "cool"],
        age : 34
    },
    {
        id :2,
        name : "Betty Brave",
        phone : "+62812242424",
        email : "betty@braveian.com",
        age : 34
    },
    {
        id : 3,
        name : "Gamma Gacurio",
        phone : "+63813363636",
        email : "gamba@gacurio.dev",
        age : 35
    }
]

//create contact console with method show contact add contact, filter contact and delete contact
// show contacts
console.log(myContacts);

const showContact = contacts => {
    for (let index = 0; index < contacts.length; index++){
        const contact = contacts[index]
        console.log(`[${contact.id}], ${contact.name},${contact.phone},${contact.email}`);
        
    }
}
showContact(myContacts);

// add contact push
const addContact = [{id : 4, name : "Indra", phone : "0985646464", email : "indra@glints.com", age : 35}]

let newContact = myContacts.push(addContact);
console.log(myContacts);

// myContacts.push(addContact);
// console.log(myContacts);



// filter contact
const ditemukan = myContacts.filter((item, index, array) => {
    if (item.age == 34 )
    return true;
    return false;
})
console.log(ditemukan);

//delete contact

 myContacts.pop();
console.log(myContacts);

