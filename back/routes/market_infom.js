const express = require("express");
const router = express.Router();
const {
  Market,
  Member,
  Market_inform_img,
  Order_review_img,
  Reserve_review,
  Order_review,
  Market_inform,
  Market_noti_img,
  Market_inform_holiday,
  Product_img,
  Reserve_review_img,
} = require("../models");
const sequelize = require("sequelize");
const { Op } = require("sequelize");
const dayjs = require("dayjs");
require("dayjs/locale/ko");

router.get("/:marketNm", async (req, res) => {
  let result = await Market.findAll({
    where: { market_name: req.params.marketNm },
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
        model: Market_inform,
        required: false,
        attributes: ["market_inform_id"],
        include: [
          {
            model: Market_inform_img,
            required: false,
            attributes: ["market_inform_img"],
            limit: 3,
          },
        ],
      },
    ],
    attributes: [
      "profile_img",
      "market_name",
      [
        sequelize.literal(`(
                SUM(IFNULL(Reserve_reviews.rating,0))
                +SUM(IFNULL(Order_reviews.rating,0)))
                /( COUNT(IFNULL(Reserve_reviews.rating,0)) + COUNT(IFNULL(Order_reviews.rating,0)) )`),
        "ratingAvg",
      ],
      [
        sequelize.fn(
          "concat",
          sequelize.col("address"),
          sequelize.col("dt_address")
        ),
        "adress",
      ],
    ],
    group: ["Market.market_id"],
    raw: false,
  });
  res.json(result);
});

router.get("/:marketNm/totalRating", async (req, res) => {
  let result = await Market.findAll({
    where: { market_name: req.params.marketNm },
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
      [
        sequelize.literal(`(
                (SUM(IFNULL(Reserve_reviews.rating,0))
                +SUM(IFNULL(Order_reviews.rating,0)))
                /(COUNT(Reserve_reviews.rating) + COUNT(Order_reviews.rating))
                )`),
        "ratingAvg",
      ],
    ],
    raw: true,
  }).then((r) => {
    return r;
  });
  var array = [];
  for (var i = 1; i <= 5; i++)
    array[i - 1] =
      (await countRating(Reserve_review, req.params.marketNm, i)) +
      (await countRating(Order_review, req.params.marketNm, i));
  result[0].ratings = array;
  console.log(result[0].ratings[3]);
  res.json(result);
});

async function countRating(tableName, where, rating) {
  let countReslut = tableName
    .count({
      include: [
        {
          model: Market,
          where: { market_name: where },
        },
      ],
      where: {
        [Op.and]: [{ rating: { [Op.eq]: rating } }],
      },
    })
    .then((r) => {
      return r;
    });
  return countReslut;
}

router.get("/:marketNm/reserve_reviews", async (req, res) => {
  let findid = await Market.findOne({
    attributes: ["market_id"],
    where: { market_name: req.params.marketNm },
    raw: true,
  }).catch((err) => {
    console.error(err);
  });
  let { ratingAscDesc, timeAscDesc } = req.body;
  if (!ratingAscDesc) {
    ratingAscDesc = "DESC";
  }
  if (!timeAscDesc) {
    ratingAscDesc = "DESC";
  }
  let result = await Reserve_review.findAll({
    where: findid,
    include: [
      {
        model: Member,
        attributes: ["nickname", "profile_img"],
        required: false,
      },
      {
        model: Reserve_review_img,
        attributes: ["Reserve_review_img"],
        required: false,
      },
    ],
    attributes: ["rating", "created_at"],
    order: [[sequelize.literal("rating " + ratingAscDesc)]],
  }).then((r) => {
    r.forEach((element) => {
      element.created_at = dayjs(element.created_at).format("YYYY년 M월 D일");
    });
    return r;
  });
  res.json(result);
});

router.get("/:marketNm/order_reviews", async (req, res) => {
  let findid = await Market.findOne({
    attributes: ["market_id"],
    where: { market_name: req.params.marketNm },
    raw: true,
  }).catch((err) => {
    console.error(err);
  });
  let { ratingAscDesc, timeAscDesc } = req.body;
  if (!ratingAscDesc) {
    ratingAscDesc = "DESC";
  }
  if (!timeAscDesc) {
    ratingAscDesc = "DESC";
  }
  let result = await Order_review.findAll({
    where: findid,
    include: [
      {
        model: Member,
        attributes: ["nickname", "profile_img"],
        required: false,
      },
      {
        model: Order_review_img,
        attributes: ["Order_review_img"],
        required: false,
      },
    ],
    attributes: ["rating", "created_at"],
    order: [[sequelize.literal("rating " + ratingAscDesc)]],
  }).then((r) => {
    r.forEach((element) => {
      element.created_at = dayjs(element.created_at).format("YYYY년 M월 D일");
    });
    return r;
  });
  res.json(result);
});

router.get("/:marketNm/imformaion", async (req, res) => {
  dayjs.locale("ko");
  let result = await Market.findOne({
    where: { market_name: req.params.marketNm },
    include: [
      {
        model: Market_inform,
        required: false,
        attributes: ["market_inform_id", "start_time", "end_time"],
        include: [
          {
            model: Market_noti_img,
            required: false,
            attributes: ["market_noti_img"],
            limit: 3,
          },
          {
            model: Market_inform_holiday,
            required: false,
            attributes: [
              "market_inform_week_holiday",
              "market_inform_day_holiday",
            ],
          },
        ],
      },
    ],
    attributes: ["name", "market_name", "address", "phonenumber"],
  }).then(async (r) => {
    r.Market_inform.start_time = dayjs(
      "1 " + r.Market_inform.start_time
    ).format("a hh:mm");
    r.Market_inform.end_time = dayjs("1 " + r.Market_inform.end_time).format(
      "a hh:mm"
    );
    return r;
  });
  res.json(result);
});
module.exports = router;
