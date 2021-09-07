const express = require('express');
const router = express.Router();
const {v4: uuidv4} = require('uuid'); 
const {Order_review_answer,Member,Market,Order_review,Order_review_img} = require('../models');
const { isLoggedInMember,isLoggedInMarket} = require('./middlewares');
const sequelize = require('sequelize');
const {Op} = require('sequelize')
const dayjs = require('dayjs');
require('dayjs/locale/ko');

//이미지 파일 저장 관련 설정
const setMulter = require('../multer');
const upload = setMulter('./public/images/order_review_images/');

/* 
localhost/order_review/가게이름  리뷰작성페이지
 */
router.post('/:marketname/:order_id', upload.array('orderReiveImg',3),isLoggedInMember, async(req, res) => {
    const order_id = req.params.order_id;
    let {market_id} = await Market.findOne({attributes : ['market_id'], where : {market_name : req.params.marketname}, raw : true})
    const order_review_id = uuidv4();
    await Order_review.create({
         order_review_id,
         review : req.body.review,
         rating : req.body.rating,
         member_id : req.user.member_id,
         market_id,
         order_id
        }); 
        if(req.files){
            req.files.forEach(async(files)=> {
                await Order_review_img.create({
                   Order_review_img_id : uuidv4(),
                   Order_review_img : files.path,
                   order_review_id
                });
            });
        }
     console.log('성공');
    });
    

/* 
localhost/order_review/review  리뷰보는 페이지
 */
router.get('/reviews/list',isLoggedInMarket, async(req, res) => {
    dayjs.locale('ko')
    let tab = req.body.tab || req.query.tab;
    let date_start,date_end ;
    console.log(req.query); 
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
    let reviews = await Order_review.findAll({
        attributes : ['order_review_id','review','rating',
        [sequelize.fn('date_format', 
        sequelize.col('Order_review.created_at'), '%Y년 %m월 %d일'), 'created_date']
        ],
        include : [
            {
                model : Order_review_img,
                attributes : ['order_review_img'],
            },{
                model : Order_review_answer,
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
        const returnDatas = new Array();
        r.forEach(element=>{ 
             if(tab=='0'){
                returnDatas.push(element)
                console.log('전체')
             }
             if(tab=='1' && element.Order_review_answer ==null){
                 returnDatas.push(element)
                 console.log('미답변')
             }
             if(tab=='2' && element.Order_review_answer!=null){
                 returnDatas.push(element)
                console.log('답변완료')
             }

        })
        return returnDatas;
    }).catch(err=> console.log(err)); 
    res.json(reviews);
});


router.get('/reviews/list/:marketName', async(req, res) => {
    dayjs.locale('ko') 
    let {market_id} = await Market.findOne({where : {market_name: req.params.marketName}})
    let reviews = await Order_review.findAll({
        attributes : ['order_review_id','review','rating',
        [sequelize.fn('date_format', 
        sequelize.col('Order_review.created_at'), '%Y년 %m월 %d일'), 'created_date']
        ],
        include : [
            {
                model : Order_review_img,
                attributes : ['order_review_img'],
            },{
                model : Order_review_answer,
                attributes : ['answer'],
            },{
                model : Member,
                attributes : ['nickname','profile_img']
            }
        ],
        where : {
            market_id
        } 
    }).then(r=>{return r}).catch(err=> console.log(err)); 
    res.json(reviews);
});




/* 
localhost/order_review/:order_review_id  리뷰수정페이지
 */
router.get('/:id',isLoggedInMember, async(req, res) => {
    let order_review_id = req.params.id;
    await Order_review.update({
        review : req.body.review,
        rating : req.body.rating},
        {
            where : {order_review_id}
        }).then(result => {
            if(result)
            res.redirect('review');
        }).catch(err => {
            if(err){
                console.log('수정실패');
                console.dir(err);}
        });
    });

/* 
localhost/order_review/:order_review_id uuid값  리뷰삭제페이지
 */
router.delete('/:id',isLoggedInMember, async(req, res) => {
        let order_review_id = req.params.id;
        
        await Order_review.destroy({where : {order_review_id}
        }).then(result => {
            if(result)
            res.redirect('review');
        }).catch(err => {
            if(err)
            console.log("데이터 삭제 실패");
         });
         let {Order_review_answer_id} = await Order_review_answer.findOne({
             attributes : ['Order_review_answer_id'],
             where : {order_review_id}
         });
         
         await Order_review_answer.destroy({where : {Order_review_answer_id}
         }).then(r => {
             if(r)
             console.log('성공');
         }).catch(err => {
             if(err)
             console.log(err);
         });
        });    
        

        //localhost/order_review/answer/:reseve_review_id uuid값  리뷰 답글 라우터
router.get('/answer/:reviewId',isLoggedInMarket, async(req,res)=>{
        let getAnswer = req.query.answer;
        console.log(getAnswer);
        let {member_id} = await Order_review.findOne({
            attributes : ['member_id'],
            where: {order_review_id : req.params.reviewId},
            raw : true
        }).catch(err=>{console.error(err)});

        let findInformId = await Order_review_answer.findOne(
            {attributes : ['member_id'],where : {member_id},raw : true}) 
        let reviewData={
            order_review_answer_id : uuidv4(),
            answer :  getAnswer
            ,market_id : req.user.market_id, 
            member_id, order_review_id : req.params.reviewId,
        } 
        await updateOrCreate(Order_review_answer,findInformId,reviewData);
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
