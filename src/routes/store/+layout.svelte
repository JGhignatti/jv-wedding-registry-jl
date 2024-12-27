<script lang="ts">
  import { page } from '$app/stores';
  import paperTexture from '$lib/images/paper.webp';

  let { children } = $props();
</script>

<nav class="container mx-auto max-w-screen-xl px-4 pt-4 mb-6 xs:mb-8">
  <div
    style="--bg-image: url({paperTexture})"
    class="relative overflow-clip rounded-md bg-white shadow-xl shadow-neutral-600/10 before:absolute before:inset-0 before:block before:rounded-md before:bg-[image:var(--bg-image)] before:bg-contain before:opacity-25"
  >
    <div class="relative flex flex-col gap-2 p-4 md:flex-row md:gap-4 md:p-6">
      <div
        class="flex justify-center gap-[5px] font-serif text-4xl leading-10 text-secondary"
      >
        <span>L</span>
        <div class="w-[2px] bg-secondary"></div>
        <span>JH</span>
      </div>

      <ul class="grid w-full grid-cols-2 gap-4 xs:grid-cols-4 items-end">
        <li>
          <a
            href="/"
            class="flex items-center justify-center border-b-2 border-secondary/30 text-secondary transition-colors hover:border-sky-600/30 hover:text-sky-600 hover:bg-amber-700/5"
          >
            Início
          </a>
        </li>
        <li>
          <a
            href="/#info"
            class="flex items-center justify-center border-b-2 border-secondary/30 text-secondary transition-colors hover:border-sky-600/30 hover:text-sky-600 hover:bg-amber-700/5"
          >
            Informações
          </a>
        </li>
        <li>
          <a
            href="/store"
            class="flex items-center justify-center border-b-2 border-secondary/30 text-secondary transition-colors hover:border-sky-600/30 hover:text-sky-600 hover:bg-amber-700/5"
            class:active={$page.url.pathname === '/store'}
          >
            Loja
          </a>
        </li>
        <li>
          <a
            href="/cart"
            class="flex items-center justify-center border-b-2 border-secondary/30 text-secondary transition-colors hover:border-sky-600/30 hover:text-sky-600 hover:bg-amber-700/5"
          >
            Carrinho
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<main class="container mx-auto max-w-screen-xl px-4">
  {@render children()}
</main>

<style>
  a.active {
    @apply !text-primary !border-primary/30 !bg-amber-700/5;
  }
</style>
