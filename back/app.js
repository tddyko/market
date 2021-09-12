const express = require('express');
const path = require('path');
const { sequelize } = require('./models');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const morgan = require('morgan');
const dotenv = require('dotenv');
const passport = require('passport');  //페스포트
const passportConfing = require('./passport'); //페스포트 설정
const flash = require('connect-flash');
const cors = require('cors');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const user_loginRouter = require('./routes/user_login'); //로그인, 로그아웃
const user_signupRouter = require('./routes/user_signup'); //회원가입
const chageSotreinfoRouter = require('./routes/chageSotreinfo'); //가게 카테고리 업데이트
const menuRouter = require('./routes/menu'); //메뉴 관련 라우터
const reservationRouter = require('./routes/reservations'); //예약 관련 라우터
const reseve_reviewRouter = require('./routes/reserve_review'); //예약 리뷰 관련 라우터
const orderRouter = require('./routes/orders'); //주문
const dashboardRouter = require('./routes/dashboard');// 대시보드 
const order_reviewRouter = require('./routes/order_review');//주문리뷰
const order_review_answerRouter = require('./routes/order_review_answer');//주문리뷰답글
const menu_optionRouter = require('./routes/menu_option');//메뉴옵션
const market_inforomRouter = require('./routes/market_infom');//가게 정보
const main_page = require('./routes/mainPage'); //들어가자마자 나오는 화면
 
const app = express();

passportConfing(); //페스포트 설정
// promise 버전
/*sequelize.sync( {force: false} )
    .then( () => {
        console.log('데이터베이스 연결성공');
    })
    .then( (err) => {
        console.error(err);
    });*/
// async await 버전
const {Category} = require("./models");
const { v4: uuidv4 } = require("uuid");
const connDB = async () => {
    try {
        await sequelize.sync({force: false});
        let categorys = ['치킨', '피자', '한식', '중식' ,'일식' ,'양식' ,'베이커리']
        for(let i=0; i<categorys.length; i++){
            await Category.findOrCreate({where: {name : categorys[i]},
            defaults: {category_id: uuidv4()}})
        }
    } catch (e) {
        console.error(e);
    }
    console.log('데이터베이스 연결성공');
};

app.use(cors({
  origin : "http://localhost:8080",
  credentials : true
}));
// dotenv setting
dotenv.config();

// view engine setup
app.set('view engine', 'pug');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: process.env.COOKIE_SECRET,
  cookie: {
    httpOnly: true,
    secure: false,
  },
}))
//passport 설정
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use('/', indexRouter);
app.use('/',user_loginRouter);
app.use('/', user_signupRouter);
app.use('/users', usersRouter);
app.use('/markets',main_page);
app.use('/mymarket/update',chageSotreinfoRouter); //추후 수정
app.use('/menu',menuRouter);
app.use('/reservation', reservationRouter);
app.use('/reseve_review',reseve_reviewRouter);
app.use('/order',orderRouter);
app.use('/dashboard',dashboardRouter);
app.use('/order_review',order_reviewRouter)
app.use('/order_review_answer',order_review_answerRouter);
app.use('/menu_option',menu_optionRouter);
app.use('/market_preview', market_inforomRouter);

app.use( (req, res, next) => {
  const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
  error.status = 404;
  next(error);
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});
module.exports = {app, connDB};