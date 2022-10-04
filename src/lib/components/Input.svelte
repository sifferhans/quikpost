<script lang="ts">
	export let label: string
</script>

<label class="flex flex-col gap-2">
	<span>{label}</span>
	<input
		{...$$restProps}
		class="rounded-lg border border-gray-300 px-4 py-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1"
	/>
</label>
