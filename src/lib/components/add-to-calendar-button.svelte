<script lang="ts">
  import { initDropdowns } from 'flowbite';
  import { onMount } from 'svelte';

  onMount(() => {
    initDropdowns();
  });
</script>

<button
  id="add-to-calendar--button"
  data-dropdown-toggle="add-to-calendar--dropdown"
  class="relative flex items-center gap-2 rounded-full border border-sky-600 bg-white px-4 py-2 font-serif text-xl transition-colors hover:text-sky-600"
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
      d="M18 5.05h1a2 2 0 0 1 2 2v2H3v-2a2 2 0 0 1 2-2h1v-1a1 1 0 1 1 2 0v1h3v-1a1 1 0 1 1 2 0v1h3v-1a1 1 0 1 1 2 0v1Zm-15 6v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-8H3ZM11 18a1 1 0 1 0 2 0v-1h1a1 1 0 1 0 0-2h-1v-1a1 1 0 1 0-2 0v1h-1a1 1 0 1 0 0 2h1v1Z"
      clip-rule="evenodd"
    />
  </svg>

  <span class="font-bold">Adicione ao calendário</span>

  <svg
    class="size-3"
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
  id="add-to-calendar--dropdown"
  class="z-10 hidden w-44 rounded-lg bg-white shadow"
>
  <ul
    class="py-2 text-sm text-gray-700"
    aria-labelledby="add-to-calendar--button"
  >
    <li>
      <a
        href="https://calendar.google.com/calendar/u/0/r/eventedit?dates=20250412/20250413&text=Casamento:+Luiza+%26+Jo%C3%A3o+Henrique&location=Jardim+Babyl%C3%B4nia+-+Estrada+Cel.+Acr%C3%ADsio+Martins+Prates,+Beco+do+Fi%C3%BAza,+1303,+Viam%C3%A3o+-+RS,+94430-265"
        target="_blank"
        class="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 hover:text-sky-600"
      >
        <svg
          class="size-4"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fill-rule="evenodd"
            d="M12.037 21.998a10.313 10.313 0 0 1-7.168-3.049 9.888 9.888 0 0 1-2.868-7.118 9.947 9.947 0 0 1 3.064-6.949A10.37 10.37 0 0 1 12.212 2h.176a9.935 9.935 0 0 1 6.614 2.564L16.457 6.88a6.187 6.187 0 0 0-4.131-1.566 6.9 6.9 0 0 0-4.794 1.913 6.618 6.618 0 0 0-2.045 4.657 6.608 6.608 0 0 0 1.882 4.723 6.891 6.891 0 0 0 4.725 2.07h.143c1.41.072 2.8-.354 3.917-1.2a5.77 5.77 0 0 0 2.172-3.41l.043-.117H12.22v-3.41h9.678c.075.617.109 1.238.1 1.859-.099 5.741-4.017 9.6-9.746 9.6l-.215-.002Z"
            clip-rule="evenodd"
          />
        </svg>

        <span>Google</span>
      </a>
    </li>
    <li>
      <a
        href="https://outlook.office.com/calendar/action/compose?rru=addevent&startdt=2025-04-12&enddt=2025-04-13&allday=true&subject=Casamento%3A%20Luiza%20%26%23xFF06%3B%20Jo%C3%A3o%20Henrique&location=Jardim%20Babyl%C3%B4nia%20-%20Estrada%20Cel.%20Acr%C3%ADsio%20Martins%20Prates%2C%20Beco%20do%20Fi%C3%BAza%2C%201303%2C%20Viam%C3%A3o%20-%20RS%2C%2094430-265"
        target="_blank"
        class="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 hover:text-sky-600"
      >
        <svg
          class="size-4"
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
            d="M3.005 12 3 6.408l6.8-.923v6.517H3.005ZM11 5.32 19.997 4v8H11V5.32ZM20.067 13l-.069 8-9.065-1.275L11 13h9.067ZM9.8 19.58l-6.795-.931V13H9.8v6.58Z"
            clip-rule="evenodd"
          />
        </svg>

        <span>Microsoft 365</span>
      </a>
    </li>
  </ul>
</div>
