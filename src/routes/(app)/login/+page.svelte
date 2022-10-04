<script lang="ts">
	import { fly } from 'svelte/transition'
	import { enhance } from '$app/forms'

	import Button from '$lib/components/Button.svelte'
	import Heading from '$lib/components/headings/Heading.svelte'
	import Input from '$lib/components/Input.svelte'
</script>

<form
	action="?/login"
	use:enhance
	class="mx-auto flex w-full max-w-md flex-col gap-6"
	in:fly={{ y: 10, duration: 400 }}
>
	<Heading class="text-4xl font-bold lg:text-5xl">Log in</Heading>
	<Input label="Email" />
	<Input label="Password" type="password" />
	<p>Remember me</p>
	<Button type="submit">Log in</Button>
</form>
