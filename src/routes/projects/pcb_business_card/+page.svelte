<script>
    import projectPageStyles from '$lib/styles/project-page-notion.css?url';
  </script>
  
  <svelte:head>
    <link rel="stylesheet" href="{projectPageStyles}">
    <title>PCB Business Card</title>
  </svelte:head>

<main>
<body>
	<header>
		<img class="page-cover-image" src="$lib/images/projects/pcb-card/IMG_4365.jpeg" alt="Page Cover Image">
	</header>
    <div class="container">
        <article class="page-body">
            <h1>PCB Business Card</h1>
            <div class="column-list">
                <div class="column">
                    <p>This project is a showcase of PCB design. It is the process of creating an interactable business/id card. Prioritizing low cost, low profile components, and low power, this is an experience for me to learn and grow within the realm of embedded circuits.</p>
                </div>
                <div class="column">
                    <p>My goal for this project is to create a number of relatively cheap and easy-to-make business cards. I currently am aiming for an NFC-enabled card that will open my portfolio site when tapped. Additionally, I would like to display a sand simulation within an 8x8 LED matrix.</p>
                </div>
            </div>
            <hr>
            <h1>Inspiration</h1>
            <p>After embarking on this project I realized it is very unoriginal and looks virtually identical to many before me. I can but only aspire to reach the same quality as my forefathers.</p>
            <div class="column-list">
                <div class="column">
                    <figure class="image">
                        <img src="$lib/images/projects/pcb-card/stylo7.jpeg" alt="Example 1">
                    </figure>
                    <p>A <strong>preem</strong> business card example, made by Tim Jacobs (<a href="http://mitxela.com">mitxela.com</a>), this card doubles as a MIDI module.</p>
                </div>
                <div class="column">
                    <figure class="image">
                        <img src="$lib/images/projects/pcb-card/_wUxdxBNkjN.jpeg" alt="Example 2">
                    </figure>
                    <p>A card that is kinda similar to mine (although I use a few more LEDs). I came across this one after I was in the development stage, but still am kinda sad how similar they are. (I even think he uses the same microprocessor).</p>
                </div>
            </div>
            <hr>
            <h1>Methodology</h1>
            <p>The card has four main components: an NFC module, an LED matrix, an IMU, and a power source.</p>
            <div class="column-list">
                <div class="column">
                    <h2>NFC Module</h2>
                    <p>The NFC module has the goal of opening up my website when read by a nearby phone. I currently think I can do that by simply transmitting the HTML to the site. Additionally, I am trying to make the chip passive-enabled if the battery is empty/not installed, allowing the card to do a rudimentary interaction, even if there is no power. I am using the LSM6DSV16XTR NFC component to do this.</p>
                    <p>In my first iteration, the NFC antenna traced the perimeter of the card. This gave a uniform NFC distribution but caused problems when I needed to route ground traces. The second iteration dedicated half of the card to a smaller antenna, with the other half containing the logic electronics. This served to remove interference from ground elements by isolating the antenna from the rest of the board.</p>
                </div>
                <div class="column">
                    <figure class="image">
                        <img src="$lib/images/projects/pcb-card/Screenshot 2024-09-27 at 9.36.49 AM.png" alt="NFC Module">
                    </figure>
                    <p><em>Iteration 1: NFC antenna traces loop perimeter</em></p>
                    <figure class="image">
                        <img src="$lib/images/projects/pcb-card/Screenshot 2024-09-27 at 9.31.28 AM.png" alt="NFC Antenna Iteration 2">
                    </figure>
                    <p><em>Iteration 2: NFC antenna traces dedicated antenna section</em></p>
                </div>
            </div>
            <h2>LED Matrix</h2>
            <div class="column-list">
                <div class="column">
                    <p>The LED matrix is the primary display module of the card, originally planned to be composed of 0201 footprint LEDs. The matrix consists of an 8x8 array of 64 0603 footprint low-current LEDs in a common cathode matrix. The specific LEDs used were initially 0201 SunBright nano-LEDs, prioritizing display size efficiency and brightness per square inch. However, due to cost and current draw, I decided to go with the much larger but more efficient KW DELPS2.RA-MIPI-FK3PM3-S4W5-0.5-R18 LEDs. These larger LEDs have an advertised current draw of 0.5mA compared to the SunBright 20mA. Depending on their performance in the first prototype, I will decide whether to stick with my current LED or switch back to the 0201 footprints. I may also switch to dual-color LEDs, providing more depth without complicating the circuit much more.</p>
                </div>
                <div class="column">
                    <figure class="image">
                        <img src="$lib/images/projects/pcb-card/Screenshot 2024-09-27 at 9.23.11 AM.png" alt="LED Matrix">
                    </figure>
                </div>
            </div>
            <h2>IMU</h2>
            <div class="column-list">
                <div class="column">
                    <p>The IMU was likely the hardest component to find in this project. I went through a number of selections, from gyroscopes, to accelerometers, to tilt sensors, and even fully integrated IMU units. My goal was to minimize component cost while still having the ability to track the card’s orientation relative to gravity. After refining my search, I found the BMA400, a low-cost XYZ accelerometer produced by Bosch. It is super compact, has 1 and 2g ranges, and high enough resolution at these ranges to determine gravity orientation. It is also I2C-enabled and supports double-tap interrupts, all for ~2$.</p>
                </div>
                <div class="column">
                    <figure class="image">
                        <img src="$lib/images/projects/pcb-card/Screenshot 2024-09-27 at 9.23.28 AM.png" alt="IMU">
                        <img src="$lib/images/projects/pcb-card/Screenshot 2024-09-27 at 9.23.20 AM.png" alt="IMU">
                    </figure>
                </div>
            </div>
            <h2>CPU</h2>
            <div class="column-list">
                <div class="column">
                    <p>To determine which controller to use for the brains of the board, I decided to look for low-cost, low-power microcontrollers. Initially, I considered the ATTINY, but I later discovered the CH32V003F4P6. This 32-bit RISC-V2A processor runs at 48-MHz, with 2KB of SRAM and 16KB of flash memory. It supports low-power modes, has a built-in ADC, up to 18 GPIO ports, I2C, SPI, and USART interfaces, and supports 1-wire serial debug (SDI). All this for an unbelievably cheap $3 per 50 pcs on AliExpress.</p>
                </div>
                <div class="column">
                    <figure class="image">
                        <img src="$lib/images/projects/pcb-card/Screenshot 2024-09-27 at 9.22.59 AM.png" alt="CPU">
                    </figure>
                </div>
            </div>
            <h2>Battery</h2>
            <div class="column-list">
                <div class="column">
                    <p>Figuring out a power source was a tough decision that reflected my entire design approach. The battery was the primary limitation when it came to features that could be included, specifically the max current draw of the battery. In the end, I decided to follow the simplest approach of a coin cell battery.</p>
                </div>
                <div class="column">
                    <figure class="image">
                        <img src="$lib/images/projects/pcb-card/image2.png" alt="Battery">
                    </figure>
                </div>
            </div>
            <hr>
            <figure class="bookmark">
                <img src="https://github.com/fluidicon.png" alt="GitHub Logo">
                <div>
                    <p><strong>LoveAsAConstruct/Business-Card</strong></p>
                    <p>Repository for software running on a PCB business card - LoveAsAConstruct/Business-Card</p>
                    <a href="https://github.com/LoveAsAConstruct/Business-Card">View on GitHub</a>
                </div>
            </figure>
        </article>
    </div>
</body>
</main>