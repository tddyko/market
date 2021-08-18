import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/market",
    name: "DashBoard",
    component: () =>
      import(/* webpackChunkName: "DashBoard" */ "../views/market/DashBoard.vue"),
  },
  {
    path: "/market/order",
    name: "Order",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Order" */ "../views/market/Order.vue"),
  },
  {
    path: "/market/order/test",
    name: "test",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Order" */ "../views/market/OrderReviewManagement.vue"),
  },
  {
    path: "/market/basic",
    name: "basic",
    component: () =>
      import(/* webpackChunkName: "Reservation" */ "@/views/market/기본정보.vue"),
  },
  {
    path: "/market/basic2",
    name: "basic",
    component: () =>
      import(/* webpackChunkName: "Reservation" */ "@/views/market/기본정보2.vue"),
  },
  {
    path: "/market/order2",
    name: "order2",
    component: () =>
      import(/* webpackChunkName: "order2" */ "@/views/market/주문내역.vue"),
  },
  {
    path: "/market/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "order2" */ "@/views/market/로그인.vue"),
  },
  {
    path:'/market/reservate',
      component: () => import(
        /* webpackChunkName: "layouts-reservate0" */
        '@/layouts/reservate/view'
        ),
    children: [
        {
            path:'reservate1',
            name:'reservate1',
            component: () => import(/* webpackChunkName: "views-reservate1" */
            '@/views/market/reservate/리뷰관리')

        },
        {
            path:'reservate2',
            name:'reservate2',
            component: () => import(/* webpackChunkName: "views-reservate2" */
            '@/views/market/reservate/예약내역')

        },

    ]
},
{
  path:'/market/defaultinfo',
  name:'dafaultinfo',
  component: () => import(/* webpackChunkName: "views-reservate2" */
  '@/views/market/DefaultInfo.vue')
}
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
