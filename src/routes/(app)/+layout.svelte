<script lang="ts">
	import "../app.css";
	import Container from '$lib/components/Container.svelte';
</script>

<header>
	<Container>
		<strong>SaaS</strong>
	</Container>
</header>

<main>
	<Container>
    <slot />
  </Container>
</main>
