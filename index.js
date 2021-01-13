const express = require('express')
const app = express()
const port = 3000

const handlebars = require('express-handlebars')

// app.set('view engine','handlebars')
app.set('view engine','hbs')

// app.engine('handlebars',handlebars({
//     layoutsDir:__dirname + "/views/layouts"
// }))


//default layout le indica que se usará la plantilla index.hbs
app.engine('hbs',handlebars({
    layoutsDir:__dirname + "/views/layouts",
    extname:'hbs',
    defaultLayout: 'index'
}))



//el {layout: indes} es para indicar cual será la plantilla inicial
//Otra forma es haciendo en el las propiedades del objeto handlebars creado anteriormente
app.get('/',(req,res,next) => {
    // res.render('main', {layout : 'index'})
    //se usa
    res.render('main')
})
app.use(express.static('public'))

app.listen(port,(err) => {
    console.log("port 3000 ")
})