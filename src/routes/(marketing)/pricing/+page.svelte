<script lang="ts">
	import { fly } from "svelte/transition";

  import Heading from "$lib/components/headings/Heading.svelte";
  import PricingCard from "./PricingCard.svelte";
  import items from './pricing'
</script>

<Heading class="text-4xl lg:text-5xl font-bold mb-10">Pricing</Heading>

<ul class="grid md:grid-cols-3 gap-6 md:gap-8">
  {#each items as item, index}
    <li in:fly={{ y: 15, duration: 500, delay: 100 * index }}>
      <PricingCard {...item} />
    </li>
  {/each}
</ul>