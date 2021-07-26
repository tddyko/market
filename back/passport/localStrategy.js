const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const {Market, Member} = require('../models');

module.exports = () => {
    passport.use(new localStrategy({
        usernameField: 'id',
        passwordField: 'password',
        passReqToCallback: true,
    }, async (req, userId, password, done) => {
        let result;
        try {
            if (req.body.check == 'market') {
                result = await Market.findOne({where: {id: userId, password: password}});
            } else {
                result = await Member.findOne({where: {id: userId, password: password}});
            }
            if (result) {
                return done(null, result);
            } else {
                return done(null, false, {message: 'Incorrect'});
            }
        } catch (error) {
            console.log(error);
            return done(error);
        }
    }));
}