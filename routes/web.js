const express = require("express")
const router = express.Router()
const fetch = require('node-fetch')

const loadContacts = require('../public/js/loadContacts')

function webRoute(app){
    app.use('/',router)
}

router.get("/",async (req,res,next) => {

    let contactos = await loadContacts()
   
    res.render('main',{contactos: contactos})
    
})

router.get('/login',(req,res,next) => {
    res.render('login',{layout : 'formsLayout'})
})

router.get('/register',(req,res,next) => {
    res.render('register',{layout: 'formsLayout'})
})

router.get('/create',(req,res,next) => {
    res.render('create',{layout: 'formsLayout'})
})
module.exports = {webRoute}