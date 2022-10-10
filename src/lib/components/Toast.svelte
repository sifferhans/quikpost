<script lang="ts">
	// TODO: make toast component
	export let type: 'success' | 'error' | 'info' = 'info'
	export let message: string
</script>

<div
	class="fixed bottom-0 right-0 z-50 mx-auto mb-4 w-full max-w-sm overflow-hidden rounded-lg border border-gray-900 bg-white shadow-md"
>
	<div class="p-4">
		<div class="flex items-center justify-between">
			<span
				class="text-sm {type === 'success'
					? 'text-green-600'
					: type === 'error'
					? 'text-red-600'
					: ''}"
			>
				{#if type === 'success'}
					Success
				{:else if type === 'error'}
					Error
				{:else}
					Info
				{/if}
			</span>
			<button
				class="transform rounded-md p-1 transition-colors duration-200 hover:bg-gray-100 focus:bg-gray-200 focus:outline-none"
			>
				<svg
					class="h-5 w-5"
					viewBox="0 0 24 24"
					stroke-width="2"
					stroke="currentColor"
					fill="none"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<line x1="18" y1="6" x2="6" y2="18" />
					<line x1="6" y1="6" x2="18" y2="18" />
				</svg>
			</button>
		</div>
		<div class="mt-2">
			<p class="text-sm text-gray-900">
				{message}
			</p>
		</div>
	</div>
</div>
