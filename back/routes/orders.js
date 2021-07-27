
const { isLoggedInMarket, isLoggedInMember, isNotLoggedIn } = require('./middlewares');
const express = require('express');
const router = express.Router();
const {Market,Order,Product,Store_infrom,Market_category} = require('../models');
const {v4: uuidv4} = require('uuid'); 

 
router.post('/:marketNm',isLoggedInMember, async(req,res)=>{
    const {price} =  await Product.findOne({attributes : ['price'], where : {name: req.body.name}, raw : true}).catch(err=>{console.dir(err)});
    const {market_id} = await Market.findOne({attributes : ['market_id'], where :{market_name: req.params.marketNm}, raw : true});
    const {current_state,order_count} = req.body;
    const orders = await Order.create({
        order_id: uuidv4(),
        price,current_state,order_count,
        member_id : req.user.member_id,
        market_id
    }).catch(err=>{console.log(err)});
    const findProduct = await Product.findOne({where : {name : req.body.name}});
    console.log(findProduct.product_id);
 
    await orders.addProduct(findProduct).then(r=>{if(r)console.log('성공'); else console.log('실패    ') })
  

});

router.get('/myMarket/list',isLoggedInMarket, async(req,res)=>{
     
    const result = await Order.findAll({
        include : [{ 
            model : Product,
            attributes: ['name']
        }],
        where : {market_id : req.user.market_id},
    });
    const results = await JSON.stringify(result);
    const jData = await JSON.parse(results);
    res.writeHead(200, {'Content-Type': 'text/html'});
    for(idx in jData){
        if(jData[idx].Products[0] !== undefined){
            console.log('find');
            res.write(jData[idx].order_id + '  ' + jData[idx].createdAt + '  ' + jData[idx].Products[0].name + '  ' + 
            jData[idx].order_count + '  ' + jData[idx].price + '  ' + jData[idx].current_state + '\n');
        } 
    }
    res.end();
});
module.exports = router;