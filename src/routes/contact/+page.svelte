<script>
  // Script specific to the Contact page
  let profileImage = '/path/to/your/profile-image.jpg'; // Update with the correct path to your profile image
</script>

<style>
  .contact-container {
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
      text-align: center;
      font-family: 'Inter', sans-serif; /* Match font style */
      background-color: #FEFEF9; /* Background color */
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  .contact-container h1 {
      font-size: 2.5em;
      margin-bottom: 10px;
      color: #2F1C12; /* Dark accent color */
  }
  .contact-container p.intro {
      font-size: 1.2em;
      margin-bottom: 30px;
      color: #666;
  }
  .contact-container ul {
      list-style: none;
      padding: 0;
  }
  .contact-container li {
      display: inline-block;
      margin: 10px;
  }
  .contact-container a {
      color: #CA9679; /* Light accent color */
      text-decoration: none;
      font-size: 1.2em;
      transition: color 0.3s;
  }
  .contact-container a:hover {
      text-decoration: underline;
      color: #2F1C12; /* Dark accent color on hover */
  }
  .contact-container .social-icons a {
      font-size: 1.5em;
      margin: 0 10px;
  }
  .contact-container .social-icons i {
      color: #CA9679; /* Light accent color */
      transition: color 0.3s;
  }
  .contact-container .social-icons i:hover {
      color: #2F1C12; /* Dark accent color on hover */
  }
</style>

<div class="contact-container">
  <h1>Contact Me</h1>
  <p class="intro">Feel free to reach out to me through any of the following platforms or send me an email directly.</p>
  <ul>
      <li><a href="https://www.linkedin.com/in/isa-murray/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i> LinkedIn</a></li>
      <li><a href="https://github.com/LoveAsAConstruct" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i> GitHub</a></li>
      <li><a href="https://www.instagram.com/isa19837/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i> Instagram</a></li>
      <li><a href="https://cambridge.nuvustudio.com/users/isa-murray" target="_blank" rel="noopener noreferrer"><i class="fas fa-user"></i> NuVu Studio</a></li>
      <li>Email: <a href="mailto:isaiah.j.murray@gmail.com"><i class="fas fa-envelope"></i> isaiah.j.murray@gmail.com</a></li>
  </ul>
</div>

<!-- Add Font Awesome for social media icons -->
<svelte:head>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
</svelte:head>
