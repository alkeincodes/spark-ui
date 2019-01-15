import Vue from 'vue'
import App from './App.vue'
import '../public/css/app.css'
import Spark from './index'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faQuestionCircle)
library.add(faExclamationTriangle)
library.add(faExclamationCircle)
library.add(faCheckCircle)
library.add(faAngleRight)
library.add(faAngleDoubleRight)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(Spark)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
