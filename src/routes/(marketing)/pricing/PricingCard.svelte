<script lang="ts">
	import Button from '$lib/components/Button.svelte'
	import Heading from '$lib/components/headings/Heading.svelte'
	import HeadingLevel from '$lib/components/headings/HeadingLevel.svelte'

	/** Props */
	export let price: number
	export let title: string
	export let description: string
	export let features: string[]
	export let featured: boolean = false
	export let action: string = 'Get started'
	export let actionUrl: string = '/register'

	function formatPrice(price: number): string {
		return price.toLocaleString('en-US', {
			style: 'currency',
			currency: 'USD',
		})
	}
</script>

<HeadingLevel>
	<div
		class={`relative rounded-2xl bg-white border border-gray-200 p-6 flex flex-col gap-6 ${
			featured ? 'border-gray-600 outline-4 outline outline-gray-200' : ''
		}`}
	>
		<div>
			<Heading class="text-lg font-bold">{title}</Heading>
			<p>{description}</p>
		</div>

		<strong class="text-3xl">{formatPrice(price)}</strong>

		<ul>
			{#each features as feature}
				<li class="list-item list-inside list-disc">{feature}</li>
			{/each}
		</ul>

		<Button theme={featured ? 'primary' : 'secondary'} tag="a" href={actionUrl}>{action}</Button>
	</div>
</HeadingLevel>
