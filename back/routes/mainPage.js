const express = require('express');
const router = express.Router();
const {Market,Reserve_review,Order_review,Category} = require('../models');
const sequelize = require('sequelize');

router.get('/:category',async(req,res)=>{
  let categorys = ['치킨', '피자', '한식', '중식', '일식', '양식', '베이커리']
    let {ascDesc} = req.body;
    if(!ascDesc)
        ascDesc = 'desc';
    let markets = await Market.findAll({
        include :[{
            model : Reserve_review,
            attributes : []
        },{
            model : Order_review, 
            attributes : []
        },
        {
          model : Category, 
          where : {
            name : categorys[req.params.category]
          }
      }
      ],  
        attributes : ['market_id','profile_img','market_name',
            [ sequelize.literal(`(  
                (SUM(IFNULL(Reserve_reviews.rating,0))
                +SUM(IFNULL(Order_reviews.rating,0)))
                /(COUNT(Reserve_reviews.rating) + COUNT(Order_reviews.rating))
                )`
              ), 'ratingAvg'
            ],
            [
                sequelize.literal(
                    'COUNT(Reserve_reviews.review) + COUNT(Order_reviews.review)'
                ),'reviewCount'
            ]
        ] 
        , group : ['Market.market_id'],
        order : [
            [ sequelize.literal('ratingAvg'), ascDesc]
        ]
        ,raw : true
    })
    res.json(markets)
})

module.exports = router;