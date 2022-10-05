<script lang="ts">
	import Button from '$lib/components/Button.svelte'
	import Heading from '$lib/components/headings/Heading.svelte'
	import Feature from './Feature.svelte'
</script>

<!-- Hero -->
<div class="flex min-h-[50vh] flex-col items-center justify-center">
	<p class="tracking-wide">You probably don't need that homemade CMS.</p>
	<Heading class="mb-10 text-center text-4xl font-bold lg:text-6xl">Focus on your writing.</Heading>
	<Button tag="a" href="/pricing">Get started now</Button>
</div>

<!-- Features -->
<Feature
	title="Frictionless writing"
	description="Write, publish and edit your content in a single place."
/>
