const Conexion = require('../lib/db')
const util = require('util')


class UserModel {
    id = 0
    UserName = ""
    Password = ""
    conexion = ""

    tableName = "users"

    constructor(UserName,Password){
        this.UserName = UserName
        this.Password = Password
        this.conexion = new Conexion()
    }

    async createUser(){
        const query = util.promisify(this.conexion.conexion.query).bind(this.conexion.conexion)
        
        try {
            const execQuery = query(`INSERT INTO ${this.tableName} (UserName,Password) VALUES ("${this.UserName}","${this.Password}")`)

            return execQuery
        } catch (error) {
            if(error) throw error
        }
    
    }

    //for the passport strategy
    async findUser(){
        try {
            const query = util.promisify(this.conexion.conexion.query).bind(this.conexion.conexion)

            const find = query(`SELECT UserName from ${this.tableName} WHERE UserName = "${this.UserName}"`)

            return find

            
        } catch (error) {
            
        }
    }



    
}

module.exports = UserModel