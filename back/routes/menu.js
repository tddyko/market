const express = require('express');
const router = express.Router();
const {v4: uuidv4} = require('uuid');
const {Product,Store_infrom} = require('../models');
const {isLoggedIn, isNotLoggedIn} = require('./middlewares');

//localhost:3000/menu/addmenu
//id 가 name , price인 곳에서 정보를 받음
router.get('/addMenu', isLoggedIn, async(req,res)=>{
    Product.create({
        product_id : uuidv4(),
        market_id : req.user.market_id,
        name : req.body.name,
        price : req.body.price,
    }).then(r => {
        if(r)
            console.log('메뉴 추가 성공');
        else
            console.log('메뉴 추가 실패');
    }).catch(err=>console.dir(err));
});

//localhost:3000/menu/update
//id 가 name , price인 곳에서 정보를 받음
router.get('/update', isLoggedIn, async(req,res)=>{
    findId = req
    Prodouct.update({
        name : req.body.nalme,
        price : req.body.price
    },
    {
        where : {
            store_id : req.user.store_id,   
        }
    }).then(r => {
        if(r)
        console.log('수정 성공');
    }).catch(err => console.dir(err));

})
module.exports = router;