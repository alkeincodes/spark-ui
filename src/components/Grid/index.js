
import SparkRow from './Row.vue'
import SparkColumn from './Column.vue'

export default Vue => {
	Vue.component(SparkRow.name, SparkRow),
	Vue.component(SparkColumn.name, SparkColumn)
}