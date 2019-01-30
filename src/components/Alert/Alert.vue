<template>
	<div>
		<div :class="className" v-show="showAlert">
			<div class="sp-alert-content">
				<div v-show="icon" class="alert-icon">
					<font-awesome-icon v-if="type == 'info'" icon="question-circle" />
					<font-awesome-icon v-if="type == 'danger'" icon="exclamation-circle" />
					<font-awesome-icon v-if="type == 'warning'" icon="exclamation-triangle" />
					<font-awesome-icon v-if="type == 'success'" icon="check-circle" />
				</div>
				<div class="alert-message"><span><slot/></span></div>
				<div class="sp-spacer"></div>
				<div v-if="dismissable" class="alert-close" @click="showAlert = false">&times;</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'SpAlert',
		props: {
			type: {
				type: String,
				required: true
			},
			icon: {
				type: Boolean,
				default: false
			},
			dismissable: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				className: '',
				showAlert: true
			}
		},
		mounted() {
			this.className = `sp-alert-container alert-${this.type}`
		}
	}
</script>