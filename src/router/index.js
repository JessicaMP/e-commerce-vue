import Vue from "vue";
import Router from "vue-router";
import Home from "../pages/index";
import Login from "../components/Login.vue";
import ShoppingCart from "../pages/shoppingCart.vue";

Vue.use(Router)
const router = new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home,
        },
        {
            path: "/Login",
            name: "Login",
            component: Login,
        },
        {
            path: '/ShoppingCart',
            name: 'ShoppingCart',
            component: ShoppingCart,
        }
    ]
});

export default router;