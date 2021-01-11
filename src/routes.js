import Vue from "vue"
import VueRoters from "vue-router"
import Home from "./views/home"
import Products from "./views/products"
import History from "./views/history"
import Login from "./views/login"
import notFound from "./views/404"

Vue.use(VueRoters)

const mainRoters = new VueRoters({
    mode: 'history',
    routes:
    [
        {
            path:"/",
            redirect: '/login'
        },
        {
            path:"/login",
            name:"login",
            component: Login
        },
        {
            path:"/home",
            name:"home",
            component: Home
        },
        {
            path:"/products",
            name:"products",
            component: Products
        },
        {
            path:"/history",
            name:"history",
            component: History
        },
        {
            path:"/*",
            name:"notFound",
            component: notFound
        },
    ]
})
export default mainRoters