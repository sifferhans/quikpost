<script lang="ts">
	import Heading from '$lib/components/headings/Heading.svelte'
	import HeadingLevel from '$lib/components/headings/HeadingLevel.svelte'

	export let title: string
	export let description: string
</script>

<HeadingLevel>
	<section class="grid grid-cols-2">
		<div>
			<Heading class="my-3 text-3xl font-bold">{title}</Heading>
			<p class="text-lg text-gray-500">{description}</p>
		</div>
		<slot />
	</section>
</HeadingLevel>
