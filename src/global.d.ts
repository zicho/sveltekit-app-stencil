// src/global.d.ts

/// <reference types="@sveltejs/kit" />

import type { JSX as LocalJSX } from '@zicho/component-lib/dist/types/components';
import type { SvelteComponent } from 'svelte';

declare namespace svelte.JSX {
  interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
}
