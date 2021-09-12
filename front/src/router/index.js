import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () =>
      import(/* webpackChunkName: "market_layout" */ "@/layouts/main/Index"),
    children: [
      {
        path: "/",
        name: "Main",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(
            /* webpackChunkName: "Dashboard" */ "@/views/main/maincontent/TabItems"
          ),
      },
      {
        path: "/marketdetail",
        name: "MarketDetail",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(
            /* webpackChunkName: "OrderList" */ "@/views/main/marketdetail/main/MarketDetail"
          ),
      },
      {
        path: "/mypage",
        name: "mypage",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(
            /* webpackChunkName: "OrderList" */ "@/views/main/mypage/my_page_index"
            ),
      },
    ],
  },
  {
    path: "/market",
    component: () =>
      import(/* webpackChunkName: "market_layout" */ "@/layouts/market/Index"),
    children: [
      {
        path: "/market",
        name: "Dashboard",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(
            /* webpackChunkName: "Dashboard" */ "@/views/market/DashBoard/DashBoard"
          ),
      },
      {
        path: "/market/order",
        name: "Order",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(
            /* webpackChunkName: "Order" */ "@/views/market/order/Order_history/Order.vue"
          ),
      },
      {
        path: "/market/order/review",
        name: "OrderReview",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(
            /* webpackChunkName: "OrderReview" */ "@/views/market/order/Order-review/OrderIndex"
          ),
      },
      {
        path: "/market/reservation",
        name: "Reservation",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(
            /* webpackChunkName: "Reservation" */ "@/views/market/reservation/Reservation-history/Reservation-history-index"
          ),
      },
      {
        path: "/market/reservation/review",
        name: "ReservationReview",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(
            /* webpackChunkName: "ReservationReview" */ "@/views/market/reservation/Reservation-review/Reservation-Review-index"
          ),
      },
      {
        path: "/market/info",
        name: "Information",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(
            /* webpackChunkName: "Information" */ "@/views/market/info/Info-index"
          ),
      },
      {
        path: "/market/menu",
        name: "MenuCards",
        component: () =>
          import(/* webpackChunkName: "LoginLayout" */ "@/views/market/info/option/Option_index"),
      },
    ],
  },
  {
    path: "/login",
    component: () =>
      import(/* webpackChunkName: "LoginLayout" */ "@/layouts/login/Index"),
    children: [
      {
        path: "/login",
        name: "login",
        component: () => import("@/views/login/login"),
      },
    ],
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
