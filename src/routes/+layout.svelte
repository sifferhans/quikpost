<script lang="ts">
	import '../app.css'
	import Container from '$lib/components/Container.svelte'
	import HeadingLevel from '$lib/components/headings/HeadingLevel.svelte'
</script>

<svelte:head>
	<title>Quikpost</title>
</svelte:head>

<slot name="header" />

<main class="flex-grow">
	<HeadingLevel>
		<Container>
			<slot />
		</Container>
	</HeadingLevel>
</main>

<slot name="footer" />
