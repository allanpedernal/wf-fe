import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
import DashboardView from "../views/DashboardView.vue";
import WeatherForecast from "../views/WeatherForecastView.vue";

import { authGuard } from '@auth0/auth0-vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: 'login',
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
      beforeEnter: authGuard
    },
    {
      path: "/weather/forecast/:city",
      name: "weather-forecast",
      component: WeatherForecast,
      beforeEnter: authGuard
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: '/dashboard',
    }
  ],
});

export default router;
