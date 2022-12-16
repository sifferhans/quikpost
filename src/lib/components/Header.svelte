<script lang="ts">
	import { page } from '$app/stores'
	import { invalidateAll } from '$app/navigation'
	import { applyAction, enhance } from '$app/forms'

	import Container from '$lib/components/Container.svelte'
	import Button from '$lib/components/Button.svelte'
	import Link from '$lib/components/Link.svelte'
	import { Lock } from 'tabler-icons-svelte'

	const items = [{ slug: '/pricing', title: 'Pricing' }]
</script>

<header class="bg-white">
	<Container>
		<div class="flex items-center justify-between py-8">
			<a href="/" data-sveltekit-preload-data>
				<strong>Quikpost</strong>
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
					<Link href="/settings">Settings</Link>
					{#if $page.data.user.role === 'ADMIN'}
						<Link href="/admin">
							Admin
							<Lock size={16} />
						</Link>
					{/if}
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
