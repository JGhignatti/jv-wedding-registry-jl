<script lang="ts">
  import type { Snippet } from 'svelte';

  type Props = {
    children: Snippet;
  } & (
    | {
        onClick: () => void;
      }
    | {
        href: string;
        target: '_self' | '_blank';
      }
  );

  const { children, ...rest }: Props = $props();
</script>

{#if 'onClick' in rest}
  <button onclick={() => rest.onClick()} class="[&>svg]:size-6">
    {@render children()}
  </button>
{:else}
  <a href={rest.href} target={rest.target} class="[&>svg]:size-6">
    {@render children()}
  </a>
{/if}

<style>
  button,
  a {
    @apply w-fit bg-deer-100 border-deer-600 text-deer-800 flex items-center justify-center gap-2 rounded-lg border-2 px-4 py-2 font-sans font-normal hover:border-sky-500 hover:text-sky-500;
  }
</style>
