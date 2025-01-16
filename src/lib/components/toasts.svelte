<script lang="ts">
  import { getToasts } from '$lib/contexts/toasts.svelte';

  const toasts = getToasts();
</script>

<div
  class="fixed right-6 top-6 z-[100] flex flex-col-reverse items-center gap-8"
>
  {#each toasts.list as toast}
    <div
      role="alert"
      class="flex w-72 xs:w-80 items-start gap-2 rounded-lg border-2 bg-white p-4 text-zinc-500 shadow"
      class:border-green-500={toast.type === 'success'}
      class:border-red-500={toast.type === 'error'}
    >
      {#if toast.type === 'success'}
        <svg
          class="size-8 shrink-0 text-green-500"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fill-rule="evenodd"
            d="M18 14a1 1 0 1 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2v-2Z"
            clip-rule="evenodd"
          />
          <path
            fill-rule="evenodd"
            d="M15.026 21.534A9.994 9.994 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2c2.51 0 4.802.924 6.558 2.45l-7.635 7.636L7.707 8.87a1 1 0 0 0-1.414 1.414l3.923 3.923a1 1 0 0 0 1.414 0l8.3-8.3A9.956 9.956 0 0 1 22 12a9.994 9.994 0 0 1-.466 3.026A2.49 2.49 0 0 0 20 14.5h-.5V14a2.5 2.5 0 0 0-5 0v.5H14a2.5 2.5 0 0 0 0 5h.5v.5c0 .578.196 1.11.526 1.534Z"
            clip-rule="evenodd"
          />
        </svg>
      {:else if toast.type === 'error'}
        <svg
          class="size-8 shrink-0 text-red-500"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fill-rule="evenodd"
            d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v5a1 1 0 1 0 2 0V8Zm-1 7a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12Z"
            clip-rule="evenodd"
          />
        </svg>
      {/if}

      <div class="grow">{@html toast.content}</div>

      <button
        aria-label="Fechar"
        class="flex size-6 shrink-0 items-center justify-center rounded-full bg-zinc-100 hover:bg-zinc-200"
        onclick={() => toasts.remove(toast.id)}
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
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18 17.94 6M18 18 6.06 6"
          />
        </svg>
      </button>
    </div>
  {/each}
</div>
