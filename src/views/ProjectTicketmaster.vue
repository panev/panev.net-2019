<template>
	<div id="project-ticketmaster" class="app-view">

		<header class="grid-container">
			<div class="logo-and-back">
				<h3>Project<span>:</span> Ticketmaster</h3>
				<router-link to="/">< Back</router-link>
			</div>
			<nav :class=" { 
				contextActive: contextActive,
				projectGoalsActive: projectGoalsActive,
				processActive: processActive,
				outcomeActive: outcomeActive }" >
				<a class="context-link" href="#" v-scroll-to="'#context'">Context</a>
				<a class="project-goals-link" href="#" v-scroll-to="'#project-goals'">Project Goals</a>
				<a class="process-link" href="#" v-scroll-to="'#process'">Process</a>
				<a class="outcome-link" href="#" v-scroll-to="'#outcome'">Outcome</a>
				<div class="active-marker"></div>
			</nav>
		</header>

		<div class="hero-unit">
			<div class="grid-container">
				<img src="@/assets/project-ticketmaster/tm-logo.svg" alt="phone image">
				<div class="hero-info">
					<div class="hero-heading">
						<span>Ticketmaster</span> is an American ticket sales and distribution company. 
					</div>
					<div class="hero-subheading">
						TL;DR:
					</div>
					<p>
						In late 2016 I had the opportunity to work with ticketmaster.com’s design team, building the design system behind the website that sells hundreds of millions of tickets each year.
					</p>
					<div class="hero-subheading">
						PROJECT ROLES:
					</div>
					<ul>
						<li>User Interface Designer</li>
						<li>Visual Designer</li>
					</ul>
				</div>
			</div>
		</div>

		<div class="content">
			<section class="audio grid-container">
				<div class="duration">10 minute read</div>
				<div class="listen-label">Don't want to? Listen to an audio version of this case study instead!</div>
				<audio controls>
					<source v-bind:src="audioSrc">
				</audio>
			</section>
			<section id="context" ref="context" class="grid-container">
				<img src="@/assets/project-shared/context.svg" alt="context image" class="section-thumb">
				<h2>Context</h2>
				<p>
					For the longest time, I've been an avid listener of a certain online drum and bass radio – bassdrive.com. What had been bugging me recently was that there wasn't a way for me to listen to it on a mobile phone, at least not that easily – each time I had to go to the website, which wasn't responsive and fiddle with the tiny buttons and awkward flow to start listening.
				</p>
				<p>
					I hadn't coded anything in a long while so I thought that making something small that solves this first-world-problem of mine would be a great opportunity to catch up on the latest in the web technology world as well as give something back to the fantastic community that operates the online radio station. 
				</p>
			</section>
			<section id="project-goals" ref="project" class="grid-container">
				<img src="@/assets/project-shared/projectGoals.svg" alt="project goals image" class="section-thumb">
				<h2>Project goals</h2>
				<p>What I needed was a one-click solution – easy right? A play button.</p>
				<img src="@/assets/project-lockedin/buttonSketch.jpg" alt="sketch of a button" class="mock">
				<p>
					However, I wanted to purposefully overengineer this solution and go beyond vanilla web technologies and dip my foot in the emerging world of progressive web apps, vue.js and CSS grid – things I had only read about and found immensely interesting to play around with. Despite being overkill for my simple use case, these tools would allow me to achieve a native-like feel, improved performance (PWAs), build a landing page for the desktop that I could reuse on mobile (CSS grid) and scale this project in the future to be more than just a play button for 1 online radio (vue.js).
				</p>
			</section>
			<section id="process" ref="process" class="grid-container">
				<img src="@/assets/project-shared/process.svg" alt="process there image" class="section-thumb">
				<h2>Process</h2>
				<p>
					I started off by considering when and how myself and others would use this thing – I kind off already knew that for myself and for now that was enough to get started – pressing play and then immediately doing something else, while the audio plays in the background.
				</p>
				<img src="@/assets/project-lockedin/flow.jpg" alt="flowchart" class="mock">
				<p>
					I drew a few sketches, considered a few cases and then went digital. What I ended up with were a big play/pause button and a title. I opted out of volume controls since all phones already have those as hardware buttons. 
				</p>
				<img src="@/assets/project-lockedin/visuals.jpg" alt="visuals for app" class="mock">
				<h3>Scope creep</h3>
				<p>
					The seemingly inevitable happened and I couldn't help thinking about things to add to my creation. A scheduling feature was the first thing that came to mind and I immedietely mocked something up.
				</p>
				<img src="@/assets/project-lockedin/scheduleSketch.jpg" alt="sketch of schedule" class="mock">
				<p>
					The radio station has live shows, and I thought it would be useful for you to know not only what is currently playing, but what will be coming on in the near future. 
				</p>
				<video controls alt="video of schedule feature">
					<source src="@/assets/project-lockedin/scheduleProto.mp4">
				</video>
				<p>
					Ultimately, I decided to not include this idea and keep things more simple and focused towards the main idea of my little app – listening. The scheduling feature was just extra stuff there, that didn't really help you achieve your main goal. 
				</p>
			</section>
			<section id="outcome" ref="outcome" class="grid-container">
				<img src="@/assets/project-shared/outcome.svg" alt="outcome image" class="section-thumb">
				<h2>Outcome</h2>
				<p>
					What I ended up with was pretty much what I set out to do initially – a small optimisation of something I do daily. The real-world technical challenges that I encountered in this little project were a fantastic opportunity for me to update my front-end skills to be more current. 
				</p>
				<p>Thanks for reading!</p>
			</section>
			<section id="buttons">
				<router-link to="/" class="button back">< Back to Home Page</router-link>
			</section>
		</div>

		<Footer></Footer>

	</div>
</template>

<script>
import Footer from '@/components/Footer.vue'

export default {
	name: 'project-ticketmaster',
	components: {
    	Footer
	},
	data: function() {
		return {
			audioSrc: require('@/assets/project-lockedin/sample.mp3'),
			scrollPosition: 0,
			//
			contextAreaStart: 0,
			contextAreaEnd: 0,
			projectGoalsAreaStart: 0,
			projectGoalsAreaEnd: 0,
			processAreaStart: 0,
			processAreaEnd: 0,
			outcomeAreaStart: 0,
			outcomeAreaEnd: 0,
			//
			contextActive: false,
			projectGoalsActive: false,
			processActive: false,
			outcomeActive: false
		}
	},
	methods: {
		getAreas() {
			this.contextAreaStart = this.$refs.context.offsetTop;
			this.contextAreaEnd = this.$refs.context.offsetTop + this.$refs.context.offsetHeight;

			this.projectGoalsAreaStart = this.$refs.project.offsetTop;
			this.projectGoalsAreaEnd = this.$refs.project.offsetTop + this.$refs.project.offsetHeight;

			this.processAreaStart = this.$refs.process.offsetTop;
			this.processAreaEnd = this.$refs.process.offsetTop + this.$refs.process.offsetHeight;

			this.outcomeAreaStart = this.$refs.outcome.offsetTop;
			this.outcomeAreaEnd = this.$refs.outcome.offsetTop + this.$refs.outcome.offsetHeight;
		},

		updateSections() {

			if (this.scrollPosition < this.contextAreaStart) {
					this.contextActive = false,
					this.projectGoalsActive = false,
					this.processActive = false,
					this.outcomeActive = false
			}

			if (this.scrollPosition >= this.contextAreaStart && 
				this.scrollPosition < this.contextAreaEnd && 
				this.contextActive === false) {
					this.contextActive = true,
					this.projectGoalsActive = false,
					this.processActive = false,
					this.outcomeActive = false
			}

			if (this.scrollPosition >= this.projectGoalsAreaStart && 
				this.scrollPosition < this.projectGoalsAreaEnd && 
				this.projectGoalsActive === false) {
					this.contextActive = false,
					this.projectGoalsActive = true,
					this.processActive = false,
					this.outcomeActive = false
			}

			if (this.scrollPosition >= this.processAreaStart && 
				this.scrollPosition < this.processAreaEnd && 
				this.processActive === false) {
					this.contextActive = false,
					this.projectGoalsActive = false,
					this.processActive = true,
					this.outcomeActive = false
			}

			if (this.scrollPosition >= this.outcomeAreaStart && 
				this.scrollPosition < this.outcomeAreaEnd && 
				this.outcomeActive === false) {
					this.contextActive = false,
					this.projectGoalsActive = false,
					this.processActive = false,
					this.outcomeActive = true
			}
		},

		updateScroll() {

			this.scrollPosition = window.scrollY

			this.updateSections();
		},


	},

	mounted() {
		this.getAreas();
		window.addEventListener('scroll', this.updateScroll);
	}
}
</script>

<style scoped lang="scss">
@import '@/scss/utils.scss';

#project-ticketmaster {
	padding-top: $nav-height;
}

header {
	height: $nav-height;
	background: #fff;
	box-shadow: 0 2px 4px 0 rgba(0,0,0,0.15);
	position: fixed;
	top: 0;
	z-index: 9000;
}

.logo-and-back {
	grid-column: 1 / 5;
	text-align: left;

	& h3 {
		font-size: $type-project-heading;
		margin: 10px 0 0 0;


		& span {
			color: $wl-prime;
		}
	}

	& a {
		color: $wl-prime;
		font-size: 16px;
		font-weight: bold;
	}
}

nav {
	grid-column: 6 / 13;

	& a {
		display: inline-block;
		box-sizing: border-box;
		display: inline-block;
		font-size: 17px;
		color: $wl-second;
		transition: 0.3s;	
		padding: 25px 20px;
		width: 140px;	
	}
}

.active-marker {
	background: $wl-prime;
	height: 8px;
	width: 140px;
	transition: 0.3s;
	transform: translateX(-360px) translateY(0px) scaleX(1.55);
	z-index: 5;
	position: relative;
}

.contextActive .context-link,
.projectGoalsActive .project-goals-link,
.processActive .process-link,
.outcomeActive .outcome-link {
	font-weight: bold;
}

.contextActive .active-marker {
	transform: translateX(40px) translateY(0px) scaleX(1);
}

.projectGoalsActive .active-marker {
	transform: translateX(180px) translateY(0px) scaleX(1);
}

.processActive .active-marker {
	transform: translateX(320px) translateY(0px) scaleX(1);
}

.outcomeActive .active-marker {
	transform: translateX(480px) translateY(0px) scaleX(1);
}

.hero-unit {
	height: 620px;
	background-image: linear-gradient(-180deg, rgba(59,111,194,0.75) 1%, #009CDE 100%, #009CDE 100%);
	margin-bottom: 50px;
}

.hero-phone {
	grid-column: 1 / 5;
	margin-top: 70px;
}

.hero-info {
	grid-column: 6 / 13;
	text-align: left;
	margin-top: 70px;

	& ul {
		padding-left: 0;

		& li {
			font-size: $type-paragraph;
			color: #fff;
			margin-bottom: 5px;

			&::before {
				content: '';
				width: 10px;
				height: 10px;
				border-radius: 50%;
				margin-right: 15px;
				background: $wl-second;
				display: inline-block;
			}
		}
	}
}

.hero-heading {
	font-size: 42px;
	color: #FFFFFF;
	margin-top: 40px;

	& span {
		font-weight: bold;
	}
}

.hero-subheading {
	font-weight: bold;
	font-size: 21px;
	color: $wl-second;
	margin-top: 40px;
}

.content {

	h2 {
		grid-column: 1 / 13;
		text-align: center;
		text-transform: uppercase;
		color: $wl-prime;
		font-weight: bold;
	}

	h3 {
		grid-column: 1 / 13;
		text-align: center;
		text-transform: uppercase;
		color: $wl-second;
		font-weight: bold;
	}

	& section {
		padding-top: $nav-height;
		text-align: left;
		margin-bottom: 80px;

		&.audio {
			border-top: 1px dashed #ddd;
			border-bottom: 1px dashed #ddd;
			padding-bottom: 50px;
			padding-top: 50px;
			background: #fcfcfc;
			position: relative;
		}
	}

	& p {
		grid-column: 3 / 11;
	}

	& .mock {
		grid-column: 2 / 12;
		margin-top: 10px;
		margin-bottom: 55px;
		justify-self: center;
	}
}

.section-thumb,
.duration,
.listen-label,
audio,
video {
	grid-column: 1 / 13;
	justify-self: center;
}

.duration {
	color: $wl-prime;
	margin-bottom: 5px; 
	font-weight: bold;
}

.listen-label {
	margin-bottom: 25px;
}

#buttons {
	width: 100%;
	text-align: center;
	padding-top: 0;
}

.button {
	height: 58px;
	border-radius: 30px;
	padding: 20px 30px;
	font-weight: bold;
	color: #fff;
	display: inline-block;
	margin: 0 20px;
	box-shadow: 0 3px 15px 0 rgba(0, 0, 0, 0.15);
	transition: 0.3s;

	&.back {
		background: $wl-second;
	}

	&.visit {
		background: $wl-prime;
	}

	& img {
		vertical-align: bottom;
		margin-left: 8px;
	}

	&:hover {
		transform: translateY(-5px);
		box-shadow: 0 7px 15px 0 rgba(0, 0, 0, 0.20);
	}
}

</style>














