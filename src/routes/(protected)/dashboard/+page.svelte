<script lang="ts">
	import type { PageData } from './$types'
	import Heading from '$lib/components/headings/Heading.svelte'
	import HeadingLevel from '$lib/components/headings/HeadingLevel.svelte'
	import Posts from './Posts.svelte'
	import type { Post } from '@prisma/client'

	export let data: PageData
	const { posts } = data

	let filter: 'published' | 'draft' | 'all' = 'all'
	$: filteredPosts = posts.filter((post: Post) => {
		switch (filter) {
			case 'published':
				return !!post.publishedAt
			case 'draft':
				return !post.publishedAt
			case 'all':
				return true
		}
	})
</script>

<Heading class="my-10 text-4xl font-bold lg:text-5xl">Dashboard</Heading>
<HeadingLevel>
	<div class="flex items-baseline justify-between">
		<Heading class="mb-4 font-bold">Posts</Heading>
		<select
			name="filter"
			bind:value={filter}
			class="form-select rounded-md border-gray-200 py-1 pl-2 pr-9 hover:border-gray-300 focus:ring-2 focus:ring-gray-900"
		>
			<option value="all">All</option>
			<option value="draft">Drafts</option>
			<option value="published">Published</option>
		</select>
	</div>
	<Posts posts={filteredPosts} />
</HeadingLevel>
