const myContacts = [
    {
        id :1,
        name : "Alva Avalon",
        phone : "+1 11101010",
        email : "alpha@avalon.org",
        favorite : true,
        rating : 9,
        tag : ["popular", "cool"]
    },
    {
        id :2,
        name : "Betty Brave",
        phone : "+62812242424",
        email : "betty@braveian.com"
    },
    {
        id : 3,
        name : "Gamma Gacurio",
        phone : "+63813363636",
        email : "gamba@gacurio.dev"
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

// add contact
const addContact = [{id : 4, name : "Indra", phone : "0985646464", email : "indra@glints.com"}]
const myContactsNew = myContacts.concat(addContact);
console.log(myContactsNew);

// filter contact
const ditemukan = myContactsNew.filter((item, index, array) => {
    if (item.name == "Betty Brave")
    return true;
    return false;
})
console.log(ditemukan);

//delete contact

myContactsNew.pop();
console.log(myContactsNew);

