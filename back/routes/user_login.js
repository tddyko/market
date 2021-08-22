//로그인 관련 라우터 모음
const passport = require('passport');
const express = require('express');
const router = express.Router(); 
const {isNotLoggedIn} = require('./middlewares');  
//로그인 
/*
  로그인 하는 부분
  localhost/login로 접속
  id의 id는 id
  비밀번호의 id 는 password
*/ 
router.post('/login',isNotLoggedIn,(req,res,next)=>{
  passport.authenticate('local',(authError,user, info)=>{
    if(authError){
      console.error(authError);
      return next(authError);
    }
    if(!user){
      console.log(info.message);
      return res.redirect(`/loginError/${info.message}`);
    }
    return req.login(user,(loginError)=>{
      if(loginError){
        console.error(loginError);
        return next(loginError);
      }
      return res.json({message:"Succeed"});
    })
  })(req,res,next);
});
/*
localhost/logout로 접속
로그아웃
*/
router.post('/logout', function(req,res){
    req.logOut();
    req.session.destroy(function(err){ //세션을 제거
      res.redirect('/'); //메인 화면으로 이동
      return;
   });
});
 
router.get('/loginError/:eMessage', (req,res)=>{
  res.send(req.params.eMessage);
})

module.exports = router;
  