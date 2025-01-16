<script lang="ts">
  import type { Item } from '$lib/local-db/db';

  const { item }: { item: Item } = $props();
</script>

<div
  class="flex flex-col gap-4 rounded-lg bg-white p-2 shadow-md shadow-black/10"
>
  <img
    src={item.image}
    alt=""
    class="max-h-[180px] max-w-[266px] shrink-0 self-center rounded-lg border"
  />

  <a href={`/store#${item.id}`} class="contents">
    <h3
      class="grow px-2 text-3xl font-bold underline decoration-sky-200 hover:text-sky-600"
    >
      {item.name}
    </h3>
  </a>

  <h4 class="text-deer-600 self-end px-2 font-sans text-3xl font-semibold">
    {item.priceText}
  </h4>
</div>
