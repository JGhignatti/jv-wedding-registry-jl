<script lang="ts">
  import type { PageData } from './$types';
  import paperTexture from '$lib/images/paper.webp';
  import flowersBrownImage from '$lib/images/flowers-brown.png';
  import flowersGreenImage from '$lib/images/flowers-green.png';
  import SmallLoader from '$lib/components/small-loader.svelte';
  import RsvpWppButton from '$lib/components/rsvp-wpp-button.svelte';
  import AddToCalendarButton from '$lib/components/add-to-calendar-button.svelte';
  import { onMount } from 'svelte';
  import { footerSnippet } from '$lib/contexts/footer-snippet.svelte';
  import PreviewItem from '$lib/components/preview-item.svelte';

  let { data }: { data: PageData } = $props();

  onMount(() => {
    footerSnippet.snippet = footer;
  });
</script>

<header
  class="mx-auto w-full max-w-screen-lg shrink-0 px-4 pb-6 pt-4 md:px-6 md:pt-6"
>
  <div
    style="--bg-image: url({paperTexture})"
    class="relative overflow-clip rounded-md bg-white shadow-xl shadow-neutral-600/10 before:absolute before:inset-0 before:block before:rounded-md before:bg-[image:var(--bg-image)] before:bg-contain before:opacity-25"
  >
    <img
      src={flowersBrownImage}
      alt="Flowers"
      class="absolute -left-36 top-2/3 w-72 opacity-20 sm:-left-48 sm:top-1/2 sm:w-96 md:-left-60 md:top-1/3 md:w-[480px] lg:-left-52"
    />
    <img
      src={flowersBrownImage}
      alt="Flowers"
      class="absolute -right-36 top-0 w-72 opacity-20 xs:-right-40 xs:w-80 sm:-right-48 sm:w-96 md:-right-60 md:-top-8 md:w-[480px] lg:-right-40"
    />

    <div class="relative flex flex-col gap-10 p-6">
      <div
        class="flex justify-center gap-1 font-serif text-xl leading-6 text-secondary lg:text-2xl"
      >
        <span>L</span>
        <div class="w-px bg-secondary"></div>
        <span>JH</span>
      </div>

      <div class="mx-auto flex max-w-sm flex-col gap-2 sm:max-w-xl">
        <span class="font-serif text-primary">casamento</span>
        <div class="flex items-center gap-6 xs:w-1/2 xs:justify-end">
          <span class="font-fancy text-6xl text-secondary sm:text-8xl">
            Luiza
          </span>
          <span class="font-serif-alt text-3xl text-primary sm:text-4xl">
            &
          </span>
        </div>
        <span
          class="font-fancy text-6xl text-secondary xs:text-center sm:text-8xl"
        >
          João Henrique
        </span>
      </div>

      <div class="flex flex-col items-center gap-2">
        <span class="font-serif text-xl text-primary">
          12 de abril de 2025
        </span>
        <span class="text-center font-sans text-primary">
          Jardim Babylonia<br />
          Viamão, RS
        </span>
      </div>
    </div>
  </div>
</header>

<div
  class="w-full shrink-0 bg-tertiary/95 bg-[image:var(--bg-image)] bg-cover bg-bottom bg-no-repeat py-6 bg-blend-lighten sm:bg-left md:bg-contain md:bg-right"
  style="--bg-image: url({flowersGreenImage})"
>
  <main
    class="mx-auto flex size-full max-w-screen-lg flex-col gap-8 px-4 md:px-6"
  >
    <div class="flex w-full flex-col items-center gap-6">
      <div>
        <h2 class="mb-6 text-center font-serif text-2xl font-bold uppercase">
          Presenteie os noivos!
        </h2>

        <p class="max-w-2xl text-center text-lg">
          Sua presença já é nosso maior presente, mas se desejar nos surpreender
          com algo a mais, temos uma lista de presentes preparada especialmente
          para vocês.
        </p>
        <p class="mt-2 max-w-2xl text-center text-sm">
          Clique no link da loja abaixo e escolha entre uma ou mais opções!
        </p>
      </div>

      {#await data.previewItems}
        <SmallLoader />
      {:then previewItems}
        <div
          class="grid w-full max-w-screen-md grid-cols-1 items-center gap-4 md:grid-cols-3"
        >
          {#each previewItems as item}
            <PreviewItem item={item} />
          {/each}
        </div>
      {/await}

      <a
        href="/store"
        class="relative flex items-center gap-2 rounded-full bg-white/60 px-4 py-2 font-serif text-xl transition-colors hover:bg-white hover:text-sky-600"
      >
        <svg
          class="size-6"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fill-rule="evenodd"
            d="M5.535 7.677c.313-.98.687-2.023.926-2.677H17.46c.253.63.646 1.64.977 2.61.166.487.312.953.416 1.347.11.42.148.675.148.779 0 .18-.032.355-.09.515-.06.161-.144.3-.243.412-.1.111-.21.192-.324.245a.809.809 0 0 1-.686 0 1.004 1.004 0 0 1-.324-.245c-.1-.112-.183-.25-.242-.412a1.473 1.473 0 0 1-.091-.515 1 1 0 1 0-2 0 1.4 1.4 0 0 1-.333.927.896.896 0 0 1-.667.323.896.896 0 0 1-.667-.323A1.401 1.401 0 0 1 13 9.736a1 1 0 1 0-2 0 1.4 1.4 0 0 1-.333.927.896.896 0 0 1-.667.323.896.896 0 0 1-.667-.323A1.4 1.4 0 0 1 9 9.74v-.008a1 1 0 0 0-2 .003v.008a1.504 1.504 0 0 1-.18.712 1.22 1.22 0 0 1-.146.209l-.007.007a1.01 1.01 0 0 1-.325.248.82.82 0 0 1-.316.08.973.973 0 0 1-.563-.256 1.224 1.224 0 0 1-.102-.103A1.518 1.518 0 0 1 5 9.724v-.006a2.543 2.543 0 0 1 .029-.207c.024-.132.06-.296.11-.49.098-.385.237-.85.395-1.344ZM4 12.112a3.521 3.521 0 0 1-1-2.376c0-.349.098-.8.202-1.208.112-.441.264-.95.428-1.46.327-1.024.715-2.104.958-2.767A1.985 1.985 0 0 1 6.456 3h11.01c.803 0 1.539.481 1.844 1.243.258.641.67 1.697 1.019 2.72a22.3 22.3 0 0 1 .457 1.487c.114.433.214.903.214 1.286 0 .412-.072.821-.214 1.207A3.288 3.288 0 0 1 20 12.16V19a2 2 0 0 1-2 2h-6a1 1 0 0 1-1-1v-4H8v4a1 1 0 0 1-1 1H6a2 2 0 0 1-2-2v-6.888ZM13 15a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2Z"
            clip-rule="evenodd"
          />
        </svg>

        <span class="font-bold">Ir para a loja</span>
      </a>
    </div>

    <div
      id="info"
      class="mx-auto flex w-full max-w-screen-xs flex-col items-center gap-4"
    >
      <h2 class="self-start font-serif text-xl font-bold xs:text-2xl">
        Quando:
      </h2>

      <p
        class="mb-4 text-center font-serif text-3xl font-bold xs:text-5xl"
        style="text-shadow: 0 4px 0 white;"
      >
        12 de abril de 2025
      </p>

      <AddToCalendarButton />
    </div>

    <div
      class="mx-auto flex w-full max-w-screen-xs flex-col items-center gap-4"
    >
      <h2 class="self-start font-serif text-xl font-bold xs:text-2xl">
        Confirme sua presença:
      </h2>

      <h3 class="text-center uppercase">
        Confirme a sua presença com a nossa cerimonialista até dia <b>
          23 de Março de 2025
        </b>.*
      </h3>

      <RsvpWppButton />

      <p class="mt-4 text-center text-xs">
        Caso você seja vegano ou vegetariano, por favor, nos avise para que
        possamos ajustar o cardápio especialmente para você.
      </p>
    </div>

    <div
      class="mx-auto flex w-full max-w-screen-lg flex-col gap-4 sm:flex-row-reverse lg:grid lg:grid-cols-7"
    >
      <div
        class="mx-auto flex max-w-screen-xs flex-col justify-center gap-4 lg:col-span-4 lg:max-w-screen-sm"
      >
        <h2 class="font-serif text-xl font-bold xs:text-2xl sm:text-center">
          Como chegar:
        </h2>

        <p class="text-center">
          Jardim Babylônia<br />
          Estrada Cel. Acrísio Martins Prates, Beco do Fiúza, 1303,<br />
          Viamão - RS, 94430-265
        </p>

        <a
          href="https://www.google.com/maps/place/Jardim+Babyl%C3%B4nia/@-30.100533,-51.0199874,15z/data=!4m2!3m1!1s0x0:0x2c8aac428cc399f0?sa=X&ved=1t:2428&ictx=111"
          target="_blank"
          class="flex w-fit items-center gap-2 self-center rounded-full bg-white/60 px-4 py-2 font-serif text-xl transition-colors hover:bg-white hover:text-sky-600"
        >
          <svg
            class="size-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fill-rule="evenodd"
              d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z"
              clip-rule="evenodd"
            />
          </svg>

          <span class="font-bold">Rotas</span>
        </a>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3451.7783744634557!2d-51.022562323446934!3d-30.100532974895415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951998a38b70adf1%3A0x2c8aac428cc399f0!2sJardim%20Babyl%C3%B4nia!5e0!3m2!1spt-BR!2sbr!4v1731890017015!5m2!1spt-BR!2sbr"
        class="aspect-square w-full lg:-order-1 lg:col-span-3"
        title="Jardim Babylônia Google Maps"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </main>
</div>

{#snippet footer()}
  <p class="text-xs">
    * Por questões de organização e segurança, somente os convidados que
    confirmarem presença poderão participar do evento.
  </p>
{/snippet}
