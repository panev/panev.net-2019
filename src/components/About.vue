<template>
	<div id="about" ref="about" class="grid-container">
		<h1 class="about-heading section-heading">
			About me
			<div class="heading-ani">
				<img src="@/assets/homeAbout.svg" alt="section thumbnail" style="height: 102px;">	
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
	height: 760px;
}

</style>