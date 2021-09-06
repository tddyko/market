const express = require('express');
const router = express.Router();
const {isLoggedInMarket} = require('./middlewares');
const {Market, Order, Reservation,Market_inform} = require('../models');
const {Op} = require('sequelize');
const sequelize = require('sequelize');
const dayjs = require('dayjs');
/* localhost/dashboard */
router.get('/', isLoggedInMarket, async (req, res) => {
    let result = await Market_inform.findOne({
        attributes : ['start_time','end_time'],
        where: {market_id : req.user.market_id}
    }).then((result) => {return result})
    let start_time = parseInt(result.start_time.substring(0,2));
    let end_time = parseInt(result.end_time.substring(0,2));
    console.log(start_time,end_time)
    let daterange=[];
    for(let i=start_time ; i<=end_time; i++)
       daterange.push(dayjs().set('hour', i).set('minute',0).format('YYYY-MM-DD HH:mm'))
        console.log(daterange)
    
    let datas = []
    datas.push({time : daterange})
    datas.push({ value : await getValues(Order, daterange,'주문') });
    datas.push({ value : await getValues(Order, daterange,'주문완료') });
    datas.push({ value : await getValues(Order, daterange,'주문취소') });

    datas.push({ value : await getValues(Reservation, daterange,'예약') });
    datas.push({ value : await getValues(Reservation, daterange,'예약완료') });
    datas.push({ value : await getValues(Reservation, daterange,'예약취소') });
    res.json(datas)

});

router.get('/:marketNm',async (req, res) => {
    let {market_id} = await Market.findOne({
        attributes : ['market_id'], where : {market_name : req.params.marketNm}
    })
    let result = await Market_inform.findOne({
        attributes : ['start_time','end_time'],
        where: {market_id}
    }).then((result) => {return result})
    let start_time = parseInt(result.start_time.substring(0,2));
    let end_time = parseInt(result.end_time.substring(0,2));
    console.log(start_time,end_time)
    let daterange=[];
    for(let i=start_time ; i<=end_time; i++)
       daterange.push(dayjs().set('hour', i).set('minute',0).format('YYYY-MM-DD HH:mm'))
        console.log(daterange)

    let datas = []
    daterange.forEach((data)=>{
        datas.push(data.substring(11))
        })
    res.json(datas)
   
});

async function getValues(tableName,daterange,current_state){
    let values = [];
    if(tableName == Order)
    for(let i=0; i<daterange.length-1; i++){
        let results = await tableName.count({
            where : {
                current_state : current_state,
                createdAt : {[Op.between]: [daterange[i],daterange[i+1]] }           
            }
        }).then((r)=>{return r;})
        values.push(results)
    }
    else 
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

module.exports = router;