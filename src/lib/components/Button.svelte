<script lang="ts">
	export let tag: string = 'button'
	export let theme: 'primary' | 'secondary' = 'primary'
	export let size: 'small' | 'medium' = 'medium'

	const sizeClasses = {
		small: 'px-3 py-1 ',
		medium: 'px-4 py-2 ',
	}

	const themeClasses = {
		primary: 'bg-gray-900 text-white hover:bg-gray-700',
		secondary: 'border border-gray-300 bg-transparent hover:border-gray-400',
	}
</script>

<svelte:element
	this={tag}
	data-sveltekit-prefetch
	{...$$restProps}
	class="inline-flex justify-center gap-4 rounded-md focus-visible:outline focus-visible:outline-2 {themeClasses[
		theme
	]} {sizeClasses[size]}"
>
	<slot />
</svelte:element>
