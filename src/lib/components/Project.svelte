<script>
  export let project;
  let hasPage = project.page !== null;
</script>

<div class="project-card {hasPage ? 'hover-scale' : ''}">
  <div class="image-container">
    <img class="project-image" src="{project.image}" alt="{project.title}">
    <div class="overlay">
      <div class="text">{project.description}</div>
    </div>
    <div class="project-info">
      <span class="project-title">{project.title}</span>
      <span class="project-date"><i>{project.date}</i></span>
    </div>
  </div>
</div>

<style>
  .text {
    padding: 30px;
  }

  .project-card {
    padding: 0;
    width: 100%; /* Responsive width */
    aspect-ratio: 5 / 3; /* Fixed aspect ratio */
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    position: relative;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease, outline-color 0.3s ease-in-out;
    border-radius: 5px;
    font: 17px Inter, sans-serif;
  }

  .hover-scale {
    outline-color: #CA9679;
    outline-width: 4px;
    outline-style: solid;
  }

  .hover-scale:hover {
    transform: scale(1.05); /* Scales up on hover */
    outline-color: #030302;
    box-shadow: 0 5px 15px rgba(0,0,0,0.3); /* Shadow simulates rising */
  }

  .image-container {
    position: relative;
    height: 100%;
  }

  .image-container img {
    display: block;
    width: 100%; /* Ensure image covers full width */
    height: 100%; /* Ensure image covers full height */
    object-fit: cover; /* Cover fit for better image handling */
  }

  .overlay {
    position: absolute;
    top: 0; /* Cover entire container */
    left: 0;
    right: 0;
    bottom: 0;
    background: #0303029a; /* Black see-through */
    color: white;
    width: 100%;
    height: 100%;
    transition: opacity 0.5s ease;
    opacity: 0; /* Initially hidden */
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
  }

  .image-container:hover .overlay {
    opacity: 1;
  }

  .image-container:hover .project-image {
    filter: blur(10px);
  }

  .project-info {
    position: absolute;
    width: 100%;
    height: 40px;
    bottom: 0;
    padding: 10px;
    box-sizing: border-box; /* Include padding in width/height */
    background: #0303029a; /* Semi-transparent background */
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: opacity 0.5s ease;
  }

  .project-image {
    transition: filter 0.5s ease;
  }

  .image-container:hover .project-info {
    opacity: 0; /* Hide on hover */
  }

  .project-title, .project-date {
    display: inline-block;
  }

  .project-title {
    font-weight: bold;
  }
</style>
