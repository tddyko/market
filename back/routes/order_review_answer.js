const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const { Member, Order_review, Order_review_answer } = require("../models");
const { isLoggedInMarket } = require("./middlewares");
/* 
localhost/order_review_answer/answer/:order_review_id  리뷰답글페이지
 */
router.post("/answer/:id", isLoggedInMarket, async (req, res) => {
  let order_review_id = req.params.id;
  let { member_id } = await Order_review.findOne({
    include: {
      model: Member,
      attributes: ["member_id"],
    },
    where: { order_review_id },
  });
  await Order_review_answer.create({
    order_review_answer_id: uuidv4(),
    answer: req.body.answer,
    market_id: req.user.market_id,
    member_id,
    order_review_id,
  })
    .then((result) => {
      if (result) console.log("성공");
    })
    .catch((err) => {
      if (err) console.dir(err);
    });
});

module.exports = router;
