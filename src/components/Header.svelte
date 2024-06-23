<script>
  // Add any necessary imports or logic here
</script>

<header class="header-container">
  <nav class="navigation-bar">
    <ul class="nav-links">
      <li><a href="/" tabindex="0" class="name-title">Isaiah Murray</a></li>
      <li><a href="projects" tabindex="0">Projects</a></li>
      <li><a href="contact" tabindex="0">Contact</a></li>
    </ul>
  </nav>
</header>

<style>
  .header-container {
    background-color: #030302;
    display: flex;
    width: 100%;
    align-items: center;
    padding: 0 30px;
    height: 50px;
  }

  .navigation-bar {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
  }

  .nav-links {
    display: flex;
    gap: 20px;
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .nav-links li a {
    color: #FEFEF9;
    font: 24px Inter, sans-serif;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
  }
  
  .nav-links li a:hover {
    color: #CA9679;
    scale: 1.1 !important;
  }

  .name-title {
    font-weight: 700 !important;
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
