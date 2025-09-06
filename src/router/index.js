import { createRouter, createWebHistory } from "vue-router";

const routers = [{
    path: "/",
    alias: "/home",
    component: () => import('../views/HomeView.vue')
    
},
{
    path: "/products",
    name: "product",
    component: () => import('../views/ProductsView.vue')
},
{
    path: "/cart",
    name: "cart",
    component: () => import('../views/CartView.vue')
},
{
    path: "/about",
    name: "about",
    component: () => import('../views/AboutView.vue')
},
{
    path: "/login",
    name: "login",
    component: () => import('../views/Login.vue')
},
{
    path: "/product/:id",
    name: "singleproduct",
    component: () => import('../views/ProductDetailsView.vue')
}
]
const routes = createRouter({
    history: createWebHistory(),
    routes: routers
})
export default routes