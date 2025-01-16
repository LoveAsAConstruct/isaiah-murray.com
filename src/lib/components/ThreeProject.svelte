<script>
  import * as THREE from 'three';
  import { onMount } from 'svelte';

  export let image_link = '/images/projects/clasp/IMG_4130-min.jpg';

  let container;

  onMount(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.offsetWidth / container.offsetHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.offsetWidth, container.offsetHeight);
    container.appendChild(renderer.domElement);

    // Geometry and Material
    const geometry = new THREE.PlaneGeometry(3, 2); // Adjust dimensions as needed
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(image_link);

    const material = new THREE.MeshBasicMaterial({ map: texture });
    const plane = new THREE.Mesh(geometry, material);
    scene.add(plane);

    // Handle Mouse Movement
    const onMouseMove = (event) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;

      plane.rotation.y = x * 0.5;
      plane.rotation.x = y * 0.5;
    };

    window.addEventListener('mousemove', onMouseMove);

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      renderer.dispose();
    };
  });
</script>

<div bind:this={container} class="project-3d-container" style="width: 100%; height: 100%;"></div>

<style>
  .project-3d-container {
    position: relative;
    width: 100%;
    height: 300px; /* Adjust height as needed */
    overflow: hidden;
  }
</style>
