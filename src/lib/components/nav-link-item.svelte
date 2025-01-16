<script lang="ts">
  import { page } from '$app/stores';

  const { link, text }: { link: string; text: string } = $props();
</script>

<a
  href={link}
  class="border-deer-600/30 text-deer-600 hover:border-deer-600 hover:bg-deer-100/40 flex items-center justify-center border-b-2 font-serif text-2xl font-bold transition-colors"
  class:active={$page.url.pathname.split('/')[1] === link.split('/')[1]}
>
  {text}
</a>

<style>
  a.active {
    @apply text-shadow-600 border-shadow-600 !bg-deer-100/40;
  }
</style>
