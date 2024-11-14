<script lang="ts">
  import paperTexture from '$lib/images/paper.webp';
  import flowerImage from '$lib/images/flowers.png';
</script>

<main class="bg-tertiary flex size-full flex-col">
  <div class="p-4 md:p-6 max-w-screen-lg w-full mx-auto">
    <div
      style="--bg-image: url({paperTexture})"
      class="relative overflow-clip rounded-md bg-white shadow-xl shadow-neutral-600/10 before:absolute before:inset-0 before:block before:rounded-md before:bg-[image:var(--bg-image)] before:bg-contain before:opacity-25"
    >
      <img
        src={flowerImage}
        alt="Flower"
        class="hidden xs:block absolute opacity-20 top-2/3 w-72 -left-36 sm:w-96 sm:top-1/2 sm:-left-48 md:w-[480px] md:top-1/3 md:-left-60 lg:-left-52"
      />
      <img
        src={flowerImage}
        alt="Flower"
        class="w-72 absolute opacity-20 top-0 -right-36 xs:w-80 xs:-right-40 sm:w-96 sm:-right-48 md:w-[480px] md:-top-8 md:-right-60 lg:-right-40"
      />

      <div class="relative flex flex-col gap-10 p-6">
        <div
          class="flex justify-center gap-1 font-serif text-xl lg:text-2xl leading-6 text-secondary"
        >
          <span>L</span>
          <div class="w-px bg-secondary"></div>
          <span>JH</span>
        </div>

        <div class="mx-auto flex max-w-sm sm:max-w-md lg:max-w-xl flex-col gap-2">
          <span class="font-serif text-primary">casamento</span>
          <div class="xs:w-1/2 xs:justify-end flex items-center gap-6">
            <span class="font-fancy text-6xl sm:text-7xl lg:text-8xl text-secondary">Luiza</span>
            <span class="font-serif-alt text-3xl text-primary">&</span>
          </div>
          <span class="font-fancy xs:text-center text-6xl sm:text-7xl lg:text-8xl text-secondary">
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
  </div>
</main>
