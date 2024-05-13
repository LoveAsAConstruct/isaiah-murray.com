<script>
  export let project;
</script>

<div class="project-card">
  <div class="image-container">
    <img style="object-fit: cover; width: 100%; height: 100%;" src="https://d20kqt4x4odakd.cloudfront.net/unsafe/1012x0/filters:quality(100):rotate(0)/tjazvh02i7ert8ysgp5a1qw0smiw" alt="">
    <div class="overlay">
      <div class="text">{project.description}</div>
    </div>
    <div class="project-info">
      <span class="project-title">{project.title}</span>
      <span class="project-date">{project.date}</span>
    </div>
  </div>
</div>

<style>
  .project-card {
    border: 1px solid #ccc;
    padding: 0;
    border-radius: 8px;
    width: 100%; /* Responsive width */
    aspect-ratio: 5 / 3; /* Fixed aspect ratio */
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    position: relative;
    overflow: hidden;
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
  }

  .overlay {
    position: absolute;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5); /* Black see-through */
    color: white;
    width: 100%;
    transition: .5s ease;
    opacity:0;
    color: white;
    font-size: 16px;
    padding: 20px;
    text-align: center;
  }

  .image-container:hover .overlay {
    opacity: 1;
  }

  .project-info {
    position: absolute;
    width: 100%;
    bottom: 0;
    padding: 10px 0;
    background: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
    color: white;
    text-align: center;
  }

  .project-title, .project-date {
    display: inline-block;
    padding: 5px 10px;
  }
</style>
