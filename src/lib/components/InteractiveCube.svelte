<script>
    import * as THREE from 'three';
    import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
    import { onMount, onDestroy } from 'svelte';

    console.log("cube script init");

    let scene, camera, renderer;
    let raycaster, mouse;
    let clickableObjects = [];
    const loader = new GLTFLoader();

    export let sideFiles = [
        '$lib/plane.glb', // Front
        '$lib/plane.glb', // Back
        '$lib/plane.glb', // Top
        '$lib/plane.glb', // Bottom
        '$lib/plane.glb', // Right
        '$lib/plane.glb'  // Left
    ];

    export let sideLinks = [
        'https://example.com/page1',
        'https://example.com/page2',
        'https://example.com/page3',
        'https://example.com/page4',
        'https://example.com/page5',
        'https://example.com/page6'
    ];

    const defaultMaterial = new THREE.MeshBasicMaterial({ color: 0xcccccc, side: THREE.DoubleSide });

    const positions = [
        new THREE.Vector3(0, 0, 0.5),  // Front
        new THREE.Vector3(0, 0, -0.5), // Back
        new THREE.Vector3(0, 0.5, 0),  // Top
        new THREE.Vector3(0, -0.5, 0), // Bottom
        new THREE.Vector3(0.5, 0, 0),  // Right
        new THREE.Vector3(-0.5, 0, 0)  // Left
    ];

    const rotations = [
        new THREE.Euler(0, 0, 0),               // Front
        new THREE.Euler(0, Math.PI, 0),         // Back
        new THREE.Euler(-Math.PI / 2, 0, 0),    // Top
        new THREE.Euler(Math.PI / 2, 0, 0),     // Bottom
        new THREE.Euler(0, -Math.PI / 2, 0),    // Right
        new THREE.Euler(0, Math.PI / 2, 0)      // Left
    ];

    function loadSide(file, position, rotation, url) {
        loader.load(
            file,
            (gltf) => {
                const side = gltf.scene.children[0];
                side.position.copy(position);
                side.rotation.set(rotation.x, rotation.y, rotation.z);
                scene.add(side);
                clickableObjects.push({ object: side, url });
            },
            undefined,
            () => {
                console.log(`Fallback plane added for position: ${position.x}, ${position.y}, ${position.z}`);

                const geometry = new THREE.PlaneGeometry(1, 1);
                const side = new THREE.Mesh(geometry, defaultMaterial);
                side.position.copy(position);
                side.rotation.set(rotation.x, rotation.y, rotation.z);
                scene.add(side);
                clickableObjects.push({ object: side, url });
            }
        );
    }

    function init() {
        console.log('Three.js initialization started');
        
        const container = document.getElementById('three-container');
        if (!container) {
            console.error("Container is not defined.");
            return;
        }

        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(75, container.offsetWidth / container.offsetHeight, 0.1, 1000);
        camera.position.z = 5;

        renderer = new THREE.WebGLRenderer();
        renderer.setSize(container.offsetWidth, container.offsetHeight);
        container.appendChild(renderer.domElement);

        raycaster = new THREE.Raycaster();
        mouse = new THREE.Vector2();

        sideFiles.forEach((file, index) => {
            loadSide(file, positions[index], rotations[index], sideLinks[index]);
        });

        window.addEventListener('click', onMouseClick);
        animate();
    }

    function onMouseClick(event) {
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(clickableObjects.map(obj => obj.object));

        if (intersects.length > 0) {
            const clickedObject = intersects[0].object;
            const clickedSide = clickableObjects.find(obj => obj.object === clickedObject);
            if (clickedSide) {
                window.location.href = clickedSide.url;
            }
        }
    }

    function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    }

    onMount(() => {
        console.log("onMount triggered");
        if (typeof window !== 'undefined') {
            init();
        }
    });

    onDestroy(() => {
        console.log("onDestroy triggered");
        if (typeof window !== 'undefined') {
            window.removeEventListener('click', onMouseClick);
        }
        if (renderer) {
            renderer.dispose();
        }
    });
</script>

<style>
    .three-container {
        height: 100%;
        aspect-ratio: 1;
        border: 2px solid blue;
        position: relative;
    }
</style>

<!-- Assign an ID to the container div -->
<div id="three-container" class="three-container"></div>
