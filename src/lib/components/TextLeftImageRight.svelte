<script>
  export let text;
  export let image;
</script>

<div>
  <div class="text">
    {#if text}
      {text}
    {/if}
  </div>
  <div class="image">
    <img src={image} alt="" />
  </div>
</div>
