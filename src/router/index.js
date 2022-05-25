import { createRouter, createWebHashHistory } from 'vue-router';

import A from '../view/A.vue'
import B from '../view/B.vue'
const routes = [
    {
        path: '/',
        redirect: '/a'
    },
    {
        name: 'a',
        path: '/a',
        component: A
    },
    {
        name: 'b',
        path: '/b',
        component:B
    },
    
];

const routers = createRouter({
    routes,
    history: createWebHashHistory()
})

export default routers
