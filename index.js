const express = require('express')
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')

const passport = require("passport")
const session = require('express-session');
const flash = require('connect-flash');




const app = express()
const port = 3000


app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))


app.use(session({
    secret:"secret",
    resave:true,
    saveUninitialized:true
}))


app.use(flash())

app.use((req,res,next)=>{
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg')
    res.locals.prueba = req.flash('prueba')
    next()
})


app.use(passport.initialize());
app.use(passport.session());
require("./strategies/passport")(passport)



/* Routes */

//apiRoutes
const {apiApp} = require('./routes/apiRoutes')
apiApp(app)


//Web Routes
const {webRoute} = require('./routes/web');
webRoute(app)

// app.set('view engine','handlebars')
app.set('view engine','hbs')

// app.engine('handlebars',handlebars({
//     layoutsDir:__dirname + "/views/layouts"
// }))


//default layout le indica que se usará la plantilla index.hbs
app.engine('hbs',handlebars({
    layoutsDir:__dirname + "/views/layouts",
    partialsDir: __dirname + "/views/partials",
    extname:'hbs'
}))



//el {layout: indes} es para indicar cual será la plantilla inicial
//Otra forma es haciendo en el las propiedades del objeto handlebars creado anteriormente
// app.get('/',(req,res,next) => {
//     // res.render('main', {layout : 'index'})
//     //se usa
//     res.render('main',{name:"Luis"})
// })




app.listen(port,(err) => {
    console.log("port 3000 ")
})