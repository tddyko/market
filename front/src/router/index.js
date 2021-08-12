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
          import(/* webpackChunkName: "Order" */ "@/views/market/Order.vue"),
      },
      {
        path: "/market/reservation",
        name: "Reservation",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "Reservation" */ "@/views/market/Reservation"),
      },
      {
        path: "/market/basic",
        name: "basic",
        component: () =>
          import(/* webpackChunkName: "기본정보" */ "@/views/market/기본정보.vue"),
      },
      {
        path: "/market/basic2",
        name: "basic",
        component: () =>
          import(/* webpackChunkName: "기본정보2" */ "@/views/market/기본정보2.vue"),
      },
      {
        path: "/market/order2",
        name: "order2",
        component: () =>
          import(/* webpackChunkName: "주문내역" */ "@/views/market/주문내역.vue"),
      },
      {
        path:'/market/reservation1',
        name:'reservation1',
        component: () => import(/* webpackChunkName: "리뷰관리" */
          '@/views/market/reservation/리뷰관리')

      },
      {
        path:'/market/reservation2',
        name:'reservation2',
        component: () => import(/* webpackChunkName: "예약내역" */
          '@/views/market/reservation/예약내역')

      }
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
