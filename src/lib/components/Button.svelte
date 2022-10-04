<script lang="ts">
	export let tag: string = 'button'
	export let theme: 'primary' | 'secondary' = 'primary'
</script>

<svelte:element
	this={tag}
	{...$$restProps}
	class={`inline-block px-4 py-2 rounded-md focus-visible:outline-2 focus-visible:outline ${
		theme == 'primary'
			? 'bg-gray-900 text-white'
			: 'border border-gray-300 bg-transparent hover:border-gray-400'
	}`}
>
	<slot />
</svelte:element>
