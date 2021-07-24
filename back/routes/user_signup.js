const passport = require('passport');
const {Market,Category,Prodouct,Store_infrom,Member} = require('../models');
const express = require('express');
const router = express.Router();  
const {v4: uuidv4} = require('uuid'); 
const multer = require('multer');
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

module.exports = router;