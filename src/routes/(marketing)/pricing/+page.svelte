<script lang="ts">
	import { fly } from 'svelte/transition'

	import Heading from '$lib/components/headings/Heading.svelte'
	import PricingCard from './PricingCard.svelte'
	import items from './pricing'
</script>

<Heading class="mt-10 mb-3 text-4xl font-bold lg:text-5xl">Pricing</Heading>
<p>Fair pricing for fair software.</p>

<ul class="mt-10 grid gap-6 md:grid-cols-3 md:gap-8">
	{#each items as item, index}
		<li in:fly={{ y: 15, duration: 500, delay: 100 * index }}>
			<PricingCard {...item} />
		</li>
	{/each}
</ul>
