<script lang="ts">
	import type { PageData } from './$types'
	import { fly } from 'svelte/transition'

	import Heading from '$lib/components/headings/Heading.svelte'
	import PricingCard from './PricingCard.svelte'

	export let data: PageData
	const { items } = data
</script>

<Heading class="mt-10 mb-3 text-4xl font-bold lg:text-5xl">Pricing</Heading>
<p>Fair pricing for fair software.</p>

<ul class="mt-10 grid gap-6 md:grid-cols-3">
	{#each items as item, index}
		<li in:fly={{ y: 20, duration: 500, delay: 100 * index }}>
			<PricingCard {...item} />
		</li>
	{/each}
</ul>

<section class="my-56">
	<Heading class="text-2xl font-bold lg:text-3xl">Frequently asked questions</Heading>
</section>
