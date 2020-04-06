```javascript
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
```

## Creat Contact console with method show contact, add contact, filter contact, and delete contact
```const showContact = contacts => {
    for (let index = 0; index < contacts.length; index++){
        const contact = contacts[index]
        console.log(`[${contact.id}], ${contact.name},${contact.phone},${contact.email}`);
        
    }
}
showContact(myContacts);
```