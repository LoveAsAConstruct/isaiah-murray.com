<script>
    export let title = "MIT CHEM-E: STRANO RESEARCH GROUP";
    export let subtitle = "Laboratory Assistant";
    export let description = "Admitted to the MIT HIP-SAT program where I worked in Professor Michael Strano's lab to refine the power output of thermal resonators. Tested and developed phase change materials (PCMs). Created and delivered the final presentation at the HIP-SAT Symposium, and presented a poster at the Boston Mammalian Synthetic Biology Symposium.";
    export let date = "2023 - 2023";
    export let width = 400;
</script>

<div class="container">
    <h2>{title}</h2>
    <i>{subtitle}</i>
    <p>{description}</p>
    <i>{date}</i>
</div>

<style>
    .container {
        font: 18px Inter, sans-serif;
        max-width: var(--width)*1px;
        overflow-wrap: normal;
        overflow: hidden;
    }
    h2 {
        margin: 0;
        color: #2F1C12;
        font-weight: bold;
    }
    i {
        margin: 0;
        color: #CA9679;
    }
    p { 
        margin: 0;
        color: #030302;
    }
</style>