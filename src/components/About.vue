<template>
	<div id="about" ref="about" class="grid-container">
		<h1 class="about-heading section-heading">About me</h1>
		<img src="@/assets/aboutGraph.svg" alt="timeline graph">
		<div class="initial-info info-block">
			<p v-if="!personWantsToKnowMore">
				I've spent most of my career helping build digital products, learning about the intracacies that the web technology has to offer and exploring what user experience is and applying it to the real world.
				<br><br>
				My current interests lie in understanding complex problems holistically and applying solutions that have a positive impact throughout the entire system or product. 
			</p>
			<p v-if="personWantsToKnowMore">
				I've spent the last 10 years doing[?] visual communication, learning about the intracacies that technology has to offer and exploring what user experience is and applying it to the real world.
				<br><br>
				[too harsh of a context-switch] I believe that technology is an integral part of any designer's toolkit. Being able to code & keeping up to date with front-end has vastly expanded my outlook towards the products that I design and build.
				<br><br>
				My current focus and interests lie in understanding complex problems holistically and applying solutions  is doing user experience design, where I strive to optimize complexity and prevent noise in digital products.
			</p>
			<a class="button-slim" @click="toggleMoreInfo()">{{ personWantsToKnowMore ? 'READ LESS' : 'READ MORE' }}</a>
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
		console.log(this.aboutAreaStart)
	}
}
</script>

<style scoped lang="scss">
@import '@/scss/core.scss';

#about {
	padding-top: $nav-height;
}

.about-heading {

    &::after {
        content: '';
        width: 38px;
        height: 102px;
        background: url('../assets/homeAbout.svg');
        display: inline-block;
        margin-left: 40px;
        margin-top: 0px;
        margin-bottom: 10px;
    }
}

.info-block {
	grid-column: 6 / 11;
	text-align: left;
	align-self: center;
}

.button-slim {
	grid-column: 6 / 8;
	text-align: left;
	align-self: top;

}

img {
	grid-column: 2 / 5;
	height: 760px;
}

</style>