<script lang="ts">
	import Heading from '$lib/components/headings/Heading.svelte'
	import HeadingLevel from '$lib/components/headings/HeadingLevel.svelte'
	import PostCard from './PostCard.svelte'
	import { FilePlus } from 'tabler-icons-svelte'
	import { flip } from 'svelte/animate'
	import { fly } from 'svelte/transition'

	interface Post {
		title: string
		id: string
		publishedAt: Date | null
		updatedAt: Date
	}

	export let posts: Post[]

	$: sortedPosts = posts.sort((a, b) => {
		if (a.updatedAt > b.updatedAt) return -1
		if (a.updatedAt < b.updatedAt) return 1
		return 0
	})
</script>

<HeadingLevel>
	<ul class="grid gap-6 md:grid-cols-4">
		{#each sortedPosts as post, i (post)}
			<div animate:flip={{ duration: 500 }} in:fly={{ y: -10, duration: 300, delay: i * 75 }}>
				<PostCard {...post} />
			</div>
		{/each}
		<li>
			<form action="/post/create" method="post">
				<button
					type="submit"
					class="flex aspect-video h-full w-full flex-col items-center justify-center gap-2 rounded-lg bg-gray-50 p-4 hover:bg-gray-100"
				>
					<FilePlus size={24} />
					<Heading>Create new post</Heading>
				</button>
			</form>
		</li>
	</ul>
</HeadingLevel>
