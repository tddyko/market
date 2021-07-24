const passport = require('passport'); 
const {isLoggedIn, isNotLoggedIn} = require('./middlewares');
const express = require('express');
const router = express.Router();
const {Market,Order,Prodouct,Store_infrom,Market_category} = require('../models');

//price로 market을 알 수 있는가?
router.post('/test',isLoggedIn,function(req,res){
    var {price,state,order_count} = req.body;
    Order.create({
        price,state,order_count,

    })

});