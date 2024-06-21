<svelte:head>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/fontawesome.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/brands.min.css">
</svelte:head>

<section class="footer-container">
  <nav class="footer-nav">
    <a href="https://www.linkedin.com/in/isa-murray/" aria-label="LinkedIn" class="social-link fa fa-linkedin"></a>
    <a href="https://github.com/LoveAsAConstruct" aria-label="Github" class="social-link fa fa-github"></a>
    <a href="https://www.instagram.com/isa19837/" aria-label="Instagram" class="social-link fa fa-instagram"></a>
    <a href="/" aria-label="Email" class="social-link fa fa-envelope"></a>
    <a href="https://cambridge.nuvustudio.com/users/isa-murray" aria-label="Profile" class="social-link fa fa-user"></a>
  </nav>
</section>

<style>
  .footer-container {
    background-color: #030302;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: flex-start; /* Justify the content to the left */
    padding: 20px 30px;
    height: 75px;
  }

  .footer-nav {
    display: flex;
    gap: 20px;
  }

  .social-link {
    color: #FEFEF9;
    font-size: 32px;
    text-decoration: none;
    transition: color 0.3s;
  }

  .social-link:hover {
    color: #FDF6D6;
  }

  @media (max-width: 991px) {
    .footer-container {
      padding-right: 20px;
    }

    .footer-nav {
      flex-wrap: wrap;
      justify-content: flex-start; /* Ensure the links are left-aligned on smaller screens */
    }
  }
</style>
