import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: "/",
    name: "Home",
    meta: {
      title: "首页",
      keepAlive: true,
    },
    component: () => import("../views/Home/index.vue"),
  },
  {
    path: "/login",
    name: "Login",
    meta: {
      title: "登录",
      keepAlive: true,
    },
    component: () => import("../views/Login/index.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
