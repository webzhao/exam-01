import Vue from 'vue'
import Clair from 'clair'
import 'clair/dist/clair.css'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(Clair)

new Vue({
  render: h => h(App)
}).$mount('#app')
