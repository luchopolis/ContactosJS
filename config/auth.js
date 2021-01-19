
//Objeto utilizado para utenticar, con passport
module.exports = {
    ensureAuthenticated: function(req,res,next){
        if(req.isAuthenticated()){
           
            return next()
        }

        req.flash('error_msg','Ingresa tus credenciales')
        res.redirect('/login')
    },
    logginActive:function(req,res,next){
        if(req.isAuthenticated()){
            res.redirect('/')
        }
    }
}