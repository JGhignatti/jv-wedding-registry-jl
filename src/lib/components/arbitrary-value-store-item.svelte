<script lang="ts">
  import { Confetti } from 'svelte-confetti';
  import { getToasts } from '$lib/contexts/toasts.svelte';
  import { getCartItems } from '$lib/contexts/cart-items.svelte';
  import image69 from '../images/items/69.png';

  const cartItems = getCartItems();
  const toasts = getToasts();

  const id = 69;
  const name = 'Mandar outro valor para os noivos';

  const hasArbitraryInCart = $derived(cartItems.has(id));
  const arbitraryInCart = $derived(
    hasArbitraryInCart ? cartItems.list.find((item) => item.id === id) : null,
  );
  let price = $state<number | null>(null);
  const isPriceValid = $derived(!!price && price > 0);
  const priceText = $derived(
    arbitraryInCart
      ? arbitraryInCart?.priceText
      : `R$ ${price?.toFixed(2).replace('.', ',') ?? '?'}`,
  );

  function addToCart(): void {
    cartItems.add({
      id,
      image: image69,
      name,
      price: price!,
      priceText: priceText,
    });

    toasts.success(`"<strong>${name}</strong>" adicionado ao carrinho!`);
  }

  function removeFromCart(): void {
    cartItems.remove(id);

    toasts.info(`"<strong>${name}</strong>" removido do carrinho.`);

    price = null;
  }
</script>

<div
  id="69"
  class="flex flex-col gap-2 rounded-lg bg-white p-2 shadow-lg shadow-black/10 sm:gap-4"
>
  <div
    class="flex items-center justify-center gap-4 sm:items-start sm:justify-start md:items-center md:justify-center lg:items-start lg:justify-start"
  >
    <img
      src={image69}
      alt=""
      class="max-h-[180px] max-w-[266px] shrink-0 rounded-lg border"
    />

    <div class="hidden grow flex-col gap-2 pr-2 pt-4 sm:flex md:hidden lg:flex">
      {@render itemInfo()}
    </div>
  </div>

  <div
    class="relative flex grow flex-col gap-2 xs:px-2 xs:pb-2 sm:p-0 md:px-2 md:pb-2 lg:p-0"
  >
    <div class="flex flex-col gap-2 sm:hidden md:flex lg:hidden">
      {@render itemInfo()}
    </div>

    {#if !hasArbitraryInCart}
      <div class="mt-auto flex items-center gap-2">
        <div class="relative grow">
          <input
            type="number"
            bind:value={price}
            placeholder="Digite o valor"
            class="peer h-11 w-full rounded-lg border-2 !border-sky-600 pl-12 focus:outline-none focus:ring-transparent focus-visible:outline-none"
          />

          <div
            class="absolute left-3 top-1/2 -translate-y-1/2 text-xl text-zinc-500 peer-focus:text-sky-600"
          >
            R$
          </div>
        </div>

        <button
          aria-label="Adicionar ao carrinho"
          class="flex shrink-0 items-center justify-center rounded-lg border-2 border-sky-600 p-2 text-sky-600 hover:bg-sky-50 disabled:border-gray-400 disabled:bg-gray-200 disabled:text-gray-400"
          disabled={!isPriceValid}
          onclick={() => addToCart()}
        >
          <svg
            class="size-6"
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
        </button>
      </div>
    {:else}
      <div class="mt-auto flex flex-col items-center">
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
          onclick={() => removeFromCart()}
        >
          clique para remover
        </button>
      </div>
      <div class="absolute bottom-4 left-1/2 -translate-x-1/2">
        <Confetti x={[-1, 1]} y={[-0.25, 1]} amount={100} />
      </div>
    {/if}
  </div>
</div>

{#snippet itemInfo()}
  <a href="/store#69" class="contents">
    <h2
      class="font-serif text-2xl font-bold underline decoration-sky-200 hover:text-sky-600"
    >
      {name}
    </h2>
  </a>

  <h3 class="self-end font-serif-alt text-3xl font-semibold text-secondary">
    {priceText}
  </h3>
{/snippet}
