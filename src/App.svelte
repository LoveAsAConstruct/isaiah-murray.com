<script>
  import Header from './components/Header.svelte';
  import Project from './components/Project.svelte';
  import Footer from './components/Footer.svelte';

  let projects = [
    { title: 'Project One', description: 'A description of Project One.' },
    { title: 'Project Two', description: 'A description of Project Two.' }
  ];
</script>
<style>
  main { padding: 20px; }
</style>

<Header />
<main>
  <h1>Welcome to My Portfolio</h1>
  {#each projects as project}
    <Project {project} />
  {/each}
</main>
