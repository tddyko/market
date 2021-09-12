const express = require('express');
const router = express.Router();
const {v4: uuidv4} = require('uuid'); 
const {Market, Category, Member} = require('../models');
const {isLoggedInMember, isLoggedInMarket} = require('./middlewares');

//이미지 파일 저장 관련 설정
const setMulter = require('../multer');
const upload = setMulter('./public/images/user_signup_images/');

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

router.post('/marketInformation/update', isLoggedInMarket, async (req, res) => {
    console.log(req.body)
    let {market_name,password} = req.body
    let inputdata = {market_name,password}
    for(let key in inputdata){
        if(inputdata[key] === undefined ||inputdata[key] === null )
        delete inputdata[key];
    }
    Market.update(inputdata, {
                where: {
                    market_id: req.user.market_id
                }
    }).catch(err => console.dir(err));
});


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
router.get('/checkMarketName/:market_name',isLoggedInMarket,async(req,res)=>{
    let find = await Market.findOne({attributes : ['market_name'],
        where : { market_name : req.params.market_name}
    }).then((res)=>{
        if(res)
            return false
        else
            return true
    })
    console.log(find)
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