import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './styles/styles.scss'
// import 'bootstrap';  //Esto importa el JS del Bootstrap.
createApp(App)
    .use(store)
    .use(router)
    .mount('#app')
