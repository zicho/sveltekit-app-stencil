<script lang="ts">
  import { defineCustomElements } from "@zicho/component-lib/loader";
  defineCustomElements();

  let { label }: { label: string } = $props();
</script>

<my-button {label}></my-button>

