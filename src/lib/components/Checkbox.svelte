<script lang="ts">
	export let label: string
	export let sublabel: string = ''
	export let name: string
</script>

<label class="flex items-baseline gap-3">
	<input {name} class="h-4 w-4" type="checkbox" {...$$restProps} />
	<div class="flex flex-col">
		<span>{label}</span>
		<span class="text-gray-400">{sublabel}</span>
	</div>
</label>
