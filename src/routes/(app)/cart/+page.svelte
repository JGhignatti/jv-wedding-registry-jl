<script lang="ts">
  import { getCartItems } from '$lib/contexts/cart-items.svelte';
  import { getFooterSnippet } from '$lib/contexts/footer-snippet.svelte';

  getFooterSnippet().snippet = null;

  const cartItems = getCartItems();
  const totalPrice = $derived(
    `R$ ${cartItems.list
      .reduce((acc, cur) => acc + cur.price, 0)
      .toFixed(2)
      .replace('.', ',')}`,
  );

  function remove(id: number): void {
    cartItems.remove(id);
  }
</script>

<div
  class="flex flex-col gap-6 rounded-xl bg-white p-4 shadow-lg shadow-black/10"
>
  <h1 class="font-serif text-4xl font-bold">Carrinho</h1>

  <div class="grid grid-cols-[80px_minmax(0,1fr)_auto_auto] gap-x-2 md:gap-x-4">
    {#each cartItems.list as item}
      <div
        class="col-span-4 grid grid-cols-subgrid gap-y-2 border-b-2 border-secondary/30 py-2 sm:items-center"
      >
        <img src={item.image} alt="" class="rounded-lg border" />

        <div class="col-span-3 font-serif text-xl font-bold sm:col-span-1">
          {item.name}
        </div>

        <div
          class="col-span-3 font-serif-alt text-xl font-semibold text-gray-500 sm:col-span-1"
        >
          {item.priceText}
        </div>

        <button
          class="self-end text-sm text-red-500 underline"
          onclick={() => remove(item.id)}
        >
          remover
        </button>
      </div>
    {:else}
      <div class="col-span-4 text-center text-gray-400">
        Lista vazia, volte para a <a href="/store" class="text-sky-400">Loja</a>
        e adicione itens no seu carrinho.
      </div>
    {/each}
  </div>

  <div class="flex justify-end xs:px-4">
    <h2 class="text-xl xs:text-2xl">
      Valor total <span
        class="font-serif-alt text-2xl font-bold text-secondary xs:text-3xl"
      >
        {totalPrice}
      </span>
    </h2>
  </div>

  <a
    href={cartItems.list.length === 0 ? null : '/cart/checkout'}
    class="rounded-xl bg-sky-600 px-4 py-2 text-center text-2xl text-white transition-colors hover:bg-sky-500"
    class:disabled={cartItems.list.length === 0}
  >
    Checkout
  </a>
</div>

<style>
  a.disabled {
    @apply bg-gray-200 text-gray-400 cursor-not-allowed;
  }
</style>
