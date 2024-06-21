<script>
  import Header from '$lib/header.svelte';
  import Footer from '$lib/footer.svelte';
  console.log('Layout is being processed');
</script>

<svelte:head>
<title>Isaiah Murray (Development)</title>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="icon" href="/favicon.png" type="image/png">
<link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;700&display=swap" rel="stylesheet">
</svelte:head>

<Header />

<slot></slot>  <!-- This slot tag is crucial -->

<Footer buildDate="May 28, 2024" />
