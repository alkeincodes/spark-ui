<template>
		<div>
			<sp-row>
				<sp-column :col-w="9">
					<h2 class="docs-title">Alert</h2>
					<span class="docs-description">A notification that will show a short information to the user with an elegant style.</span>
					<div class="docs-divider" />
				</sp-column>
			</sp-row>
			<sp-row>
				<sp-column :col-w="9">
					<div class="docs-demo-container">
						<div class="docs-demo-content">
							<div class="spark-alerts">
								<sp-alert type="info">This is an example of alert</sp-alert>
								<sp-alert type="danger">This is an example of alert </sp-alert>
								<sp-alert type="warning">This is an example of alert </sp-alert>
								<sp-alert type="success">This is an example of alert </sp-alert>
							</div>
							<iframe width="100%" height="300" src="//jsfiddle.net/alkeinaiduko/1oeacj48/5/embedded/html/" frameborder="0"></iframe>
						</div>
					</div>
				</sp-column>
			</sp-row>

			<sp-row>
				<sp-column :col-w="9">
					<sp-demo :docs="docs" title="API" />
				</sp-column>
			</sp-row>
		</div>
</template>

<script>

	export default {
		data() {
			return {
				docs: [
					{ name: 'type', type: 'String', description: 'Determines the looks of the alert component.', default: 'required' },
					{ name: 'icon', type: 'Boolean', description: 'Shows the specified icon of the alert type.', default: 'false' },
					{ name: 'dismissable', type: 'Boolean', description: 'Adds close button at the right part of the alert component.', default: 'required' }
				]
			}
		}
	}
</script>


<style scoped>
	.spark-alerts div {
		margin: 5px
	}
</style>