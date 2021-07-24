
//로그인을 했는지 알아보는 미들웨어
exports.isLoggedIn= (req,res,next) =>{
    if(req.isAuthenticated()){
        next();
    }else{
        res.send('로그인 필요');
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
