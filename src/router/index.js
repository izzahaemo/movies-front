import { createRouter, createWebHistory } from "vue-router";

import Home from "../components/Home.vue";
import Login from "../components/Login.vue";
import Register from "../components/Register.vue";
import ForgotPassword from "../components/ForgotPassword.vue";
import ResetPassword from "../components/ResetPassword.vue";

const routes = [
    { path: "/", name: "Home", component: Home },
    {
        path: "/login",
        name: "Login",
        component: Login,
    },
    {
        path: "/register",
        name: "Register",
        component: Register,
    },
    {
        path: "/forgot_password",
        name: "ForgotPassword",
        component: ForgotPassword,
    },
    {
        path: "/password-reset/:token",
        name: "ResetPassword",
        component: ResetPassword,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
