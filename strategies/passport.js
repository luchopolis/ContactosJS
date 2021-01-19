const LocalStrategy = require('passport-local').Strategy
//passport-local para usuario y contraseña
const bcrypt = require('bcrypt')
const UserModel = require('../models/UserModel')

module.exports = function(passport){

    let user = ""

    passport.use(
        new LocalStrategy({usernameField:'username'},async (username,password,done)=>{
            
            
            user = new UserModel(username,password)
            
            try {
                let find = await user.findUser()
                if(!find.length){
                    return done(null,false,{message:'el usuario no existe'})
                }
                
                if(find[0]){

                    bcrypt.compare(password,find[0].Password,(error,isMatch) => {
                        if (error) throw error

                        if(isMatch){
                            console.log("Algo")
                            return done(null,find[0])
                        }
                        
                        return done(null,false,{ message: 'Contraseña incorrecta' })
                    
                    })
                   
                }

            } catch (error) {
                console.log(error)
            }
            
            
        })
      
      
    )
    passport.serializeUser(function(user,done){
        console.log("login espera")
        done(null,user.id)
    })
    passport.deserializeUser(async function(id,done){

        let usuarioFind = await user.findById(id)
        
        return done(null,usuarioFind)
        
    })
}