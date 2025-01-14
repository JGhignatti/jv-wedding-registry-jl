<script lang="ts">
  import { afterNavigate } from '$app/navigation';
  import { page } from '$app/stores';
  import ArbitraryValueStoreItem from '$lib/components/arbitrary-value-store-item.svelte';
  import StoreItem from '$lib/components/store-item.svelte';
  import { getFooterSnippet } from '$lib/contexts/footer-snippet.svelte';
  import { onMount } from 'svelte';
  import type { PageData } from './$types';
  import { initDropdowns } from 'flowbite';

  const { data }: { data: PageData } = $props();
  let items = $state(data.items);

  let curSort = $state('—');

  getFooterSnippet().snippet = null;

  onMount(() => {
    initDropdowns();
  });

  afterNavigate(() => {
    if (!$page.url.hash) {
      document.getElementById('root--scrollable')?.scrollTo(0, 0);
    }
  });

  function sort(
    direction: 'none' | 'az' | 'za' | 'cheaper' | 'expensive',
  ): void {
    switch (direction) {
      case 'none':
        items = data.items;
        curSort = '—';

        return;
      case 'az':
        items = items.toSorted((a, b) => {
          const aName = a.name.toLocaleLowerCase();
          const bName = b.name.toLocaleLowerCase();

          if (aName < bName) {
            return -1;
          }
          if (aName > bName) {
            return 1;
          }

          return 0;
        });
        curSort = 'Alfabético A-Z';

        return;
      case 'za':
        items = items.toSorted((a, b) => {
          const aName = a.name.toLocaleLowerCase();
          const bName = b.name.toLocaleLowerCase();

          if (aName < bName) {
            return 1;
          }
          if (aName > bName) {
            return -1;
          }

          return 0;
        });
        curSort = 'Alfabético Z-A';

        return;
      case 'cheaper':
        items = items.toSorted((a, b) => {
          const aPrice = a.price;
          const bPrice = b.price;

          if (aPrice < bPrice) {
            return -1;
          }
          if (aPrice > bPrice) {
            return 1;
          }

          return 0;
        });
        curSort = 'Menor preço';

        return;
      case 'expensive':
        items = items.toSorted((a, b) => {
          const aPrice = a.price;
          const bPrice = b.price;

          if (aPrice < bPrice) {
            return 1;
          }
          if (aPrice > bPrice) {
            return -1;
          }

          return 0;
        });
        curSort = 'Maior preço';

        return;
    }
  }
</script>

<div class="flex flex-col justify-center">
  <div class="mx-auto flex max-w-sm flex-col gap-2 px-4 sm:max-w-xl">
    <span class="font-serif text-xl">enxoval de casamento</span>
    <div class="flex items-center gap-6 xs:w-1/2 xs:justify-end">
      <span class="font-serif text-6xl sm:text-8xl"> Luiza </span>
      <span class="font-serif-alt text-3xl sm:text-4xl"> & </span>
    </div>
    <span class="font-serif text-6xl xs:text-center sm:text-8xl">
      João Henrique
    </span>
  </div>
</div>

<div class="flex items-center justify-end gap-2 py-4 md:p-4">
  Ordenar por

  <button
    id="sort-by--button"
    data-dropdown-toggle="sort-by--dropdown"
    data-dropdown-offset-distance="8"
    class="group flex w-44 items-center gap-2 rounded-lg border border-sky-600 bg-white px-4 py-2"
  >
    <span class="grow text-left">{curSort}</span>

    <svg
      class="size-3 shrink-0 transition-colors group-hover:text-sky-600"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 10 6"
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="m1 1 4 4 4-4"
      />
    </svg>
  </button>

  <div
    id="sort-by--dropdown"
    class="z-10 hidden w-44 rounded-lg bg-white shadow"
  >
    <ul class="py-2 text-sm text-gray-700" aria-labelledby="sort-by--button">
      <li>
        <button
          class="flex w-full justify-start px-4 py-2 hover:bg-gray-100 hover:text-sky-600"
          onclick={() => sort('none')}
        >
          —
        </button>
      </li>
      <li>
        <button
          class="flex w-full justify-start px-4 py-2 hover:bg-gray-100 hover:text-sky-600"
          onclick={() => sort('az')}
        >
          Alfabético A-Z
        </button>
      </li>
      <li>
        <button
          class="flex w-full justify-start px-4 py-2 hover:bg-gray-100 hover:text-sky-600"
          onclick={() => sort('za')}
        >
          Alfabético Z-A
        </button>
      </li>
      <li>
        <button
          class="flex w-full justify-start px-4 py-2 hover:bg-gray-100 hover:text-sky-600"
          onclick={() => sort('cheaper')}
        >
          Menor preço
        </button>
      </li>
      <li>
        <button
          class="flex w-full justify-start px-4 py-2 hover:bg-gray-100 hover:text-sky-600"
          onclick={() => sort('expensive')}
        >
          Maior preço
        </button>
      </li>
    </ul>
  </div>
</div>

<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
  <ArbitraryValueStoreItem />

  {#each items as item}
    <StoreItem {item} />
  {/each}
</div>
