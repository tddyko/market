const passport = require('passport');
const {Market, Member} = require('../models');
const express = require('express');
const router = express.Router();
const {v4: uuidv4} = require('uuid');
const multer = require('multer');
const bcrypt = require('bcrypt');
//바디파서, 세션 설정
router.use(express.json());
router.use(express.urlencoded({extended: true}));

//이미지 파일 저장 관련 설정
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/images/');
    },
    filename: function (req, file, cb) {
        cb(null, new Date().valueOf() + '_' + file.originalname);
    },
});
const upload = multer({storage: storage});

/*
  가입 하는 라우터
  이미지는 userfile
  이메일 앞 부분(test)은 email
  이메일 뒷 부분(@naver.com)은 email2
  나머지는 db에 있는 이름이랑 동일
 */
router.post('/signup/:singUpState', upload.single('userfile'), async (req, res, next) => {
    if (req.params.singUpState === 'market') {
        req.body.email += req.body.email2;
        delete req.body.email2; //필요없는 값 삭제
        const {id, password, name, birthday, email, market_name, phonenumber, zipcode, address, dt_address} = req.body;
        try {
            const exMarketID = await Market.findOne({where: {id}});
            if (exMarketID) {
                return res.redirect('/signup?error=exist');
            }
            console.dir(req.file);
            console.log('가게 가입');
            const hash = bcrypt.hash(password, 12);
            Market.create({
                market_id: uuidv4(),
                category: null,
                profile_img: req.file.filename,
                id, password: hash, name, birthday,
                email,
                market_name, phonenumber,
                zipcode, address, dt_address
            });
        } catch (e) {
            console.error(e);
            return next(e);
        }
    } else {
        req.body.email += req.body.email2;
        delete req.body.email2; //필요없는 값 삭제
        const {id, password, name, birthday, email, nickname, phonenumber, zipcode, address, dt_address} = req.body;
        try {
            console.log('멤버 가입');
            //const hash = bcrypt.hash(password, 12);
            Member.create({
                member_id: uuidv4(),
                profile_img: "public/images/defaultProfile.jpg",
                id,// password: hash, 
                password, name, birthday, email,
                nickname, phonenumber,
                zipcode, address, dt_address
            })
        } catch (e){
            console.error(e);
            return next(e);
        }
    }
});


module.exports = router;