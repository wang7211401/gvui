import { createApp } from 'vue'
import "./lib/gvui.scss"
import './index.scss'
import App from './App.vue'
import router from "./router"
import "./lib/svg.js"

const app = createApp(App)
app.use(router)
app.mount('#app')

