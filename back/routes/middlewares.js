
//로그인을 했는지 알아보는 미들웨어
exports.isLoggedInMarket= (req,res,next) =>{
    if(req.isAuthenticated() && req.user.market_id){ 
        next();
    }else{
        console.log('에러') 
        res.send('가게 로그인 필요');
    }
};


exports.isLoggedInMember= (req,res,next) =>{
    if(req.isAuthenticated() && req.user.member_id){
        next();
    }else{
        res.send('손님 로그인 필요');
    }
};

//로그인을 안했는지 알아보는 미들웨어
exports.isNotLoggedIn = (req,res,next)=>{
    if(!req.isAuthenticated()){
        next();
    }else{
        res.send('로그인한 상태입니다');
    }
};
