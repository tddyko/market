const express = require('express');
const router = express.Router();
const {Market,Category,Prodouct,Store_infrom,Market_category} = require('../models');
const { isLoggedInMarket, isNotLoggedIn } = require('./middlewares');
/*
localhost/chageSotreinfo/category 로 접속
category에 값을 넣어줌
*/
router.post('/category',isLoggedInMarket, async (req,res, next)=>{
    var setCategory = await Market.findOne({where : {market_id : req.user.market_id}});
    var findCategory = await Category.findOne({where : {name : req.body.category}});
    await setCategory.addCategory(findCategory).then(r=>{if(r)console.log('카테고리 수정 완료')}).catch(err=>{console.error(err)});
});
module.exports = router;