const express = require('express');
const router = express.Router();
const {Market,Member,Market_inform_img,Order_review_img,Reserve_review,Order_review,Market_inform,Market_noti_img
,Market_inform_holiday,Reserve_review_img,Reservation,Category} = require('../models');
const sequelize = require('sequelize'); 
const {Op} = require('sequelize')
const { isLoggedInMarket } = require("./middlewares");
const {v4: uuidv4} = require('uuid');
const dayjs = require('dayjs');
require('dayjs/locale/ko')
dayjs.locale('ko')
 
const setMulter = require('../multer');
const upload = setMulter('./public/images/market_room/');

router.get('/:marketNm/totalRating',async(req, res)=>{
    let ratringResult = new Object();
    let {market_id} = await Market.findOne({
        attributes :['market_id'],
        where:{market_name: req.params.marketNm},raw : true
    });
    let sum =
    await Reserve_review.sum('rating',{where :{market_id}}) + await Order_review.sum('rating',{where :{market_id}})
    if(sum==null) sum=0
    let count = await Reserve_review.count({where:{market_id}}) +
    await Order_review.count({where:{market_id}})
    if(count==null) count=0

    var array = new Array();  
    for(var i=1;i<=5; i++)
        array[i-1] =(await countRating(Reserve_review,req.params.marketNm,i))
                    + (await countRating(Order_review,req.params.marketNm,i))
    ratringResult.ratingAvg = sum/count;
    ratringResult.ratingsCount = array.reverse()
    res.json(ratringResult); 
})

async function countRating(tableName,where,rating){
    let countReslut = tableName.count({
        include:[
            {
                model: Market,
                where : {market_name: where}
            }
        ]
         ,where: {[Op.and] : [
        {'rating': {[Op.eq]: rating}}
    ]}}).then(r=>{
        return r;
    })
    return countReslut;
}


router.get('/:marketNm/reserve_reviews',async(req, res)=>{
    let findid = await Market.findOne({attributes : ['market_id'], where : {market_name : req.params.marketNm}, raw : true}).catch(err=>{console.error(err)});
    let {ratingAscDesc, timeAscDesc} = req.body;
    if(!ratingAscDesc){
        ratingAscDesc = 'DESC'
    }
    if(!timeAscDesc){
        ratingAscDesc = 'DESC'
    }
    let result = await Reserve_review.findAll({
        where : findid,
        include :[
            {
                model : Member,
                attributes : ['nickname','profile_img'],
                required : false,
            },{
                model : Reserve_review_img, 
                attributes : ['Reserve_review_img'],required : false,
            }   
        ],attributes : ['rating', 'created_at']
        ,order : [[sequelize.literal('rating '+ ratingAscDesc)],
        ]
    }).then(r=>{
        r.forEach(element => {
            element.created_at = dayjs(element.created_at).format('YYYY년 M월 D일')
        });
        return r;
    });
    res.json(result) 
})

router.get('/:marketNm/reserve/find', async (req, res) => {
    let findid = await Market.findOne({attributes : ['market_id'], where : {market_name : req.params.marketNm}, raw : true}).catch(err=>{console.error(err)});
    let result = await Market_inform.findOne({
        attributes : ['start_time','end_time'],
        where: findid
    }).then((result) => {return result})
    let start_time = parseInt(result.start_time.substring(0,2));
    let end_time = parseInt(result.end_time.substring(0,2));
    console.log(start_time,end_time)
    let daterange=[];
    for(let i=start_time ; i<=end_time; i++)
       daterange.push(dayjs().set('hour', i).set('minute',0).format('YYYY-MM-DD HH:mm'))

    let datas = new Object();
    datas.reservetotalCount = await getValues(Reservation, daterange,'예약');
    datas.reservecancelCount = await getValues(Reservation, daterange,'예약취소');
    let formatDate=[]
    daterange.forEach(element=>{
        formatDate.push(dayjs(element).format('HH:mm'))
    })
    datas.times = formatDate
    res.json(datas)
});

async function getValues(tableName,daterange,current_state){
    let values = [];
    for(let i=0; i<daterange.length-1; i++){
        let results = await tableName.count({
            where : {
                [Op.and] : [
                    sequelize.where(
                        sequelize.fn('concat',sequelize.col('reserve_date')," ",sequelize.col('reserve_time')),{
                            [Op.gte] : daterange[i],
                            [Op.lte] : daterange[i+1]
                        })
                    ,
                    {current_state : current_state}
                ]
            }
        })
        values.push(results)
    }
    return values;
}

router.get('/:marketNm/order_reviews',async(req, res)=>{
    let findid = await Market.findOne({attributes : ['market_id'], where : {market_name : req.params.marketNm}, raw : true}).catch(err=>{console.error(err)});
    let {ratingAscDesc, timeAscDesc} = req.body;
    if(!ratingAscDesc){
        ratingAscDesc = 'DESC'
    }
    if(!timeAscDesc){
        ratingAscDesc = 'DESC'
    }
    let result = await Order_review.findAll({
        where : findid,
        include :[
            {
                model : Member,
                attributes : ['nickname','profile_img'],
                required : false,
            },{
                model : Order_review_img, 
                attributes : ['Order_review_img'],required : false,
            }   
        ],attributes : ['rating', 'created_at']
        ,order : [[sequelize.literal('rating '+ ratingAscDesc)],
        ]
    }).then(r=>{
        r.forEach(element => {
            element.created_at = dayjs(element.created_at).format('YYYY년 M월 D일')
        });
        return r;
    });
    res.json(result) 
})


/* localhost/market_preview/:가게이름/imformation */
router.get('/:marketNm/imformation',async(req, res)=>{
    dayjs.locale('ko') 
    let result = await Market.findOne({
        where : {market_name : req.params.marketNm},
        include : [{
            model : Market_inform,
            required: false,
            attributes : ['market_inform_id','start_time','end_time','market_noti','market_coment'],
           include : [
            {
                model : Market_noti_img,
                required: false,
                attributes : ['market_noti_img'],
                limit: 3
            },{
                model : Market_inform_holiday,
                required: false,
                attributes : ['market_inform_week_holiday','market_inform_day_holiday']
            }]
            }
            ,{
                model : Category,
                attributes : ['name']
            }
        ],
        attributes : [
            'name','market_name','address','phonenumber','profile_img','market_phone',
            [
                sequelize.fn('concat',sequelize.col('address'),' ' ,sequelize.col('dt_address')),'market_address']
        ]
    }).then(async(r)=>{
        try{
            r.Market_inform.start_time = dayjs('1 ' +r.Market_inform.start_time).format('a hh:mm')
            r.Market_inform.end_time = dayjs('1 ' +r.Market_inform.end_time).format('a hh:mm')
        }catch{}
        return r;
    });
    res.json(result) 
})

/*  localhost/market_preview/room */
router.post('/room',upload.single('room_img'),isLoggedInMarket, async(req,res) => {
    let {room_name,room_comment,room_price} =req.body
    console.log(req.file.path);
    await Market_room.create({
        room_id:uuidv4(),room_name,room_comment,room_price,
        room_images : req.file.path,
        market_id : req.user.market_id
    }).catch((err) => {
        console.log(err);
    })
})

/*  localhost/market_preview/roomlist/:가게이름 */
router.get('/roomlist/:marketNm', async(req, res) => {
   let{market_id} = await Market.findOne({
        attributes:['market_id'], where : {market_name : req.params.marketNm}
    });
            console.log(market_id);
   let room =  await Market_room.findAll({
        attributes : ['room_name','room_comment','room_price','room_images'], where : {market_id}
    }).catch((err) => {
        console.log(err);
    });
    res.json(room)
})
module.exports = router;