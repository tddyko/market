const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const { Pd_option, Pd_option_group } = require("../models");
const { isLoggedInMarket } = require("./middlewares");

/*
 localhost/menu_option/addGroup/:product_id 메뉴옵션그룹 추가
*/
router.post("/addGroup/:id", isLoggedInMarket, async (req, res) => {
  await Pd_option_group.create({
    pd_option_group_id: uuidv4(),
    name: req.body.name,
    product_id: req.params.id,
  }).then((result) => {
      if (result) console.log("성공");
    })
    .catch((err) => {
      if (err) {
        console.log(err);
      }
    });
});
router.get('/list/optionGroup/:product_id', isLoggedInMarket, async(req,res)=>{
   let result =  await Pd_option_group.findOne({
       attributes : ['name','pd_option_group_id'],
       where : {product_id : req.params.product_id}
   })
   res.json(result)
})
router.get('/list/GroupAndOptions/:product_id', isLoggedInMarket, async(req,res)=>{
   let result =  await Pd_option_group.findAll({
       attributes : ['name','pd_option_group_id'],
       include : [
            {
                model : Pd_option,
                attributes : ['name', 'price','pd_option_id'],
            },
       ],
       where : {product_id : req.params.product_id}
   })
   res.json(result)
})
/*
 localhost/menu_option/updateOption/:pd_option_group_id/:옵션id   메뉴옵션 추가
*/
router.post("/updateOption/:id/:opId", isLoggedInMarket, async (req, res) => {
  let inputData = {name,price} = req.body;
  inputData.pd_option_group_id = req.params.id
  await updateOrCreate(Pd_option,{pd_option_id : req.params.opId}, inputData)
});

async function updateOrCreate(tableName, where, inputData){
    let findData = await tableName.findOne({where :where}).catch(error => console.log(error))
    if(!findData){
    if(tableName == 'Pd_option')
        inputData.pd_option_id = uuidv4();
        tableName.create(inputData)
    }else{
        return tableName.update(inputData,{where : where})
    }
}

router.get('/delete/option_group/:option_group_id',isLoggedInMarket,async(req,res)=>{
    await Pd_option_group.destroy({where :{pd_option_group_id : req.params.option_group_id}
    ,force : true
    })
})

router.get('/delete/options/:pd_option_id',isLoggedInMarket,async(req,res)=>{
    Pd_option.destroy({
        where :{pd_option_id : req.params.pd_option_id},force : true
    })
})

module.exports = router;
