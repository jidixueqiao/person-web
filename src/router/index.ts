import { createRouter, createWebHashHistory } from "vue-router";

// 路由数据
import routes from "./routes";

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
