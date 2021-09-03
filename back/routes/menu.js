const express = require('express');
const router = express.Router();
const {v4: uuidv4} = require('uuid');
const multer = require('multer');
const {Product_img, Product, Pd_option_group, Pd_option} = require('../models');
const { isLoggedInMarket, isNotLoggedIn } = require('./middlewares');

const setMulter = require('../multer');
const upload = setMulter('./public/images/menu_images/');

//localhost/menu/addmenu
//id 가 name , price인 곳에서 정보를 받음
router.get('/addMenu',upload.single('menuImg'), isLoggedInMarket, async(req,res)=>{
    const product_id = uuidv4();
    Product.create({
        product_id,
        market_id : req.user.market_id,
        name : req.body.name,
        price : req.body.price,
        product_info : req.body.product_info
    }).then(() => {
     
    }).catch(err=>console.dir(err));
    if(req.file)
    Product_img.create({
        product_img_id : uuidv4(),
        product_img : req.file.path,
        product_id
    });
});

/* localhost/menu/update/:product_id 메뉴수정
id 가 name , price인 곳에서 정보를 받음 */
router.put('/update/:id' ,upload.single('menuImg'), isLoggedInMarket, async(req,res)=>{
    Product.update({
        name : req.body.name,
        price : req.body.price,
        product_info : req.body.product_info
    },
    {
        where : {
            product_id : req.params.id,   
        }
    })
    if(req.file.menuImg){
        await Product_img.findOne({where : {product_id : req.params.id}})
        .then(async(r)=>{
            if(r){
                Product_img.update({
                    product_img : req.file.menuImg.path,
                    where : {product_id : req.params.id}
                })
            }else{
                Product_img.create({
                    product_img_id : uuidv4(),
                    product_img : req.file.menuImg.path,
                    product_id : req.params.id
                });
            }
        })
    }
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

/*  
localhost/menu/list/:marketname  메뉴리스트
*/
router.get('/list/:marketname', async(req,res) => {
    let {market_id} = await Market.findOne({
        attributes : ['market_id'],
        where : {market_name : req.params.marketname}
    });

    let menulist = await Product.findAll({
        include : [
            {
                model : Product_img,
                attributes : ['product_img']
            }
        ],
        attributes : ['product_id','name','price','product_info'],
        where : {market_id}
    });
    res.json(menulist);
});

/*  
localhost/menu/option/:메뉴uuid 메뉴선택
*/
router.get('/option/:product_id', async(req,res)=> {
    let pd_option_group_id = await Pd_option_group.findAll({
        attributes : ['pd_option_group_id'],
        where : {product_id : req.params.product_id},
        raw : true
    });

   let menuchoice = await Product.findAll({
        include : [
            {
                model : Product_img,
                attributes : ['product_img']
            },
            {
                model : Pd_option_group,
                attributes : ['name'],
                include : {
                    model : Pd_option,
                    attributes : ['name', 'price'],
            },
            },
        ],
        attributes : ['name','product_info','price'],
        where : {product_id : req.params.product_id}
    })
         res.json(menuchoice);
});
module.exports = router;
