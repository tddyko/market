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
  <li><a href="#DB">DB설계</a></li>
  <li><a href="#backend">백엔드</a></li>
  <li><a href="#frontend">프론트엔드</a></li>
</ol>

<h1 id="design">디자인</h1>

__클라이언트 화면__

<img src="https://user-images.githubusercontent.com/85723094/135088887-209b8720-ec92-412f-8d24-ffa95ea35110.png">

클라이언트, 즉 배달앱 이용자가 로그인 했을 때 보이는 첫 화면입니다. 클라이언트 화면의 공통 컨셉은 화이트(#FFFFFF)를 배경으로 포인트 색상은 파란색 계통의 #52ACFF 색상을 사용했습니다.
"No Wait"이라는 웹사이트 명칭을 활용해 상단바에 로고를 만들어 삽입하였습니다. 또한 탭을 활용해 사용자가 쉽게 여러 분류의 음식점들을 한눈에 찾아볼 수 있도록 만들었고, 음식점의 선호도 및 리뷰 수를 한눈에 볼 수 있도록 했습니다. 또한 카드 디자인을 활용해 메뉴, 예약 등 다양한 레이아웃에서 내용을 담아 가시성을 높였습니다.

__어드민 화면__

<img src="https://user-images.githubusercontent.com/85723094/135089570-d4fb3142-9a91-403f-813d-d36c5d52c2a3.png">

음식점을 등록한 운영자가 주문관리를 하기 위한 화면입니다. 어드민 화면은 상단바를 없애고 햄버거 버튼을 사용해 아코디언 내비게이션을 이용할 수 있고, 클라이언트 화면과 마찬가지로 로고를 삽입하였습니다. 
좌측 aside에 내비게이션을 배치하고 나머지 공간을 전부 content 영역으로 활용해 실질적으로 운영자가 확인하고 작성해야할 부분의 영역 비율을 늘려 사용자 편의성을 고려하였습니다. 클라이언트 화면과 마찬가지로 배경은 화이트, 포인트 색상은 파란색 계통의  #52ACFF 색상을 사용했습니다. 콘텐츠 영역은 카드 디자인을 활용해 심미성을 높이고 그림자 효과로 시선이 집중되도록 디자인하였습니다.

<h1 id="DB">DB설계</h1>
쓸내용 이지롱
<h1 id="backend">백엔드</h1>
쓸내용 이지롱
<h1 id="frontend">프론트엔드</h1>

1. #### Vuex 상태 관리 구현

  - Vuex를 이용하여 비동기 처리 구현
 
  - Store 모듈화 구현

  - db에 저장된 정보들을 axios 통신하여 state에 반영

2. #### Vue Router를 활용한 컴포넌트 모듈화 

  -  일반 유저와 음식점 관리 페이지를 구분하는 매핑 구현
 
  -  각 페이지들을 Router의 path에 맞춰 컴포넌트 모듈화

3. #### Vuetify.js 프레임워크를 활용한 모던웹 퍼블리싱

  - 웹 디자인 당시 Vuetify 공식 문서 를 참조하여 화면 구현
