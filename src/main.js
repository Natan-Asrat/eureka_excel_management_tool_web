import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import { createRouter, createWebHistory } from 'vue-router'

const routes = [

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

app = createApp(App)
app.mount('#app')
