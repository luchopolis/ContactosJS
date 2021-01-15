let Name = document.getElementById("Nombre")
let Email = document.getElementById("Email")
let PhoneNumber = document.getElementById("PhoneNumber")

function createContact(){
    if(!Email.value.includes("@")){
        alert("Necesita agregar un correo válido")
    }else{

        fetch("/api/Contactos",{
            method: "POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                User_id: 1,
                Nombre: Name.value,
                Email: Email.value,
                PhoneNumber: PhoneNumber.value
            })
        })
        .then(response => {
            if(response.ok){
                alert("Nuevo contacto agregado")
                window.location.href = "/"
            }
        })
        .catch(error => {
            alert("error en crear contacto")
            console.log(error)
        })
    }

    
}

