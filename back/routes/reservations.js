//예약 관련 라우터
const {Member,Market,Reservation} = require('../models');
const { isLoggedInMarket, isLoggedInMember, isNotLoggedIn } = require('./middlewares');
const express = require('express');
const router = express.Router(); 
const {v4: uuidv4} = require('uuid'); 

router.post('/in/:marketname',isLoggedInMember, async(req,res)=>{
    find_Mid = await Market.findOne({
        attributes: ['market_id'],
        where: {market_name :  req.params.marketname},
        raw : true,
    });
    console.log(find_Mid);
    
    const {current_state, order_count} = req.body;
    Reservation.create({
        reservation_id : uuidv4(),
        current_state, order_count,
        member_id : req.user.member_id,
        market_id : find_Mid,
    }).then(r => {
        if(r)
        console.log('예약 성공');
    })
});

module.exports = router;