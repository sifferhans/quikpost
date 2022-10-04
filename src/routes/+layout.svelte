<script lang="ts">
	import '../app.css'
	import Container from '$lib/components/Container.svelte'
	import HeadingLevel from '$lib/components/headings/HeadingLevel.svelte'
	import Header from '$lib/components/Header.svelte'
	import Footer from '$lib/components/Footer.svelte'
</script>

<Header />

<main class="flex-grow">
	<HeadingLevel>
		<Container>
			<slot />
		</Container>
	</HeadingLevel>
</main>

<Footer />
