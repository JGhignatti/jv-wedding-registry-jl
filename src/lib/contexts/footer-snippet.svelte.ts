import { getContext, setContext, type Snippet } from "svelte";

class FooterSnippet {
  snippet = $state<Snippet | null>(null);
}

export const footerSnippetKey = Symbol('FooterSnippet');

export function setFooterSnippet(): void {
  setContext(footerSnippetKey, new FooterSnippet());
}

export function getFooterSnippet(): FooterSnippet {
  return getContext(footerSnippetKey);
}
