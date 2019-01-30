<template>
	<div>
		<footer class="site-footer">
			<div class="footer-content">
				<div class="sp-spacer" />
				<span>Copyright &copy; 2019 | Spark UI</span>
			</div>
		</footer>
	</div>
</template>

<script>
	export default {
		name: 'Footer'
	}
</script>

<style scoped>
	.site-footer {
		height: auto;
		width: 100%;
		background-color: #efefef;
	}

	.footer-content {
		display: flex;
		align-items: center;
		padding: 1em 1em;
		color: #ff3c38;
		font-size: 15px;
	}
</style>