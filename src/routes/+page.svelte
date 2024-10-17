<script>
  import SsrFriendlyButton from "$lib/components/SsrFriendlyButton.svelte";
  import MyButton from "$lib/web-components/MyButton.svelte";
  import "@zicho/component-lib/dist/collection/components/my-button/my-button.css"

  let label = $state("Click")
</script>

<h1>Stencil Component in SvelteKit</h1>

<SsrFriendlyButton {label} />
<MyButton {label} />


