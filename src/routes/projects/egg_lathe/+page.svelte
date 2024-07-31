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
  <h1>Egg Lathe</h1>
  <p>The Egg Lathe is an automation of Ukranian egg dying (known as Pysanky). This project consists of 3 major parts: hardware, firmware, and software.</p>
  <h2>Background</h2>
  <p>My family likes to dye traditional Ukranian eggs for easter, it was one of these events when I had the strange compulsion to build a device to provide the ability to "print" out intricate egg designs. In the following months, I diagrammed, constructed, and programmed a CNC application to allow for precise and reproducible patterning of an egg surface</p>
  <h2>Hardware</h2>
  <p>The frame is primarily lasercut wood (4.175mm draftboard and plywood) secured with M2.5 and M3 screws. Additionally, some components are 3D printed, using a Prusa MK3s+ with black PLA filament. The printed components are designed to minimize wasted support material, and are oriented strategically to reduce the chance of a part breaking along a layer. It should be noted that the forces of the device are relatively light, and the operations the machine performs have negligible wear on its components. </p>
  <p>To manipulate a workpiece, two NEMA-11 stepper motors are used to grant 2-axis of motion. The first motor can rotate the egg axially once secured, and a linear belt drive is connected to a tool carriage and secondary motor, granting linear motion parallel to the axes of the egg.</p>
  <p>The egg is secured between two 3D-printed friction holds, one mounted on the axle of the rotary motor, and the second free-spinnning between two bearings. The second hold is mounted on an 8mm aluminum rod, springloaded between two adjustable bearings allowing for adjustable holding pressure.</p>
  <p>For the tooling carriage, I was liberal with the use of 3D printed components. The carriage itself is a 3D-printed glamorized span across two linear rails and the linear belt. The tuning of the carriage was tough, as, although most iterations were designed for 5mm linear bearings and steel rods, I had to design for wood and 3D printed components in order to keep cost down. Thus, the design of the linear movement was primarily trial and error. In the end, I mocked up the linear bearings with 3D printable sheaths matching the bearing's dimensions, and utilized the weight of the toolhead bearing to offset the angle caused by the pulling of the belt drive. The toolhead itself was initially designed to hold a pencil, which would be pushed down into the egg by gravity. The 13mm bore for the pencil allows for the ability to use a wax pen instead of a writing instrument.</p>
  <p>Finally, the electronics are powered by an arduino Uno development board, prioritizing cost-effectiveness. I incorperated a pair of 4 digit 7-segment displays for coordinate display, and I added a joystick for 2 axis analog and 1 button user input. There is also a limit switch used to calibrate the linear belt drive.</p>
  <h2>Firmware</h2>
  <p>The arduino has a script loaded that uses the serial port to recieve and respond to commands and queries from a USB input. While recieving primarily X and Y movement commands, there is the ability to change the stepper motor step setting (SINGLE, DOUBLE, MICROSTEP, and INTERLEAVE) and speed. Additionally, the 8 digit display can be configured, and the tool and workpiece can be controlled manually through the mounted joystick</p>
  <h2>Software</h2>
  <p>The software is simply a python script with high level command creation, toolpath previewing, and a simple GUI allowing for communication with the device through a USB port. along with simple X and Y movement command examples, the python script has a variety of preset command packages (sine wave, gradient, square, circle, random walk) as well as having the ability of packaging existing command sequences into unique instruction chunks. Once a program is written, the software will preview the toolpath, and with the press of a button, will queue and run an uncompressed version of your program on the device.</p>
  <h2>Fusion File</h2>
  <iframe title="Fusion File" src="https://myhub.autodesk360.com/ue2da65fe/shares/public/SHd38bfQT1fb47330c998ca1eec216632d9f?mode=embed" width="800" height="600" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"  frameborder="0"></iframe>
  <p>I used Fusion 360 to create the files in this! You can find the production file here: <a href="https://a360.co/3VEWWg4">https://a360.co/3VEWWg4</a></p>
  <h1>Images</h1>
  <GalleryShowcase {images} />
</div>

<style>
    a {
        color: #CA9679
    }
</style>