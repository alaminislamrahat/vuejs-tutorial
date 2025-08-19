import { createRouter, createWebHistory } from "vue-router";
import HomeVue from "@/views/HomeVue.vue";
import JobsView from "@/views/JobsView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import JobView from "@/views/JobView.vue";
import AddJobView from "@/views/AddJobView.vue";

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
        {
            path : '/jobs/add',
            name : 'Add-Jobs',
            component : AddJobView
        },
        {
            path : '/jobs/:id',
            name : 'Job',
            component : JobView
        },
        {
            path : '/:catchAll(.*)',
            name : 'Not-found',
            component : NotFoundView
        },
    ]
})

export default router;