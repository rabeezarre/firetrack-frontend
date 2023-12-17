import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/HomePage.vue';
import Login from './views/LoginPage.vue';
import Map from './views/MapPage.vue';
import Profile from './views/ProfilePage.vue';

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
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
