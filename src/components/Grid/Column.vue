<template>
	<div :class="colStyle">
		<slot />
	</div>
</template>

<script>
	export default {
		name: 'SpColumn',
		props: {
			colW: {
				type: Number,
				required: true
			}
		},
		computed: {
			colStyle() {
				if(this.colW == 12) {
					return 'sp-col-12'
				} else if(this.colW == 6) {
					return 'sp-col-6'
				} else {
					return
				}
			}
		},
		data() {
			return {
				
			}
		}
	}
</script>