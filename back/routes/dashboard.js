const express = require('express');
const router = express.Router();
const { isLoggedInMarket} = require('./middlewares');
const {Order,Reservation} = require('../models');

 router.post('/', isLoggedInMarket, async(req,res) => {
     let order_count = await Order.findAll({
       attributes : ['order_count'],
    });

     let reserve_count = await Reservation.findAll({
       attributes : ['order_count'],
      });

     let current_state = await Order.findAll({
       attributes : ['current_state'], where: {current_state : '주문'},
     });

     let current_state1 = await Order.findAll({
      attributes : ['current_state'], where: {current_state : '주문완료'},
    });

    let current_state2 = await Order.findAll({
      attributes : ['current_state'], where: {current_state : '주문취소'},
    });

    let reserve_state = await Reservation.findAll({
      attributes : ['current_state'], where: {current_state : '예약'},
    });

    let reserve_state1 = await Reservation.findAll({
      attributes : ['current_state'], where: {current_state : '예약완료'},
    });

    let reserve_state2 = await Reservation.findAll({
      attributes : ['current_state'], where: {current_state : '예약취소'},
    });
    
      res.send(`가게이름 : ${req.user.market_name}
                주문건수 : ${Object.keys(order_count).length}
                주문 : ${Object.keys(current_state).length}
                주문완료 : ${Object.keys(current_state1).length}
                주문취소 : ${Object.keys(current_state2).length}
                예약건수 : ${Object.keys(reserve_count).length}
                예약 : ${Object.keys(reserve_state).length}
                예약완료 : ${Object.keys(reserve_state1).length}
                예약취소 : ${Object.keys(reserve_state2).length}
      `);
  });
  

  module.exports = router;
