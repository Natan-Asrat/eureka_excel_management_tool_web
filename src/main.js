import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Manual from "./components/Manual.vue";
import Home from "./components/Home.vue";
import Contact from "./components/Contact.vue"
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {path: "/", component: Home},
    {path: "/manual", component: Manual},
    {path: "/contact", component: Contact}

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')
