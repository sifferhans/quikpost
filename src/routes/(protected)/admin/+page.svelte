<script lang="ts">
	import Heading from '$lib/components/headings/Heading.svelte'
	import HeadingLevel from '$lib/components/headings/HeadingLevel.svelte'
	import type { PageData } from './$types'

	export let data: PageData
	const { users } = data
</script>

<Heading class="my-10 text-4xl font-bold lg:text-5xl">Admin</Heading>
<HeadingLevel>
	{#if users}
		<section>
			<table class="w-full">
				<caption class="mb-4 text-start font-bold">Users</caption>
				<thead>
					<tr class="border border-gray-900">
						<th class="py-3 px-4 text-start">Email</th>
						<th class="py-3 px-4 text-start">Name</th>
						<th class="py-3 px-4 text-end">Posts</th>
					</tr>
				</thead>
				<tbody>
					{#each users as user (user)}
						<tr class="hover:bg-gray-50">
							<td class="py-3 px-4">{user.email}</td>
							<td class="py-3 px-4">{user.displayName || '—'}</td>
							<td class="py-3 px-4 text-end">{user.posts.length}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</section>
	{/if}
</HeadingLevel>
