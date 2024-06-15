<script>
  import "$lib/styles/project-pages.css";
  import TextLeftImageRight from '$lib/components/TextLeftImageRight.svelte';
  import TextRightImageLeft from '$lib/components/TextRightImageLeft.svelte';
  import FullImage from '$lib/components/FullImage.svelte';
  import FullText from '$lib/components/FullText.svelte';
  import GalleryShowcase from '$lib/components/GalleryShowcase.svelte';

  const images = [
    {
        src: 'https://github.com/LoveAsAConstruct/Egg-Lathe/assets/75375433/5811fa32-4e49-401a-9dd1-9c2e7f19ab6b',
        alt: 'IMG_1329-2',
        link: '/projects/egg_lathe',
        description: 'A CNC application for automated egg dying'
    },
    {
        src: 'https://github.com/LoveAsAConstruct/Egg-Lathe/assets/75375433/a56e154c-e017-4b0a-9304-8eead72ac112',
        alt: 'IMG_1235',
        link: '/projects/egg_lathe',
        description: 'A CNC application for automated egg dying'
    },
    {
        src: 'https://github.com/LoveAsAConstruct/Egg-Lathe/assets/75375433/dffc740c-00ba-4265-9595-9cbbc3af3ad7',
        alt: 'IMG_1408',
        link: '/projects/egg_lathe',
        description: 'A CNC application for automated egg dying'
    },
    {
        src: 'https://github.com/LoveAsAConstruct/Egg-Lathe/assets/75375433/19607136-d836-4a6a-ad79-658aae498845',
        alt: 'IMG_1409',
        link: '/projects/egg_lathe',
        description: 'A CNC application for automated egg dying'
    },
    {
        src: 'https://github.com/LoveAsAConstruct/Egg-Lathe/assets/75375433/d73324c8-ff39-4b3c-a59f-79348b1b1c1f',
        alt: 'IMG_1410',
        link: '/projects/egg_lathe',
        description: 'A CNC application for automated egg dying'
    },
    {
        src: 'https://github.com/LoveAsAConstruct/Egg-Lathe/assets/75375433/fa1ccc10-1b96-48e6-9c56-04335c232fda',
        alt: 'IMG_1339-2',
        link: '/projects/egg_lathe',
        description: 'A CNC application for automated egg dying'
    },
    {
        src: 'https://github.com/LoveAsAConstruct/Egg-Lathe/assets/75375433/42e965ef-d9bc-47ce-bea8-7bc89cf9fb8d',
        alt: 'IMG_1355',
        link: '/projects/egg_lathe',
        description: 'A CNC application for automated egg dying'
    },
    {
        src: 'https://github.com/LoveAsAConstruct/Egg-Lathe/assets/75375433/fbf32e20-7d71-4043-a94c-19a2ea166c49',
        alt: 'IMG_1415',
        link: '/projects/egg_lathe',
        description: 'A CNC application for automated egg dying'
    },
    {
        src: 'https://github.com/LoveAsAConstruct/Egg-Lathe/assets/75375433/9e15d138-f5da-429e-af48-5d1fa9085b38',
        alt: 'IMG_1308',
        link: '/projects/egg_lathe',
        description: 'A CNC application for automated egg dying'
    }
  ];

</script>

<div class="project-page">
  <h1>Intro</h1>
  <p>A side project! Egg Lathe is the undertaking of automating the process of Ukranian egg dying (known as Pysanky). This project contains details on the hardware, firmware, and driver application of this project.</p>
  <h2>Fusion File</h2>
  <p>I used Fusion 360 to create the files in this! You can find the production file here: <a href="https://a360.co/3VEWWg4">https://a360.co/3VEWWg4</a></p>
  <h1>Images</h1>
  <GalleryShowcase {images} />
</div>
