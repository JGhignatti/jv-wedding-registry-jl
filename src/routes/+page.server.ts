import type { Item } from '$lib/server/db/schema';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  return {
    previewItems: loadPreviewItems(),
  };
};

async function loadPreviewItems(): Promise<Item[]> {
	const res = await fetch('https://picsum.photos/v2/list?limit=3');
  const items = (await res.json()) as { id: number, download_url: string, author: string }[];

  return items.map(item => ({
    id: item.id,
    imageUrl: item.download_url,
    name: item.author,
  }));
}
