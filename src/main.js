import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import locale from 'element-plus/lib/locale/lang/zh-cn'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
const app =  createApp(App)
app.use(router)
app.use(ElementPlus, { locale })
app.use(ElementPlus)

app.mount('#app')
