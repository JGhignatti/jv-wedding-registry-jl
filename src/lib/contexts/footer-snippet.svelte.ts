import type { Snippet } from "svelte";

class FooterSnippet {
  snippet = $state<Snippet | null>(null);
}

export const footerSnippet = new FooterSnippet();
