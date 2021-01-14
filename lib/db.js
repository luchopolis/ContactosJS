var mysql = require('mysql')
require('dotenv').config()

class Conexion {

    conexion = ""

    constructor(){
        let config = {
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.database
        }

        this.conexion = mysql.createConnection(config)

        this.conexion.connect((error) => {
            if(error){
                console.log("error connecting conexion" + error.stack)
                return;
            }
        })
    }



}


module.exports = Conexion




