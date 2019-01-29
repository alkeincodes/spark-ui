<template>
	<div>
		<sp-row>
			<sp-column :col-w="8">
				<h2 class="getting-started">Getting Started</h2>
				<span class="spark-ui-description">Spark UI is a semantic development frameworkfor Vue JS that adds great visual quality to your website.</span>

				<h2 class="installation">Installation</h2>
				<div class="npm-install">
					npm install spark-uikit
				</div>
			</sp-column>
		</sp-row>
	</div>
</template>

<script>
	export default {

	}
</script>

<style scoped>
	h2.getting-started {
		font-family: 'Open Sans', sans-serif;
		color: #ff3c38;
		margin-bottom: 0;
	}

	h2.installation {
		margin-top: 3em;
		margin-bottom: 10px;
		letter-spacing: -1px;
		font-family: 'Open Sans', sans-serif;
		font-weight: normal;
		color: #848484;
	}

	.spark-ui-description {
		font-family: 'Open Sans', sans-serif;
		font-size: 14px;
		color: #848484;
	}

	.npm-install {
		font-family: 'Bitstream Vera';
		color: #fff;
		font-size: 14px;
		background-color: #29353A;
		width: 100%;
		padding: 1em 1em;
	}
</style>