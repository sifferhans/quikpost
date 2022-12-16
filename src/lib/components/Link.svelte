<script lang="ts">
	export let href: string
</script>

<a
	class="inline-flex items-center gap-2 underline-offset-2 hover:underline"
	{href}
	{...$$restProps}
	data-sveltekit-preload-data
>
	<slot />
</a>
