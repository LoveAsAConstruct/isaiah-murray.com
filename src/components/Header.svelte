<!-- Header.svelte -->
<script>
  // Any JavaScript needed for the header
</script>

<header>
  <h1>Your Name</h1>
  <nav>
    <ul>
      <li><a href="#about">About</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
</header>
<style>
header {
  background-color: #333;
  color: white;
  padding: 1rem;
}
nav ul {
  list-style-type: none;
}
nav ul li {
  display: inline;
  margin-right: 20px;
}
</style>
