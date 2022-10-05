<script lang="ts">
	import Heading from './headings/Heading.svelte'

	export let name: string
	export let description: string = ''
</script>

<fieldset class="grid gap-6 py-12 md:grid-cols-3">
	<div>
		<Heading class="text-lg">{name}</Heading>
		{#if description}
			<p>{description}</p>
		{/if}
	</div>
	<div class="flex flex-col gap-4 md:col-span-2">
		<slot />
	</div>
</fieldset>
