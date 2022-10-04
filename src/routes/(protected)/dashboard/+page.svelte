<script lang="ts">
	import type { PageData } from './$types'
	import Heading from '$lib/components/headings/Heading.svelte'
	import HeadingLevel from '$lib/components/headings/HeadingLevel.svelte'
	import Posts from './Posts.svelte'

	export let data: PageData
</script>

<Heading class="my-10 text-4xl font-bold lg:text-5xl">Dashboard</Heading>
<HeadingLevel>
	<Heading class="mb-4 font-bold">Posts</Heading>
	<Posts posts={data?.posts} />
</HeadingLevel>
