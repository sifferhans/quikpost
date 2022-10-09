<script lang="ts">
	import Heading from '$lib/components/headings/Heading.svelte'
	import { timeAgo } from '$lib/utils'

	export let title: string
	export let publishedAt: Date | null
	export let updatedAt: Date
	export let id: string
</script>

<li class="relative">
	<a
		href="/post/{id}/edit"
		class="flex aspect-video flex-col items-start justify-end rounded-lg border border-gray-300 bg-white p-4 hover:border-gray-400"
	>
		{#if !publishedAt}
			<span
				class="absolute top-4 rounded border border-gray-900 px-1 text-xs font-normal uppercase tracking-wide text-gray-900"
				>Draft</span
			>
		{/if}
		<Heading class="flex items-center gap-3 text-xl font-bold leading-tight">
			{title || 'Untitled'}
		</Heading>
		<small class="text-gray-400">
			{#if updatedAt}
				<span>
					Updated {timeAgo(updatedAt)}
				</span>
			{/if}
		</small>
	</a>
</li>
