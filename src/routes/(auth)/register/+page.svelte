<script lang="ts">
	import type { ActionData } from './$types'
	import { fly } from 'svelte/transition'

	import Button from '$lib/components/Button.svelte'
	import Heading from '$lib/components/headings/Heading.svelte'
	import Input from '$lib/components/Input.svelte'

	export let form: ActionData
</script>

<form action="?/register" method="POST" class="mx-auto flex w-full max-w-md flex-col gap-6">
	<Heading class="text-4xl font-bold lg:text-5xl">Register</Heading>
	<Input label="Email" name="email" type="email" required />
	<Input label="Password" type="password" name="password" required />

	{#if form?.user}
		<p in:fly={{ x: -10, duration: 200 }} class="text-red-700">This email is already in use.</p>
	{/if}

	{#if form?.invalid}
		<p in:fly={{ x: -10, duration: 200 }} class="text-red-700">Invalid email or password.</p>
	{/if}

	<Button type="submit">Register account</Button>
</form>
