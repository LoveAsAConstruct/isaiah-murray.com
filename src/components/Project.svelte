<script>
  export let project;
</script>

<div class="project-card" href="/projects/egg_lathe">
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
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border-radius :5px;
  }

  .project-card:hover {
    transform: scale(1.05); /* Scales up on hover */
    box-shadow: 0 5px 15px rgba(0,0,0,0.3); /* Shadow simulates rising */
  }

  @media (max-width: 600px) {
    .project-card {
      padding: 10px; /* Adds padding to give content more room on small screens */
      aspect-ratio: 1; /* Optional: Makes the cards more square on small screens */
    }
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
    background: rgba(0, 0, 0, 0.5); /* Black see-through */
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
    bottom: 0;
    padding: 10px 0;
    background: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
    color: white;
    text-align: center;
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
    padding: 5px 10px;
  }

</style>
