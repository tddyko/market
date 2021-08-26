const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const { Market, Member } = require("../models");
const bcrypt = require("bcrypt");
module.exports = () => {
  passport.use(
    new localStrategy(
      {
        usernameField: "id",
        passwordField: "passwd",
        passReqToCallback: true,
      },
      async (req, userId, password, done) => {
        try {
          if (req.body.login_switch === true) {
            exUser = await Market.findOne({ where: { id: userId } });
          } else {
            exUser = await Member.findOne({ where: { id: userId } });
          }
          if (exUser) {
            const result = await bcrypt.compare(password, exUser.password);
            if (result) {
              console.log("로그인 성공");
              done(null, exUser);
            } else {
              done(null, false, { message: "비밀번호가 일치하지 않습니다" });
            }
          } else {
            done(null, false, { message: "가입되지 않은 회원입니다. " });
          }
        } catch (error) {
          console.log(error);
          return done(error);
        }
      }
    )
  );
};
