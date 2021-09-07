//예약 관련 라우터
const {Market,Reservation} = require('../models');
const {isLoggedInMarket, isLoggedInMember} = require('./middlewares');
const express = require('express');
const router = express.Router(); 
const {v4: uuidv4} = require('uuid'); 
const {Op} = require('sequelize');
const sequelize = require('sequelize'); 
const dayjs = require('dayjs');
require('dayjs/locale/ko');
 

//고객이 예약하는 라우터 localhost/reservation/in/teststore
router.post('/in/:marketname',isLoggedInMember, async(req,res)=>{
    let {market_id} = await Market.findOne({attributes : ['market_id'], where :{market_name: req.params.marketname}, raw : true});    
    var {current_state,reserve_seat, order_count,date,reserve_time} = req.body;
    var reserve_date = dayjs(date).format('YYYY-MM-DD');
    Reservation.create({
        reservation_id : uuidv4(),
        current_state, order_count,reserve_seat, 
        reserve_date : reserve_date, 
        reserve_time  ,member_id : req.user.member_id,
        market_id   
    }).then(r => {
        if(r)
        console.log('예약 성공');
    })
});
router.get('/updateState/:reserveId',isLoggedInMember, async(req,res)=>{
    Order.update({
        current_state : '예약완료'},
        {where : {reservation_id: req.params.reserveId,current_state : "예약"},
    })
})  
//고객이 내가 예약한 목록을 보는라우터
router.get('/myReserve',isLoggedInMember, async(req,res)=>{
    dayjs.locale('ko')
    let myReserve = await Reservation.findAll({
        include :[{
            model : Market,
            attributes : ['profile_img','market_name']
        }],
        attributes : ['reservation_id',
            [sequelize.fn('concat',sequelize.col('reserve_date'),sequelize.col('reserve_time')),'DateAndTime']
            ,'current_state','reserve_seat'
        ],
        where : {member_id : req.user.member_id},
        order : [['createdAt', 'DESC']],raw : true,
    }).then(r=>{
        r.forEach(element => {
            element.DateAndTime = dayjs(element.DateAndTime).format('MM/DD (ddd) a hh:mm')
        });
        return r;
    })
    res.json(myReserve);
})

//가게가 예약한 목록을 보는라우터 2020-10-20
router.get('/list', isLoggedInMarket, async(req,res)=>{
    dayjs.locale('ko'); 
    console.log(req.body);
    console.log(req.query);  
    var dateValue = req.query.dateValue; 
    if(dateValue)
        var date = dayjs(dateValue).format('YYYY-MM-DD');
    else
        var date =  dayjs().format('YYYY-MM-DD');
  
    let reservations = await Reservation.findAll({
        attributes : ['reservation_id',
           'reserve_date','reserve_time'
            ,'order_count','current_state','reserve_seat']
        ,where : {
            market_id : req.user.market_id, 
            reserve_date : {[Op.eq]: date}
        },raw : true
        }).then(r=>{
        r.forEach(elements=>{
            elements.reserve_date = dayjs(elements.reserve_date + elements.reserve_time).format('YYYY.MM.DD.(ddd)')
            elements.reserve_time = dayjs(elements.reserve_date + elements.reserve_time).format('a hh시 mm분')
            })
            return r;
        });
    res.json(reservations);
})
module.exports = router;