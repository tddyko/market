const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const {
  Order_review_answer,
  Member,
  Market,
  Order_review,
  Order_review_img,
} = require("../models");
const { isLoggedInMember } = require("./middlewares");
const dayjs = require("dayjs");
require("dayjs/locale/ko");

//이미지 파일 저장 관련 설정
const setMulter = require("../multer");
const upload = setMulter("./public/images/order_review_images/");

/* 
localhost/order_review/가게이름  리뷰작성페이지
 */
router.post(
  "/:marketname/:order_id",
  upload.array("userfile", 3),
  isLoggedInMember,
  async (req, res) => {
    const order_id = req.params.order_id;
    const { market_id } = await Market.findOne({
      attributes: ["market_id"],
      where: { market_name: req.params.marketname },
    });
    const order_review_id = uuidv4();

    await Order_review.create({
      order_review_id,
      review: req.body.review,
      rating: req.body.rating,
      member_id: req.user.member_id,
      market_id,
      order_id,
    });
    if (req.files) {
      for (const file of req.files) {
        await Order_review_img.create({
          Order_review_img_id: uuidv4(),
          Order_review_img: files.path,
          order_review_id,
        });
      }
    }
    console.log("성공");
  }
);

/* 
localhost/order_review/review  리뷰보는 페이지
 */
router.get("/review", async (req, res) => {
  dayjs.locale("ko");
  const review = await Order_review.findAll({
    include: [
      {
        model: Member,
        attributes: ["nickname"],
      },
      {
        model: Order_review_img,
        attributes: ["Order_review_img"],
      },
    ],
    attributes: ["review_id", "created_at", "rating", "review"],
  }).then((r) => {
    r.forEach((element) => {
      element.created_at = dayjs(element.created_at).format("YYYY.MM/DD (ddd)");
    });
    return r;
  });
  res.json(review);
});

/* 
localhost/order_review/:order_review_id  리뷰수정페이지
 */
router.get("/:id", isLoggedInMember, async (req, res) => {
  let order_review_id = req.params.id;
  await Order_review.update(
    {
      review: req.body.review,
      rating: req.body.rating,
    },
    {
      where: { order_review_id },
    }
  )
    .then((result) => {
      if (result) res.redirect("review");
    })
    .catch((err) => {
      if (err) {
        console.log("수정실패");
        console.dir(err);
      }
    });
});

/* 
localhost/order_review/:order_review_id uuid값  리뷰삭제페이지
 */
router.delete("/:id", isLoggedInMember, async (req, res) => {
  let order_review_id = req.params.id;

  await Order_review.destroy({ where: { order_review_id } })
    .then((result) => {
      if (result) res.redirect("review");
    })
    .catch((err) => {
      if (err) console.log("데이터 삭제 실패");
    });
  let { Order_review_answer_id } = await Order_review_answer.findOne({
    attributes: ["Order_review_answer_id"],
    where: { order_review_id },
  });

  await Order_review_answer.destroy({ where: { Order_review_answer_id } })
    .then((r) => {
      if (r) console.log("성공");
    })
    .catch((err) => {
      if (err) console.log(err);
    });
});

module.exports = router;
