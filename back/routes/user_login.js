//로그인 관련 라우터 모음
const passport = require('passport');
const { Market, Member, Category,Prodouct,Store_infrom } = require('../models');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const express = require('express');
const router = express.Router();  

//로그인 
/*
  로그인 하는 부분
  localhost:3000/users/login로 접속
  id의 id는 id
  비밀번호의 id 는 password
*/
var login; 
router.post('/login',isNotLoggedIn,function(req,res,next){
    login = req.body.check || req.query.check;
    next();
  }, passport.authenticate('local', //로그인 방식
  { 
    successRedirect: '/', //로그인 성공 시 갈 곳
    failureRedirect: '/login', //로그인 실패 할 때 갈 곳
    failureFlash: true
  })
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

module.exports = router;
  