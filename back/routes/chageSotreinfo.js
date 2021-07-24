const express = require('express');
const router = express.Router();
const {Market_category,Category,Prodouct,Store_infrom} = require('../models');
const {isLoggedIn, isNotLoggedIn} = require('./middlewares');
/*
localhost:3000/chageSotreinfo/category 로 접속
category에 값을 넣어줌
*/
router.post('/category',isLoggedIn, async (req,res)=>{
    var findId = await Category.findOne({ 
        attributes : ['id'],
        where : {name : req.body.category}
      }).then(r => {
        if(r)
          return r.id;
      })
      .catch(err=>console.dir(err));

      Market_category.create({
        category

      }) 
});
module.exports = router;