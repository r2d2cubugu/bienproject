import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/HomeView.vue"
import Login from "./views/LoginView.vue"
import Register from "./views/RegisterView.vue"

const routes = [
    {
        path:"/",
        name:"Home",
        component:Home,
        
    },
    {
        path:"/login",
        name:"Login",
        component:Login,
        meta:{
            showHeader:false
        }
    },
    {
        path:"/register",
        name:"Register",
        component:Register,
        meta:{
            showHeader:false
        }
    },
]

const router = createRouter({
    routes,
    history:createWebHistory()
})


export default router