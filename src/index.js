import * as SparkComponents from './components'
import '../public/css/app.css'

const Spark = {
	/* eslint-disable-next-line */
  install (Vue, options = {}) {
    Object.values(SparkComponents).forEach(SparkComponent => {
      Vue.use(SparkComponent)
    })
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Spark)
}

export default Spark