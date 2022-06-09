import { createApp } from "vue";
import VueSweetalert2 from "vue-sweetalert2";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import "datatables.net-bs5/css/dataTables.bootstrap5.min.css";
import "sweetalert2/dist/sweetalert2.min.css";

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
  .then(() =>
    createApp(App).use(router).use(store).use(VueSweetalert2).mount("#app")
  )
  .catch((error) => console.log(error));
