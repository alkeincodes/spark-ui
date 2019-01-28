<template>
	<div class="sp-navbar-container">
		<div class="sp-navbar-content">
			<div class="logo-container">
				<img src="../assets/spark-ui_logo/spark-ui.svg">
			</div>
			<nav class="sp-navbar-links">
				<a href="#" class="site-name">Spark UI</a>
			</nav>
			<div class="sp-spacer"></div>
			<nav class="sp-navbar-links">
				<!-- <a href="#" class="active"><span>Home</span></a>
				<a href="#"><span>Documentation</span></a> -->
				<router-link to="/"><span>Home</span></router-link>
				<router-link to="/documentation"><span>Documentation</span></router-link>
			</nav>
			<div class="github-link"><img src="../assets/github.svg"></div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'SpSiteNav'
	}
</script>

<style scoped>
.github-link {
	padding: 1em 1.2em;
	border-left: 1px solid #b3aeae;
}
.github-link img {
	width: 30px;
}

</style>