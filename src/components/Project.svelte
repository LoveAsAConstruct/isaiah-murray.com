<script>
  export let project;
</script>

<div class="project-card">
  <h2>{project.title}</h2>
  <p>{project.description}</p>
</div>

<style>
.project-card {
  border: 1px solid #ccc;
  margin-top: 10px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}
</style>
