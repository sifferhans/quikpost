<script lang="ts">
	import Header from '$lib/components/Header.svelte'
	import Footer from '$lib/components/Footer.svelte'

	export const prerender = true
</script>

<Header slot="header" />
<slot />
<Footer slot="footer" />
