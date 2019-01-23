<template>
	<div class="sp-navbar-container">
		<div class="sp-navbar-content">
			<div class="logo-container">
				<img src="../../assets/spark-ui_logo/spark-ui.svg">
			</div>
			<nav class="sp-navbar-links">
				<a href="#" class="site-name">Spark UI</a>
				<a href="#">Link 1</a>
				<a href="#">Link 1</a>
				<a href="#">Link 1</a>
			</nav>
			<div class="sp-spacer"></div>
			<a href="#">asd</a>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'SpNavbar',
		props: {
			links: {
				type: Object,
				// required: true
			}
		}
	}
</script>