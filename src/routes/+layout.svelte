<script>
  import Header from '../components/header.svelte';
  import Footer from '../components/footer.svelte';
  console.log('Layout is being processed');
</script>

<svelte:head>
  <title>Isaiah Murray (Development)</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" href="/favicon.png" type="image/png">
</svelte:head>

<div class="layout-container">
  <Header />
  
  <main class="content">
    <slot></slot> <!-- This slot tag is crucial -->
  </main>
  
  <Footer buildDate="May 28, 2024" />
</div>

<style>
  :global(html, body) {
    margin: 0;
    padding: 0;
    height: 100%;
  }

  .layout-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background: #FEFEF9;
  }

  .content {
    flex: 1; /* Allows content to grow and push the footer to the bottom */
  }
</style>
