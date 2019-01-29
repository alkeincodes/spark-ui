import Vue from 'vue'
import VueRouter from 'vue-router'
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

// COMPONENTS
import Home from './components/Home'
import Documentation from './components/Documentation'
import Alert from './components/Documentation/Alert'
import Installation from './components/Documentation/Installation'

library.add(faQuestionCircle)
library.add(faExclamationTriangle)
library.add(faExclamationCircle)
library.add(faCheckCircle)
library.add(faAngleRight)
library.add(faAngleDoubleRight)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(Spark)
Vue.use(VueRouter)

const routes = [
	{ path: '/', component: Home },
	{ path: '/documentation', component: Documentation, 
	  children: [
	  	{ path: '', component: Installation },
	  	{ path: 'alert', component: Alert }
	  ]
	}
]

const router = new VueRouter({
	mode: 'history',
	routes
})

Vue.config.productionTip = false

new Vue({
	router,
  render: h => h(App),
}).$mount('#app')
