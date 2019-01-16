<template>
	<transition :name="effect">
		<div class="modal-mask">
			<div class="close-area" @click="$emit('close')"></div>
			<div class="modal-container">
				<div class="modal-content">
					<div class="modal-header">
						<img alt="Vue logo" src="../../assets/logo.png" width="50">
						<slot name="header">
							<h3>Spark Modal</h3>
						</slot>
					</div>
					<div class="modal-body">
						<div>
							<slot name="body">
								<span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
							</slot>
						</div>
					</div>
					<div class="modal-footer">
						<div>
							<sp-button type="danger" @click="$emit('close')">Close</sp-button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
	export default {
		name: 'SpModal',
		props: {
			effect: {
				type: String,
				default: 'fade'
			}
		}
	}
</script>