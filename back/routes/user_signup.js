const passport = require("passport");
const { Market, Member } = require("../models");
const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const { Op } = require("sequelize");
const bcrypt = require("bcrypt");

//이미지 파일 저장 관련 설정
const setMulter = require("../multer");
const upload = setMulter("./public/images/user_signup_images/");

/*
  localhost/signup/:market or memeber
  가입 하는 라우터
  이미지는 userfile
  이메일 앞 부분(test)은 email
  이메일 뒷 부분(@naver.com)은 email2
  나머지는 db에 있는 이름이랑 동일
 */
router.post(
  "/signup/:singUpState",
  upload.single("userfile"),
  async (req, res, next) => {
    if (req.params.singUpState === "market") {
      req.body.email += req.body.email2;
      delete req.body.email2; //필요없는 값 삭제
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
        console.dir(req.file);
        console.log("가게 가입");
        const hash = await bcrypt.hash(password, 12);
        console.log(req.file.path);
        await Market.create({
          market_id: uuidv4(),
          category: null,
          profile_img: req.file.path,
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
      } catch (e) {
        console.error(e);
        return next(e);
      }
    } else {
      req.body.email += req.body.email2;
      delete req.body.email2; //필요없는 값 삭제
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
          profile_img: "public\\images\\user_signup_images\\defaultProfile.jpg",
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

module.exports = router;
