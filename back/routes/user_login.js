//로그인 관련 라우터 모음
const passport = require('passport');
const express = require('express');
const router = express.Router();   
//로그인 
/*
  로그인 하는 부분
  localhost:3000/users/login로 접속
  id의 id는 id
  비밀번호의 id 는 password
*/
let login;
router.get('/login',
passport.authenticate('local', //로그인 방식
  { 
    successRedirect: '/', 
    failureRedirect: '/login',  
    failureFlash : true })
);
/*
localhost/users/logout로 접속
로그아웃
*/
router.post('/logout', function(req,res){
    req.session.destroy(function(err){ //세션을 제거
      res.redirect('/'); //메인 화면으로 이동
      return;
   });
});

router.get('/login', function(req,res){
  res.send(req.session.flash.error[0]);
})

module.exports = router;
  