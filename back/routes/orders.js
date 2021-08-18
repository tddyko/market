
const { isLoggedInMarket, isLoggedInMember } = require('./middlewares');
const express = require('express');
const router = express.Router();
const {Market,Order,Product} = require('../models');
const {v4: uuidv4} = require('uuid'); 
const {Op} = require('sequelize')
const sequelize = require('sequelize');
const dayjs = require('dayjs');
require('dayjs/locale/ko');
 
//고객이 주문하는 라우터
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

//가게에서 주문 목록 보는 라우터
router.get('/list',isLoggedInMarket, async(req,res)=>{
    var {ascDesc,dateValue} = req.body;
    var date1 = dayjs(dateValue).format('YYYY-MM-DD');
    var date2 = dayjs(date1).add("1","day").format("YYYY-MM-DD"); 
    const result = await Order.findAll({
        include : [{ 
            model : Product,
            attributes: ['name']
        }],
        where : {
            market_id : req.user.market_id, 
            createdAt : {[Op.between]: [date1,date2] }
        }, 
            order: sequelize.literal("FIELD(current_state,'"+'주문완료'+"') " + ascDesc) //주문 완료를 제일 위로
    }); 
    res.json(result);
});

/*  
localhost/order/member_list 주문내역
*/
router.get('/member_list',isLoggedInMember, async(req,res) => {
    dayjs.locale('ko');
    let {market_id} = await Order.findOne({
        attributes : ['market_id'],
        where : {member_id : req.user.member_id}
    })
    let  result = await Order.findAll({
        attributes : [[sequelize.fn('date_format', sequelize.col('Order.created_at'),dayjs().format('MM/DD (ddd)')),'created_at'],'order_count','price','current_state'],
        
        include :[{
             model : Market,
             attributes : ['market_name']},
            {
                model : Product,
                attributes: ['name'],
                through : {attributes :[]} 
            },
    ],
         where : {market_id,} ,
        order : [['createdAt', 'DESC']]

});
    res.json(result);
});

module.exports = router;