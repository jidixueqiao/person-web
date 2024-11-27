import { createApp } from "vue";
import App from "./App.vue";

// 引入路由
import router from "./router";

// 引入全局样式
import "./assets/styles/index.scss";

// 引入需要全局加载的组件
import globalComponents from "./libs/globalComponents";

// 等宽字体
import "vfonts/FiraCode.css";

const app = createApp(App);
app.use(router);
app.use(globalComponents);

app.mount("#app");
