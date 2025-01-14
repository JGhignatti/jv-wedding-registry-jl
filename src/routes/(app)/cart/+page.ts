import { getCartItems } from '$lib/contexts/cart-items.svelte';
import type { Item } from '$lib/local-db/db';
import { items } from '$lib/local-db/db';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  return {
    items: loadItems(),
  };
};

async function loadItems(): Promise<Item[]> {
  const cartItems = getCartItems();

  console.log(cartItems.list);

  return items;
}
