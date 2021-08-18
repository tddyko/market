import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
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
          import(/* webpackChunkName: "Dashboard" */ "@/views/market/DashBoard"),
      },
      {
        path: "/market/order",
        name: "Order",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "Order" */ "@/views/market/order/Order.vue"),
      },
      {
        path: "/market/order/review",
        name: "OrderReview",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "OrderReview" */ "@/views/market/order/OrderReview"),
      },
      {
        path: "/market/reservation",
        name: "Reservation",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "Reservation" */ "@/views/market/reservation/Reservation"),
      },
      {
        path: "/market/reservation/review",
        name: "ReservationReview",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "ReservationReview" */ "@/views/market/reservation/ReservationReview"),
      },
      {
        path: "/market/info",
        name: "Information",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "Information" */ "@/views/market/info/Info"),
      },
    ]
  },
  {
    path: "/login",
    component: () =>
      import(/* webpackChunkName: "LoginLayout" */ "@/layouts/login/Index"),
    children: [
      {
        path: '/login',
        name: 'login',
        component: () => import('@/views/market/login/login')
      }
    ]
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
