const express = require('express');
const path = require('path');
const {sequelize} = require('./models');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const morgan = require('morgan');
const dotenv = require('dotenv');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();
// promise 버전
/*sequelize.sync( {force: false} )
    .then( () => {
        console.log('데이터베이스 연결성공');
    })
    .then( (err) => {
        console.error(err);
    });*/
// async await 버전
const connDB = async () => {
    try {
        await sequelize.sync({force: false});
    } catch (e) {
        console.error(e);
    }
    console.log('데이터베이스 연결성공');
};

// dotenv setting
dotenv.config();

// view engine setup
app.set('view engine', 'pug');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
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
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use((req, res, next) => {
    const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
    error.status = 404;
    next(error);
})

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    res.render('error');
});

module.exports = {app, connDB};
