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
    path: '/market/defaultinfo',
    name: 'dafaultinfo',
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
