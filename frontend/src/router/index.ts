import { createRouter, createWebHistory } from "vue-router";
import FeedView from "../views/FeedView.vue";
import LoginView from "@/views/LoginView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "feed",
      component: FeedView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView
    },
  ],
});

export default router;
