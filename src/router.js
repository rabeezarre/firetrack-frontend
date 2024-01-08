import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/HomePage.vue';
import Login from './views/LoginPage.vue';
import Map from './views/MapPage.vue';
import Profile from './views/ProfilePage.vue';
import Docs from "./views/DocumentationPage.vue";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/map',
        name: 'Map',
        component: Map
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile
    },
    {
        path: '/docs',
        name: 'Docs',
        component: Docs
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

// const router = createRouter({
//     history: createWebHistory(),
//     routes: [...],
// });


// const router = VueRouter.createRouter({
//     // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
//     history: VueRouter.createWebHashHistory(),
//     routes, // short for `routes: routes`
// })

export default router;
