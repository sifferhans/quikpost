<script lang="ts">
  export let href: string
</script>

<a 
  class="hover:underline underline-offset-2"
  {href}
  {...$$restProps}
>
  <slot/>
</a>
