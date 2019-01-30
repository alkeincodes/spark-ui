<template>
	<div class="spark-ui-content">
		<sp-sidebar>
			<div class="site-sponsor" slot="header">
				<div class="coin-container">
					<div class="coin">
						<h1>$</h1>
					</div>
				</div>

				<div class="sponsor-btn">
					Become a Sponsor
				</div>
			</div>
		</sp-sidebar>
		<div class="spark-documentation-container">
			<div class="documentation-content">
				<div class="container">
					<transition name="fade" mode="out-in">
						<router-view></router-view>
					</transition>
				</div>

				<sp-footer></sp-footer>
			</div>
		</div>
	</div>
</template>

<script>

	import SpFooter from './Documentation/_Footer.vue'

	export default {
		components: {
			SpFooter
		}
	}
</script>

<style scoped>

	.container {
		 width: 96%;
		 margin: 0 auto;
	}
	.spark-ui-content {
		margin-top: 5em;
	}

	.site-sponsor {
		padding: 1em 0;
	}

	.coin-container {
		width: 50%;
		margin: 0 auto;
		height: auto;
		height: 100px;
		border-radius: 10px;
		border: 1px dashed #c1c1c1;
		display: flex;
		align-items: center;
		margin-bottom: 2em;
	}

	.coin {
		background-color: #ffc800;
		border-radius: 50%;
		height: 50px;
		width: 50px;
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 0 auto;
		color: #fff;
		position: relative;
		top: -3px;
		-webkit-box-shadow: 0 4px 20px 0 rgba(0,0,0,.09);
		box-shadow: 0 4px 20px 0 rgba(0,0,0,.09);
		-webkit-animation: rotate3D 5s infinite; /* Safari 4.0 - 8.0 */
		animation: rotate3D 5s infinite;
	}

	.sponsor-btn {
		font-family: 'Open Sans', sans-serif;
		font-size: 13px;
		text-align: center;
		width: 85%;
		margin: 0 auto;
		padding: .7em 0;
		border: 1px solid #ff3c38;
		color: #696969;
		cursor: pointer;
		-webkit-touch-callout: none; /* iOS Safari */
		-webkit-user-select: none; /* Safari */
		-khtml-user-select: none; /* Konqueror HTML */
		-moz-user-select: none; /* Firefox */
		-ms-user-select: none; /* Internet Explorer/Edge */
		user-select: none;
		transition: all 0.3s ease;
	}

	.sponsor-btn:hover {
		background-color: #ff3c38;
		color: #fff;
		transition: all 0.3s ease;
	}

	.sponsor-btn:active {
		position: relative;
		top: 1px;
		transition: all 0.3s ease;
	}
	
	.spark-documentation-container {
		margin-left: 200px;
	}


	/* ANIMATIONS */

	@-webkit-keyframes rotate3D {
		from {transform: rotate3d(0, 1, 0, 0deg);}
		to {transform: rotate3d(0, 1, 0, 360deg);}
	}
	@keyframes rotate3D {
		from {transform: rotate3d(0, 1, 0, 0deg);}
		to {transform: rotate3d(0, 1, 0, 360deg);}
	}
</style>