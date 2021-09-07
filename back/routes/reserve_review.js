const { isLoggedInMarket, isLoggedInMember, isNotLoggedIn } = require('./middlewares');
const express = require('express');
const router = express.Router();
const {Market,Reserve_review_img,Member,Reserve_review_answer,Reserve_review} = require('../models');
const {v4: uuidv4} = require('uuid');  
const dayjs = require('dayjs');
require('dayjs/locale/ko');
const {Op} = require('sequelize');
const sequelize = require('sequelize');
//이미지 파일 저장 관련 설정
const setMulter = require('../multer');
const upload = setMulter('./public/images/reserve_review_images/');

router.post('/:marketname/:reservation_id',isLoggedInMember,upload.array('reserve_reviewImg',3) ,async(req,res)=>{
    const {review, rating} = req.body;
    const reservation_id = req.params.reservation_id;
    let {market_id} = await Market.findOne({attributes : ['market_id'], where : {market_name : req.params.marketname}, raw : true})
    .catch(err=>{console.error(err)});
    const reserve_review_id = uuidv4();
    Reserve_review.create({
        reserve_review_id,review, 
        rating,market_id,reservation_id, 
        member_id : req.user.member_id,
    }).then(r => {if(r){console.log('리뷰 작성 성공')}});

    if(req.files) {
        req.files.forEach(async(files)=> {
            Reserve_review_img.create({
                reserve_review_img_id : uuidv4(),
                reserve_review_img : files.path,
                reserve_review_id
            }).then(r => {if(r){console.log('성공')}}).catch(err=>{console.error(err)});    
        })
    }
    
});

//리뷰 수정 라우터
router.get('/:id',isLoggedInMember,upload.array('reviewImg',3), async(req, res) => {
    let reserve_review_id = req.params.id;
    await Reserve_review.update({
        review : req.body.review,
        rating : req.body.rating
    },
    {
        where : {reserve_review_id}
    }).then(result => {
        if(result)
        res.redirect('reviews');
    }).catch(err => {
        if(err){
            console.log('수정실패');
            console.dir(err);
        }
    });
    if(req.files){
        await Reserve_review_img.destroy({where : {reserve_review_id}}).then(async() => {
            req.files.forEach(async(file) => {
                await Reserve_review_img.create({
                    reserve_review_img_id : uuidv4(),
                    reserve_review_img : file.path,
                    reserve_review_id : req.params.id
                })
            })        
        })   
    }
});

//가게가 손님들이 단 리뷰를 보는 라우터
router.get('/reviews/list',isLoggedInMarket, async(req,res)=>{
    dayjs.locale('ko')
    let tab = req.body.tab || req.query.tab;
    let date_start,date_end ;
    console.log(tab);
    console.log(req.query.date1);
    console.log(req.query.date2);
    if(req.query.date1){
        if(req.query.date1 < req.query.date2){
            date_start = dayjs(req.query.date1).format('YYYY-MM-DD');
            date_end = dayjs(req.query.date2).add("1","day").format("YYYY-MM-DD");    
        }else{
            date_start = dayjs(req.query.date2).format('YYYY-MM-DD');
            date_end = dayjs(req.query.date1).add("1","day").format("YYYY-MM-DD"); 
        }
    }
    if(!req.query.date1){
         date_start = dayjs().format('YYYY-MM-DD');
         date_end = dayjs(date_start).add("1","day").format("YYYY-MM-DD"); 
    }   
    let results = await Reserve_review.findAll({
        attributes : ['reserve_review_id','review','rating',
        [sequelize.fn('date_format', 
        sequelize.col('Reserve_review.created_at'), '%Y년 %m월 %d일'), 'created_date']
        ],
        include : [
            {
                model : Reserve_review_img,
                attributes : ['reserve_review_img'],
            },{
                model : Reserve_review_answer,
                attributes : ['answer'],
            },{
                model : Member,
                attributes : ['nickname','profile_img']
            }
        ],
        where : {
            market_id : req.user.market_id,
            createdAt : {[Op.between]: [date_start,date_end] }
        } 
    }).then(r=>{
        const returnData = new Array();
        r.forEach(element=>{
            //switch(tab){
             //   case 0 : 
             if(tab==0)
                returnData.push(element)
             if(tab==1 && element.Reserve_review_answer ==null)
                returnData.push(element)
             
             if(tab==2 && element.Reserve_review_answer!=null)
                 returnData.push(element)

        })
        return returnData;
    }).catch(err=>{console.error(err)}); 
    res.json(results); 
})

//가게가 손님들이 단 리뷰를 보는 라우터
router.get('/reviews/list/:marketName', async(req,res)=>{
    dayjs.locale('ko')   
    let {market_id} = await Market.findOne({
        attributes : ['market_id'],
        where :{market_name : req.params.marketName}})
    let results = await Reserve_review.findAll({
        attributes : ['reserve_review_id','review','rating',
        [sequelize.fn('date_format', 
        sequelize.col('Reserve_review.created_at'), '%Y년 %m월 %d일'), 'created_date']
        ],
        include : [
            {
                model : Reserve_review_img,
                attributes : ['reserve_review_img'],
            },{
                model : Reserve_review_answer,
                attributes : ['answer'],
            },{
                model : Member,
                attributes : ['nickname','profile_img']
            }
        ],
        where : {
            market_id,
        } 
    }).then(r=>{
        return r;
    }).catch(err=>{console.error(err)}); 
    res.json(results); 
})

//localhost/reseve_review/:reseve_review_id uuid값  리뷰삭제페이지
router.delete('/:id',isLoggedInMember,async(req,res)=>{
    await Reserve_review.destroy({
        where : {reserve_review_id : req.params.id}
        , individualHooks: true
    }).then(async()=>{
        let {reserve_review_answer_id} = await Reserve_review_answer.findOne({
        attributes : ['reserve_review_answer_id'],
        where : {reserve_review_id : req.params.id}
        });
        await Reserve_review_answer.destroy({where : {reserve_review_answer_id}}).then(r => {
            if(r)
            console.log('성공');
        }).catch(err => {
        if(err)
            console.log(err);
        });
    })

});

//localhost/reseve_review/recoment/:reseve_review_id uuid값  리뷰 답글 라우터
router.get('/recoment/:reviewId',isLoggedInMarket, async(req,res)=>{
    let getAnswer = req.query.answer; 
    console.log(getAnswer);
    let {member_id} = await Reserve_review.findOne({
        attributes : ['member_id'],
        where: {reserve_review_id : req.params.reviewId},
        raw : true
    }).catch(err=>{console.error(err)});

    let findInformId = await Reserve_review_answer.findOne(
        {attributes : ['member_id'],where : {member_id},raw : true}) 
    let reviewData={
        reserve_review_answer_id : uuidv4(),
        answer :  getAnswer
        ,market_id : req.user.market_id, 
        member_id, reserve_review_id : req.params.reviewId,
    } 
    await updateOrCreate(Reserve_review_answer,findInformId,reviewData);
})
 
async function updateOrCreate(tableName, where, inputData){
    let findData = await tableName.findOne({where :where}).catch(error => console.log(error))
    if(!findData){ 
        console.log(inputData);
        return tableName.create(inputData).then(
            r => {if(r)console.log(tableName.tableName + ' 값 생성')}).catch((error) => {console.log(error)})
    }else{ 
        console.log(inputData);
        return tableName.update(inputData,{where : where}).then(
            r => {if(r)console.log(tableName.tableName + ' 값 수정')}).catch((error) => {console.log(error)})
    }
}

module.exports = router;