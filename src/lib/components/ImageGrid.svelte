<script>
    export let images = [];
</script>

<style>
.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1rem;
}

.grid img {
    width: 100%;
    height: auto;
    object-fit: cover;
}
</style>

<div class="grid">
{#each images as { src, alt }}
    <img {src} {alt} />
{/each}
</div>
  