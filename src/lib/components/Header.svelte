<script lang="ts">
	import { page } from '$app/stores'

	import Container from '$lib/components/Container.svelte'
	import Button from '$lib/components/Button.svelte'
	import Link from '$lib/components/Link.svelte'
	import { invalidateAll } from '$app/navigation'
	import { applyAction, enhance } from '$app/forms'

	const items = [
		{ slug: '/pricing', title: 'Pricing' },
		{ slug: '/faq', title: 'FAQ' },
	]
</script>

<header>
	<Container>
		<div class="flex items-center justify-between py-8">
			<a href="/">
				<strong>SaaS Name</strong>
			</a>
			<nav class="flex items-center gap-10">
				{#if !$page.data.user}
					{#each items as item}
						<Link href={item.slug}>{item.title}</Link>
					{/each}
					<Link href="/login">Log in</Link>
					<Button tag="a" href="/register">Register</Button>
				{/if}

				{#if $page.data.user}
					<Link href="/dashboard">Dashboard</Link>
					<form
						action="/logout"
						method="post"
						use:enhance={() => {
							return async ({ result }) => {
								invalidateAll()
								applyAction(result)
							}
						}}
					>
						<Button theme="secondary" type="submit">Log out</Button>
					</form>
				{/if}
			</nav>
		</div>
	</Container>
</header>
