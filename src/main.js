import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { store } from "./store"
import router from "./router"

import axios from 'axios'
import VueAxios from 'vue-axios'
axios.defaults.baseURL = 'http://127.0.0.1:4523/mock/606691/'

import App from './App.vue'

const app = createApp(App)

app.use(ElementPlus)
app.use(store)
app.use(router)
app.use(VueAxios,axios)
app.mount('#app')