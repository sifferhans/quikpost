<script lang="ts">
	import Heading from '$lib/components/headings/Heading.svelte'
	import HeadingLevel from '$lib/components/headings/HeadingLevel.svelte'

	export let title: string
	export let description: string
	export let inverted: boolean = false
</script>

<HeadingLevel>
	<section class="flex min-h-[24rem] items-center" class:flex-row-reverse={inverted}>
		<div class="w-1/2">
			<Heading class="my-3 text-3xl font-bold">{title}</Heading>
			<p class="text-lg text-gray-500">{description}</p>
		</div>
		<div class="ml-auto w-1/2 p-6">
			<slot />
		</div>
	</section>
</HeadingLevel>
