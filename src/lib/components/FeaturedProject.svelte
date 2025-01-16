<script>
    export let name = "Placeholder"
    export let image_link = "/images/projects/clasp/image.jpg"
</script>


<div class="project-card">
    <img src="{image_link}">
</div>

<style>
    h1 {
        height: 5%;
        margin-top: 5px;
        margin-left: 5px;
    }
    img {
        overflow:hidden;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .project-card{
        overflow: hidden;
        z-index: 2;
        border-radius: 15px;
        background-color: #f9f9f9; /* Example background color */
        display: flex;
        flex-direction: column;
        justify-content: space-between; /* Distribute content evenly */
        align-items:stretch; /* Center items horizontally */
        transition: all ease-in-out 100ms;
    }

    .project-card:hover {
        box-shadow: 0 5px 15px rgba(0,0,0,0.3); 
        scale: 110%;
    }
</style>