<script>
  import GalleryShowcase from '$lib/components/GalleryShowcase.svelte';

  const images = [
    {
      src: '/images/egg_lathe/4042049F-4E5C-4FE2-90E5-DB033294D7C5_1_105_c.jpeg',
      alt: 'Gallery Image 1',
      link: '/projects/egg_lathe',
      description: 'A CNC application for automated egg dying'
    },
    {
      src: '/images/gallery2.jpg',
      alt: 'Gallery Image 2',
      link: '/projects/project2',
      description: 'This is a description for Gallery Image 2'
    },
    {
      src: '/images/gallery3.jpg',
      alt: 'Gallery Image 3',
      description: 'This is a description for Gallery Image 3'
    }
  ];
</script>

<GalleryShowcase {images} />
