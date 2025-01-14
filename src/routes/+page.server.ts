import { items, type Item } from '$lib/server/local-db/db';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  return {
    previewItems: loadPreviewItems(),
  };
};

async function loadPreviewItems(): Promise<Item[]> {
  return shuffle(items).slice(0, 2);
}

function shuffle(items: Item[]): Item[] {
  const arr = items.map(a => ({...a}));

  let pointer = arr.length;

  while (pointer !== 0) {
    const randomIndex = Math.floor(Math.random() * pointer);

    pointer -= 1;

    [arr[pointer], arr[randomIndex]] = [arr[randomIndex], arr[pointer]];
  }

  return arr;
}
