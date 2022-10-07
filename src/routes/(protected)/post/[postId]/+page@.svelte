<script lang="ts">
	import Heading from '$lib/components/headings/Heading.svelte'
	import type { PageData } from './$types'

	export let data: PageData
	const { post } = data
</script>

<div class="prose mx-auto">
	<Heading class="mt-10 mb-3 text-4xl font-bold lg:text-5xl">{post?.title}</Heading>
	{#if post?.content}
		{@html post?.content}
	{/if}
</div>
