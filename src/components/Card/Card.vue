<template>
	<div class="sp-card-container">
		<div class="sp-card-content">
			<div class="sp-card-header">
				<h3><slot name="header"/></h3>
			</div>
			<div v-if="image" class="sp-card-image" style="box-sizing: border-box;">
				<slot name="image" />
			</div>
			<div class="sp-card-body">
				<div>
					<slot name="body">
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
					</slot>
				</div>
			</div>

			<div class="sp-card-footer">
				<slot name="footer">

				</slot>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'SpCard',
		props: {
			image: {
				type: Boolean
			}
		},
		mounted() {
			console.log(this.file)
		}
	}
</script>