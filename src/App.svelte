<script>
  import { Router, Route, Link } from 'svelte-routing';
  import About from './components/About.svelte';
  import Projects from './components/Projects.svelte';
  import Contact from './components/Contact.svelte';
  // Optional: add other imports if you have more pages or components.
</script>

<Router>
  <nav>
    <Link to="/">About</Link>  <!-- About page as Home -->
    <Link to="/projects">Projects</Link>
    <Link to="/contact">Contact</Link>
  </nav>
  <div class = "page_container" style="padding: 10px">
    <Route path="/" component={About} />  <!-- Set About as the root path -->
    <Route path="/projects" component={Projects} />
    <Route path="/contact" component={Contact} />
  </div>
</Router>
