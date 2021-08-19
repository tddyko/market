const express = require("express");
const router = express.Router();
const { Market, Reserve_review, Order_review } = require("../models");
const sequelize = require("sequelize");

router.get("/:category", async (req, res) => {
  let { ascDesc } = req.body;
  if (!ascDesc) ascDesc = "desc";
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
    ],
    attributes: [
      "market_id",
      "profile_img",
      "market_name",
      [
        sequelize.literal(`(  
                (SUM(IFNULL(Reserve_reviews.rating,0))
                +SUM(IFNULL(Order_reviews.rating,0)))
                /(COUNT(Reserve_reviews.rating) + COUNT(Order_reviews.rating))
                )`),
        "ratingAvg",
      ],
      [
        sequelize.literal(
          "COUNT(Reserve_reviews.review) + COUNT(Order_reviews.review)"
        ),
        "reviewCount",
      ],
    ],
    group: ["Market.market_id"],
    order: [[sequelize.literal("ratingAvg"), ascDesc]],
    raw: true,
  });
  res.json(markets);
});

module.exports = router;
