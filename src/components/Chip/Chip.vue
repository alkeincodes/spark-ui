<template>
		<div v-if="showChip" class="sp-chip" :class="bgColor">
			<slot name="image"></slot>
			<span>{{text}}</span>
			<button v-if="closable" class="close" @click="showChip = false">&times;</button>
		</div>
</template>

<script>
	export default {
		name: 'SpChip',
		props: {
			image: {
				type: String,
				default: ''
			},
			text: {
				type: String,
				required: true
			},
			closable: {
				type: Boolean,
				default: false
			},
			color: {
				type: String,
				default: ''
			}
		},
		data() {
			return {
				bgColor: '',
				showChip: true
			}
		},
		mounted() {
			let chip_color = `sp-chip-${this.color}`
			this.bgColor = chip_color
		}
	}
</script>