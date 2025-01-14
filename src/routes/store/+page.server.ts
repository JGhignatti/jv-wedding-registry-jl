import type { Item } from '$lib/server/local-db/db';
import { items } from '$lib/server/local-db/db';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  return {
    items: loadItems(),
  };
};

async function loadItems(): Promise<Item[]> {
  return items;
}
