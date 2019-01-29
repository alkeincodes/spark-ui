<template>
	<div class="banner">
		<img alt="Vue logo" src="../assets/spark-ui_logo/spark-ui.svg" style="width: 20%;">
		<HelloWorld msg="Spark UI"/>
	</div>
</template>

<script>
	import HelloWorld from './HelloWorld.vue'
	export default {
		components: {
			HelloWorld
		}
	}
</script>

<style scoped>
	.banner {
		text-align: center;
	}
</style>