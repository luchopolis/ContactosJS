const express = require('express')
const router = express.Router()


const ContactModel = require('../models/ContacModel')
const UserModel = require('../models/UserModel')

//Util bcrypt
const bcrypt = require("bcrypt")

const passport = require("passport")


let contacto = new ContactModel()

//Constructor function to set the route
function apiApp(app){
    app.use('/api',router)

}

//** !START THE ROUTES FOR CONTACS */
router.get('/Contactos/:user_id',async function(req,res,next){
    try {
        //console.log(req.user)
        const results = await contacto.getContacts(req.params.user_id)

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


router.get('/Contactos/edit/:id',async (req,res,next) => {
    try {
        let result = await contacto.getById(req.params.id)

        res.status(200).json({
            contacto:result
        })
    } catch (error) {
        if (error) throw error
    }
})  

router.put('/Contactos/:id',async (req,res,next) => {
    try {

        let values = req.body
        await contacto.update(req.params.id,values)

        
        res.status(200).json({
            result: "Complete"
        })
      
    
    } catch (error) {
        
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
                    req.flash('success_msg','Puedes iniciar sesion ahora')
                    res.status(200).end()
                } catch (error) {
                    if(error) throw error
                }
              
            })
        })

    } catch (error) {
        
    }
})

router.post('/User/login',(req,res,next) => {
    passport.authenticate('local',{
        successRedirect: '/',
        failureRedirect: '/login',
        failureFlash:true
    })(req,res,next)

  
    
})
/* END  */
module.exports = {apiApp}