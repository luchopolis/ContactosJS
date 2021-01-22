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
            const execQuery = query(`SELECT id,Nombre,Email,PhoneNumber FROM ${this.tableName} WHERE User_id = ${UserId} ORDER BY id DESC`)
            
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
    
    async getById(id){
        try {
            const query = util.promisify(this.conexion.conexion.query).bind(this.conexion.conexion)

            const execQuery = query(`SELECT * FROM ${this.tableName} WHERE id = ${id}`)

            return execQuery
        } catch (error) {
            console.log("Error consultando contacto")
        }
    }

    async update(id,values){
        try {
            const query = util.promisify(this.conexion.conexion.query).bind(this.conexion.conexion)
            
            const execQuery = query(`UPDATE ${this.tableName} SET Nombre="${values.Nombre}",Email="${values.Email}",PhoneNumber="${values.PhoneNumber}"  WHERE id = ${id}`)
         
            return execQuery
        } catch (error) {
            if (error) {
                console.log("Error actualizando contacto")
                throw error
            }
            
        }
    }
}

module.exports = ContactModel;