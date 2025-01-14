<script lang="ts">
  import { afterNavigate } from '$app/navigation';
  import { page } from '$app/stores';
  import ArbitraryValueStoreItem from '$lib/components/arbitrary-value-store-item.svelte';
  import SmallLoader from '$lib/components/small-loader.svelte';
  import StoreItem from '$lib/components/store-item.svelte';
  import { getFooterSnippet } from '$lib/contexts/footer-snippet.svelte';
  import type { PageData } from './$types';

  const { data }: { data: PageData } = $props();

  getFooterSnippet().snippet = null;

  afterNavigate(() => {
    if (!$page.url.hash) {
      document.getElementById('root--scrollable')?.scrollTo(0, 0);
    }
  });
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

{#await data.items}
  <SmallLoader />
{:then items}
  <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
    <ArbitraryValueStoreItem />

    {#each items as item}
      <StoreItem {item} />
    {/each}
  </div>
{/await}
