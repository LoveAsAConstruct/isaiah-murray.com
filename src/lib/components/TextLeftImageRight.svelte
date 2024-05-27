<script>
  export let text;
  export let image;
</script>

<div class="text-left-image-right">
  <div class="container">
    <div class="text">
      <p>{text}</p>
    </div>
    <div class="image">
      <img src={image} alt="Image" />
    </div>
  </div>
</div>
