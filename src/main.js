import { createApp } from "vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

import "./index.css";

import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import { setHeaderToken } from "./utils/auth";

const token = localStorage.getItem("token");
if (token) {
  setHeaderToken(token);
}

store
  .dispatch("getUser", token)
  .then(() => createApp(App).use(router).use(store).mount("#app"))
  .catch((error) => console.log(error));
