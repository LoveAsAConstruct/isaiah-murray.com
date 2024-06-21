<script>
  import { onMount } from 'svelte';
  import Project from '../../components/Project.svelte';
  import defaultProjects from '$lib/default_projects.json';

  let projects = defaultProjects.map(proj => ({
    id: proj.url,
    title: proj.title,
    category: proj.tags,
    description: proj.description,
    date: proj.date,
    image: proj.imgSrc,
    page: proj.page || null // handle optional page field
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
        image: proj.imgSrc,
        page: proj.page || null // handle optional page field
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
  }

  .filter {
    cursor: pointer;
    transition: transform 0.2s;
    background: transparent;
    outline-color: transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
    outline-width: 0;
  }

  .filter:hover {
    transform: scale(1.1);
  }

  .filtertext {
    color: black;
  }

  .filter img {
    width: 100px;
    height: 100px;
  }
  .filter-container button {
    outline: none;
    border: none;
    background-color: transparent;
  }
</style>

<div>
  <div class="filter-container">
    {#each ['digital', 'experiential', 'physical'] as filter}
      <button class="filter" on:click={() => toggleFilter(filter)} type="button">
        <img src={`/images/${filter}.png`} alt={filter} style="filter: {filterStyle(filter)};">
        <span class="filtertext">{filter.charAt(0).toUpperCase() + filter.slice(1)}</span>
      </button>
    {/each}
  </div>

  <div class="grid-container">
    {#each projects as project}
      <div class="project-item">
        {#if project.page}
          <a href={`/projects/${project.page}`}>
            <Project {project} />
          </a>
        {:else}
          <Project {project} />
        {/if}
      </div>
    {/each}
  </div>
</div>
