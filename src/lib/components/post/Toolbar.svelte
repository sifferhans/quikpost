<script lang="ts">
	import Badge from '../Badge.svelte'
	import Button from '../Button.svelte'

	export let published: boolean
</script>

<div class="fixed bottom-6 rounded-xl border p-3">
	<Button theme="secondary" size="small" on:click={() => (published = !published)}>
		Delete post
	</Button>
	<Badge text={published ? 'Published' : 'Draft'} />
</div>
