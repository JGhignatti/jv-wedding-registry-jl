export const ssr = false;

import type { Item } from '$lib/local-db/db';
import { items, shuffle } from '$lib/local-db/db';
import type { PageLoad } from './$types';

export const load: PageLoad = () => {
  return {
    items: loadItems(),
  };
};

function loadItems(): Item[] {
  return shuffle(items);
}
