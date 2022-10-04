<script lang="ts">
	import Container from '$lib/components/Container.svelte'
	import Button from '$lib/components/Button.svelte'
	import Link from '$lib/components/Link.svelte'

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
			<nav>
				<ul class="flex items-center gap-8">
					{#each items as item}
						<li>
							<Link href={item.slug}>{item.title}</Link>
						</li>
					{/each}
					<li>
						<Button tag="a" href="/login">Log in</Button>
					</li>
				</ul>
			</nav>
		</div>
	</Container>
</header>
