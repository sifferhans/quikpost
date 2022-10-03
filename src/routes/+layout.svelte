<script lang="ts">
	import { page } from '$app/stores'

	import "../app.css";
	import Container from '$lib/components/Container.svelte';
	import HeadingLevel from "$lib/components/headings/HeadingLevel.svelte";

	import Header from "$lib/components/Header.svelte";
	import Footer from "$lib/components/Footer.svelte";
</script>

<Header/>
<main class="flex-grow">
	<HeadingLevel>
		<Container>
			{#key $page.url }
				<slot  />
			{/key}
		</Container>
	</HeadingLevel>
</main>
<Footer/>
