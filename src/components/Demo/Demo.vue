<template>
	<div>
		<h2 class="docs-api-table-title">{{title}}</h2>
		<table class="docs-api-table">
			<thead>
				<tr>
					<th>Name</th>
					<th>Type</th>
					<th>Description</th>
					<th>Default</th>
				</tr>
			</thead>

			<tbody>
				<tr v-for="data in docs">
					<td>{{ data.name }}</td>
					<td>{{ data.type }}</td>
					<td>{{ data.description }}</td>
					<td>{{ data.default }}</td>

					<!-- <td>type</td>
					<td>String</td>
					<td>Determines the looks of the alert component.</td>
					<td>required</td> -->
				</tr>
				<!-- <tr>
					<td>icon</td>
					<td>Boolean</td>
					<td>Shows the specified icon of the alert type.</td>
					<td>false</td>
				</tr>
				<tr>
					<td>dismissable</td>
					<td>Boolean</td>
					<td>Adds close button at the right part of the alert component.</td>
					<td>false</td>
				</tr> -->
			</tbody>
		</table>
	</div>
</template>

<script>
	export default {
		name: 'SpDemo',
		props: {
			docs: {
				type: Array,
				required: true
			},
			title: {
				Type: String
			}
		}
	}
</script>