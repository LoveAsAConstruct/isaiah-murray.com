<script>
  import Header from '$lib/header.svelte';
  import Footer from '$lib/footer.svelte';
  console.log('Layout is being processed');
</script>

<svelte:head>
<title>Isaiah Murray</title>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="icon" href="/favicon.png" type="image/png">
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
<link rel="stylesheet" href="/styles/style.css">
<link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;700&display=swap" rel="stylesheet">
</svelte:head>

<Header />

<div style="margin: 60px 30px 30px 30px;">
  <slot></slot>  <!-- This slot tag is crucial -->
</div>

<Footer buildDate="May 28, 2024" />
