<script lang="ts">
  import type { PageData } from './$types';
  import paperTexture from '$lib/images/paper.webp';
  import FrameCorner from '$lib/features/landing/frame-corner.svelte';
  import FlowerSeparator from '$lib/features/landing/flower-separator.svelte';
  import LandingSection from '$lib/features/landing/landing-section.svelte';
  import PreviewItem from '$lib/features/landing/preview-item.svelte';
  import Button from '$lib/features/landing/button.svelte';
  import Separator from '$lib/components/separator.svelte';
  import AddToCalendarButton from '$lib/features/landing/add-to-calendar-button.svelte';

  const { data }: { data: PageData } = $props();
</script>

<header class="mx-auto w-full max-w-screen-lg p-4">
  <div
    style="--bg-image: url({paperTexture})"
    class="shadow-deer-400/50 relative overflow-clip rounded-lg bg-white shadow-md before:absolute before:inset-0 before:block before:rounded-md before:bg-[image:var(--bg-image)] before:bg-contain before:opacity-25"
  >
    <FrameCorner
      type="secondary"
      classes="size-16 sm:size-24 absolute left-2 top-2"
    />
    <FrameCorner
      type="primary"
      classes="size-24 xs:size-28 sm:size-44 absolute top-0 right-0 rotate-180"
    />
    <FrameCorner
      type="secondary"
      classes="size-16 sm:size-24 absolute bottom-2 right-2 rotate-180"
    />
    <FrameCorner
      type="primary"
      classes="size-24 xs:size-28 sm:size-44 absolute left-0 bottom-0"
    />

    <div
      class="relative flex flex-col items-center justify-center gap-6 px-4 pb-4 pt-10"
    >
      <div
        class="text-deer-600 font-script flex flex-col items-center text-8xl"
      >
        <span>Luiza</span>
        <span class="text-shadow-600">&</span>
        <span class="text-center">João Henrique</span>
      </div>

      <div class="font-script flex w-full max-w-96 flex-col items-center">
        <FlowerSeparator classes="w-full h-auto -mb-2 xs:-mb-6" />

        <span class="text-shadow-600 text-5xl">12.04.2025</span>

        <FlowerSeparator classes="w-full h-auto -mt-2 -scale-x-[1]" />
      </div>

      <div
        class="text-deer-600 flex items-center justify-center gap-2 font-serif text-4xl"
      >
        <span>L</span>
        <div class="bg-shadow-600 h-12 w-[1.5px]"></div>
        <span>JH</span>
      </div>
    </div>
  </div>
</header>

<Separator />

<LandingSection title="Presenteie os noivos!">
  <p class="text-center">
    Sua presença já é nosso maior presente, mas se desejar nos surpreender com
    algo a mais, temos uma lista de presentes preparada especialmente para
    vocês.
  </p>

  <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
    {#each data.previewItems as item}
      <PreviewItem {item} />
    {/each}
  </div>

  <p class="text-center">Entre na loja e escolha entre mais opções!</p>

  <div class="flex justify-center">
    <Button href="/store" target="_self">
      <svg
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

      <span>Ir para a loja</span>
    </Button>
  </div>
</LandingSection>

<LandingSection title="Confirme sua presença">
  <p class="text-center">
    Confirme a sua presença com a nossa cerimonialista até dia<br />
    <span class="decoration-deer-800 text-deer-800 underline">
      23 de Março de 2025
    </span>.
  </p>

  <div class="flex justify-center">
    <Button
      href="https://wa.me/5551996787876?text=Ol%C3%A1,%20Adriana,%20gostaria%20de%20confirmar%20minha%20presen%C3%A7a%20no%20casamento%20da%20Luiza%20e%20do%20Jo%C3%A3o%20Henrique,%20dia%2012%20de%20Abril%20de%202025,%20no%20Jardim%20Babylonia.%0AMeu%20nome%20completo%20%C3%A9%20___%20e%20meu(s)%20acompanhante(s)%20s%C3%A3o%20___."
      target="_blank"
    >
      <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          fill-rule="evenodd"
          d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z"
          clip-rule="evenodd"
        />
        <path
          fill="currentColor"
          d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"
        />
      </svg>

      <span>Confirmar presença</span>
    </Button>
  </div>

  <ul class="list-inside list-disc text-lg text-zinc-600 sm:px-8">
    <li>
      Caso você seja vegano ou vegetariano, por favor, nos avise para que
      possamos ajustar o cardápio especialmente para você.
    </li>
    <li>
      Por questões de organização e segurança, somente os convidados que
      confirmarem presença poderão participar do evento.
    </li>
  </ul>
</LandingSection>

<LandingSection title="Informações" id="info">
  <p class="text-center">
    <span class="text-deer-600 text-4xl">12 de Abril de 2025</span><br />
    <span class="text-shadow-600 text-3xl">Sábado, às 16h30</span>
  </p>

  <div class="flex justify-center">
    <AddToCalendarButton />
  </div>

  <div class="flex flex-col gap-4 sm:grid sm:grid-cols-2">
    <div class="flex flex-col items-center justify-center gap-4">
      <p class="text-shadow-600 text-center">
        Jardim Babylônia<br />
        Estrada Cel. Acrísio Martins Prates,<br />
        Beco do Fiúza, 1303<br />
        Viamão - RS
      </p>

      <Button
        href="https://www.google.com/maps/place/Jardim+Babyl%C3%B4nia/@-30.100533,-51.0199874,15z/data=!4m2!3m1!1s0x0:0x2c8aac428cc399f0?sa=X&ved=1t:2428&ictx=111"
        target="_blank"
      >
        <svg
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

        <span>Rotas</span>
      </Button>
    </div>

    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3451.7783744634557!2d-51.022562323446934!3d-30.100532974895415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951998a38b70adf1%3A0x2c8aac428cc399f0!2sJardim%20Babyl%C3%B4nia!5e0!3m2!1spt-BR!2sbr!4v1731890017015!5m2!1spt-BR!2sbr"
      class="border-deer-600 aspect-square w-full rounded-lg border-2 sm:-order-1"
      title="Jardim Babylônia Google Maps"
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</LandingSection>

<Separator />
