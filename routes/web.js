const express = require("express")
const router = express.Router()
const fetch = require('node-fetch')

const loadContacts = require('../public/js/loadContacts')


//middleware authenticate
const {ensureAuthenticated,logginActive} = require('../config/auth')

function webRoute(app){
    app.use('/',router)
}

router.get("/",ensureAuthenticated,async (req,res,next) => {

    let contactos = await loadContacts(req.user[0].id)
   
    res.render('main',{layout:'index',contactos: contactos,user:req.user[0]})
    
})

router.get('/login',(req,res,next) => {
    if(req.isAuthenticated()){
        res.redirect('/')
    }
    res.render('login',{layout : 'formsLayout'})
})

router.get('/register',(req,res,next) => {
    
    res.render('register',{layout: ''})
})

router.get('/logout',(req,res,next) => {
    req.logOut()
    req.flash('success_msg','Session cerrada')
    res.redirect('/login')
})

router.get('/create',(req,res,next) => {
    res.render('create',{layout: 'formsLayout',user:req.user[0]})
})
module.exports = {webRoute}