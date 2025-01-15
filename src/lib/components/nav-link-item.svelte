<script lang="ts">
  import { page } from '$app/stores';

  const { link, text }: { link: string; text: string } = $props();
</script>

<a
  href={link}
  class="flex items-center justify-center border-b-2 border-secondary/30 text-secondary transition-colors hover:border-secondary hover:bg-amber-700/5 text-lg"
  class:active={$page.url.pathname.split('/')[1] === link.split('/')[1]}
>
  {text}
</a>

<style>
  a.active {
    @apply text-primary border-primary !bg-amber-700/5;
  }
</style>
