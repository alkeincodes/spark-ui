<template>
	<div>
		<button :class="className"><slot/></button>
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
			if(this.type == 'danger') {
				this.className = 'sp-btn-danger '+this.size
			} else if(this.type == 'primary') {
				this.className = 'sp-btn-primary '+this.size
			} else if(this.type == 'warning') {
				this.className = 'sp-btn-warning '+this.size
			} else if(this.type == 'success') {
				this.className = 'sp-btn-success '+this.size
			} else if(this.type == 'outline') {
				this.className = 'sp-btn-outline '+this.size
			}
		}
	}
</script>