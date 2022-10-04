<script lang="ts">
	import Heading from '$lib/components/headings/Heading.svelte'

	export let title: string
	export let description: string
	export let url: string
</script>

<li>
	<a href={url} class="block aspect-video rounded-lg border border-gray-300 p-4">
		<Heading class="text-xl font-bold">{title}</Heading>
		<p class="mt-2 text-gray-500">{description}</p>
	</a>
</li>
