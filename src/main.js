import Vue from 'vue'
import App from './App.vue'
import '../public/css/app.css'
import Spark from './index'

Vue.use(Spark)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
