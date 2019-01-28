<template>
	<div id="app">
			<!-- <div class="sp-components">
			<h3>Buttons</h3>
			<div class="spark-button-components">
				<sp-button type="primary">Primary</sp-button>
				<sp-button type="danger">Danger</sp-button>
				<sp-button type="warning">Warning</sp-button>
				<sp-button type="success">Success</sp-button>
				<sp-button type="outline">Outline</sp-button>
			</div>
			
			<div class="spark-components-alert">
				<div class="spark-alerts">
					<h3>Alert without Icon</h3><br>
						<sp-alert type="info">This is an example of alert dialog without icon</sp-alert>
						<sp-alert type="danger">This is an example of alert dialog without icon</sp-alert>
						<sp-alert type="warning">This is an example of alert dialog without icon</sp-alert>
						<sp-alert type="success">This is an example of alert dialog without icon</sp-alert>
				</div>

				<div class="spark-alerts">
					<h3>Alert with Icon</h3>
						<sp-alert type="info" icon>This is just an example alert</sp-alert>
						<sp-alert type="danger" icon>This is just an example alert</sp-alert>
						<sp-alert type="warning" icon>This is just an example alert</sp-alert>
						<sp-alert type="success" icon>This is just an example alert</sp-alert>
				</div>
			</div>
			<div class="spark-components-alert">
				<div class="spark-alerts">
					<h3>Dismissable Alert</h3>
						<sp-alert type="info" dismissable>This is just an example alert</sp-alert>
						<sp-alert type="danger" dismissable>This is just an example alert</sp-alert>
						<sp-alert type="warning" dismissable>This is just an example alert</sp-alert>
						<sp-alert type="success" dismissable>This is just an example alert</sp-alert>
				</div>
				<div class="spark-alerts">
					<h3>Dismissable Alert with Icon</h3>
						<sp-alert type="info" icon dismissable>This is just an example alert</sp-alert>
						<sp-alert type="danger" icon dismissable>This is just an example alert</sp-alert>
						<sp-alert type="warning" icon dismissable>This is just an example alert</sp-alert>
						<sp-alert type="success" icon dismissable>This is just an example alert</sp-alert>
				</div>
			</div>

			<h3>Breadcrumbs</h3>
			<div class="spark-components">
				<sp-bcrumb :items="items" />
				<sp-bcrumb :items="items" divider="arrow" />
				<sp-bcrumb :items="items" divider="double-arrow" />
			</div>

			<h3>Modal</h3>
			<div class="spark-button-components">
				<sp-button type="success" @click="showDefaultModal = true">Open Default Modal</sp-button>
				<sp-button type="warning" @click="showZoomModal = true">Open Zoom Modal</sp-button>
				<sp-button type="primary" @click="showSpinModal = true">Open Spin Modal</sp-button>
			</div>
			<sp-modal v-show="showDefaultModal" @close="showDefaultModal = false"></sp-modal>
			<sp-modal v-show="showZoomModal" @close="showZoomModal = false" effect="zoom"></sp-modal>
			<sp-modal v-show="showSpinModal" @close="showSpinModal = false" effect="spin"></sp-modal>

			<h3>Card</h3>
			<div class="sp-row">
				<div class="sp-grid-container">
					<div class="sp-grid-item">
						<sp-card>
							<span slot="header">Spark Card</span>

							<div slot="body">
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
							</div>

							<div slot="footer">
								<sp-button type="success">Go somewhere</sp-button>
							</div>
						</sp-card>
					</div>
					<div class="sp-grid-item">
						<sp-card image>
							<span slot="header">Spark Card</span>
							<div slot="image">
								<img alt="Vue logo" src="./assets/card-image.jpg">
							</div>
							<div slot="body">
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
							</div>

							<div slot="footer">
								<sp-button type="success">Go somewhere</sp-button>
							</div>
						</sp-card>
					</div>
					<div class="sp-grid-item">
						<sp-card>
							<span slot="header">Spark Card</span>

							<div slot="body">
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
							</div>

							<div slot="footer">
								<sp-button type="danger">Go somewhere</sp-button>
							</div>
						</sp-card>
					</div>
				</div>
			</div>

			<h3>Spark Chips</h3>
			<div class="sp-row">
				<div class="sp-grid-expand">
					<div class="sp-grid-item">
						<sp-chip text="Basic Chip"/>
					</div>
					<div class="sp-grid-item">
						<sp-chip text="Avatar Text">
							<img slot="image" src="./assets/card-image.jpg">
						</sp-chip>
					</div>
					<div class="sp-grid-item">
						<sp-chip text="Closable Chip" closable />
					</div>
					<div class="sp-grid-item">
						<sp-chip color="primary" text="Primary Closable Chip" closable />
					</div>
					<div class="sp-grid-item">
						<sp-chip color="success" text="Success Closable Chip" closable />
					</div>
					<div class="sp-grid-item">
						<sp-chip color="warning" text="Warning Closable Chip" closable />
					</div>
					<div class="sp-grid-item">
						<sp-chip color="danger" text="Primary Closable Chip" closable />
					</div>
				</div>
			</div>

			<h3>Spark Collapse</h3>


			<h3>Navbar</h3>
			<div class="wrapper">
				<sp-navbar></sp-navbar>
			</div>
		</div> -->
		<sp-site-nav></sp-site-nav>
		<transition name="fade">
			<router-view></router-view>
		</transition>
	</div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import SpSiteNav from './components/SiteNav.vue'

export default {
	name: 'app',
	components: {
		HelloWorld,
		SpSiteNav
	},
	data() {
		return {
			items: [
				{ name: 'Link 1', href: 'www.google.com' },
				{ name: 'Link 2', href: 'www.github.com' },
				{ name: 'Link 3', href: 'www.youtube.com', active: true },
			],
			showDefaultModal: false,
			showZoomModal: false,
			showSpinModal: false,
		}
	},
	methods: {
		testing() {
			alert('hi')
		}
	}
}
</script>

<style scoped>
#app {
	font-family: 'Lato', sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

/*transitions*/
.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .25s;
}

.fade-enter-active {
  transition-delay: .25s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}

.banner {
	margin-top: 6em;
}

.spark-components-row {
	display: flex;
	justify-content: center;
	width: 100%;
	min-height: 200px;
	height: auto;
}

.sp-components {
	width: 100%;
	margin: 0 auto;
}

.spark-components {
	width: 50%;
	margin: 0 auto;
}

.spark-components div {
	margin: 1em 0;
}

.spark-button-components {
	display: flex;
	justify-content: center;
}

.spark-button-components div {
	margin: 5px;
}

.spark-components-alert {
	display: flex;
	justify-content: space-around;
}

.spark-alerts div {
	margin: 5px
}
</style>
