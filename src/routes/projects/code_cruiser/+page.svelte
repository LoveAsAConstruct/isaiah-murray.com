<script>
  import "$lib/styles/project-pages.css";
  import TextLeftImageRight from '$lib/components/TextLeftImageRight.svelte';
  import TextRightImageLeft from '$lib/components/TextRightImageLeft.svelte';
  import FullImage from '$lib/components/FullImage.svelte';
  import FullText from '$lib/components/FullText.svelte';
</script>

<div class="project-page">
  <h1 class="project-title">Project 1</h1>
  <TextLeftImageRight text="This is some text on the left with an image on the right." image="/images/egg_lathe/4042049F-4E5C-4FE2-90E5-DB033294D7C5_1_105_c.jpeg" />
  <TextRightImageLeft text="This is some text on the right with an image on the left." image="/images/sample2.jpg" />
  <FullImage image="/images/sample3.jpg" />
  <FullText text="This is a full text section without any image." />
</div>
