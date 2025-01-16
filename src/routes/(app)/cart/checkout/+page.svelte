<script lang="ts">
  import { goto } from '$app/navigation';
  import CheckoutInfoForm from '$lib/features/checkout/checkout-info-form.svelte';
  import CheckoutPix from '$lib/features/checkout/checkout-pix.svelte';
  import { getCartItems } from '$lib/contexts/cart-items.svelte';
  import { onMount } from 'svelte';

  const cartItems = getCartItems();

  let userInfo = $state<{ name: string; email: string } | null>(null);

  const infoFormOnContinueFn = (name: string, email: string): void => {
    userInfo = {
      name,
      email,
    };
  };

  onMount(() => {
    if (cartItems.list.length === 0) {
      goto('/cart', { replaceState: true });

      return;
    }
  });
</script>

<a
  href="/cart"
  class="mb-4 flex items-center gap-1 text-sm text-sky-600 underline"
>
  <svg
    class="size-5"
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
      stroke-width="2"
      d="M5 12h14M5 12l4-4m-4 4 4 4"
    />
  </svg>

  <span>voltar para o carrinho</span>
</a>

<div
  class="flex flex-col gap-6 rounded-xl bg-white p-4 shadow-lg shadow-black/10"
>
  <h1 class="font-serif text-4xl font-bold">Checkout</h1>

  {#if userInfo === null}
    <CheckoutInfoForm onContinueFn={infoFormOnContinueFn} />
  {:else}
    <CheckoutPix {userInfo} />
  {/if}
</div>
