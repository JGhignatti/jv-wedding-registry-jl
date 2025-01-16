<script lang="ts">
  import { Confetti } from 'svelte-confetti';
  import type { Item } from '$lib/local-db/db';
  import { getToasts } from '$lib/contexts/toasts.svelte';
  import { getCartItems } from '$lib/contexts/cart-items.svelte';
  import Button from '../../components/button.svelte';

  const { item }: { item: Item } = $props();

  const cartItems = getCartItems();
  const toasts = getToasts();

  function addToCart(item: Item): void {
    cartItems.add(item, toasts);
  }

  function removeFromCart(item: Item): void {
    cartItems.remove(item.id, toasts);
  }
</script>

<div
  id={item.id.toString()}
  class="relative flex flex-col gap-4 rounded-lg bg-white p-2 shadow-md shadow-black/10"
>
  <div class="flex grow flex-col gap-4 sm:flex-row md:flex-col lg:flex-row">
    <img
      src={item.image}
      alt=""
      class="max-h-[180px] max-w-[266px] shrink-0 self-center rounded-lg border"
    />

    <div class="contents grow flex-col sm:flex">
      <a href={`/store#${item.id}`} class="contents">
        <h3
          class="grow px-2 font-serif text-3xl font-bold underline decoration-sky-200 hover:text-sky-600"
        >
          {item.name}
        </h3>
      </a>

      <h4 class="text-deer-600 self-end px-2 font-sans text-3xl font-semibold">
        {item.priceText}
      </h4>
    </div>
  </div>

  {#if !cartItems.has(item.id)}
    <Button type="secondary" onClick={() => addToCart(item)}>
      <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2.5"
          d="M5 12h14m-7 7V5"
        />
      </svg>

      <span>Adicionar ao carrinho</span>
    </Button>
  {:else}
    <div class="flex flex-col items-center">
      <div class="flex items-center gap-1 text-zinc-500">
        <svg
          class="size-6"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fill-rule="evenodd"
            d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z"
            clip-rule="evenodd"
          />
        </svg>

        <span class="text-lg">Adicionado ao carrinho</span>

        <svg
          class="size-6"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fill-rule="evenodd"
            d="M4 4a1 1 0 0 1 1-1h1.5a1 1 0 0 1 .979.796L7.939 6H19a1 1 0 0 1 .979 1.204l-1.25 6a1 1 0 0 1-.979.796H9.605l.208 1H17a3 3 0 1 1-2.83 2h-2.34a3 3 0 1 1-4.009-1.76L5.686 5H5a1 1 0 0 1-1-1Z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <button
        class="text-sm text-red-500/80 underline"
        onclick={() => removeFromCart(item)}
      >
        clique para remover
      </button>
    </div>
    <div class="absolute bottom-4 left-1/2 -translate-x-1/2">
      <Confetti x={[-1, 1]} y={[-0.25, 1]} amount={100} />
    </div>
  {/if}
</div>
