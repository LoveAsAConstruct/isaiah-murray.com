<script>
    export let images = [];
  
    let currentIndex = 0;
  
    function nextImage() {
      currentIndex = (currentIndex + 1) % images.length;
    }
  
    function prevImage() {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
    }
  </script>
  
  <style>
    .gallery-container {
      position: relative;
      width: 100%;
      max-width: 1000px;
      margin: 0 auto;
      overflow: hidden;
    }
  
    .image-container {
      display: flex;
      transition: transform 0.5s ease;
      width: 100%;
    }
  
    .image-wrapper {
      position: relative;
      min-width: 100%;
      flex-shrink: 0;
    }
  
    .image {
      width: 100%;
      height: auto;
    }
  
    .description {
      position: absolute;
      bottom: 10px;
      left: 10px;
      background: rgba(0, 0, 0, 0.7);
      color: white;
      padding: 5px 10px;
      border-radius: 5px;
      opacity: 0;
      transition: opacity 0.3s;
    }
  
    .image-wrapper:hover .description {
      opacity: 1;
    }
  
    .controls {
      position: absolute;
      top: 50%;
      width: 100%;
      display: flex;
      justify-content: space-between;
      transform: translateY(-50%);
    }
  
    .control {
      background: rgba(0, 0, 0, 0.5);
      color: white;
      border: none;
      padding: 10px;
      cursor: pointer;
      font-size: 18px;
    }
  </style>
  
  <div class="gallery-container">
    <div class="image-container" style="transform: translateX(-{currentIndex * 100}%)">
      {#each images as image}
        <div class="image-wrapper">
          {#if image.link}
            <a href={image.link}>
              <img class="image" src={image.src} alt={image.alt} />
            </a>
          {:else}
            <img class="image" src={image.src} alt={image.alt} />
          {/if}
          {#if image.description}
            <div class="description">{image.description}</div>
          {/if}
        </div>
      {/each}
    </div>
    <div class="controls">
      <button class="control" on:click={prevImage}>❮</button>
      <button class="control" on:click={nextImage}>❯</button>
    </div>
  </div>
  