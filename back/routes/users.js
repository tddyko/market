const express = require('express');
const router = express.Router();
const {v4: uuidv4} = require('uuid');
const multer = require('multer');
const passport = require('passport');
const {Market,Category,Prodouct,Store_infrom,Member} = require('../models');
const {isLoggedIn, isNotLoggedIn} = require('./middlewares');

//바디파서, 세션 설정
router.use(express.json())  ;
router.use(express.urlencoded({extended:true}));

//이미지 파일 저장 관련 설정
const storage  = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images/');
  },
  filename: function (req, file, cb) {
    cb(null, new Date().valueOf() + '_' +file.originalname);
  },
});
const upload = multer({storage: storage});
//가입 하는 라우터 
//localhost:3000/users/createAccount/store
/*
이미지는 userfile
이메일 앞 부분(test)은 email 
이메일 뒷 부분(@naver.com)은 email2
나머지는 db에 있는 이름이랑 동일
 */
router.post('/createAccount/:singUpState', upload.single('userfile'),function(req, res){
  if(req.params.singUpState == 'store'){ 
    console.dir(req.file);
    console.log('가게 가입');
    req.body.email += req.body.email2;
    delete  req.body.email2; //필요없는 값 삭제
    var {id,password,name,birthday,email,market_name,phonenumber,zipcode,address,dt_address} = req.body;
    Market.create({
      market_id : uuidv4(),
      category : null,
      profile_img : req.file.filename,
      id,password,name,birthday,
      email,
      market_name,phonenumber,
      zipcode,address,dt_address
    }).then(r => res.send('가입 성공'))
    .catch(err => res.send(err)); 
  }  
  if(req.params.singUpState == 'member'){ 
    console.log('멤버 가입');
    req.body.email += req.body.email2;``
    delete  req.body.email2; //필요없는 값 삭제
    var {id,password,name,birthday,email,nickname,phonenumber,zipcode,address,dt_address} = req.body;
    Member.create({
      member_id : uuidv4(), 
      profile_img : "public/images/defaultProfile.jpg",
      id,password,name,birthday,email,
      nickname,phonenumber,
      zipcode,address,dt_address
    }).then(r => res.send('가입 성공'))
    .catch(err => res.send(err)); 
  }    
}); 
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
localhost:3000/users/logout로 접속
로그아웃
*/
  router.post('/logout', function(req,res){
  req.session.destroy(function(err){ //세션을 제거
    res.redirect('/'); //메인 화면으로 이동
    return;
 });
});

/*
localhost:3000/users/storeInformation로 접속
수정중
가게 테이블 정보 보는 용도
*/
router.post('/storeInformation',isLoggedIn, async(req,res)=>{ 
  console.log('로그인 성공');
  console.dir(req.user);
  res.writeHead(200, { 'Content-Type': 'text/html' }); 
  res.write('ID : ' +req.user.id + '\n');
  res.write('\n이메일 : ' +req.user.email);
  res.write('\n가게이름 : ' +req.user.market_name); 
  res.end();
});
router.post('/createCategory',isLoggedIn, function(req,res){
  Category.create({
    category_id : uuidv4(),
    name : req.body.name,
  }).then(r=>{
    res.send('추가 성공');
  }).catch(err => console.dir(err));
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req.user);
  res.send('respond with a resource');
});

module.exports = router;
