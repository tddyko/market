const express = require('express');
const router = express.Router();
const {Market,Category,Market_inform,Market_inform_img,Market_inform_holiday,Market_noti_img} = require('../models');
const { isLoggedInMarket} = require('./middlewares');
const {v4: uuidv4} = require('uuid');
router.use(express.json());
router.use(express.urlencoded({extended: true}));

//이미지 파일 저장 관련 설정
const setMulter = require('../multer');
const upload = setMulter('./public/images/market_inform_images/');
router.post('/category',isLoggedInMarket, async (req,res)=>{
        await Market.findOne({where : {market_id : req.user.market_id}}).then(async(market)=>{
            await Category.findOne({attributes : ['category_id'], where : {name : req.body.category}
            }).then( async(category)=>{  
               await market.setCategories([category]).then(async()=>{
                     await market.getCategories().then((r)=>{
                         console.log(r[0].dataValues.name);
                     }); 
                     res.send({message:'success'})
               })
            });
        });
});
/* localhost/update/infrom */
router.post('/inform',isLoggedInMarket,
    //upload.fields([{name : 'profile_img',maxCount : 1},{name : 'info_img',maxCount : 3}]
    upload.single('profile_img'
    ),async(req,res)=>{
    console.log(req.query)
    console.log(req.body)
    /*
    let {market_phone,start_time,end_time,market_coment} =  req.body; 
    let inputData = {market_phone,start_time,end_time,market_coment};
    inputData.market_id = req.user.market_id;
    await updateOrCreate(Market_inform,{market_id : req.user.market_id},inputData);

    if(req.file){
            Market.update({profile_img : files.path}, {where : {market_id : req.user.market_id}})
            .then(r => {if(r)console.log('가게 이미지 수정 성공')})
    }
    if(req.files){
        await Market_inform.findOne({where : {market_id : req.user.market_id},raw : true})
        .then(async(r) => {
            await Market_inform_img.destroy({where : {market_inform_id : r.market_inform_id},force : true})
            req.files.info_img.forEach(async(files)=>{
                await Market_inform_img.create({
                    market_infrom_img_id : uuidv4(),
                    market_inform_img : files.path,
                    market_inform_id : r.market_inform_id
                })
        })
     })
    }
    if(req.body.market_inform_week_holiday){
        let findInformId = await Market_inform.findOne({attributes : ['market_inform_id'], where : {market_id : req.user.market_id},raw : true});
        let {market_inform_week_holiday,market_inform_day_holiday} = req.body;
        let holidayData = {
            market_inform_week_holiday,
            market_inform_day_holiday
        };
        holidayData.market_inform_id = findInformId.market_inform_id;
        await updateOrCreate(Market_inform_holiday,findInformId,holidayData);
    }*/
})


router.post('/notice',isLoggedInMarket,upload.array('noti_img',3), async(req,res)=>{
    let {market_noti} =  req.body; 
    let inputData = {market_noti};
    await updateOrCreate(Market_inform,{market_id : req.user.market_id}, inputData);
    if(req.files){
        await Market_inform.findOne({where : {market_id : req.user.market_id},raw : true})
        .then(async(r) => {
            await Market_noti_img.destroy({where : {market_inform_id : r.market_inform_id},force : true})
            req.files.forEach(async(files)=>{
                await Market_noti_img.create({
                    market_noti_img_id : uuidv4(),
                    market_noti_img : files.path,
                    market_inform_id : r.market_inform_id
                })
        })
     })
    }
})

async function updateOrCreate(tableName, where, inputData){
    let findData = await tableName.findOne({where :where}).catch(error => console.log(error))
    if(!findData){
        if(tableName == 'Market_inform')
            inputData.market_inform_id = uuidv4(); 
        if(tableName == 'Market_inform_img')
            inputData.market_infrom_img_id = uuidv4();  
        if(tableName == 'Market_inform_holiday')
            inputData.Market_inform_holiday = uuidv4(); 
        return tableName.create(inputData).then(r => {if(r)console.log(tableName.tableName + ' 값 생성')})
    }else{ 
        console.log(inputData);
        return tableName.update(inputData,{where : where}).then(r => {if(r)console.log(tableName.tableName + ' 값 수정')})
    }
}

module.exports = router;