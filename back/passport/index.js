const passport = require('passport');
const local = require('./localStrategy');

module.exports = () =>{
    passport.serializeUser(function(user, done) {
        //로그인에 성공 했을 떄 
        done(null,user);
      });
    passport.deserializeUser(function(id, done) {
        done(null,id);
      });

    local();
};