<script lang="ts">
	import Button from '$lib/components/Button.svelte'
	import Heading from '$lib/components/headings/Heading.svelte'
	import HeadingLevel from '$lib/components/headings/HeadingLevel.svelte'
	import { Check } from 'tabler-icons-svelte'

	/** Props */
	export let price: number | string
	export let title: string
	export let description: string
	export let features: Array<{ title: string; subtitle?: string }>
	export let featured: boolean = false
	export let action: string = 'Get started'
	export let actionUrl: string = '/register'

	function formatPrice(price: number | string): string {
		if (typeof price === 'string') return price

		const priceString = price.toLocaleString('en-US', {
			style: 'currency',
			currency: 'USD',
			notation: 'compact',
		})

		return `${priceString} <span class="text-sm tracking-wide font-normal text-gray-500">/ month</span>`
	}
</script>

<HeadingLevel>
	<div
		class={`relative h-full rounded-2xl bg-white border p-6 flex flex-col gap-6 aspect-[1/1.3] ${
			featured ? 'border-gray-300 shadow-lg -translate-y-6' : 'border-gray-200'
		}`}
	>
		<div>
			<Heading class="text-lg font-bold">{title}</Heading>
			<p>{description}</p>
		</div>

		{#if featured}
			<span
				class="absolute top-0 right-6 -translate-y-1/2 rounded-full border border-gray-900 bg-white px-3 py-1 text-xs uppercase tracking-wider"
			>
				Most popular
			</span>
		{/if}

		<strong class="flex items-baseline gap-2 text-3xl">{@html formatPrice(price)}</strong>

		<HeadingLevel>
			<ul class="mt-4 flex-grow">
				{#each features as feature}
					<li class="mb-2 flex items-start gap-3">
						<span class="rounded-full bg-gray-100 p-1">
							<Check size={16} />
						</span>
						<div class="mb-2 leading-snug">
							<Heading class="font-semibold">{feature.title}</Heading>
							{#if feature.subtitle}
								<p class="text-gray-400">{feature.subtitle}</p>
							{/if}
						</div>
					</li>
				{/each}
			</ul>
		</HeadingLevel>

		<Button theme={featured ? 'primary' : 'secondary'} tag="a" href={actionUrl}>
			{action}
		</Button>
	</div>
</HeadingLevel>
