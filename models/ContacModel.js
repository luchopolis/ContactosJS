const Conexion = require('../lib/db')
const util = require('util')

class ContactModel {
    
    conexion = ""
    Nombre = ""
    Email = ""
    PhoneNumber = ""

    tableName = "contacts"

    constructor(){
        this.conexion = new Conexion()
    }

    set Nombre(value){
        this.Nombre = value
    }

    set Email(value){
        this.Email = value
    }

    set PhoneNumber(value){
        this.PhoneNumber = value
    }

    async getContacts(UserId){
        const query = util.promisify(this.conexion.conexion.query).bind(this.conexion.conexion)
        
        try {
            const execQuery = query(`SELECT Nombre,Email,PhoneNumber FROM ${this.tableName} WHERE User_id = ${UserId} ORDER BY id DESC`)
            
            return execQuery
        
        } catch (error) {
            if(error) throw error
        }
    }

    async createContact(UserId){
        try {
            const query = util.promisify(this.conexion.conexion.query).bind(this.conexion.conexion)

            const execQuery = query(`INSERT INTO ${this.tableName} (User_id,Nombre,Email,PhoneNumber) VALUES ("${UserId}","${this.Nombre}","${this.Email}","${this.PhoneNumber}")`)

            return execQuery
        } catch (error) {
            console.log("Error creando contacto")
        }
    }
    
}

module.exports = ContactModel;