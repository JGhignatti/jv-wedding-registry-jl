<script lang="ts">
  import Separator from '$lib/components/separator.svelte';
  import { onMount } from 'svelte';
  import type { PageData } from './$types';
  import { initDropdowns } from 'flowbite';
  import StoreItem from '$lib/features/store/store-item.svelte';
  import ArbitraryValueStoreItem from '$lib/features/store/arbitrary-value-store-item.svelte';
  import { afterNavigate } from '$app/navigation';
  import { page } from '$app/stores';

  const { data }: { data: PageData } = $props();

  const sortOptions = [
    {
      text: '-',
      value: 'none' as const,
    },
    {
      text: 'Alfabética A-Z',
      value: 'az' as const,
    },
    {
      text: 'Alfabética Z-A',
      value: 'za' as const,
    },
    {
      text: 'Menor preço',
      value: 'cheaper' as const,
    },
    {
      text: 'Maior preço',
      value: 'expensive' as const,
    },
  ];

  let sort = $state<'none' | 'az' | 'za' | 'cheaper' | 'expensive'>('none');
  const sortText = $derived(sortOptions.find((o) => o.value === sort)?.text);
  const items = $derived.by(() => {
    switch (sort) {
      case 'none':
        return data.items;
      case 'az':
        return data.items.toSorted((a, b) => {
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
      case 'za':
        return data.items.toSorted((a, b) => {
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
      case 'cheaper':
        return data.items.toSorted((a, b) => {
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
      case 'expensive':
        return data.items.toSorted((a, b) => {
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
    }
  });

  onMount(() => {
    initDropdowns();
  });

  afterNavigate(() => {
    if (!$page.url.hash) {
      document.getElementById('root--scrollable')?.scrollTo(0, 0);
    }
  });
</script>

<div class="mx-auto w-full max-w-screen-sm px-4">
  <p class="font-serif text-2xl font-bold text-shadow-600">
    enxoval de casamento
  </p>

  <div
    class="flex flex-col items-center justify-center font-script text-7xl text-deer-600 sm:grid sm:grid-cols-[1fr_auto_2fr] sm:gap-x-4"
  >
    <span class="sm:justify-self-end">Luiza</span>
    <span class="text-shadow-600">&</span>
    <span
      class="text-center sm:col-span-2 sm:col-start-2 sm:row-start-2 sm:text-left"
    >
      João Henrique
    </span>
  </div>
</div>

<Separator />

<div class="flex items-center justify-end gap-2 py-4 md:p-4">
  Ordenar por

  <button
    id="sort-by--button"
    data-dropdown-toggle="sort-by--dropdown"
    data-dropdown-offset-distance="8"
    class="group flex w-44 items-center gap-2 rounded-lg border border-sky-600 bg-white px-4 py-2"
  >
    <span class="grow text-left">{sortText}</span>

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
      {#each sortOptions as option}
        <li>
          <button
            class="flex w-full justify-start px-4 py-2 hover:bg-zinc-100 hover:text-sky-600"
            onclick={() => (sort = option.value)}
          >
            {option.text}
          </button>
        </li>
      {/each}
    </ul>
  </div>
</div>

<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
  <ArbitraryValueStoreItem />

  {#each items as item}
    <StoreItem {item} />
  {/each}
</div>
