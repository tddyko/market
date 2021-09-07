const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const { Pd_option, Pd_option_group } = require("../models");
const { isLoggedInMarket } = require("./middlewares");

/*
 localhost/menu_option/addGroup/:product_id 메뉴옵션그룹 추가
*/
router.post("/addGroup/:id", isLoggedInMarket, async (req, res) => {
  await Pd_option_group.create({
    pd_option_group_id: uuidv4(),
    name: req.body.name,
    product_id: req.params.id,
  }).then((result) => {
      if (result) console.log("성공");
    })
    .catch((err) => {
      if (err) {
        console.log(err);
      }
    });
});

/*
 localhost/menu_option/addOption/:pd_option_group_id   메뉴옵션 추가
*/
router.post("/addOption/:id", isLoggedInMarket, async (req, res) => {
  let { product_id } = await Pd_option_group.findOne({
    attributes: ["product_id"],
    where: { pd_option_group_id: req.params.id },
  });
  console.log("product_id : " + product_id);
  await Pd_option.create({
    pd_option_id: uuidv4(),
    name: req.body.name,
    price: req.body.price,
    pd_option_group_id: req.params.id,
    product_id,
  })
    .then((r) => {
      if (r) console.log("성공");
    })
    .catch((err) => {
      if (err) console.dir(err);
    });
});

module.exports = router;
