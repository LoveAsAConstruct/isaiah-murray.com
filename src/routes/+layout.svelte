<script>
    console.log('Layout is being processed');
</script>

<svelte:head>
  <title>Svelte App</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" href="/favicon.png" type="image/png">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
  <link rel="stylesheet" href="style.css"> <!-- Assume global styles are renamed and correctly placed -->
  <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;700&display=swap" rel="stylesheet">
</svelte:head>

<nav>
<a href="/">About</a>
<a href="/projects">Projects</a>
<a href="/contact">Contact</a>
</nav>

<div style="margin: 30px;">
    <slot></slot>  <!-- This slot tag is crucial -->
</div>