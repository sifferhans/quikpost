<script lang="ts">
	import Button from '$lib/components/Button.svelte'
	import Heading from '$lib/components/headings/Heading.svelte'
	import Input from '$lib/components/Input.svelte'
</script>

<form action="" class="mx-auto flex max-w-md flex-col gap-6">
	<Heading class="text-4xl font-bold lg:text-5xl">Log in</Heading>
	<Input label="Email" />
	<Input label="Password" type="password" />
	<p>Remember me</p>
	<Button type="submit">Log in</Button>
</form>
