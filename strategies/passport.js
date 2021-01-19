const LocalStrategy = require('passport-local').Strategy
//passport-local para usuario y contraseña
const bcrypt = require('bcrypt')
const UserModel = require('../models/UserModel')

module.exports = function(passport){

    
    passport.use(
        new LocalStrategy({usernameField:'username'},async (username,password,done)=>{
            
            
            let user = new UserModel(username,password)
            
            try {
                let find = await user.findUser()
                
                
                if(find[0]){

                    bcrypt.compare(password,find[0].Password,(error,isMatch) => {
                        if (error) throw error

                        if(isMatch){
                            console.log("Algo")
                            return done(null,find[0])
                        }else{
                            console.log("Algo 2")
                            return done(null,false,{message : 'pass incorrect'})
                        }
                    })
                   
                }

            } catch (error) {
                return done(error)
            }
            
            
        })
      
      
    )
    passport.serializeUser(function(user,done){
        console.log("login espera")
        done(null,user)
    })
    passport.deserializeUser(function(id,done){
        console.log("Nada")
        done(null,"nada")
    })
}