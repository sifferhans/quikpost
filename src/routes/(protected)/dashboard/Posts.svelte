<script lang="ts">
	import Heading from '$lib/components/headings/Heading.svelte'
	import HeadingLevel from '$lib/components/headings/HeadingLevel.svelte'
	import PostCard from './PostCard.svelte'
	import { FilePlus } from 'tabler-icons-svelte'

	interface Post {
		title: string
		description: string
		url: string
	}

	export let posts: Post[]
</script>

<HeadingLevel>
	<ul class="grid gap-6 md:grid-cols-4 md:gap-8">
		{#each posts as post, index (index)}
			<PostCard {...post} />
		{/each}
		<li>
			<a
				href="/posts/create"
				class="flex aspect-video flex-col items-center justify-center gap-2 rounded-lg bg-gray-50 p-4 hover:bg-gray-100"
			>
				<FilePlus size={24} />
				<Heading>Create new post</Heading>
			</a>
		</li>
	</ul>
</HeadingLevel>
