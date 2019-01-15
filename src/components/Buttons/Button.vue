<template>
	<div>
		<button :class="className" @click="clickHandler"><slot/></button>
	</div>
</template>

<script>
	export default {
		name: 'SpButton',
		data() {
			return {
				className: ''
			}
		},
		props: {
			type: {
				type: String,
				required: true
			},
			size: {
				type: String,
				default: 'small'
			}
		},
		mounted() {
			this.className = `sp-btn-${this.type} ${this.size}`
			
		},
		methods: {
			clickHandler(e) {
				this.$emit('click', e)
			}
		}
	}
</script>