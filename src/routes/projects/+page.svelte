<script>
  import { onMount } from 'svelte';
  import Project from '$lib/Project.svelte';
  import defaultProjects from './default_projects.json';

  let projects = defaultProjects.map(proj => ({
    id: proj.url,
    title: proj.title,
    category: proj.tags,
    description: proj.description,
    date: proj.date,
    image: proj.imgSrc
  }));

  let filters = [];

  function toggleFilter(filter) {
    const index = filters.indexOf(filter);
    if (index === -1) {
      filters = [...filters, filter];
    } else {
      filters = filters.filter(f => f !== filter);
    }
    updateProjects();
  }

  function isProjectVisible(project) {
    // Check if every filter is included in the project's category tags
    return filters.length === 0 || filters.every(filter => project.category.includes(filter));
  }

  function updateProjects() {
    projects = defaultProjects
      .map(proj => ({
        id: proj.url,
        title: proj.title,
        category: proj.tags,
        description: proj.description,
        date: proj.date,
        image: proj.imgSrc
      }))
      .filter(isProjectVisible);
  }

  $: filterStyle = (filter) => filters.includes(filter) ? 'none' : 'grayscale(100%) blur(0px)';

  onMount(updateProjects);
</script>


<style>
  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 20px;
    padding: 20px;
    margin: 0 auto;
  }

  .filter-container {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
  }

  .filter {
    cursor: pointer;
    transition: transform 0.2s;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .filter:hover {
    transform: scale(1.1);
  }

  .filter img {
    width: 100px;
    height: 100px;
  }
</style>

<div>
  <div class="filter-container">
    {#each ['digital', 'experiential', 'physical'] as filter}
      <label class="filter" on:click={() => toggleFilter(filter)}>
        <img src={`/images/${filter}.png`} alt={filter} style="filter: {filterStyle(filter)};">
        <span>{filter.charAt(0).toUpperCase() + filter.slice(1)}</span>
      </label>
    {/each}
  </div>

  <div class="grid-container">
    {#each projects as project}
      <div class="project-item">
        <Project {project} />
      </div>
    {/each}
  </div>
</div>