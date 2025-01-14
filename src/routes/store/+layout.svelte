<script lang="ts">
  import NavLinkItem from '$lib/components/nav-link-item.svelte';
  import paperTexture from '$lib/images/paper.webp';

  const { children } = $props();
</script>

<nav class="container mx-auto mb-6 max-w-screen-xl px-4 pt-4 xs:mb-8">
  <div
    style="--bg-image: url({paperTexture})"
    class="relative overflow-clip rounded-md bg-white shadow-xl shadow-neutral-600/10 before:absolute before:inset-0 before:block before:rounded-md before:bg-[image:var(--bg-image)] before:bg-contain before:opacity-25"
  >
    <div class="relative flex flex-col gap-2 p-4 sm:flex-row sm:gap-4 sm:p-6">
      <div
        class="flex justify-center gap-[5px] font-serif text-4xl leading-10 text-secondary"
      >
        <span>L</span>
        <div class="w-[2px] bg-secondary"></div>
        <span>JH</span>
      </div>

      <ul class="grid w-full grid-cols-2 items-end gap-4 sm:grid-cols-4">
        <li>
          <NavLinkItem link="/" text="Início" />
        </li>
        <li>
          <NavLinkItem link="/#info" text="Informações" />
        </li>
        <li>
          <NavLinkItem link="/store" text="Loja" />
        </li>
        <li>
          <NavLinkItem link="/cart" text="Carrinho" />
        </li>
      </ul>
    </div>
  </div>
</nav>

<main class="container mx-auto max-w-screen-xl px-4">
  {@render children()}
</main>
