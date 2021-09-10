const express = require('express');
const router = express.Router();
const {v4: uuidv4} = require('uuid'); 
const {Market, Category, Member} = require('../models');
const {isLoggedInMember, isLoggedInMarket} = require('./middlewares');

//이미지 파일 저장 관련 설정
const setMulter = require('../multer');
const upload = setMulter('./public/images/user_signup_images/');
 

/*
localhost/users/storeInformation로 접속
수정중 
가게 테이블 정보 보는 용도
*/                                                                                                                                                                                                                                                                                                                                  
router.get(
    '/storeInformation', 
    isLoggedInMarket,
    async (req, res) => {
        res.json(req.user)
    }
);
router.get('/memberInformation',isLoggedInMember,async(req,res)=>{res.json(req.user)})
router.put('/storeInformation/update',
    upload.single('userfile'),
    isLoggedInMarket,
    async (req, res) => {
        Market
            .update({
                profile_img: req.file.path
            }, {
                where: {
                    market_id: req.user.market_id
                }
            })
            .then(r => {
                if (r) 
                    console.log('수정 성공');
                }
            )
            .catch(err => console.dir(err));
    }
)
/*
localhost/users/createCategory 접속
*/ 
router.post('/createCategory', isLoggedInMarket, function (req, res) {
    Category.create({category_id: uuidv4(), name: req.body.name})
        .then(r => {
            res.send('추가 성공');
        })
        .catch(err => console.dir(err));
    })
router.post('/storeInformation', upload.single('userfile'), isLoggedInMarket, async(req,res)=>{ 
  console.log('로그인 성공');
  console.dir(req.user);
       Market.update({ 
       profile_img: req.file.filename},
       {where : { market_id : req.user.market_id,}  
       }).then(r => {
       if(r)
       console.log('수정 성공');
       }).catch(err => console.dir(err)); 
       res.writeHead(200, { 'Content-Type': 'text/html' }); 
       res.write(`ID :  ${req.user.id}
                  이메일 : ${req.user.email}          
                  가게이름 : ${req.user.market_name}
                 `);
              res.end();
              }); 
            
            router.post('/createCategory',isLoggedInMarket, function(req,res){
              Category.create({
                category_id : uuidv4(),
                name : req.body.name,
              }).then(r=>{
                res.send('추가 성공');
  }).catch(err => console.dir(err));
});

/* localhost/users/marketsignout 접속 가게회원탈퇴 */
router.delete('/marketsignout',isLoggedInMarket, async(req,res) => {
  Market.destroy({
    where :{market_id : req.user.market_id},
    individualHooks : true
  }).then(r =>{
    if(r)
    console.log('성공');
  }).catch(err => {
    if(err)
    console.log(err);
  })
});

/* localhost/users/membersignout 접속 손님회원탈퇴*/
router.delete('/membersignout',isLoggedInMember, async(req,res) => {
  Member.destroy({
    where :{member_id : req.user.member_id},
    individualHooks : true
  }).then(r =>{
    if(r)
    console.log('성공');
  }).catch(err => {
    if(err)
    console.log(err);
  }) 
});


/* localhost/users/memberInformation/update 접속 손님정보수정 */
router.post('/memberInformation/update', upload.single('userfile'),  isLoggedInMember, async (req, res) => {
    console.log(req.body)
    let {nickname,password} = req.body
    let inputdata = {nickname,password}
    for(let key in inputdata){
        if(inputdata[key] === undefined ||inputdata[key] === 'null')
        delete inputdata[key];
    }
    console.log(inputdata)
    Member.update(inputdata, {
                where: {
                    member_id: req.user.member_id
                }
    }).catch(err => console.dir(err));
    if(req.file){
        Member.update({ profile_img : req.file.path}, {
                            where: {
                                member_id: req.user.member_id
                            }
        }).catch(err => console.dir(err));
    }
    res.json({message : "성공"})
  }
);

router.get('/checkNickName/:nickname',isLoggedInMember,async(req,res)=>{
    let find = await Member.findOne({attributes : ['nickname'],
        where : { nickname : req.params.nickname}
    }).then((res)=>{
        if(res)
            return false
        else
            return true
    })
    res.json(find)
})

/* localhost/users/marketsignout 접속 가게회원탈퇴 */
router.delete('/marketsignout', isLoggedInMarket, async (req, res) => {
    Market
        .destroy({
            where: {
                market_id: req.user.market_id
            },
            individualHooks: true
        })
        .then(r => {
            if (r) 
                console.log('성공');
            }
        )
        .catch(err => {
            if (err) 
                console.log(err);
            }
        )
    });

/* localhost/users/membersignout 접속 손님회원탈퇴*/
router.delete('/membersignout', isLoggedInMember, async (req, res) => {
    Member
        .destroy({
            where: {
                member_id: req.user.member_id
            },
            individualHooks: true
        })
        .then(r => {
            if (r) 
                console.log('성공');
            }
        )
        .catch(err => {
            if (err) 
                console.log(err);
            }
        )
    });

/* GET users listing. */
router.get('/', function (req, res, next) {
    console.log(req.user);
    res.send('respond with a resource');
});

module.exports = router;