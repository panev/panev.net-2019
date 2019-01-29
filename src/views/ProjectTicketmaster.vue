<template>
	<div id="project-ticketmaster" class="app-view">

		<header class="grid-container">
			<div class="logo-and-back">
				<h3>Project<span>:</span> Ticketmaster</h3>
				<router-link to="/"><< BACK</router-link>
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
				<div class="duration">6 minute read</div>
				<div class="listen-label">Don't want to? Listen to an audio version of this case study instead!</div>
				<audio controls>
					<source v-bind:src="audioSrc">
				</audio>
			</section>
			<section id="context" ref="context" class="grid-container">
				<img src="@/assets/project-shared/context.svg" alt="context image" class="section-thumb">
				<h2>Context</h2>
				<p>
					In the autumn of 2016, I had the opportunity to work with ticketmaster.com – one of the go-to websites in the United States to get tickets for virtually any type of event. The challenge was to help design the next generation digital experience for their customers – a more engaging and optimized version of their legacy website.
				</p>
				<p>
					A design team was set up here in Sofia and in California to aid the core ticketmaster.com designers in this endevour, along with front-end and back-end development teams. Our collective involvement in the project was 4 months.
				</p>
			</section>
			<section id="project-goals" ref="project" class="grid-container">
				<img src="@/assets/project-shared/projectGoals.svg" alt="project goals image" class="section-thumb">
				<h2>Project goals</h2>
				<p>
					Having in mind the company's ambitious goals to redefine and optimize their web presence, we had to be very selective on which parts of the projects we were engaged with. 
				</p>
				<p>
					Ultimately, we ended up with 3 main responsibilities:
				</p>
				<ul>
					<li>Design some of the core customer-facing portals for artists, venues and the homepage feed</li>
					<li>Improve the UI library’s versatility and accommodate for current and future needs</li>
					<li>Oversee hand-off procedures with and support development teams in the implementation phase</li>
				</ul>
				<p>
					For a project that is starting from scratch, these points may seem a bit ambiguous – there were a lot of questions regarding the separate pages for example – fortunately for us, the core ticketmaster.com design team had already gatnered requirements and laid some of the groundwork. Our objective was to pick up, validate and finish what they had already started, while they focus extensively on other parts of the system, user research and testing. <br><br>These were some of the artifacts we received from the core team as a starting point:
				</p>
				<img src="@/assets/project-ticketmaster/nucleusStyles.jpg" alt="styles" class="mock" style="height: 512px">
				<img src="@/assets/project-ticketmaster/exampleFeed.jpg" alt="example feed" class="mock with-shadow" style="height: 1344px">
			</section>
			<section id="process" ref="process" class="grid-container">
				<img src="@/assets/project-shared/process.svg" alt="process there image" class="section-thumb">
				<h2>Process</h2>
				<p>
					Our goals required us to do a thorough audit of the existing UI library and validate some of the original assumptions made about the different sections of the website.
				</p>
				<h3>Challenges</h3>
				<p>
					Our team spanned across the globe, clocking an 11 hour time difference. This proved tricky when it came to synchronising in real time as we had only a few hours of overlap, so some compromises in terms of scheduling had to be made. 
				</p>
				<p>
					Communication between design teams was also difficult. In-house teams and contractors did not have any alignment in terms of workflow or vision. This was an issue as both parties did not have context or even shared understanding as to what and why exactly the other was doing.
				</p>
				<p>
					Additionally, the UI assets that we had to start with were a little dated, incomplete and not really meant for the type of design work we were setting out to do. 
				</p>
				<p>
					Fortunately, everyone involved did not shy away from challenges and had a very constructive attitude towards these problems, so we got to work.
				</p>
				<h3>Team structure & Workflow</h3>
				<p>
					Our team was comprised of 5 designers – 2 focused on UX, 2 focused on visual design and a manager/lead. who handled process, lead design reviews and communicated with stakeholders. Half of us were located in Sofia and the other half in California. We seldom collaborated with the ticketmaster.com core design team and had a team of front-end developers to support that was also located in Sofia.
				</p>
				<p>
					After a few iterations and some trial and error, we set up an elaborate process that helped us communicate better amongst ourselves and the core design team, created a coherent feedback loop with product owners and stakeholders and established a hand-off procedure with the development teams. 
				</p>
				<img src="@/assets/project-ticketmaster/workflow.svg" alt="process workflow" class="mock" style="height: 2004px">
				<p>
					It looks a bit intense, I know. However, this seemingly bloated looking process diagram actually provided a lot of value as it gave us a framework for our workflow within the organisation and wasn't actually that slow and heavy to work with.
				</p>
				<p>
					For example, Step 3 may look like a hectic review session, but we actually made it a part of our daily sync and it was a rather productive routine where we advised each other on how to make things better, that did not take more than 30 minutes overall. The rest of the process was mostly a stricter way of handling files – which at such scale – is a necessary hassle, in my opinion.
				</p>
				<p>
					Moving forward, we did a lot of iteration on some of the page designs and components. We leveraged the fact the there were already some user tests being done with other parts of the system and used this opportunity to do some A/B tests on some of the visual designs that we have been creating. My favourite example of which is the list component – we were very uncertain how to go about the information hierarchy of the DateTime stamp inside it. The A/B tests helped us narrow down the possible solutions for this component.
				</p>
				<img src="@/assets/project-ticketmaster/listVersions.jpg" alt="versions of list controls" class="mock with-shadow" style="height: 631px">
				<p>
					Finally, as our UI library was growing fast, we decided to employ the Atomic Design methodology in order to better organise our components and establish a solid foundation that we could use to continue scaling into a design system with confidence.
				</p>
				<p>
					More examples and context of the aforementioned can be observed below.
				</p>
			</section>
			<section id="outcome" ref="outcome" class="grid-container">
				<img src="@/assets/project-shared/outcome.svg" alt="outcome image" class="section-thumb">
				<h2>Outcome</h2>
				<p>
					What resulted from this process, was a few pages that hopefully made getting tickets for events a little easier. Additionally, we created a design system following the atomic design methodology that served as a solid foundation for the future.
				</p>
				<h3>Site Pages</h3>
				<img src="@/assets/project-ticketmaster/sp1.jpg" alt="website preview" class="mock with-shadow" style="height: 1252px">
				<img src="@/assets/project-ticketmaster/sp2.jpg" alt="website preview" class="mock with-shadow" style="height: 684px">
				<img src="@/assets/project-ticketmaster/sp3.jpg" alt="website preview" class="mock with-shadow" style="height: 684px">
				<img src="@/assets/project-ticketmaster/sp4.jpg" alt="website preview" class="mock with-shadow" style="height: 1377px">
				<img src="@/assets/project-ticketmaster/sp5.jpg" alt="website preview" class="mock with-shadow" style="height: 1000px">
				<img src="@/assets/project-ticketmaster/sp6.jpg" alt="website preview" class="mock with-shadow" style="height: 588px">
				<img src="@/assets/project-ticketmaster/sp7.jpg" alt="website preview" class="mock with-shadow" style="height: 1343px">
				<h3>Atomic Design</h3>
				<img src="@/assets/project-ticketmaster/atoms.jpg" alt="atomic design" class="half-mock" style="height: 2080px">
				<img src="@/assets/project-ticketmaster/molecules.jpg" alt="atomic design" class="half-mock" style="height: 1493px">
				<img src="@/assets/project-ticketmaster/organisms1.jpg" alt="atomic design" class="half-mock" style="height: 1620px">
				<img src="@/assets/project-ticketmaster/organisms2.jpg" alt="atomic design" class="half-mock" style="height: 1586px">
				<img src="@/assets/project-ticketmaster/templates.jpg" alt="atomic design" class="mock" style="height: 682px">
				<p>Thanks for reading!</p>
			</section>
			<section id="buttons">
				<router-link to="/" class="button back"><< Back to Home Page</router-link>
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
			audioSrc: require('@/assets/project-ticketmaster/tm.mp3'),
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
@import '@/scss/core.scss';
@import '@/scss/cs.scss';

#project-ticketmaster {
	padding-top: $nav-height;
}


nav {
	grid-column: 6 / 13;
}

.active-marker {
	transform: translateX(-450px) translateY(0px) scaleX(1.60);
}

.contextActive .active-marker {
	transform: translateX(50px) translateY(0px) scaleX(1);
}

.projectGoalsActive .active-marker {
	transform: translateX(185px) translateY(0px) scaleX(1);
}

.processActive .active-marker {
	transform: translateX(330px) translateY(0px) scaleX(1);
}

.outcomeActive .active-marker {
	transform: translateX(470px) translateY(0px) scaleX(1);
}

.hero-unit {
	/* height is fixed in cs.scss */
	background-image: linear-gradient(-180deg, rgba(59,111,194,0.75) 1%, #009CDE 100%, #009CDE 100%);
	margin-bottom: 50px;
}

/* Colours, should you wish to override */
.hero-info {

	& li {
		/*color: #fff;*/

		&::before {
			/*background: $wl-second;*/
		}
	}

	p {
		/*color: $wl-second;*/
	}
}

.hero-heading {
	/*color: #FFFFFF;*/
}

.hero-subheading {
	/*color: $wl-second;*/
}


</style>














