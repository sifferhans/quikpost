<script lang="ts">
	import { getContext, setContext } from "svelte";

  const parentLevel = getContext<number>('heading-level')
  const newLevel = parentLevel ? parentLevel + 1 : 1
  setContext<number>('heading-level', Math.min(newLevel, 4))
</script>

<slot/>