const express = require("express")
const router = express.Router()

function webRoute(app){
    app.use('/',router)
}

router.get("/",(req,res,next) => {
    res.render('main')
})

router.get('/login',(req,res,next) => {
    res.render('login',{layout : 'loginLayout'})
})

module.exports = {webRoute}