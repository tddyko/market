const { isLoggedInMarket, isLoggedInMember } = require("./middlewares");
const express = require("express");
const router = express.Router();
const { Market, Order, Product } = require("../models");
const { v4: uuidv4 } = require("uuid");
const { Op } = require("sequelize");
const sequelize = require("sequelize");
const dayjs = require("dayjs");
require("dayjs/locale/ko");

/*  
localhost/order/:가게이름  주문하기
*/

router.post("/:marketNm", isLoggedInMember, async (req, res) => {
  const { price } = await Product.findOne({
    attributes: ["price"],
    where: { name: req.body.name },
    raw: true,
  }).catch((err) => {
    console.dir(err);
  });
  const { market_id } = await Market.findOne({
    attributes: ["market_id"],
    where: { market_name: req.params.marketNm },
    raw: true,
  });
  const {
    name,
    phonenumber,
    address,
    dt_address,
    requirements,
    current_state,
    order_count,
  } = req.body;
  const orders = await Order.create({
    order_id: uuidv4(),
    name,
    phonenumber,
    address,
    dt_address,
    requirements,
    price,
    current_state,
    order_count,
    member_id: req.user.member_id,
    market_id,
  }).catch((err) => {
    console.log(err);
  });
  const findProduct = await Product.findOne({ where: { name: req.body.name } });
  console.log(findProduct.product_id);
  await orders.addProduct(findProduct).then((r) => {
    if (r) console.log("성공");
    else console.log("실패    ");
  });
});
router.get("/updateState/:orderId", isLoggedInMarket, async (req, res) => {
  Order.update(
    {
      current_state: "주문완료",
    },
    {
      where: { order_id: req.params.orderId, current_state: "주문" },
    }
  );
});
/*  
localhost/order/list 가게주문내역
*/
router.get("/list", isLoggedInMarket, async (req, res) => {
  dayjs.locale("ko");
  let { ascDesc, dateValue } = req.body;
  let daterange = {};
  if (dateValue) {
    daterange.date1 = dayjs(dateValue).format("YYYY-MM-DD");
    daterange.date2 = dayjs(daterange.date1)
      .add("1", "day")
      .format("YYYY-MM-DD");
  } else {
    daterange.date1 = dayjs(Date()).format("YYYY-MM-DD");
    daterange.date2 = dayjs(Date()).add("1", "day").format("YYYY-MM-DD");
  }
  const result = await Order.findAll({
    attributes: [
      "order_id",
      "created_at",
      "order_count",
      "current_state",
      [sequelize.literal("Order.price*Order.order_count"), "price"],
    ],
    include: [
      {
        model: Product,
        attributes: ["name"],
        through: { attributes: [] },
      },
    ],
    where: {
      market_id: req.user.market_id,
      createdAt: { [Op.between]: [daterange.date1, daterange.date2] },
    },
    order: sequelize.literal(
      "FIELD(current_state,'" + "주문완료" + "') " + ascDesc
    ), //주문 완료를 제일 위로
    raw: true,
  }).then((r) => {
    r.forEach((element) => {
      element.created_at = dayjs(element.created_at).format(
        "YYYY.MM.DD.(ddd) a hh시 mm분"
      );
    });
    return r;
  });
  res.json(result);
});

/*  
localhost/order/member_list 손님주문내역
*/
router.get("/member_list", isLoggedInMember, async (req, res) => {
  dayjs.locale("ko");
  let { market_id } = await Order.findOne({
    attributes: ["market_id"],
    where: { member_id: req.user.member_id },
  });
  let result = await Order.findAll(
    {
      attributes: [
        "order_id",
        "created_at",
        "order_count",
        "price",
        "current_state",
      ],
      include: [
        {
          model: Market,
          attributes: ["market_name"],
        },
        {
          model: Product,
          attributes: ["name"],
          through: { attributes: [] },
        },
      ],
      where: { market_id },
      order: [["createdAt", "DESC"]],
    }.then((r) => {
      r.forEach((element) => {
        element.created_at = dayjs(element.created_at).format("MM/DD (ddd)");
      });
      return r;
    })
  );
  res.json(result);
});

/*  
localhost/order/member_list 주문내역
*/
router.get("/member_list", isLoggedInMember, async (req, res) => {
  dayjs.locale("ko");
  let { market_id } = await Order.findOne({
    attributes: ["market_id"],
    where: { member_id: req.user.member_id },
  });
  let result = await Order.findAll({
    attributes: [
      [
        sequelize.fn(
          "date_format",
          sequelize.col("Order.created_at"),
          dayjs().format("MM/DD (ddd)")
        ),
        "created_at",
      ],
      "order_count",
      "price",
      "current_state",
    ],

    include: [
      {
        model: Market,
        attributes: ["market_name"],
      },
      {
        model: Product,
        attributes: ["name"],
        through: { attributes: [] },
      },
    ],
    where: { market_id },
    order: [["createdAt", "DESC"]],
  });
  res.json(result);
});

module.exports = router;
