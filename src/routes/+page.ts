export const ssr = false;

import { items, shuffle, type Item } from '$lib/local-db/db';
import type { PageLoad } from './$types';

export const load: PageLoad = () => {
  return {
    previewItems: loadPreviewItems(),
  };
};

function loadPreviewItems(): Item[] {
  return shuffle(items).slice(0, 2);
}
