import { getContext, setContext } from 'svelte';
import type { Item } from '$lib/local-db/db';
import { getToasts } from './toasts.svelte';

class CartItems {
  list = $state<Item[]>([]);

  add(item: Item, toasts?: ReturnType<typeof getToasts>): void {
    if (this.has(item.id)) {
      return;
    }

    this.list.push(item);

    toasts?.success(`"<strong>${item.name}</strong>" adicionado ao carrinho!`);
  }

  remove(id: number, toasts?: ReturnType<typeof getToasts>): void {
    const item = this.list.find((it) => it.id === id);
    this.list = this.list.filter((item) => item.id !== id);

    if (item) {
      toasts?.info(`"<strong>${item.name}</strong>" removido do carrinho.`);
    }
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
