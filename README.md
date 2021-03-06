<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=Waving&color=auto&height=300&section=header&text=No%20Wait&fontSize=90" />
</p>
</br>
</br>


#  Use Tech

![](https://img.shields.io/badge/npm-CB3837?style=flat-square&logo=npm&logoColor=white)
![](https://img.shields.io/badge/IntelliJ%20IDEA-000000?style=flat-square&logo=IntelliJ%20IDEA&logoColor=white)
![](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white)
![](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white)
![](https://img.shields.io/badge/Vue.js-4FC08D?style=flat-square&logo=Vue.js&logoColor=white)
![](https://img.shields.io/badge/Vuetify.js%202.5.8-1867C0?style=flat-square&logo=Vuetify&logoColor=white)
![](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=Node.js&logoColor=white)
![](https://img.shields.io/badge/MySQL%208.0-4479A1?style=flat-square&logo=MySQL&logoColor=white)
![](https://img.shields.io/badge/Postman-FF6C37?style=flat-square&logo=Postman&logoColor=white)
![](https://img.shields.io/badge/Express.js-000000?style=flat-square&logo=Express&logoColor=white)

# 프로젝트 컨셉

사용자와 서비스 제공자 간의 온오프라인 간격을 좁히는 음식 O2O 서비스

# 목차

<ol>
  <li><a href="#design">디자인</a></li>
  <li><a href="#frontend">프론트엔드</a></li>
  <li><a href="#DB">DB설계</a></li>
  <li><a href="#backend">백엔드</a></li>

</ol>

<h1 id="design">디자인</h1>

__클라이언트 화면__

<img src="https://user-images.githubusercontent.com/85723094/135088887-209b8720-ec92-412f-8d24-ffa95ea35110.png" alt="클라이언트 화면">

클라이언트, 즉 배달앱 이용자가 로그인 했을 때 보이는 첫 화면입니다. 클라이언트 화면의 공통 컨셉은 화이트(#FFFFFF)를 배경으로 포인트 색상은 파란색 계통의 #52ACFF 색상을 사용했습니다.
"No Wait"이라는 웹사이트 명칭을 활용해 상단바에 로고를 만들어 삽입하였습니다. 또한 탭을 활용해 사용자가 쉽게 여러 분류의 음식점들을 한눈에 찾아볼 수 있도록 만들었고, 음식점의 선호도 및 리뷰 수를 한눈에 볼 수 있도록 했습니다. 또한 카드 디자인을 활용해 메뉴, 예약 등 다양한 레이아웃에서 내용을 담아 가시성을 높였습니다.

__어드민 화면__

<img src="https://user-images.githubusercontent.com/85723094/135089570-d4fb3142-9a91-403f-813d-d36c5d52c2a3.png" alt="어드민 화면 주문관리">

음식점을 등록한 운영자가 주문관리를 하기 위한 화면입니다. 어드민 화면은 상단바를 없애고 햄버거 버튼을 사용해 아코디언 내비게이션을 이용할 수 있고, 클라이언트 화면과 마찬가지로 로고를 삽입하였습니다. 
좌측 aside에 내비게이션을 배치하고 나머지 공간을 전부 content 영역으로 활용해 실질적으로 운영자가 확인하고 작성해야할 부분의 영역 비율을 늘려 사용자 편의성을 고려하였습니다. 클라이언트 화면과 마찬가지로 배경은 화이트, 포인트 색상은 파란색 계통의  #52ACFF 색상을 사용했습니다. 콘텐츠 영역은 카드 디자인을 활용해 심미성을 높이고 그림자 효과로 시선이 집중되도록 디자인하였습니다.

<!--<h1 id="DB">DB설계</h1>
예시.
<h1 id="backend">백엔드</h1>
예시.
-->
<h1 id="frontend">프론트엔드</h1>

 #### 1. Vuetify.js 프레임워크를 활용한 모던웹 퍼블리싱

  - 웹 UI 디자인에 Vuetify UI 컴포넌트 활용

  - Vue.js의 Template 문법을 활용하여 v-html로 화면 퍼블리싱

  - Grid 시스템을 활용하여 반응형 웹 구현

  - 기본적으로 제공하는 Script를 프로젝트에 맞게 바꾸고 추가적인 기능 구현

  - CSS를 추가적으로 활용하여 Vuetify가 제공하는 API Props에 없는 속성 구현

#### 2. Vue Router를 활용한 컴포넌트 모듈화 

  -  일반 유저와 음식점 관리 페이지를 구분하는 매핑 구현
 
  -  각 페이지들을 Router의 path에 맞춰 컴포넌트 모듈화

#### 3. Vuex 상태 관리 구현

  - Vuex를 이용하여 비동기 처리 구현
 
  - Store 모듈화 구현

  - DB에 저장된 정보들을 axios 통신하여 state에 반영

<h1 id="DB">DB 설계</h1>

<img src="https://user-images.githubusercontent.com/87686258/135237298-fa61681e-3afa-4ad2-95f0-bc7e09b21762.png" alt = "DB 설계도">

DB 설계 시 작성한 워크플로우입니다.

#### 1. Sequelize

- 기존의 SQL문법 대신 JavaScript 문법을 사용해서 데이터베이스를 쉽게 사용
- /back/models 폴더에 각 테이블을 모듈화 후 index.js에서 exports 함
- /back/app.js 폴더의 index.js를 require 해서 데이터 베이스 생성
- /back/config 폴더의 index.js에서 데이터베이스 종류와 이름 사용자 등을 설정

```javascript
require("dotenv").config();
module.exports = {
  development: {
    username: "root",
    password: process.env.SEQUELIZE_PASSWD,
    database: "market",
    host: "127.0.0.1",
    dialect: "mysql",
    timezone: "+09:00",
  },
  ...
};
```


<h1 id="backend">백엔드</h1>

#### 1. Morgan

- 로그를 위해 클라이언트와 서버의 응답 사이에 존재하는 미들웨어


#### 2. dotenv

- .env 파일을 읽어서 환경변수를 설정하기 위한 모듈


#### 3. 포트 설정

- .env 파일에 포트 설정 후 서버의 포트를 설정함

#### 4. cors

- 프론트엔드와 백엔드의 포트가 다르기 때문에 외부에서 접근이 가능하도록 설정
- 프로젝트 진행 시에는 프론트엔드 쪽 포트 번호가 8080이기 때문에 8080 포트를 허용하는 설정을 함

#### 5. Passport

- 로그인 구현을 위해서 사용하였고, passport의 기능 중 이 프로젝트에서는 passport-local을 사용함
- Passport와 함께 비밀번호를 데이터베이스에 저장할 때 암호화를 위해서 bcrypt를 사용함
- 로그인 성공 여부를 알리기 위해 connect-flash 모듈 사용

#### 6. Express

- Node.js의 웹 프레임워크인 Express를 사용하였고, 효율적인 통신을 위해서 Request API 사용함
- 보안성과 확장성을 확보할 수 있고, Node.js를 간결하게 사용할 수 있다는 점에서 프로젝트에 활용
- 세션에 로그인 정보를 저장하기 위해 express-session 사용
- 쿠키 파싱을 위해 cookie-parser 사용하였고 .env 파일에서 COOKIE_SECRET 설정함
- express.urlencoded({ extended: ture })를 설정해 Object를 상속받게 하였음

#### 7. MUITER

- 이미지 업로드를 위한 모듈
- FS모듈로 해당 폴더의 유무를 확인하고 없으면 각 폴더를 생성함
- 각 기능에 맞게 이미지 저장 위치를 정할 수 있도록 설정

```javascript
const multer = require("multer");
const fs = require("fs");
fs.readdir ("./public/images", (err, data) => {
  if(err){
    fs.mkdirSync("./public/images");
  }
});
module.exports = function(filepath) {
  fs.readdir(filepath, (err, data) => {
    if (err)
      try{
        fs.mkdirSync(filepath);
      }catch(){}
  });
  let storage = multer.diskStorage({
    destination: function (req, file, cb){
      cb(null, filepath);
    },
    filename: function (req, file, cb){
      let newFileName = new Date().valueOf() + "_" + file.originalname
      cb(null, newFileName);
    },
  });
  return (upload = multer ({ storage: storage });
};
```



