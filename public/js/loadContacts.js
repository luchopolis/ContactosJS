const fetch = require('node-fetch')

function loadContacts(){
    return new Promise((resolve,reject) => {
        fetch("http://localhost:3000/api/contactos")
        .then(data => data.json())
        .then(contactos => {
    
           resolve(contactos)
            
        })
        .catch(error => {
            reject("")
        })
    })
    
}




module.exports = loadContacts
