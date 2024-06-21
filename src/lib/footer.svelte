<svelte:head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
</svelte:head>

  
  <section class="social-section">
    <nav class="social-nav">
      <a href="https://www.linkedin.com/in/isa-murray/" aria-label="LinkedIn" class="social-link fa fa-linkedin"></a>
      <a href="https://github.com/LoveAsAConstruct" aria-label="Github" class="social-link fa fa-github"></a>
      <a href="https://www.instagram.com/isa19837/" aria-label="Instagram" class="social-link fa fa-instagram"></a>
      <a href="/" aria-label="Email" class="social-link fa fa-envelope"></a>
      <a href="https://cambridge.nuvustudio.com/users/isa-murray" aria-label="Profile" class="social-link fa fa-user"></a>
    </nav>
  </section>
  
  <style>
    .social-section {
      background-color: #000;
      display: flex;
      width: 100%;
      flex-direction: column;
      align-items: start;
      font-size: 24px;
      color: #fefef9;
      font-weight: 400;
      justify-content: center;
      padding: 24px 18px;
    }
  
    @media (max-width: 991px) {
      .social-section {
        max-width: 100%;
        padding-right: 20px;
      }
    }
  
    .social-nav {
      display: flex;
      gap: 20px;
    }
  
    @media (max-width: 991px) {
      .social-nav {
        flex-wrap: wrap;
      }
    }
  
    .social-link {
      font-family: Font Awesome 5 Brands, -apple-system, Roboto, Helvetica, sans-serif;
    }
  </style>
