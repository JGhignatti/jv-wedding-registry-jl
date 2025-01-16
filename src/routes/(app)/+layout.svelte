<script lang="ts">
  import NavLinkItem from '$lib/components/nav-link-item.svelte';
  import { getCartItems } from '$lib/contexts/cart-items.svelte';
  import paperTexture from '$lib/images/paper.webp';

  const { children } = $props();

  const cartItems = getCartItems();
</script>

<nav class="container mx-auto mb-6 max-w-screen-xl px-4 pt-4 xs:mb-8">
  <div
    style="--bg-image: url({paperTexture})"
    class="shadow-deer-400/50 relative overflow-clip rounded-lg bg-white shadow-md before:absolute before:inset-0 before:block before:rounded-md before:bg-[image:var(--bg-image)] before:bg-contain before:opacity-25"
  >
    <div class="relative flex flex-col gap-2 p-4 sm:flex-row sm:gap-4 sm:p-6">
      <div
        class="text-deer-600 flex items-center justify-center gap-2 font-serif text-4xl"
      >
        <span>L</span>
        <div class="bg-shadow-600 h-12 w-[1.5px]"></div>
        <span>JH</span>
      </div>

      <ul class="grid w-full grid-cols-2 items-end gap-4 sm:grid-cols-4">
        <li>
          <NavLinkItem link="/" text="Início" />
        </li>
        <li>
          <NavLinkItem link="/#info" text="Informações" />
        </li>
        <li>
          <NavLinkItem link="/store" text="Loja" />
        </li>
        <li class="relative">
          <NavLinkItem link="/cart" text="Carrinho" />

          {#if cartItems.list.length !== 0}
            <div
              class="absolute -right-1 -top-1 flex size-6 items-center justify-center rounded-full bg-red-500 text-white"
            >
              {cartItems.list.length}
            </div>
          {/if}
        </li>
      </ul>
    </div>
  </div>
</nav>

<main class="container mx-auto max-w-screen-xl px-4">
  {@render children()}
</main>
