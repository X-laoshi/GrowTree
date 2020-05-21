import Vue from "vue";
import VueRouter from "vue-router";

// 引入组件
import Auth from "./components/Auth.vue";
import Login from "./components/Login.vue";

// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter);

const routes = [
    {
        path:"/Lofin",
        component: Login
    },
    {
        path: "/Auth",
        component: Auth
    }
]

var router =  new VueRouter({
    routes
})

export default router;
