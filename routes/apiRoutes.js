const express = require('express')
const router = express.Router()
const passport = require("passport")

const ContactModel = require('../models/ContacModel')
const UserModel = require('../models/UserModel')

//Util bcrypt
const bcrypt = require("bcrypt")


let contacto = new ContactModel()

//Constructor function to set the route
function apiApp(app){
    app.use('/api',router)
}

//** !START THE ROUTES FOR CONTACS */
router.get('/Contactos',async function(req,res,next){
    try {
        const results = await contacto.getContacts(1)

        res.status(200).json(results)
    } catch (error) {
        if (error) throw error
    }
})

router.post('/Contactos',async function(req,res,next){
    try{
        let userId = req.body.User_id
        
        contacto.Nombre = req.body.Nombre
        contacto.Email = req.body.Email
        contacto.PhoneNumber = req.body.PhoneNumber
        
        
        const result = await contacto.createContact(userId)
        
        res.status(200).json({
            registroId:result.insertId
        })
    }catch(error){
        if (error) throw error
    }
})




/* !END ROUTES FOR CONTACS */


/*Register and login routes */

router.post('/User/Register',(req,res,next) => {
    try {
        let UserName = req.body.Username;
        let password = req.body.password;

        bcrypt.genSalt(10,(err,salt) => {
            bcrypt.hash(password,salt,async (err,passHashed) => {

                let User = new UserModel(UserName,passHashed)
                try {
                    await User.createUser()

                    res.status(200).end()
                } catch (error) {
                    if(error) throw error
                }
              
            })
        })

    } catch (error) {
        
    }
})

router.get('/User/login',async (req,res,next) => {
    // passport.authenticate('local',{
    //     successRedirect: '/',
    //     failureRedirect: '/login'
    // })(req,res,next);

    try {
        let User = new UserModel("Caballero","Caballero1")
        let a = await User.findUser()

        
        if(a[0]){
            console.log("Usuario existe")
        }else{
            console.log("Usuario no existe")
        }
    } catch (error) {
        
    }
    
})
/* END  */
module.exports = {apiApp}