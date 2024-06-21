<script>
  // Add any necessary imports or logic here
</script>

<header class="header-container">
  <nav class="navigation-bar">
    <h1 class="name-title">Isaiah Murray</h1>
    <ul class="nav-links">
      <li><a href="#projects" tabindex="0">Projects</a></li>
      <li><a href="#contact" tabindex="0">Contact</a></li>
    </ul>
  </nav>
</header>

<style>
  .header-container {
    background-color: #000;
    display: flex;
    width: 100%;
    align-items: center;
    padding: 0 30px;
    height: 75px;
  }

  .navigation-bar {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .name-title {
    color: rgba(254, 254, 249, 1);
    font: 700 32px Inter, sans-serif;
  }

  .nav-links {
    display: flex;
    gap: 20px;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .nav-links li a {
    color: rgba(254, 254, 249, 1);
    font: 32px Inter, sans-serif;
    text-decoration: none;
  }

  @media (max-width: 991px) {
    .header-container {
      padding-right: 20px;
    }

    .navigation-bar {
      flex-wrap: wrap;
      padding-right: 20px;
    }
  }
</style>