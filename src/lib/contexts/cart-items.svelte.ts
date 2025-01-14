import { getContext, setContext } from 'svelte';
import type { Item } from '$lib/local-db/db';

class CartItems {
  list = $state<Item[]>([]);

  add(item: Item): void {
    this.remove(item.id);

    this.list.push(item);
  }

  remove(id: number): void {
    this.list = this.list.filter((item) => item.id !== id);
  }

  has(id: number): boolean {
    return this.list.findIndex((item) => item.id === id) >= 0;
  }
}

const cartItemsKey = Symbol('CartItems');

export function setCartItems(): void {
  setContext(cartItemsKey, new CartItems());
}

export function getCartItems(): CartItems {
  return getContext(cartItemsKey);
}
