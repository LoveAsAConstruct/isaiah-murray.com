<script>
  import { onMount } from 'svelte';
  import Project from '$lib/Project.svelte';
  import defaultProjects from './default_projects.json';

  let projects = defaultProjects.map(proj => ({
    id: proj.url,
    title: proj.title,
    category: proj.tags,
    description: 'Description here...',
    date: proj.date,
    image: proj.imgSrc
  }));

  let filters = [];

  function toggleFilter(category) {
    if (filters.includes(category)) {
      filters = filters.filter(item => item !== category);
    } else {
      filters = [...filters, category];
    }
    updateProjects();
  }

  function isProjectVisible(project) {
    return filters.every(filter => project.category.includes(filter));
  }

  function updateProjects() {
    projects = defaultProjects
      .map(proj => ({
        id: proj.url,
        title: proj.title,
        category: proj.tags,
        description: 'Description here...',
        date: proj.date,
        image: proj.imgSrc
      }))
      .filter(isProjectVisible);
  }

  onMount(updateProjects);
</script>

<div>
  <label>
    <input type="checkbox" on:change={() => toggleFilter('digital')} checked={filters.includes('digital')} /> Digital
  </label>
  <label>
    <input type="checkbox" on:change={() => toggleFilter('experiential')} checked={filters.includes('experiential')} /> Experiential
  </label>
  <label>
    <input type="checkbox" on:change={() => toggleFilter('physical')} checked={filters.includes('physical')} /> Physical
  </label>

  <div class="grid-container">
    {#each projects as project}
      <div class="project-item">
        <Project {project} />
      </div>
    {/each}
  </div>
</div>

<style>
  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 20px;
    padding: 20px; /* Increase if more space is needed */
    margin: 0 auto; /* Centers the grid in the viewport */
  }
</style>
