import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import VacancyView from "../views/VacancyView.vue";
import ApplyView from "../views/ApplyView.vue";

import LoginView from "../views/Auth/LoginView.vue";
import ForgotPasswordView from "../views/Auth/ForgotPasswordView.vue";
import ResetPasswordView from "../views/Auth/ResetPasswordView.vue";

import DashboardView from "../views/Dashboard/DashboardView.vue";
import ChangePasswordView from "../views/Dashboard/ChangePasswordView.vue";

import ApplicantDetailView from "../views/Dashboard/Applicants/DetailView.vue";

import JobCreateView from "../views/Dashboard/Jobs/CreateView.vue";
import JobEditView from "../views/Dashboard/Jobs/EditView.vue";

const routes = [
  {
    path: "/",
    component: HomeView,
  },
  {
    path: "/vacancies/:id",
    component: VacancyView,
  },
  {
    path: "/apply",
    component: ApplyView,
  },
  {
    path: "/login",
    component: LoginView,
  },
  {
    path: "/forgot-password",
    component: ForgotPasswordView,
  },
  {
    path: "/reset-password",
    component: ResetPasswordView,
  },
  {
    path: "/dashboard",
    component: DashboardView,
  },
  {
    path: "/dashboard/change-password",
    component: ChangePasswordView,
  },
  {
    path: "/dashboard/applicants/detail",
    component: ApplicantDetailView,
  },
  {
    path: "/dashboard/jobs/create",
    component: JobCreateView,
  },
  {
    path: "/dashboard/jobs/edit",
    component: JobEditView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
