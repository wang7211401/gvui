import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {createWebHashHistory,createRouter} from 'vue-router'
import Main from "./components/Main.vue"
import Main2 from "./components/Main2.vue"

const history = createWebHashHistory()
const router = createRouter({
    history,
    routes: [
        { path: '/', component: Main },
        {path: '/main',component:Main2}
    ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')

