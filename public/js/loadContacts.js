let templateContactos = ``

let listContactos = document.querySelector("#listContactos")
const loadContacts = () => {
    fetch("http://localhost:3000/api/contactos")
    .then(data => data.json())
    .then(contactos => {

        contactos.forEach(contacto => {
            templateContactos += `
                <div class="contactoCard">
                    <div class="card_header">
                        <div class="card_header_contactoName text-white">
                            ${contacto.Nombre}
                        </div>
                    </div>
                    <div class="card_body">
                        <div class="card_body_contactoInfo">
                            <div class="email text-white">
                                ${contacto.Email}
                            </div>
                            <div class="phonenumber text-white">
                                ${contacto.PhoneNumber}
                            </div>
                        </div>
                    </div>
                </div>
            `


        })
        
        listContactos.innerHTML = templateContactos
        
    })
    .catch(error => {
        listContactos.innerHTML = `<h4>Data not found</h4>`
    })
}

loadContacts()

