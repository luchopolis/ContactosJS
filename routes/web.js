const express = require("express")
const router = express.Router()

function webRoute(app){
    app.use('/',router)
}

router.get("/",(req,res,next) => {
    res.render('main')
})

module.exports = {webRoute}