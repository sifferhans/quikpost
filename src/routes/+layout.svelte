<script lang="ts">
	import "../app.css";
	import Container from '$lib/components/Container.svelte';
	import HeadingLevel from "$lib/components/headings/HeadingLevel.svelte";
	import Button from "$lib/components/Button.svelte";
</script>

<header>
	<Container>
		<div class="flex justify-between items-center py-4">
			<strong>SaaS</strong>
			<Button>Log in</Button>
		</div>
	</Container>
</header>

<main>
	<HeadingLevel>
		<Container>
			<slot />
		</Container>
	</HeadingLevel>
</main>

<footer>
	<Container>
		<span>Copyright</span>
	</Container>
</footer>
