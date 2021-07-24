const express = require('express');
const router = express.Router();
const {v4: uuidv4} = require('uuid'); 
const {Market,Category,Prodouct,Store_infrom,Member} = require('../models');
const {isLoggedIn, isNotLoggedIn} = require('./middlewares');

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
