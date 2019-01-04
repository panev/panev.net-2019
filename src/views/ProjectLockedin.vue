<template>
	<div id="project-lockedin" class="app-view">

		<header class="grid-container">
			<div class="logo-and-back">
				<h3>Project<span>:</span> Lockedin Live</h3>
				<router-link to="/">< Back</router-link>
			</div>
			<nav>
				<a href="#" v-scroll-to="'#inception'">Inception</a>
				<a href="#" v-scroll-to="'#project-goals'">Project Goals</a>
				<a href="#" v-scroll-to="'#getting-there'">Getting There</a>
				<a href="#" v-scroll-to="'#implementation'">Implementation</a>
				<a href="#" v-scroll-to="'#outcome'">Outcome</a>
			</nav>
		</header>

		<div class="hero-unit">
			<div class="grid-container">
				<img src="@/assets/project-lockedin/phone.png" alt="phone image" class="hero-phone">
				<div class="hero-info">
					<div class="hero-heading">
						<span>Lockedin Live</span> allows you to easily listen to online radio. 
					</div>
					<div class="hero-subheading">
						TL;DR:
					</div>
					<p>
						An extremely simple progressive web app that allows you to listen to a specific online radio. The goal of <strong>this personal side project</strong> was to learn more about modern web technologies and also have the means to listen to my favourite online drum and bass radio with ease.
					</p>
					<div class="hero-subheading">
						PROJECT ROLES:
					</div>
					<ul>
						<li>Product Designer</li>
						<li>Software Engineer</li>
						<li>Chief Visionary</li>
					</ul>
				</div>
			</div>
		</div>

		<div class="content">
			<section class="audio grid-container">
				<div class="duration">8 minute read</div>
				<div class="listen-label">Don't want to? Listen to an audio version of this case study instead!</div>
				<audio controls>
					<source v-bind:src="audioSrc">
				</audio>
			</section>
			<section id="inception" class="grid-container">
				<img src="@/assets/project-lockedin/inception.svg" alt="inception image" class="section-thumb">
				<h2>Inception</h2>
				<p>
					For the longest time I've been an avid listener of a certain online drum and bass radio – bassdrive.com. What had been bugging me recently was that there wasn't a way for me to listen to it on a mobile phone, at least not that easily – each time I had to go to the website, which wasn't responsive and fiddle with the tiny buttons and awkward flow to start listening.
				</p>
				<p>
					I hadn't coded anything in a long while so I though that making something small that solves this first-world-problem of mine would be a great opportunity to catch up on the latest in the web technology world as well as give somehting back to the fantastic community that operates the online radio station. 
				</p>
			</section>
			<section id="project-goals" class="grid-container">
				<img src="@/assets/project-lockedin/projectGoals.svg" alt="project goals image" class="section-thumb">
				<h2>Project goals</h2>
				<p>What I needed was a one click solution – easy right? A play button.</p>
				<img src="@/assets/project-lockedin/test.png" alt="test" class="mock">
				<p>
					However, I wanted to purposefully overengineer this solution and go beyond vanilla web technologies and dip my foot in the emerging world of progressive web apps, vue.js and css grid – things I had only read about and found immensley interesting to play around with. Despite being overkill for my simple use case, these tools would allow me to achieve a native like feel, improved performance (PWAs), build a landing page for the desktop that I could reuse on mobile (CSS grid) and scale this project in the future to be more than just a play button for 1 online radio (vue.js).
				</p>
			</section>
			<section id="getting-there" class="grid-container">
				<img src="@/assets/project-lockedin/gettingThere.svg" alt="getting there image" class="section-thumb">
				<h2>Getting there</h2>
				<p>
					I started off by considering when and how myself and others would use this thing – I kind off already knew that for myself and for now that was enough to get started – pressing play and then immediately doing something else, while the audio plays in the background.
				</p>
				<img src="@/assets/project-lockedin/test.png" alt="test" class="mock">
				<p>
					I drew a few sketches, considered a few cases and then went digital. What I ended up with was a big play / pause button and a title. I opted out of volume controls since all phones already have those as hardware buttons. 
				</p>
				<img src="@/assets/project-lockedin/test.png" alt="test" class="mock">
				<h3>Scope creep</h3>
				<p>
					The seemingly innevitable happened and I couldn't help thinking about things to add to my creation. A schedule feature was the first thing that came to mind and I immedietely mocked something up.
				</p>
				<img src="@/assets/project-lockedin/test.png" alt="test" class="mock">
				<p>
					The radio station has live shows, and I though it would be useful for you to know not only what is currently playing, but what will be comming on in the near future. 
				</p>
				<img src="@/assets/project-lockedin/test.png" alt="test" class="mock">
				<p>
					Ultimately, I decided to not include this idea and keep things more simple and focused towards the main idea of my little app – listening. The scheduling feature was just extra stuff there, that didn't really help you achieve your main goal. 
				</p>
			</section>
			<section id="implementation" class="grid-container">
				<img src="@/assets/project-lockedin/implementation.svg" alt="implementation image" class="section-thumb">
				<h2>Implementation</h2>
				<p>
					The app features Progressive Web App capabilities like adding it to your phone's home screen for quicker access. 
				</p>
				<p>< PWA adding ></p>
				<p>
					This was great – but the problem was that people don't generally know what PWAs are or that you have this ability to begin with. My solution to this was to actually build a landing page for the desktop that explains this.
				</p>
				<p>< Desktop landing page ></p>
				<p>
					I used vue.js and and css grid to actually reuse the same code base for the landing page and PWA app. When you're on a desktop you get the landing page and when on mobile – just the player. This was a good opportunity to keep the audio player on desktop too, so you could listen there if you wanted to.
				</p>
				<p>< Desktop  play button, switch to mobile gif ></p>
				<h3>Technical challenges & front-end adventures</h3>
				<p>
					Having to delve in a modern front-end framework like vue.js really expanded my outlook into the way web apps are built these days (CLIs now have interfaces!!). It was extremely refreshing to see how front-end technologies have matured and a fun challenge to catch-up on everyhing new. I also got to make something with css grid, which is amazing.
				</p>
				<p>
					Unfortunatelly, I wasn't able to overcome a technical issue that allowed me to fetch the title of the stream, which was essentially info about what was playing a the moment (CORS issue). A drawback for sure, but I decided not to dwell on it too much and went ahead with the project.
				</p>
			</section>
			<section id="outcome" class="grid-container">
				<img src="@/assets/project-lockedin/outcome.svg" alt="outcome image" class="section-thumb">
				<h2>Outcome</h2>
				<p>
					What I ended up with was pretty much what I set out to do initially – a small optimisation of somehting I do daily. The real-world technical challenges that I encoutered in this little project were a fantastic opportunity for me to update my front-end skills to be more current. 
				</p>
				<p>< few more imgs></p>
				<p>Thanks for reading!</p>
			</section>
			<section id="buttons">
				<router-link to="/" class="button back">< Back to Home Page</router-link>
				<a href="http://lockedin.live" target="_blank" class="button visit external">Visit live project <img src="@/assets/project-lockedin/iconExternal.svg" alt="external icon"></a>
			</section>
		</div>

		<Footer></Footer>

	</div>
</template>

<script>
import Footer from '@/components/Footer.vue'

export default {
	name: 'project-lockedin',
	components: {
    	Footer
	},
	data: function() {
		return {
			audioSrc: require('@/assets/project-lockedin/sample.mp3')
		}
	}
}
</script>

<style scoped lang="scss">
@import '@/scss/utils.scss';

#project-lockedin {
	padding-top: $nav-height;
}

header {
	height: $nav-height;
	background: #fff;
	box-shadow: 0 2px 4px 0 rgba(0,0,0,0.15);
	position: fixed;
	top: 0;
}

.logo-and-back {
	grid-column: 1 / 5;
	text-align: left;

	& h3 {
		font-size: $type-project-heading;
		margin: 15px 0 0 0;


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
	grid-column: 5 / 13;

	& a {
		display: inline-block;
		box-sizing: border-box;
		display: inline-block;
		font-size: 17px;
		color: $wl-second;
		transition: 0.3s;	
		padding: 25px 20px;
		width: 150px;	
	}
}

.hero-unit {
	height: 620px;
	background-image: linear-gradient(-135deg, rgba(59,194,187,0.75) 0%, #4183CF 100%);
	margin-bottom: 250px;
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
		}
	}

	& p {
		grid-column: 3 / 11;
	}

	& .mock {
		grid-column: 2 / 12;
		margin-top: 10px;
		margin-bottom: 55px;
	}
}

.section-thumb,
.duration,
.listen-label,
audio {
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














