<script lang="ts">
  import '../app.css';

  let { children } = $props();
</script>

<svelte:head>
  <title>Luiza & João Henrique - Casamento</title>
  <meta name="description" content="Luiza & João Henrique - Casamento" />
</svelte:head>

{@render children()}
