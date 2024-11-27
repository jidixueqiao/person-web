import { RouteRecordRaw } from "vue-router";

// 模块页面路由
const moduleRoutes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: () => import("../pages/home.vue"),
  },
];

// 框架通用页面路由
const commonRoutes: Array<RouteRecordRaw> = [
  {
    path: "/:pathMatch(.*)",
    component: () => import("../pages/common/404.vue"),
  },
];

const routes: Array<RouteRecordRaw> = [...moduleRoutes, ...commonRoutes];

export default routes;
