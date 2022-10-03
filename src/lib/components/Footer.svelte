<script lang="ts">
  import Container from "$lib/components/Container.svelte";
</script>

<footer class="py-6">
  <Container>
    <span>Copyright &copy;</span>
    <span>{new Date().getFullYear()}</span>
  </Container>
</footer>