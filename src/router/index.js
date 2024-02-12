import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', component: () => import("../views/Land.vue")},
    {path: '/home', component: () => import("../views/Home.vue")},
    {path: '/sign-in', component: () => import("../views/Sign.vue")},
    {path: '/feed', component: () => import("../views/Feed.vue")},
    {path: '/teacher', component: () => import("../views/Teacher.vue")},
    {path: '/sign-in-teacher', component: () => import("../views/sign_teacher.vue")},
  ],
});

export default router;
