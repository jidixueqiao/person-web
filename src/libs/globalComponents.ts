// components
import { App, Component } from "vue";
import AppTitle from "../components/appTitle/index.vue";

const components = [AppTitle];

export function install(app: App) {
  components.forEach((component: Component) => {
    const appName: string = component.name || "";
    // 如果没有name属性，则不注册
    if (!appName) return;
    app.component(appName, component);
  });
}

export default {
  install,
};
