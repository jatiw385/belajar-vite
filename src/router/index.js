import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import Product from "../components/product.vue";

const routes = [
    {path : '/', name : 'Home', component : Home},
    {path : '/beauty', name : 'Beauty', component : Product}
];

const router = createRouter({
    history : createWebHistory(),
    routes,
});

export default router;