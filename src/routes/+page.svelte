<script>
    import { onMount, onDestroy } from 'svelte';
    import Entry from '$lib/components/entry.svelte';
    import { Light, MeshStandardMaterial, MeshToonMaterial } from 'three';
    import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
    import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
    import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
    import { OutlinePass } from 'three/addons/postprocessing/OutlinePass.js';
    import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
    import { FXAAShader } from 'three/addons/shaders/FXAAShader.js';
    console.log("Script init page");
  
    // Shared references so we can clean up later
    let scene, camera, renderer, controls, raycaster, mouse;
    let clickableObjects = [];
    let selectedObjects = [];
    let composer, effectFXAA, outlinePass;
    const params = {
        edgeStrength: 3.0,
        edgeGlow: 0.0,
        edgeThickness: 1.0,
        pulsePeriod: 0,
        rotate: false,
        usePatternTexture: false
    };
    
    // We'll call this once we're in the browser (onMount)
    async function initThree(THREE, OrbitControls, GLTFLoader) {
      // Get our container from the DOM
      const container = document.getElementById('three-container');
      if (!container) {
        console.error("No #three-container found in DOM");
        return;
      }
  
      // Create scene
      scene = new THREE.Scene();
  
      // Create camera
      camera = new THREE.PerspectiveCamera(
        75,
        container.offsetWidth / container.offsetHeight,
        0.1,
        1000
      );
      camera.position.set(0, 0, 2); // a bit off-center so we can see the cube well
  
      // Create renderer with alpha for a transparent background
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setSize(container.offsetWidth, container.offsetHeight);
      renderer.setPixelRatio(window.devicePixelRatio);
      // Make background fully transparent
      renderer.setClearColor(0x000000, 0);
      renderer.shadowMap.enabled = true; // Enable shadow maps
      renderer.shadowMap.type = THREE.BasicShadowMap;// THREE.PCFSoftShadowMap;
      container.appendChild(renderer.domElement);
  
      // Set up orbit controls
      controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;     // smooth orbit
      controls.dampingFactor = 0.1;
      controls.enablePan = false;        // optional, disable panning
      controls.enableZoom = false;        // allow zoom
      controls.autoRotate = true;       // you can enable auto rotate if you like
  
      // Raycaster for click detection
      raycaster = new THREE.Raycaster();
      mouse = new THREE.Vector2();
  
      // EVENT: When user clicks on the canvas, do a raycast
      renderer.domElement.addEventListener('click', onCanvasClick);
  
      // 1) Add a smaller base red cube (0.9 side) at the center
      const baseGeom = new THREE.BoxGeometry(0.9, 0.9, 0.9);
      const baseMat = new THREE.MeshBasicMaterial({ color: 0xff0000 });
      const baseCube = new THREE.Mesh(baseGeom, baseMat);
      scene.add(baseCube);
  
      // 2) Load six planes around it
      const sideFiles = [
        '/plane-egg-lathe.glb',    // front
        '/plane-clasp.glb',     // back
        '/plane-PCBB.glb',      // top
        '/plane-bottom.glb',   // bottom
        '/plane-right.glb',    // right
        '/plane-left.glb'      // left
      ];
  
      const sideLinks = [
        '/projects/egg_lathe',
        '/projects/clasp',
        '/projects/pcb_business_card',
        'https://example.com/page4',
        'https://example.com/page5',
        '/projects/egg_lathe'
      ];
  
      // Plane positions/rotations so they form a cube when each plane
      // originally has +Z as its normal in object space
      const positions = [
        new THREE.Vector3(0, 0, +0.5),  // Front face
        new THREE.Vector3(0, 0, -0.5),  // Back face
        new THREE.Vector3(0, +0.5, 0),  // Top face
        new THREE.Vector3(0, -0.5, 0),  // Bottom face
        new THREE.Vector3(+0.5, 0, 0),  // Right face
        new THREE.Vector3(-0.5, 0, 0)   // Left face
      ];
      // For planes that have +Z up, we rotate them to the correct face orientation:
      const rotations = [
        // Front: +Y -> +Z   rotateX(+90°)
        new THREE.Euler(Math.PI / 2, 0, 0),

        // Back: +Y -> -Z    rotateX(-90°)
        new THREE.Euler(-Math.PI / 2, 0, 0),

        // Top: +Y -> +Y     no rotation
        new THREE.Euler(0, 0, 0),

        // Bottom: +Y -> -Y  rotateX(180°)
        new THREE.Euler(Math.PI, 0, 0),

        // Right: +Y -> +X   rotateZ(-90°)
        new THREE.Euler(0, 0, -Math.PI / 2),

        // Left: +Y -> -X    rotateZ(+90°)
        new THREE.Euler(0, 0, Math.PI / 2)
    ];
      // Default fallback material if a GLB fails
      const defaultMat = new THREE.MeshToonMaterial({
        color: 0xcccccc,
        side: THREE.DoubleSide
      });
  
      // Instantiate the loader
      const loader = new GLTFLoader();
  
      // Helper to load each plane
      function loadSide(file, position, rotation, url) {
        loader.load(
            file,
            (gltf) => {
                // We assume the plane is the first child in gltf.scene
                const planeMesh = gltf.scene.children[0];
                planeMesh.position.copy(position);
                planeMesh.rotation.set(rotation.x, rotation.y, rotation.z);

                planeMesh.receiveShadow = true; // Correct spelling
                planeMesh.castShadow = true;   // Enable shadow casting

                scene.add(planeMesh);

                const geometry = new THREE.PlaneGeometry(1, 1);
                geometry.rotateX(-Math.PI / 2);

                const clickPlane = new THREE.Mesh(geometry, THREE.MeshBasicMaterial({color: 0xff0000}));
                clickPlane.position.copy(position);
                clickPlane.rotation.set(rotation.x, rotation.y, rotation.z);
                clickPlane.recieveShadow = false
                clickPlane.castShadow = false
                scene.add(clickPlane);
                clickableObjects.push({ object: clickPlane, url });
            },
            undefined,
            () => {
                console.warn(`Failed to load ${file}. Using fallback plane.`);
                // By default, PlaneGeometry normal = +Z in Three.js
                // We'll rotate it so that +Z becomes +Y (to match Blender's plane)
                const geometry = new THREE.PlaneGeometry(1, 1);
                geometry.rotateX(-Math.PI / 2); // now normal = +Y

                const fallbackPlane = new THREE.Mesh(geometry, defaultMat);
                fallbackPlane.position.copy(position);
                fallbackPlane.rotation.set(rotation.x, rotation.y, rotation.z);
                fallbackPlane.recieveShadow = true
                fallbackPlane.castShadow = true
                scene.add(fallbackPlane);
                clickableObjects.push({ object: fallbackPlane, url });
            }
        );
    }

    if (false) {
      var geo = new THREE.PlaneGeometry(10,10);
      var GP = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({color: 0xffffff, side: THREE.DoubleSide}));
      GP.position.set(0,0,-1);
      GP.castShadow = false;
      GP.receiveShadow = true;
      scene.add(GP)
    }


    // Create a group for the lights
    var lightGroup = new THREE.Group();

    // Add the light group to the camera so it stays relative to it
    scene.add(lightGroup);

    // Create an ambient light and add it to the group
    var ambientLight = new THREE.AmbientLight(0xffffff, 0.1);
    lightGroup.add(ambientLight);

    // Create a point light and add it to the group
    var pointLight = new THREE.PointLight(0xffffff, 20);
    pointLight.castShadow = true; // Enable shadow casting

    pointLight.shadow.mapSize.width = 1024; // Higher resolution shadow map
    pointLight.shadow.mapSize.height = 1024;
    pointLight.shadow.camera.near = 0.1; // Adjust based on your scene
    pointLight.shadow.camera.far = 25;

    pointLight.position.set(0, 2, 1); // Position relative to the camera
    lightGroup.add(pointLight);
    renderer.domElement.addEventListener( 'pointermove', onPointerMove );
    //postprocessing

    composer = new EffectComposer( renderer );
    const renderPass = new RenderPass( scene, camera );
    composer.addPass( renderPass );

    outlinePass = new OutlinePass( new THREE.Vector2( window.innerWidth, window.innerHeight ), scene, camera );
    composer.addPass( outlinePass );

    const textureLoader = new THREE.TextureLoader();
    textureLoader.load( 'textures/tri_pattern.jpg', function ( texture ) {

        outlinePass.patternTexture = texture;
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;

    } );

    function onPointerMove( event ) {

        if ( event.isPrimary === false ) return;

        const rect = event.target.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        const y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    
        mouse.set(x, y);

        checkIntersection();

    }

    function addSelectedObject( object ) {

        selectedObjects = [];
        selectedObjects.push( object );

    }
    function checkIntersection() {

        raycaster.setFromCamera( mouse, camera );

        const intersects = raycaster.intersectObject( scene, true );
        console.log(intersects)
        if ( intersects.length > 0 ) {

            const selectedObject = intersects[ 0 ].object;
            addSelectedObject( selectedObject );
            outlinePass.selectedObjects = selectedObjects;

        } else {

            // outlinePass.selectedObjects = [];

        }

    }

    const outputPass = new OutputPass();
    composer.addPass( outputPass );

    effectFXAA = new ShaderPass( FXAAShader );
    effectFXAA.uniforms[ 'resolution' ].value.set( 1 / window.innerWidth, 1 / window.innerHeight );
    composer.addPass( effectFXAA );


      // Load each of the 6 planes
      sideFiles.forEach((file, i) => {
        loadSide(file, positions[i], rotations[i], sideLinks[i]);
      });
      
      // Start the render loop
      animate();
  
      function animate() {
        lightGroup.position.copy(camera.position);
        lightGroup.rotation.copy(camera.rotation);
        requestAnimationFrame(animate);
        controls.update();               // must update for damping to work
        //renderer.render(scene, camera);
        composer.render();
      }
    }
  
    /**
     * Raycast on the plane(s) when user clicks the canvas
     */
    function onCanvasClick(event) {
      if (!raycaster || !camera) return; // safety check
  
      // Convert mouse coords to normalized device coords
      const rect = event.target.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
  
      mouse.set(x, y);
  
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(clickableObjects.map(o => o.object));
      if (intersects.length > 0) {
        const hit = intersects[0].object;
        const side = clickableObjects.find(s => s.object === hit);
        if (side && side.url) {
          window.location.href = side.url;
        }
      }
    }
  
    /**
     * Svelte lifecycle: onMount is only in the browser after SSR
     */
    onMount(async () => {
      console.log("onMount triggered");
  
      // Dynamically import Three.js modules so SSR doesn't break
      const THREE = await import('three');
      const { OrbitControls } = await import('three/examples/jsm/controls/OrbitControls.js');
      const { GLTFLoader } = await import('three/examples/jsm/loaders/GLTFLoader.js');
  
      // Now we can safely reference 'window', 'document', etc.
      initThree(THREE, OrbitControls, GLTFLoader);
    });
  
    /**
     * Cleanup if user navigates away in the browser
     */
    onDestroy(() => {
      console.log("onDestroy triggered");
  
      if (renderer) {
        // remove the click listener from the canvas
        renderer.domElement.removeEventListener('click', onCanvasClick);
        renderer.dispose();
      }
    });
  </script>
  
  
  
<div class="header-container">
    <img class="header-image" src="$lib/images/siteheader.png">
    <div class="name-container">
        <h1>Isaiah Murray</h1>
        <sub>Student at <a href="https://cambridge.nuvustudio.com/">Nuvu Innovation School</a></sub>
    </div>
    <div class="featured-container"> 
        <!--<InteractiveCube></InteractiveCube>-->
        <div id="three-container"></div>
    </div>
</div>

<div class="content-container">
    <h1>Experience</h1>
    <div class="experience-container">
        <Entry width="400" title="SCRIBBLE WORLDS ACTIVITY BOOK" subtitle="Inventor and Co-founder" date="2016 - present" description="Invented Scribble Worlds (www.scribbleworlds.com) with father, combining love of Dungeons and Dragons, Rogue-like adventure games, and video games with love of creating physical objects. Created a process for laser cutting complex paper shapes to support industrial (well, cottage-industry) production. Helped create final game and marketing content. Worked with parents to submit patent and trademark for the business."></Entry>
        <Entry></Entry>
        <Entry title="CSCR" subtitle="Student researcher and volunteer - shellfish survey, water quality, drifter teams" date="2016 - 2022" description="Applied & received Marjot grant to study Zostera marina. Analyzed recovery conditions for Labyrinthula zosterae infected specimens by constructing and testing an automated artificial environment."></Entry>
        <Entry title="CHERISH HEALTH" subtitle="Machine Learning Intern" date="2022-2022" description="Applied for and received internship at Cherish Health for the summer of 2022. Supported CEO and CTO with user demos in support of their successful Series A investment round. Supported engineering team with machine learning data collection and network training. Developed skills in product demos, CAD, Python, and TensorFlow."></Entry>
        <Entry title="MATHNASIUM" subtitle="Math Tutor" date="2022-2024" description="Applied for and received job as a math tutor at Mathnasium in Cohasset at the age of 14, have tutored there since. Working with children from the 3rd grade to the 8th grade. Working with owner to build life skills beyond tutoring."></Entry>
        <Entry title="MEOWGIC CARDS LLC" subtitle="Co-founder, Artist, Tester" date="2020-present" description="Supported creating Meowgic Cards LLC (www.meowgiccards.com), a parody trading card game with four card decks created. Helped create and review business plan, website content, some artistic content, and test game."></Entry>
        <Entry title="FRENCH MEMORIES BAKERY" subtitle="Counter Work, Food Service, Kitchen Support" date="2022-2022" description="Worked cash register, filled customer orders, made and served meals, provided general kitchen support."></Entry>
        <Entry title="ACCESS SPORT AMERICA" subtitle="Coach" date="2024-2024" description="Working at a program providing accessible watersports to disabled individuals."></Entry>
    </div>
    <h1>Education</h1>
    <div class="education-container">
        <Entry width="5000" title="NUVU INNOVATION SCHOOL" subtitle="8th-12th grade" date="2020 – 2024" description="Project based learning studios and seminars. John’s Hopkins CTY courses in Bio, Chem, AP Chem, and Essay Writing. Math courses through Art of Problem solving include Intermediate Algebra, Precalculus, AP Calculus. Took Multivariable Calculus, CS50, and CSCI-e80 through Harvard Extension School"></Entry>
        <Entry width="5000" title="COHASSET MIDDLE SCHOOL" subtitle="7th grade" date="2019-2020" description="Moved to Cohasset, built strong friendships, earned straight A’s including in extracurricular AoPS Geometry and Intermediate Algebra courses. Tested into Johns Hopkins Center for Talented Youth via their SSAT equivalent."></Entry>
        <Entry width="5000" title="HOMESCHOOL" subtitle="K-6th grade" date="2010-2019" description="My homeschooling experience focused on a solid core of studies around english, science, and math, as well as plenty of free time to focus on my passion around STEM - programming, making, electronics, and more."></Entry>
    </div>
    <h1>Community</h1>
    <p>Member of Cohasset Middle School and High School Robotics teams, Cohasset Maritime Institute Rowing, Cohasset Sailing Club, CSCR, Hingham Sailing Club, Volunteering activities through the Cohasset UU Youth Program.</p>
</div>

<style>
    #three-container {
        height: 100%;
        aspect-ratio: 1;
        border: 2px solid transparent;
        background-color: transparent;
    }
    .featured-container {
        position: absolute;
        right: 50px;
        bottom: 50px;
        aspect-ratio: 1;
        top: 50px;
        display: flex;
        justify-content: center; /* Center the content within the container */
        align-items: center; /* Center content vertically */
        padding: 0;
    }


    .project-tiles {
        display: grid;
        grid-template-columns: repeat(4, 1fr); /* 4 equal-width columns */
        gap: 1rem; /* Spacing between grid items */
        width: 100%; /* Make it fill the width of the parent */
        height: 100%; /* Adjust height to fit content */
    }

    .content-container h1 {
        margin-bottom: 10px;
        margin-top: 40px;
    }
    .experience-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 20px;
        width: 100%;
    }

    .education-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 20px;
        width: 100%;
    }

    .content-container {
        margin: 25px;
        font: 20px Inter, sans-serif;
    }

    .header-image {
        object-fit: cover;
        width: 100%;
        max-height: 45vh;
        height: auto;
    }

    .header-container {
        position: relative;
    }

    .name-container {
        position: absolute;
        width: 100%;
        left: 25px;
        bottom: 25px;
        color: #FDF6D6;
        font: 32px Inter, sans-serif;
    }

    .name-container h1 {
        margin: 0;
        position: absolute;
        bottom: 22px;
        font-weight: 800;
        color: #FDF6D6;
        font-size: 64px;
    }

    .name-container sub {
        margin: 0;
        font: 24px Inter, sans-serif;
        width: 100%;
        font-weight: 100;
        position: absolute;
        bottom: 0px;
    }

    .name-container sub a {
        color: #F35D91;
        text-decoration: none;
    }

    .name-container sub a:hover {
        font-weight: 700;
        transform: scale(1.5);
    }

    @media (max-width: 768px) {
        .name-container {
            left: 15px;
            bottom: 15px;
            font-size: 24px;
        }
        .name-container h1 {
            font-size: 48px;
            bottom: 15px;
        }
        .name-container sub {
            font-size: 18px;
            bottom: 0px;
        }
    }

    @media (max-width: 480px) {
        .name-container {
            left: 10px;
            bottom: 10px;
            font-size: 20px;
        }
        .name-container h1 {
            font-size: 32px;
            bottom: 10px;
        }
        .name-container sub {
            font-size: 14px;
            bottom: 0px;
        }
    }
</style>
