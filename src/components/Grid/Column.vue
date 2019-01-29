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
				switch(this.colW) {
					case 12:
					return 'sp-col-12'
					break

					case 11:
					return 'sp-col-11'
					break

					case 10:
					return 'sp-col-10'
					break

					case 9:
					return 'sp-col-9'
					break

					case 8:
					return 'sp-col-8'
					break

					case 7:
					return 'sp-col-7'
					break

					case 6:
					return 'sp-col-6'
					break

					case 4:
					return 'sp-col-4'
					break

					case 3:
					return 'sp-col-3'
					break

					case 2:
					return 'sp-col-2'
					break

					case 1:
					return 'sp-col-1'
					break

					default:
				}
			}
		},
		data() {
			return {
				
			}
		}
	}
</script>