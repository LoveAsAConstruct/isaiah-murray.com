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
<div class="site-container">
<Header />

<slot></slot>  <!-- This slot tag is crucial -->

<Footer buildDate="May 28, 2024" />

</div>

<style>
  .site-container {
    width: 100%;
    background: #FEFEF9;
  }
</style>