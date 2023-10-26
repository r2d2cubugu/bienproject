import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/HomeView.vue"
import Login from "./views/LoginView.vue"
import Register from "./views/RegisterView.vue"
import Test from "./views/TestPage.vue"
// import UserProfile from "./views/userProfile/_name.vue"
import User from "./views/UserView.vue"
import Contact from "./views/ContactView.vue"

const routes = [
    {
        path:"/",
        name:"Home",
        component:Home,
        
    },
    {
        path:"/contact",
        name:"Contact",
        component:Contact,
        
    },
    {
        path:"/myprofile",
        name:"Userprofile",
        component:User,
        
    },
    {
        path:"/test",
        name:"Test",
        component:Test,
        
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