<template>
	<div>
		<button :class="className" v-on="listeners"><slot/></button>
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
		computed: {
				listeners() {
					return {
						...this.$listeners,
						click: (event) => this.clickButton(event),
						blur: (event) => this.blurButton(event),
						mouseover: (event) => this.mouseover(event),
						mouseout: (event) => this.mouseout(event)
					}
				},
		},
		mounted() {
			this.className = `sp-btn-${this.type} ${this.size}`
			
		},
		methods: {
			clickButton(e) {
				this.$emit('click', e)
			},
			blurButton(e) {
				this.$emit('blur', e)
			},
			mouseover(e) {
				this.$emit('mouseover', e)
			},
			mouseout(e) {
				this.$emit('mouseout', e)
			}
		}
	}
</script>