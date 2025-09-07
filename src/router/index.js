import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "../stores/authStore";
const routers = [{
    path: "/",
    alias: "/home",
    name:"home",
    component: () => import('../views/HomeView.vue')
    
},
{
    path: "/products",
    name: "product",
    component: () => import('../views/ProductsView.vue'),
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
    },
    {
        path: "/category/:cat",
        name: "category",
        component:()=>import('../views/CategoryView.vue')
}
]
const routes = createRouter({
    history: createWebHistory(),
    routes: routers
})
routes.beforeEach((to, from, next) => {
    const auth = useAuthStore();
    const protectedRoutes=['cart','products','singleproduct','category']
    if (protectedRoutes.includes(to.name) && !auth.isAuthenticated) {
        next('/login')
    } else {
        next();
    }
})
export default routes
