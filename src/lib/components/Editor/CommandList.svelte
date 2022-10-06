<script lang="ts">
	import { slashVisible, slashItems, slashLocaltion, slashProps } from '$lib/stores'
	export let selectedIndex: number = 0

	let height: number
	let elements: HTMLDivElement[] = []
	// $: {
	// 	if (elements[0] != null) {
	// 		elements[selectedIndex]?.scrollIntoView({ block: 'end', behavior: 'smooth' })
	// 	}
	// }
</script>

<svelte:window bind:innerHeight={height} />

{#if $slashVisible}
	<div class="absolute top-0 h-screen w-full" on:click={() => ($slashVisible = false)} />
	<div
		class="absolute h-96 w-96 max-w-full overflow-scroll rounded-lg border border-gray-300 bg-white"
		style="left: {$slashLocaltion.x}px; top: {$slashLocaltion.y + $slashLocaltion.height + 384 >
		height
			? $slashLocaltion.y - $slashLocaltion.height - 384
			: $slashLocaltion.y + $slashLocaltion.height}px;"
	>
		<div class="p-2 text-sm text-gray-400">Blocks</div>
		{#each $slashItems as { title, subtitle, command }, i}
			<div
				class="cursor-pointer p-3 text-start {i == selectedIndex ? 'bg-gray-100' : 'bg-white'}"
				on:mouseenter={() => (selectedIndex = i)}
				on:click={() => {
					$slashVisible = false
					command($slashProps)
				}}
				bind:this={elements[i]}
			>
				<div class="">{title}</div>
				<div class="text-sm text-gray-400">{subtitle ? subtitle : ''}</div>
			</div>
		{/each}
	</div>
{/if}
