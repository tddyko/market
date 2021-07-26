
const { isLoggedInMarket, isLoggedInMember, isNotLoggedIn } = require('./middlewares');
const express = require('express');
const router = express.Router();
const {Market,Order,Product,Store_infrom,Market_category} = require('../models');
const {v4: uuidv4} = require('uuid'); 

 
router.post('/:marketNm',isLoggedInMarket, async(req,res)=>{

    var {price} =  await Product.findOne({attributes : ['price'], where : {name: req.body.name}, raw : true});
    var {market_id} = await Market.findOne({attributes : ['market_id'], where :{market_name: req.params.marketNm}, raw : true});
    var {current_state,order_count} = req.body;
    await Order.create({
        order_id: uuidv4(),
        price,current_state,order_count,
        member_id : req.user.member_id,
        market_id
    }).catch(err=>{console.log(err)});
    var orders = await Order.findOne({where : {member_id : req.user.member_id}});
    var findProduct = await Product.findOne({where : {name : req.body.name}});
    await orders.addProduct(findProduct).then(r=>{if(r)console.log('성공')}).catch(err=>{console.error(err)});

});

router.post('/myMarket/list',isLoggedInMarket, async(req,res)=>{
    var market = await Market.findOne({where : {id : req.user.id}}).then(console.log('성공')).catch(err=> console.log(err));
    var result = await market.getOrders().catch(err=> console.log(err));
    console.log(result);
});
module.exports = router;