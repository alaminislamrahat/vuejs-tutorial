import { createRouter, createWebHistory } from "vue-router";
import HomeVue from "@/views/HomeVue.vue";
import JobsView from "@/views/JobsView.vue";

const router = createRouter({
    history : createWebHistory(import.meta.env.BASE_URL),
    routes : [
        {
            path : '/',
            name : 'Home',
            component : HomeVue
        },
        {
            path : '/jobs',
            name : 'Jobs',
            component : JobsView
        },
    ]
})

export default router;