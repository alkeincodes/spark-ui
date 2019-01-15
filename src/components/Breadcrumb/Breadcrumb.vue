<template>
	<div>
		<div class="sp-breadcrumbs-container">
			<ul class="sp-breadcrumbs">
				<!-- eslint-disable-next-line -->
				<li v-for="(item, index) in items" class="sp-breadcrumbs-item" :class="item.active ? 'active' : ''">
					<a :href="item.href">{{ item.name }}</a>
					<template v-if="index != items.length-1">
						<span v-if="divider == 'slash'" style="padding-left: 5px;">/</span>
						<font-awesome-icon v-if="divider == 'arrow'" style="padding-left: 5px;" icon="angle-right" />
						<font-awesome-icon v-if="divider == 'double-arrow'" style="padding-left: 5px;" icon="angle-double-right" />
					</template>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'SpBcrumb',
		props: {
			items: {
				type: Array,
				required: true,
			},
			divider: {
				type: String,
				default: 'slash'
			}
		}
	}
</script>