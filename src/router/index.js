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
    {path: '/manual-quiz', component: () => import("../views/manual_quiz.vue")},
    {path: '/excel-upload', component: () => import("../views/excel_quiz.vue")},
  ],
});

export default router;
