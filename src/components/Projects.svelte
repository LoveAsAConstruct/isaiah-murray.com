<script>
  import Project from './Project.svelte';

  let projects = [
    { id: 1, title: 'Project One', category: 'Web Development', description: 'Description here...' },
    { id: 2, title: 'Project Two', category: 'App Development', description: 'Description here...' },
    { id: 3, title: 'Project Three', category: 'Web Development', description: 'Description here...' },
    // Add more projects as needed
  ];

  let filter = '';

  function setFilter(category) {
    filter = category;
  }
</script>

<div>
  <button on:click={() => setFilter('')}>All</button>
  <button on:click={() => setFilter('Web Development')}>Web Development</button>
  <button on:click={() => setFilter('App Development')}>App Development</button>

  {#each projects as project}
    {#if filter === '' || project.category === filter}
      <Project {project} />
    {/if}
  {/each}
</div>

<style>
  /* Add styles for your project gallery here */
</style>
