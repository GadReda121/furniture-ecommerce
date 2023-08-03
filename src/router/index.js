import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/Products",
      name: "Products",
      component: () => import("../views/Products.vue"),
    },
    {
      path: "/ContactUs",
      name: "ContactUs",
      component: () => import("../views/ContactUs.vue"),
    },
  ],
});

export default router;
