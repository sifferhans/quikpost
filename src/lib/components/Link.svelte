<script lang="ts">
	export let href: string
</script>

<a class="underline-offset-2 hover:underline" {href} {...$$restProps}>
	<slot />
</a>
