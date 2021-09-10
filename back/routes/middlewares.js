//로그인을 했는지 알아보는 미들웨어
exports.isLoggedInMarket = (req, res, next) => {
  if (req.isAuthenticated() && req.user.market_id) {
    next();
  } else {
    res.json({message : "로그인 후 이용 가능한 서비스 입니다"});
  }
};

exports.isLoggedInMember = (req, res, next) => {
  if (req.isAuthenticated() && req.user.member_id) {
    next();
  } else {
    res.json({message : "로그인 후 이용 가능한 서비스 입니다"});
  }
};

//로그인을 안했는지 알아보는 미들웨어
exports.isNotLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    next();
  } else {
    res.json({message : "로그인한 상태입니다"});
  }
};
