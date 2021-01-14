const express = require('express')
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')

const app = express()
const port = 3000


app.use(express.static('public'))
app.use(bodyParser.json())

/* Routes */

//apiRoutes
const {apiApp} = require('./routes/apiRoutes')

apiApp(app)


// app.set('view engine','handlebars')
app.set('view engine','hbs')

// app.engine('handlebars',handlebars({
//     layoutsDir:__dirname + "/views/layouts"
// }))


//default layout le indica que se usará la plantilla index.hbs
app.engine('hbs',handlebars({
    layoutsDir:__dirname + "/views/layouts",
    partialsDir: __dirname + "/views/partials",
    extname:'hbs',
    defaultLayout: 'index'
}))



//el {layout: indes} es para indicar cual será la plantilla inicial
//Otra forma es haciendo en el las propiedades del objeto handlebars creado anteriormente
app.get('/',(req,res,next) => {
    // res.render('main', {layout : 'index'})
    //se usa
    res.render('main',{name:"Luis"})
})





app.listen(port,(err) => {
    console.log("port 3000 ")
})