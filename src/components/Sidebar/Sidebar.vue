<template>
	<aside class="sp-sidebar-container">
		<div class="sidebar-content">
			<div class="header">
				<slot name="header"/>
			</div>

			<div class="sidebar-menu">
				<nav>
					<slot name="site-menu">
						<router-link v-for="link in links" :to="link.href" class="menu-link">{{link.name}}</router-link>
					</slot>
				</nav>
			</div>
		</div>
	</aside>
</template>

<script>
	export default {
		name: 'SpSidebar',
		props: {

		},
		data() {
			return {
				links: [
					{ name: 'Installation', href: '/documentation' },
					{ name: 'Alert', href: '/documentation/alert' },
				]
			}
		}
	}
</script>