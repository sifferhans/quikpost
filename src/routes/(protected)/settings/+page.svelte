<script lang="ts">
	import Button from '$lib/components/Button.svelte'
	import FormGroup from '$lib/components/FormGroup.svelte'
	import Heading from '$lib/components/headings/Heading.svelte'
	import HeadingLevel from '$lib/components/headings/HeadingLevel.svelte'
	import Input from '$lib/components/Input.svelte'
	import Toast from '$lib/components/Toast.svelte'
	import type { ActionData, PageData } from './$types'

	export let form: ActionData
	export let data: PageData
	const { user } = data
</script>

<Heading class="my-10 text-4xl font-bold lg:text-5xl">Settings</Heading>
<HeadingLevel>
	<form action="?/save" method="post">
		<FormGroup name="Profile">
			<Input name="name" label="Name" value={user.displayName || form?.displayName} />
			<Input name="email" label="E-mail" value={user.email} disabled />
		</FormGroup>
		<div class="flex justify-end gap-3">
			<Button type="submit">Save changes</Button>
		</div>

		{#if form?.success}
			<Toast type="success" message="Successfully saved!" />
		{/if}
		{#if form?.invalid}
			<Toast type="error" message="Invalid input." />
		{/if}
	</form>
</HeadingLevel>
