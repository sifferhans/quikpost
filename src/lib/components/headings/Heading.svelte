<script lang="ts">
	import { getContext } from "svelte";

  const level = getContext('heading-level')
  const el = `h${level}`
</script>

<svelte:element this={el}>
  <slot/>
</svelte:element>