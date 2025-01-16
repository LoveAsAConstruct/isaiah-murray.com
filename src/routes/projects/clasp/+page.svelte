<script>
	import projectPageStyles from '$lib/styles/project-page-notion.css?url';
</script>

<svelte:head>
	<link rel="stylesheet" href="{projectPageStyles}">
	<title>CLASP</title>
</svelte:head>

<body>
	<img
		class="page-cover-image"
		src="$lib/images/projects/clasp/IMG_4305-min.jpg"
		style="object-position:center 40%"
	/>
	<div class="container">
		<article id="1071953a-b5aa-8105-8ebd-c4a5bfdf3118" class="page sans">
			<header>
				<h1 class="page-title">CLASP</h1>
			</header>
			<div class="page-body">
				<div class="column-list">
					<div class="column">
						<p>
							This project is a dive into BLE (Bluetooth Low Energy) within wearables. The goal is to produce a wearable in the form of a bracelet that tracks when in proximity to other bracelets of the same type and logs interactions. This functions as a system beyond existing social media, promoting physical interactions, as well as a way to track the interactions in your life and represent your connections with people through time.
						</p>
					</div>
					<div class="column">
						<p>
							While the overall goal of this project is the creation of a BLE bracelet, the primary goal at the moment is to allow two nRF52382 RF chips to register each other when in proximity. Once this is achieved, the system will be mounted within a bracelet and powered off of a LiPo battery. In the future, a mobile app could be created to sync and display the bracelet interaction data.
						</p>
					</div>
				</div>

				<h1 id="initial-prototypes">Initial Prototypes</h1>
				<p>
					This project started by building rough prototype circuits to teach myself PCB design.
				</p>
				<div class="column-list">
					<div class="column">
						<p>
							These were two initial prototypes built in Autodesk’s Fusion 360. The two boards were developed with the goal of low-power energy harvesting. Previous to the now refined goal of social interaction logging, these earlier prototypes simply served to teach myself PCB design and demonstrate the powering of LEDs via TEG plates.
						</p>
					</div>
					<div class="column">
						<figure class="image">
							<img src="$lib/images/projects/clasp/Screenshot_2025-01-06_at_3.58.46_PM.png" alt="Prototype 1" />
						</figure>
						<figure class="image">
							<img src="$lib/images/projects/clasp/Screenshot_2025-01-06_at_9.49.19_AM.png" alt="Prototype 2" />
						</figure>
					</div>
				</div>

				<h1 id="refined-prototype">Refined Prototype</h1>
				<div class="column-list">
					<div class="column">
						<p>
							After learning PCB design skills, I created a full-form BLE board. I used the <a href="https://www.notion.so/NRF52832-QFAA-R">NRF52832-QFAA-R</a> microcontroller, which specializes in low-power RF and is a versatile platform. Additionally, I added an <a href="https://www.notion.so/ADXL345BCCZ">ADXL345BCCZ</a> accelerometer for tap detection, and an <a href="https://www.notion.so/M95P08-EXMNT-E">M95P08-EXMNT/E</a> EEPROM chip. The board also includes 3 LEDs for status display and a 2.4GHz radar chip <a href="https://www.notion.so/74889302450">74889302450</a>.
						</p>
						<p>
							I purchased the board from OSHPark, and bought the components from Digikey. At home, I laser-cut a solder-paste stencil from mylar and sintered the chips in a homemade reflow toaster oven.
						</p>
						<p>
							Unfortunately, this board didn’t work. It had flaws in the design, such as the chip antenna being completely botched and untuned. Additionally, the laser-cut mylar solder-paste stencil had poor tolerance and deposited too much solder paste due to kerf.
						</p>
					</div>
					<div class="column">
						<figure class="image">
							<img src="$lib/images/projects/clasp/IMG_4130-min.jpg" alt="Refined Prototype Top" />
						</figure>
						<figure class="image">
							<img src="$lib/images/projects/clasp/IMG_4095-min.jpg" alt="Refined Prototype Bottom" />
						</figure>
					</div>
				</div>

				<h1 id="final-board">Final Board</h1>
				<div class="column-list">
					<div class="column">
						<p>
							Incorporating lessons learned from the prior boards, I created the Clasp board V2.0. This new board kept the <a href="https://www.notion.so/NRF52832-QFAA-R">NRF52832-QFAA-R</a> microcontroller and <a href="https://www.notion.so/ADXL345BCCZ">ADXL345BCCZ</a> accelerometer, but added many improvements. This new model uses an NPM1300 low-energy power regulation chip, supports LiPo batteries, and allows charging via USB-C. Instead of a chip antenna, a PCB trace antenna was used, and the EEPROM was scaled down into a smaller chip.
						</p>
						<p>
							This board worked well and was a good platform for the NRF52832. It was able to run the NRF examples and showcased full functionality.
						</p>
					</div>
					<div class="column">
						<figure class="image">
							<img src="$lib/images/projects/clasp/IMG_4305-min.jpg" alt="Final Board Top" />
						</figure>
						<figure class="image">
							<img src="$lib/images/projects/clasp/IMG_4316-min.jpg" alt="Final Board Bottom" />
						</figure>
					</div>
				</div>

				<h1 id="enclosure">Enclosure</h1>
				<p>
					The enclosure for Clasp is currently designed to fit on a keychain. Here are some images of the enclosure:
				</p>
				<div class="column-list">
					<div class="column" style="width:100%">
						<figure class="image">
							<img src="$lib/images/projects/clasp/IMG_4516-min.jpg" alt="Enclosure Top" />
						</figure>
						<figure class="image">
							<img src="$lib/images/projects/clasp/IMG_4523-min.jpg" alt="Enclosure Bottom" />
						</figure>
					</div>
					<div class="column" style="width:100%">
						<figure class="image">
							<img src="$lib/images/projects/clasp/IMG_4518-min.jpg" alt="Enclosure Side" />
						</figure>
						<figure class="image">
							<img src="$lib/images/projects/clasp/IMG_4526-min.jpg" alt="Enclosure Alternate View" />
						</figure>
					</div>
				</div>
			</div>
		</article>
	</div>
</body>
