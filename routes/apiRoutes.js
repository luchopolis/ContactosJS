const express = require('express')
const router = express.Router()

const ContactModel = require('../models/ContacModel')

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


module.exports = {apiApp}