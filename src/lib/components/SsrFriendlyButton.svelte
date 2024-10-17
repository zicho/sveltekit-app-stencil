<script lang="ts">
  import type { ButtonProps } from "$lib/props/ButtonProps";
  import "@zicho/component-lib/dist/collection/components/my-button/my-button.css";

  let { label }: ButtonProps = $props();
</script>

<button class="btn">{label}</button>
