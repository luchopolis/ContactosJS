const LocalStrategy = require('passport-local').Strategy
//passport-local para usuario y contraseña
const bcrypt = require('bcrypt')
const UserModel = require('../models/UserModel')

module.exports = function(password){
    passport.use(
        new LocalStrategy({usernameField:'UserName'},async (username,password,done)=>{
            let user = new UserModel(username,password)
            let find = await user.findUser()

            if(find[0]){
                done(null,find[0])
            }else{
                
            }
            
        })
    )
}