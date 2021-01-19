const btnRegister = document.getElementById("btnRegister")
const UserName = document.getElementById("UserName")
const password = document.getElementById("Password")


btnRegister.addEventListener("click",(e) => {
    e.preventDefault()

    fetch('/api/User/Register',{
        method:"POST",
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            Username: UserName.value,
            password: password.value
        })
    })
    .then(response => {
        if(response.ok){
            console.log("Usuario creado")
            location.reload()
        }
    })
    
})