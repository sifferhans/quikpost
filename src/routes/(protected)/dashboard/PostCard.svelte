<script lang="ts">
	import Heading from '$lib/components/headings/Heading.svelte'
	import { formatDate, timeAgo } from '$lib/utils'

	export let title: string
	export let publishedAt: Date
	export let updatedAt: Date
	export let id: string
</script>

<li>
	<a
		href="/post/{id}/edit"
		class="flex aspect-video flex-col justify-end rounded-lg border border-gray-300 p-4 hover:border-gray-400"
	>
		<Heading class="text-xl font-bold">
			{title || 'Untitled'}
		</Heading>
		<small class="text-gray-400">
			<!-- <span>{publishedAt ? formatDate(publishedAt) : 'Draft'}</span> -->
			{#if updatedAt}
				<span>
					Updated {timeAgo(updatedAt)}
				</span>
			{/if}
		</small>
	</a>
</li>
