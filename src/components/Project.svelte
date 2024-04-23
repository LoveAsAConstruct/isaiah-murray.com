<!-- Project.svelte -->
<script>
  export let project;
  let showModal = false;
</script>

<div on:click={() => showModal = true}>
  {project.title}
  <!-- more project details -->
</div>

{#if showModal}
<div class="modal">
  <!-- Modal content -->
  <button on:click={() => showModal = false}>Close</button>
</div>
{/if}
