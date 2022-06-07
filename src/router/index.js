import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import VacancyView from "../views/VacancyView.vue";
import ApplyView from "../views/ApplyView.vue";

import LoginView from "../views/Auth/LoginView.vue";
import ForgotPasswordView from "../views/Auth/ForgotPasswordView.vue";
import ResetPasswordView from "../views/Auth/ResetPasswordView.vue";

import DashboardView from "../views/Dashboard/DashboardView.vue";
import ChangePasswordView from "../views/Dashboard/ChangePasswordView.vue";

import ApplicantsView from "../views/Dashboard/Applicants/ApplicantsView.vue";
import ApplicantDetailView from "../views/Dashboard/Applicants/DetailView.vue";

import JobsView from "../views/Dashboard/Jobs/JobsView.vue";
import JobCreateView from "../views/Dashboard/Jobs/CreateView.vue";
import JobEditView from "../views/Dashboard/Jobs/EditView.vue";

import store from "../store";

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
    path: "/apply/:id",
    component: ApplyView,
  },
  {
    path: "/login",
    component: LoginView,
    meta: {
      guest: true,
    },
  },
  {
    path: "/forgot-password",
    component: ForgotPasswordView,
    meta: {
      guest: true,
    },
  },
  {
    path: "/reset-password",
    component: ResetPasswordView,
    meta: {
      guest: true,
    },
  },
  {
    path: "/dashboard",
    component: DashboardView,
    meta: {
      auth: true,
    },
  },
  {
    path: "/dashboard/change-password",
    component: ChangePasswordView,
    meta: {
      auth: true,
    },
  },
  {
    path: "/dashboard/applicants/:category",
    component: ApplicantsView,
    meta: {
      auth: true,
    },
  },
  {
    path: "/dashboard/applicants/detail/:id",
    component: ApplicantDetailView,
    meta: {
      auth: true,
    },
  },
  {
    path: "/dashboard/jobs",
    component: JobsView,
    meta: {
      auth: true,
    },
  },
  {
    path: "/dashboard/jobs/create",
    component: JobCreateView,
    meta: {
      auth: true,
    },
  },
  {
    path: "/dashboard/jobs/edit/:id",
    component: JobEditView,
    meta: {
      auth: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const isLoggedIn = store.getters.isLoggedIn;
  if (to.meta.auth) {
    if (isLoggedIn) next();
    else next("/login");
  } else if (to.meta.guest) {
    if (!isLoggedIn) next();
    else next("/dashboard");
  } else {
    next();
  }
});

export default router;
