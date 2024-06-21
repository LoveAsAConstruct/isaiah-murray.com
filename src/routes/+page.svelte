<script>
    import Entry from "../components/entry.svelte";
</script>


<div class="header-container">
    <img class="header-image" src="\images\v11_47.png">
    <div class="name-container">
        <h1>Isaiah Murray</h1>
        <sub>Student at <a href="https://cambridge.nuvustudio.com/">Nuvu Innovation School</a></sub>
    </div>
</div>

<div class="content-container">
    <h1>Experience</h1>
    <div class=experience-container>
        <Entry width=400 title = "SCRIBBLE WORLDS ACTIVITY BOOK" subtitle = "Inventor and Co-founder" date="2016 - present" description="Invented Scribble Worlds (www.scribbleworlds.com) with father, combining love of Dungeons and Dragons, Rogue-like adventure games, and video games with love of creating physical objects.  Created a process for laser cutting complex paper shapes to support industrial (well, cottage-industry) production.  Helped create final game and marketing content.  Worked with parents to submit patent and trademark for the business."></Entry>
        <Entry></Entry>
    </div>
</div>

<style>
    .experience-container {
        flex-wrap: wrap;
        flex-direction: column;
    }

    .content-container {
        margin: 15px;
        font: 20px Inter, sans-serif;
    }

    .header-image {
        width: 100%;
    }
    .header-container{
        position: relative;
    }
    .name-container{
        position: absolute;
        width: 100%;
        left: 25px;
        bottom: 25px;
        color: #FDF6D6;
        font: 32px Inter, sans-serif;
    }
    .name-container h1{
        margin: 0;
        position: absolute;
        bottom: 22px;
        font-weight: 800;
        font: 64px;
    }
    .name-container sub{
        margin: 0;
        font: 24px Inter, sans-serif;
        width: 100%;
        font-weight: 100;
        position: absolute;
        bottom: 0px;
    }
    .name-container sub a{
        color: #F35D91;
        text-decoration: none;
    }
    .name-container sub a :hover{
        font-weight: 700;
        scale: 1.5;
    }
</style>