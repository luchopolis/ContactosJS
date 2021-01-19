const express = require("express")
const router = express.Router()
const fetch = require('node-fetch')

const loadContacts = require('../public/js/loadContacts')

function webRoute(app){
    app.use('/',router)
}

router.get("/",async (req,res,next) => {

    let contactos = await loadContacts()
   
    res.render('main',{layout:'index',contactos: contactos})
    
})

router.get('/login',(req,res,next) => {
    res.render('login',{layout : 'formsLayout'})
})

router.get('/register',(req,res,next) => {
    req.flash('prueba','hola')
    res.render('register',{layout: ''})
})

router.get('/create',(req,res,next) => {
    res.render('create',{layout: 'formsLayout'})
})
module.exports = {webRoute}