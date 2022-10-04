<script lang="ts">
	import type { ActionData } from './$types'
	import { applyAction, enhance } from '$app/forms'
	import { invalidateAll } from '$app/navigation'
	import { fly } from 'svelte/transition'

	import Button from '$lib/components/Button.svelte'
	import Heading from '$lib/components/headings/Heading.svelte'
	import Input from '$lib/components/Input.svelte'

	export let form: ActionData
</script>

<form
	action="?/login"
	method="POST"
	use:enhance={() => {
		return async ({ result }) => {
			invalidateAll()
			await applyAction(result)
		}
	}}
	class="mx-auto flex w-full max-w-md flex-col gap-6"
>
	<Heading class="text-4xl font-bold lg:text-5xl">Log in</Heading>
	<Input label="Email" name="email" required />
	<Input label="Password" type="password" name="password" required />

	{#if form?.invalid}
		<p in:fly={{ x: -10, duration: 200 }} class="text-red-600">Email and password is required.</p>
	{/if}

	{#if form?.credentials}
		<p in:fly={{ x: -10, duration: 200 }} class="text-red-600">
			You have entered incorrect credentials.
		</p>
	{/if}

	<Button type="submit">Log in</Button>
</form>
