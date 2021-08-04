const express = require('express');
const router = express.Router();
const {v4: uuidv4} = require('uuid');
const multer = require('multer');
const {Product_img, Product, Pd_option_group, Pd_option} = require('../models');
const { isLoggedInMarket, isNotLoggedIn } = require('./middlewares');

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

//localhost/menu/addmenu
//id 가 name , price인 곳에서 정보를 받음
router.get('/addMenu',upload.single('userfile'), isLoggedInMarket, async(req,res)=>{
    const product_id = uuidv4();
    Product.create({
        product_id,
        market_id : req.user.market_id,
        name : req.body.name,
        price : req.body.price,
    }).then(r => {
        if(r)
            console.log('메뉴 추가 성공');
        else
            console.log('메뉴 추가 실패');
    }).catch(err=>console.dir(err));
    Product_img.create({
        product_img_id : uuidv4(),
        product_img : req.file.filename,
        product_id
    });

});

//localhost/menu/update/:product_id 
//id 가 name , price인 곳에서 정보를 받음
router.put('/update/:id', isLoggedInMarket, async(req,res)=>{
    Product.update({
        name : req.body.name,
        price : req.body.price
    },
    {
        where : {
            product_id : req.params.id,   
        }
    }).then(r => {
        if(r)
        console.log('수정 성공');
    }).catch(err => console.dir(err)); 
});
/*  
localhost/menu/delete/:product_id  메뉴 삭제부분 
*/
router.delete('/delete/:id',isLoggedInMarket, async(req,res)=> {
     let product_id = req.params.id;
       await Product.destroy({
        where : {product_id},
        individualHooks : true
    }).then(r => {
        if(r)
        console.log('성공');
    }).catch(err => {
        console.dir(err);
    });  
});

module.exports = router;
