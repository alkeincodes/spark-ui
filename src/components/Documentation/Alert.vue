<template>
		<div>
			<sp-row>
				<sp-column :col-w="8">
					<h2 class="docs-title">Alert</h2>
					<span class="docs-description">A notification that will show a short information to the user with an elegant style.</span>
				</sp-column>
			</sp-row>

			<sp-row>
				<sp-column :col-w="8">
					<div class="spark-alerts">
						<h3>Alert without Icon</h3><br>
						<sp-alert type="info">This is an example of alert dialog without icon</sp-alert>
						<sp-alert type="danger">This is an example of alert dialog without icon</sp-alert>
						<sp-alert type="warning">This is an example of alert dialog without icon</sp-alert>
						<sp-alert type="success">This is an example of alert dialog without icon</sp-alert>
					</div>
					<iframe width="100%" height="300" src="//jsfiddle.net/alkeinaiduko/1oeacj48/5/embedded/html/" frameborder="0"></iframe>
				</sp-column>
			</sp-row>
		</div>
</template>

<script>
	export default {

	}
</script>


<style scoped>
	.spark-alerts div {
		margin: 5px
	}
</style>