const express = require('express');
const router = express.Router();
const {v4: uuidv4} = require('uuid');
const multer = require('multer');
const {Market,Product_img, Product, Pd_option_group, Pd_option} = require('../models');
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

/* localhost/menu/update/:product_id 메뉴수정
id 가 name , price인 곳에서 정보를 받음 */
router.put('/update/:id' ,upload.single('menuImg'), isLoggedInMarket, async(req,res)=>{
     let {name,price,product_info} =  req.body;
     let inputData = {name,price,product_info};
     inputData.market_id = req.user.market_id;
     await updateOrCreate(Product,{product_id :  req.params.id}, inputData);
     console.log(req.file)
     if(req.file){
            await Product_img.findOne({where : {product_id : req.params.id},raw : true})
            .then(async(r) => {
                await Product_img.destroy({where : {product_id : req.params.id},force : true}).then(async   ()=>{
                    await Product_img.create({
                        product_img_id : uuidv4(),
                        product_img : req.file.path,
                        product_id : req.params.id
                        }).then((r)=>{if(r)return true
                        else return false
                    })
                })
            })
     }

});
async function updateOrCreate(tableName, where, inputData){
    let findData = await tableName.findOne({where :where}).catch(error => console.log(error))
    if(!findData){
        if(tableName == 'Product_img')
            inputData.product_img_id = uuidv4();
        return tableName.create(inputData).then(r => {if(r)return true
            else return false})
    }else{
        console.log(inputData);
        return tableName.update(inputData,{where : where}).then(r => {if(r)return true
        else return false})
    }
}


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
            },
            {
                model : Pd_option_group,
                attributes : ['name'],
                include :[{model : Pd_option, attributes : ['name','price']}]
            }
        ], 
        attributes : ['product_id','name','price','product_info'],
        where : {market_id}
    });
    res.json(menulist);
});

router.get('/myMarket/menuList', isLoggedInMarket, async(req,res) => {
    let menulist = await Product.findAll({
        include : [
            {
                model : Product_img,
                attributes : ['product_img']
            },
            {
                model : Pd_option_group,
                attributes : ['name'],
                include :[{model : Pd_option, attributes : ['name','price']}]
            }
        ],
        attributes : ['product_id','name','price','product_info'],
        where : {market_id : req.user.market_id}
    });
    res.json(menulist);
});

/*  
localhost/menu/option/:메뉴uuid 메뉴선택
*/
router.get('/option/:product_id', async(req,res)=> {
    let {pd_option_group_id} = await Pd_option_group.findAll({
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
