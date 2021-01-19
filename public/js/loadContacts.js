const fetch = require('node-fetch')

function loadContacts(user_id){
    return new Promise((resolve,reject) => {
        fetch(`http://localhost:3000/api/contactos/${user_id}`)
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
