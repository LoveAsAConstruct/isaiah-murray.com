<script>
	import projectPageStyles from '$lib/styles/project-page-notion.css?url';
  </script>
  
  <svelte:head>
	<link rel="stylesheet" href="{projectPageStyles}">
	<title>Radar Calibration</title>
  </svelte:head>
	<body>
		<img
					class="page-cover-image"
					src="https://www.notion.so/images/page-cover/gradients_3.png"
					style="object-position:center 60%"
				/>
	<div class="container">
				
		<article id="10a1953a-b5aa-8091-8952-ef9863ea4a9a" class="page sans">
			<div class="page-body">
				<h1 id="10e1953a-b5aa-8023-bf15-dd2c437bd18a" class="">
					Radar Calibration
				</h1>
				<p id="10e1953a-b5aa-80b7-bf63-ef8365105834" class="">
					This is a project I worked on within Cherish. Previous to my
					involvement, the hardware department would receive boards
					from fabrication, and have to calibrate the antennas gain
					and phase by hand. There are many antennas on the board
					(exact number cannot be disclosed) so this process was
					taking a while.
				</p>
				<h2 id="10e1953a-b5aa-80da-aff9-f10693ed319e" class="">
					My Involvement
				</h2>
				<p id="10e1953a-b5aa-8007-b8cc-fe42d679645e" class="">
					When I joined, people were looking to automate this process.
					Hoping to speed up the process, I began to try my hand at
					the issue.
				</p>
				<p id="10e1953a-b5aa-80d0-913d-fe6f7c9321ad" class="">
					There are two antenna arrays, one for transmitting signals,
					and one for receiving signals. These arrays are controlled
					by a total of four beamformer chips, one for the transmit
					array, and three for the receive array. These beamformer
					chips are in turn controlled by the onboard FPGA, which I
					connect to through a PC.
				</p>
				<p id="10e1953a-b5aa-803b-97ec-f10281348d3e" class="">
					I decided to approach the problem of calibration in a two
					pronged approach, I would first calibrate the transmit
					array, and then calibrate the receive array. To calibrate
					the transmit array, I needed to use a spectrum analyzer to
					process a signal outputted by the board. This was directly
					contrasting the receive array, which used a signal generator
					to emit a wave that could be processed by the antennas.
				</p>
				<div
					id="10e1953a-b5aa-8050-8b9a-e78e1d42d0a5"
					class="column-list"
				>
					<div
						id="157c0505-bae5-4665-a2bf-0a8cd8651826"
						style=""
						class="column"
					>
						<h2 id="10e1953a-b5aa-805a-a099-cdfeda4af1ec" class="">
							Transmit Calibration
						</h2>
						<p id="10e1953a-b5aa-80a3-807d-d60f082ba914" class="">
							This was the first array I calibrated. Each antenna
							on the array has a phase and gain. The phase is
							responsible for offsetting the signal received by
							the beamformer, causing the antenna signal to be
							delayed by a specified amount. The gain effects the
							power of the signal, with more gain (attenuation)
							lowering the power output.
						</p>
						<p id="10e1953a-b5aa-8074-aebd-cf3ee76c2e4b" class="">
							To calibrate the gain of the antenna, I would
							utilize the FPGA to read the power draw of each
							antenna, and after choosing a reference, modify all
							other chips to match that set power level. Due to
							legal guidelines, I would have to ensure that the
							gain was above a value to keep the signal range
							being emitted below a legal limit.
						</p>
						<p id="10e1953a-b5aa-80c6-8255-d81366115055" class="">
							The calibration of phase was a bit harder. Each
							antenna outputs a sine wave, offset slightly based
							on the trace distance and board material of the
							circuit, which differs by manufacturer. Due to this,
							I need to sync up the sine waves to maximize the
							power being read by a spectrum analyzer. The board
							is placed within a RF isolation box, and pointed
							towards a receiver at the other end of the box.
						</p>
						<p id="10e1953a-b5aa-80c7-a565-f15e2cffbffa" class="">
							Once the RF array is setup within the box I loop
							through each antenna connected to the beamformer,
							and, critically, find a phase value that minimizes
							the signal strength on the spectrum analyzer. I
							minimize the value due to the existence of radiation
							pattern irregularities, which manifest as
							inconstancies in each antennas signal strength
							distribution. This causes abnormal “lobes” of high
							or low energy to appear on the fringes of an
							antennas radiation, and scale in severity along with
							the power of the antenna. Due to this, we minimize
							the power, also minimizing the effect of the
							electromagnetic lobes, and putting the antenna
							directly out-of-phase of the overall signal. The
							antenna’s phase is then completely flipped, which
							puts the antenna alongside the phase of the
							reference, without causing anomalies due to
							radiation pattern irregularities.
						</p>
						<p id="10e1953a-b5aa-8067-a9b4-e5488fd0ff3c" class="">
							Once this was calibrated, I analyzed the transmit
							signal distribution with a radar plot, where I would
							rotate the radar board by a specified interval, and
							take another sample, gradually accumulating the
							signal intensity from each angle of the board. The
							resulting graph showcases the signal distribution of
							the phased radar array.
						</p>
						<p id="10e1953a-b5aa-801b-9dc2-c862e71b36a6" class="">
							Unfortunately, the graph showcased A slightly
							non-ideal radiation pattern. After much frustrated
							debugging, it was determined that the result of this
							was from the gain calibration, as each antenna
							starts with acceptable gain, and the simulated
							annealing algorithm is much to vigorous, overfitting
							the antenna gain to the geometry of the board,
							resulting in less-than-optimal performance of actual
							signal transmission.
						</p>
						<p id="10e1953a-b5aa-80d9-8d6d-ee52cd4c5786" class="">
							With the gain calibration passed in favor of a much
							gentler value approximation, the radar displayed
							significantly higher quality beam distribution when
							compared to a non-calibrated, manually-calibrated,
							or overfitted array.
						</p>
					</div>
					<div
						id="b04f08f1-171f-47e7-83fd-8a329a0dc99d"
						style=""
						class="column"
					>
						<h2 id="10e1953a-b5aa-8036-9a61-c8841ed06c0c" class="">
							Receive Calibration
						</h2>
						<p id="10e1953a-b5aa-805e-8c8c-c48c1c94ab60" class="">
							The calibration of the RX arrays was slightly
							different. Rather than routing all antennas through
							a single beamformer, the antennas were distributed
							across three separate beamformers, each responsible
							for a section of the emitter.
						</p>
						<p id="10e1953a-b5aa-80f8-8d86-fe5c34fc6b9e" class="">
							The antennas within each beamformer section began by
							being locally calibrated to each other. This was
							done using the same phase-matching function as the
							transmitter array.
						</p>
						<p id="10e1953a-b5aa-8024-9ede-d0885adac4d4" class="">
							After this local calibration, I was left with three
							receiver arrays emitting at different phases. This
							resulted in each array performing well when isolated
							(142% improvement) but interfering when transmitting
							as one module.
						</p>
						<p id="10e1953a-b5aa-80c1-90e3-cbf527aa8154" class="">
							To solve this problem, I chased a configuration
							installed in the library to offset each beamformer
							chip’s phase by a set quantity. However, unbeknownst
							to me, the override I was using to calibrate the
							array was inadvertently overriding the initial
							global offsets. This contributed to a good amount of
							insanity and pouring over old code.
						</p>
						<p id="10e1953a-b5aa-80e9-befc-c6a078f6829b" class="">
							Eventually, I realized I needed to apply the global
							offsets directly to the individual antenna arrays.
							Implementing this resulted in exceptional receiver
							array performance, and a power increase of 310%.
						</p>
						<figure
							id="10e1953a-b5aa-8038-9378-f17eebb88d22"
							class="image"
						>
							<img
								style="width:330.9921875px"
								src="$lib/images/projects/radar-calibration/Screenshot_(3).png"
							/>
						</figure>
						<p id="10e1953a-b5aa-80c3-9789-d3c08d408ec9" class="">
							<em
								>Final receive array azimuth distribution
								(censored)</em
							>
						</p>
						<figure
							id="10e1953a-b5aa-804d-b576-c585fadcd735"
							class="image"
						>
							<img
									style="width:330.9921875px"
									src="$lib/images/projects/radar-calibration/image.png"
								/>
						</figure>
						<p id="10e1953a-b5aa-8030-8df4-d17765ebc403" class="">
							<em
								>Final receive array azimuth and elevation graph
								(logarithmic)</em
							>
						</p>
						<p
							id="10e1953a-b5aa-8065-8b1e-c057e4649456"
							class=""
						></p>
					</div>
				</div>
				<hr id="10e1953a-b5aa-8044-a767-e00e3549c640" />
				<p id="10e1953a-b5aa-80da-9ee6-ccd1dd8cef2b" class="">
					In the end, I was able to speed up calibration times from
					many hours of employee time to a 30 minute program, which
					improved antenna efficiency with up to 310% improvements.
				</p>
			</div>
		</article>
		<span class="sans" style="font-size:14px;padding-top:2em"></span>
	</div>
</body>