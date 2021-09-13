const passport = require("passport");
const { Market, Member,Category } = require("../models");
const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const { Op } = require("sequelize");
const bcrypt = require("bcrypt");
//이미지 파일 저장 관련 설정
const setMulter = require("../multer");
const upload = setMulter("./public/images/user_signup_images/");
const sequelize = require('sequelize');

router.post(  "/signup/:singUpState",  upload.single("userfile"), async (req, res, next) => {
  console.log(req.body)
    if (req.params.singUpState === "market") {
      const {
        id,
        password,
        name,
        birthday,
        email,
        market_name,
        phonenumber,
        zipcode,
        address,
        dt_address,
        market_phone
      } = req.body;
      try {
        const exMarketID = await Market.findOne({
          where: {
            [Op.or]: [
              { id: req.body.id },
              { market_name: req.body.market_name },
            ],
          },
        });
        if (exMarketID) return res.redirect("/signup?error=exist");
        console.log("가게 가입");
        const hash = await bcrypt.hash(password, 12);
        await Market.create({
          market_id: uuidv4(),
          category: null,
          profile_img:  req.file.path.substring(7),
          id,
          password: hash,
          name,
          birthday,
          email,
          market_name,
          phonenumber,
          zipcode,
          address,
          dt_address,
          market_phone
        });
        let {market_id} = await Market.findOne({
            attributes : ['market_id'],
            where : {market_name : req.body.market_name}})
            await Market.findOne({where : {market_id}}).then(async(market)=>{
                    console.log(req.body)
                    await Category.findOne({attributes : ['category_id'], where : {name : req.body.category}
                    }).then( async(category)=>{
                       await market.setCategories([category]).then(async()=>{
                             await market.getCategories().then((r)=>{
                                 console.log(r[0].dataValues.name);
                             });
                             res.json({message:'Succeed'})
                    })
            });
        });
      } catch (e) {
        console.error(e);
        return next(e);
      }
    } else {
      const {
        id,
        password,
        name,
        birthday,
        email,
        nickname,
        phonenumber,
        zipcode,
        address,
        dt_address,
      } = req.body;
      try {
        const exMemberID = await Member.findOne({
          where: { id },
          $or: [{ nickname: req.body.nickname }],
        });
        if (exMemberID) return res.redirect("/signup?error=exist");
        console.log("멤버 가입");
        const hash = await bcrypt.hash(password, 12);
        await Member.create({
          member_id: uuidv4(),
          profile_img: "images/user_signup_images/defaultProfile.jpg",
          id,
          password: hash,
          name,
          birthday,
          email,
          nickname,
          phonenumber,
          zipcode,
          address,
          dt_address,
        });
      } catch (e) {
        console.error(e);
        return next(e);
      }
   }
  }
);

router.get('/idCheck/:id',async(req,res)=>{
    let isIdOk = await Market.findOne({
        attribute : ['id'],
        where : {id : req.params.id}
    }).then(async(res)=> {if(!res){
        return true
    }else
        return false
    })
    isIdOk = isIdOk &&  await Member.findOne({
        attribute : ['id'],
        where : {id : req.params.id}
                            }).then(async(res)=> {if(!res){
                                return true
                            }else
                                return false
        })
    res.json(isIdOk)
})
module.exports = router;
