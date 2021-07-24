const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const {Market} = require('../models');

module.exports = () =>{
    passport.use(new localStrategy({
        usernameField : 'id', 
        passwordField : 'password',
        passReqToCallback : true,
    }, async (req,userId, password, done) => {
        try{
            var result = await Market.findOne({where : {id : userId, password : password}});
            if(result){
              return done(null, result);
            }else{
              return done(null, false, { message: 'Incorrect' });  
            }
          }catch(error){
            console.log(error);
            done(error, null, { message: 'Error'});
        }
    }));
}