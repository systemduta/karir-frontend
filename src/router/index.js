import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import VacancyView from "../views/VacancyView.vue";
import ApplyView from "../views/ApplyView.vue";
import LoginView from "../views/Auth/LoginView.vue";
import DashboardView from "../views/Dashboard/DashboardView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    // path: "/vacancy/{id}",
    path: "/vacancy",
    name: "vacancy",
    component: VacancyView,
  },
  {
    path: "/apply",
    name: "apply",
    component: ApplyView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: DashboardView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
