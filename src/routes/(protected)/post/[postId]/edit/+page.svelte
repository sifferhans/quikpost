<script lang="ts">
	import Editor from '$lib/components/Editor/index.svelte'
	import Toolbar from '$lib/components/post/Toolbar.svelte'
	import { debounce } from '$lib/utils'
	import type { PageData } from './$types'

	export let data: PageData

	let { title, content, id }: { title: string; content: string; id: string } = data?.post

	function updateContent(event: CustomEvent) {
		content = event.detail
	}

	async function save() {
		await fetch(`/post/${id}/edit`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				title,
				content,
			}),
		})
	}
	const debouncedSave = debounce(save, 1000)

	function deletePost() {
		console.log('Delete: ', id)
	}

	function togglePublished() {
		console.log('Toggle published')
		published = !published
	}

	let published = false
</script>

<svelte:head>
	<title>Quikpost - {title}</title>
</svelte:head>

<div class="prose mx-auto" on:keyup={debouncedSave}>
	<h1 contenteditable bind:textContent={title} class="outline-none" />
	<Editor {content} on:update={updateContent} />
	<Toolbar bind:published on:delete={deletePost} on:togglePublished={togglePublished} />
</div>

<style>
	h1:empty::after {
		content: 'Post title';
		pointer-events: none;
		opacity: 0.2;
	}
</style>
