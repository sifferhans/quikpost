<script lang="ts">
	import Heading from '$lib/components/headings/Heading.svelte'
	import { formatDate } from '$lib/utils'

	export let title: string
	export let publishedAt: Date
	export let id: string
</script>

<li>
	<a
		href="/post/edit/{id}"
		class="flex aspect-video flex-col justify-end rounded-lg border border-gray-300 p-4"
	>
		<Heading class="text-xl font-bold">{title || 'Untitled'}</Heading>
		<p class="text-gray-400">{publishedAt ? formatDate(publishedAt) : 'Not published'}</p>
	</a>
</li>
