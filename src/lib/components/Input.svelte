<script lang="ts">
	export let label: string
	export let type: string = 'text'
</script>

<label class="flex flex-col gap-2">
	<span>{label}</span>
	<input
		{...$$restProps}
		{type}
		class="form-input rounded-lg border border-gray-300 px-4 py-3 focus:border-gray-900 focus:ring-4 focus:ring-gray-200"
	/>
</label>
