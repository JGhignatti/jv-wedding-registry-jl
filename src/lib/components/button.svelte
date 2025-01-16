<script lang="ts">
  import type { Snippet } from 'svelte';

  type Props = {
    children: Snippet;
    type: 'primary' | 'secondary';
    disabled?: boolean;
    iconOnly?: boolean;
  } & (
    | {
        onClick: () => void;
      }
    | {
        href: string;
        target: '_self' | '_blank';
      }
  );

  const {
    children,
    type,
    disabled = false,
    iconOnly,
    ...rest
  }: Props = $props();
</script>

{#if 'onClick' in rest}
  <button
    onclick={() => rest.onClick()}
    class="[&>svg]:size-6"
    {disabled}
    data-type={type}
    data-icon-only={iconOnly}
  >
    {@render children()}
  </button>
{:else}
  <a
    href={rest.href}
    target={rest.target === '_self' ? null : rest.target}
    class="[&>svg]:size-6"
    data-type={type}
    data-icon-only={iconOnly}
  >
    {@render children()}
  </a>
{/if}

<style>
  button,
  a {
    @apply flex w-full items-center justify-center gap-2 rounded-lg px-4 py-2 font-sans font-normal transition-colors;
  }

  button[data-type='primary'],
  a[data-type='primary'] {
    @apply bg-sky-600 text-xl text-white hover:bg-sky-500 disabled:cursor-not-allowed disabled:bg-zinc-300 disabled:text-zinc-400;
  }

  button[data-type='secondary'],
  a[data-type='secondary'] {
    @apply border-2 border-sky-600 bg-transparent text-sky-600 hover:bg-sky-100 disabled:cursor-not-allowed disabled:border-zinc-400 disabled:bg-zinc-200 disabled:text-zinc-400;
  }

  button[data-icon-only='true'],
  a[data-icon-only='true'] {
    @apply gap-0 p-2;
  }
</style>
