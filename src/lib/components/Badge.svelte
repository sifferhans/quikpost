<script lang="ts">
	export let text: string
	export let theme: 'default' | 'positive' | 'negative' = 'default'

	const colors: {
		[key: string]: string
	} = {
		default: 'bg-slate-100',
		positive: 'bg-emerald-100',
		negative: 'bg-red-100',
	}
</script>

<span class="inline-block rounded px-2 {colors[theme]}">{text}</span>
