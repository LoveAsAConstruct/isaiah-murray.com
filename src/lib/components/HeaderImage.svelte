<script>
    export let src;
    export let alt = "Header Image";
  </script>
  
  <style>
    .header-image {
      width: 100%;
      height: auto;
      display: block;
    }
  </style>
  
  <img class="header-image" {src} {alt} />
  