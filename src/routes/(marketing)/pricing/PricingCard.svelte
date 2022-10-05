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
		class={`relative h-full rounded-2xl bg-white border border-gray-200 p-6 flex flex-col gap-6 aspect-[1/1.3] ${
			featured ? 'border-gray-400 shadow-lg -translate-y-6' : ''
		}`}
	>
		<div>
			<Heading class="text-lg font-bold">{title}</Heading>
			<p>{description}</p>
		</div>

		{#if featured}
			<span class="absolute top-6 right-6 rounded-md border border-gray-900 px-2">
				Most popular!
			</span>
		{/if}

		<strong class="flex items-baseline gap-2 text-3xl">{@html formatPrice(price)}</strong>

		<ul class="mt-4 flex-grow">
			{#each features as feature}
				<li class="mb-2 flex items-start gap-3">
					<span class="rounded-full bg-gray-100 p-1">
						<Check size={16} />
					</span>
					<div class="mb-2 leading-snug">
						<span>{feature.title}</span>
						{#if feature.subtitle}
							<span class="block text-gray-400">{feature.subtitle}</span>
						{/if}
					</div>
				</li>
			{/each}
		</ul>

		<Button theme={featured ? 'primary' : 'secondary'} tag="a" href={actionUrl}>
			{action}
		</Button>
	</div>
</HeadingLevel>
