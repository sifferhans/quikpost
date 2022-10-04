<script>
	import { page } from '$app/stores'
	import Heading from '$lib/components/headings/Heading.svelte'
	import HeadingLevel from '$lib/components/headings/HeadingLevel.svelte'

	const tabs = [
		{ title: 'API', slug: 'api' },
		{ title: 'Profile', slug: 'profile' },
	]
</script>

<Heading class="my-10 text-4xl font-bold lg:text-5xl">Settings</Heading>
<nav>
	{#each tabs as tab, i (i)}
		<a
			href={`/settings/${tab.slug}`}
			class={`inline-block py-2 px-4 ${
				$page.url.toString().includes(tab.slug)
					? 'border-b-2 border-gray-900'
					: 'border-b border-gray-300'
			}`}>{tab.title}</a
		>
	{/each}
</nav>
<HeadingLevel>
	<slot />
</HeadingLevel>
