<script lang="ts">
	import Button from '$lib/components/Button.svelte'
	import Heading from '$lib/components/headings/Heading.svelte'
	import CtaBanner from './CtaBanner.svelte'
	import Feature from './Feature.svelte'

	import illustration_1 from '$lib/assets/illustrations/1.webp'
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
>
	<img
		src={illustration_1}
		alt=""
		title="This illustration is just an example made with DALL-E 2"
	/>
</Feature>
<Feature
	title="Full API access"
	description="Easily fetch your content and use it any way you like."
>
	<img
		src={illustration_1}
		alt=""
		title="This illustration is just an example made with DALL-E 2"
	/>
</Feature>

<!-- Call to action -->
<CtaBanner />
