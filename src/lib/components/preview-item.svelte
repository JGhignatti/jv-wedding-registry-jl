<script lang="ts">
  import type { Item } from "$lib/server/db/schema";

  let { item }: { item: Item } = $props();
</script>

<a
  href="/store/{item.id}"
  class="group relative mx-auto grid w-full max-w-96 grid-rows-[minmax(0,1fr),56px] bg-white shadow-lg drop-shadow-lg hover:text-sky-600"
>
  <div class="p-4 pb-0">
    <div
      style="--bg-image: url({item.imageUrl})"
      class="size-full h-64 bg-[image:var(--bg-image)] bg-cover bg-center"
    ></div>
  </div>

  <div
    class="absolute inset-x-0 bottom-0 flex h-14 flex-col justify-center gap-1 bg-white px-4 transition-all group-hover:h-auto group-hover:py-4"
  >
    <h3
      class="truncate text-center font-serif font-bold group-hover:line-clamp-2 group-hover:hidden"
    >
      Passagem pra Napoles para 2 pessoas
    </h3>
    <h3
      class="line-clamp-3 hidden text-center font-serif font-bold group-hover:block"
    >
      Passagem pra Napoles para 2 pessoas
    </h3>

    <div class="hidden text-center text-sm underline group-hover:block">
      ver item
    </div>
  </div>
</a>
