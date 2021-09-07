const express = require('express');
const router = express.Router();
const { Market, Reserve_review, Order_review,Category} = require("../models");
const sequelize = require("sequelize");
let categorys = ['치킨', '피자', '한식', '중식' ,'일식' ,'양식' ,'베이커리']
router.get('/categorys/list', async (req, res)=>{
  let response = [];
  for(let i=0; i<categorys.length; i++){
      let result = await Category.findOne({attributes:['category_id','name'],where : {name : categorys[i]},raw:true})
      response.push(result)
  }

  res.json(response);
})

router.get("/:category", async (req, res) => {

  let categorys = ['치킨', '피자', '한식', '중식' ,'일식' ,'양식' ,'베이커리']

  let markets = await Market.findAll({
    include: [
      {
        model: Reserve_review,
        attributes: [],
      },
      {
        model: Order_review,
        attributes: [],
      },
      {
        model : Category,
        where: {
          name : categorys[req.params.category]
        }
      }
    ],
    attributes: [
      "market_id",
      "profile_img",
      "market_name",
      [
        sequelize.literal(`
              (
                SUM(IFNULL(Reserve_reviews.rating,0))
                +SUM(IFNULL(Order_reviews.rating,0))
              )
              /(
                COUNT(IFNULL(Reserve_reviews.review,0)) + COUNT(IFNULL(Order_reviews.review,0))
              )`
              ),
        "ratingAvg",
      ],
      [
        sequelize.literal(
          `COUNT(Reserve_reviews.review) + COUNT(Order_reviews.review)`
        ),
        "reviewCount",
      ],
    ],
    group: ["Market.market_id"],
    raw: true,
  });
  res.json(markets);
});

module.exports = router;