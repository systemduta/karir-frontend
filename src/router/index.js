import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import VacancyView from "../views/VacancyView.vue";
import ApplyView from "../views/ApplyView.vue";

import LoginView from "../views/Auth/LoginView.vue";
import ForgotPasswordView from "../views/Auth/ForgotPasswordView.vue";
import ResetPasswordView from "../views/Auth/ResetPasswordView.vue";

import DashboardView from "../views/Dashboard/DashboardView.vue";

import DetailView from "../views/Dashboard/Applicants/DetailView.vue";

import CreateView from "../views/Dashboard/Jobs/CreateView.vue";
import EditView from "../views/Dashboard/Jobs/EditView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
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
    path: "/forgot-password",
    name: "password.forgot",
    component: ForgotPasswordView,
  },
  {
    path: "/reset-password",
    name: "password.reset",
    component: ResetPasswordView,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: DashboardView,
  },
  {
    path: "/dashboard/applicants/detail",
    name: "applicants.detail",
    component: DetailView,
  },
  {
    path: "/dashboard/jobs/create",
    name: "jobs.create",
    component: CreateView,
  },
  {
    path: "/dashboard/jobs/edit",
    name: "jobs.edit",
    component: EditView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
