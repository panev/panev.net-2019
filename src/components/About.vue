<template>
	<div id="about" ref="about" class="grid-container">
		<h1 class="about-heading section-heading">
			About me
			<div class="heading-ani">
				<svg width="91px" height="132px" viewBox="0 0 91 132" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
				    <g id="Visual-playground" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
				        <g id="Home-Full-HD-Copy-6" transform="translate(-831.000000, -768.000000)">
				            <g id="Group-4" transform="translate(831.000000, 768.000000)">
				            	<g id="Rocket">
					                <ellipse id="Oval-7-Copy-4" fill="#62DCDC" cx="24.5" cy="84.5" rx="7" ry="12.5"></ellipse>
					                <ellipse id="Oval-7-Copy-5" fill="#62DCDC" cx="48.5" cy="84.5" rx="7" ry="12.5"></ellipse>
					                <ellipse id="Oval-7" fill="#F0F0F0" cx="35" cy="69.5" rx="12.5" ry="39.5"></ellipse>
					                <circle id="Oval-8" fill="#C1C1C1" cx="35" cy="54.5" r="4.5"></circle>
					                <ellipse id="Oval-7-Copy" fill="#C1C1C1" cx="35" cy="97.5" rx="2.5" ry="15.5"></ellipse>
					                <g id="Beams" transform="translate(0, 115)">>
						                <rect id="Beam-1" fill="#72E0E0" x="28" y="-5" width="3" height="13" rx="1.5"></rect>
						                <rect id="Beam-2" fill="#72E0E0" x="39" y="0" width="3" height="13" rx="1.5"></rect>
						                <rect id="Beam-3" fill="#72E0E0" x="33.5" y="5" width="3" height="14" rx="1.5"></rect>
					            	</g>
				            	</g>
				                <circle id="Oval-1" fill="#D8D8D8" fill-rule="nonzero" cx="3" cy="26" r="3"></circle>
				                <circle id="Oval-2" fill="#F0F0F0" fill-rule="nonzero" cx="85" cy="0" r="6"></circle>
				                <polygon id="Triangle-1" fill="#E2E2E2" fill-rule="nonzero" points="33 1.73471144 44.8266177 3.8191672e-14 40.0474205 11"></polygon>
				            </g>
				        </g>
				    </g>
				</svg>
			</div>
		</h1>
		<img src="@/assets/aboutGraph.svg" alt="timeline graph" class="timeline-graph">
		<div class="info-block" v-bind:class="{ more: personWantsToKnowMore }">
			<p>
				I've spent most of my career helping build digital products, learning about the intracacies that web technology has to offer and exploring what user experience is and applying it in the real world.
				<br><br>
				My current interests lie in understanding complex problems holistically and applying solutions that have a positive impact throughout the entire system or product. 
				<br><br>
				I think that often people associate the word <strong>design</strong> with creativity, art and having the freedom to make whatever one pleases. I believe this to be an inaccurate notion. I think that in order to design something, you have to have clear objectives in mind. Sometimes defining those objectives is part of the process. Design is also <strong>used</strong> by people. This leads to outcomes which can be observed, measured and reflected upon.
				<br><br>
				While living in the physical world, we also face constraints: time, business goals and people's perception of different things, to name a few. These limitations do not hinder us, but offer the rare opportunity to synchronise with &mdash; and operate in &mdash; reailty.
				<br><br>
				I believe that it is crucial to aim to view issues on a broader level &ndash; having context is necessary in order to empathize with people and understand their needs and pain points. This can happen using a variety of research methods, my favourite of which happens to be talking to the actual people I'm designing for.
				<br><br>
				Design is engineering for people.
			</p>

			<div class="buttons">
				<a class="button-slim" @click="toggleMoreInfo()">{{ personWantsToKnowMore ? 'READ LESS' : 'READ MORE' }}</a>
				<transition name="fade">
					<a class="button-slim" v-if="personWantsToKnowMore" href="https://medium.com/@panev" target="_blank">
						VISIT MY MEDIUM PROFILE <img src="@/assets/iconExternalPrime.svg" alt="external icon">
					</a>
				</transition>
			</div>

		</div>
	</div>
</template>

<script>
export default {
	name: 'About',
	data: function() {
		return {
			aboutAreaStart: 0,
			aboutAreaEnd: 0,
			personWantsToKnowMore: false
		}
	},
	methods: {
		getAboutArea() {
			this.aboutAreaStart = this.$refs.about.offsetTop;
			this.aboutAreaEnd = this.$refs.about.offsetTop + this.$refs.about.offsetHeight;
			this.$emit('aboutAreaStartCalculated', this.aboutAreaStart)
			this.$emit('aboutAreaEndCalculated', this.aboutAreaEnd)
		},
		toggleMoreInfo() {
			if (this.personWantsToKnowMore === false) {
				this.personWantsToKnowMore = true
			}
			else {
				this.personWantsToKnowMore = false
			}
		}
	},
	mounted() {
		this.getAboutArea();
	}
}
</script>

<style scoped lang="scss">
@import '@/scss/core.scss';

#about {
	padding-top: $nav-height;
}

.about-heading {
	
	margin-top: 100px;
	position: relative;

    & .heading-ani {
        width: 111px;
        height: 111px;
        position: absolute;
        right: 30%;
        bottom: 10px;
    }
}

.info-block {
	grid-column: 6 / 11;
	text-align: left;
	align-self: center;
	align-items: center;
	overflow-y: hidden;
	position: relative;
	height: 760px;

	&::before {
		content: '';
		display: block;
		height: 80px;
		background-image: linear-gradient(-180deg, #FFFFFF 10%, rgba(255,255,255,0.06) 100%);
		position: absolute;
		top: 0px;
		width: 100%;
		z-index: 1000;
		opacity: 1;
	}

	&::after {
		content: '';
		display: block;
		height: 255px;
		background: #fff;
		position: absolute;
		bottom: 0px;
		width: 100%;
		z-index: 1000;
		opacity: 1;
		transition: 0.5s;
	}

	& p {
		overflow-y: hidden;
		height: 770px;
		transition: 0.5s;
		position: relative;
		top: 50%;
		transform: translateY(-160px);
	}

	.buttons {
		grid-column: 6 / 11;
		padding: 20px 0px;
		background-color: #fff;
		box-shadow: 0px -60px 0px rgba(255,255,255,0.7);
		transition: 0.5s;
		transform: translateY(-290px);
		z-index: 1050;
		position: relative;
	}

	&.more::after {
		transform: translateY(200px);
	}

	&.more p {
		height: 770px;
		transform: translateY(-550px);
	}

	&.more .buttons {
		transform: translateY(-160px);
		box-shadow: 0px -60px 0px rgba(255,255,255,0);
	}

}

.button-slim {
	grid-column: 6 / 8;
	text-align: left;
	align-self: top;
	margin-right: 20px;
	min-width: 100px;

	& img {
		position: relative;
		top: 2px;
		left: 5px;
	}
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.timeline-graph {
	grid-column: 2 / 5;
	height: 763px;
}



#Oval-1 {
	animation: pass 10s infinite;

}

#Oval-2 {
	animation: pass 5s infinite;
}

#Oval-1 {
	animation-delay: 0.75s;
} 

@keyframes pass {
	0% {
		opacity: 0;
		transform: translateY(0);
	}

	50% {
		opacity: 1;
	}

	100% {
		opacity: 0;
		transform: translateY(150px);
	}
}

#Triangle-1 {
	animation: pass2 4s infinite;
	transform-origin: center center;
}

@keyframes pass2 {
	0% {
		opacity: 0;
		transform: translate(0,0) rotate(0deg);
	}

	50% {
		opacity: 1;
	}

	100% {
		opacity: 0;
		transform: translate(20px, 50px) rotate(60deg);
	}
}

#Rocket {
	animation: rocket-wiggle 4s infinite;
}

@keyframes rocket-wiggle {
	0% {
		transform: translate(0px, 0px);
	}

	55% {
		transform: translate(5px, -6px);
	}


	100% {
		transform: translate(0px, 0px);
	}

}

#Beam-1,
#Beam-2,
#Beam-3 {
	animation: beam 1s infinite;
	transform-origin: top;
}

#Beam-1 {
	animation-delay: 0.3s;
}

#Beam-2 {
	animation-delay: 1.5s;
}

#Beam-3 {
	animation-delay: 0.75s;
}

@keyframes beam {
	0% {
		transform: scaleY(1);
	}

	25% {
		transform: scaleY(1.1);
		opacity: 1;
	}

	75% {
		transform: scaleY(0.75);
		opacity: 0.6;
	}

	100% {
		transform: scaleY(1);
	}
}

svg {
	overflow: visible;
}






</style>