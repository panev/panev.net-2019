<template>
	<div id="about" ref="about" class="grid-container">
		<h1 class="about-heading section-heading">About me</h1>
		<img src="@/assets/aboutGraph.svg" alt="timeline graph">
		<p>I've spent the last 10 years of my career doing visual communication, learning about the intracacies that technology has to offer and exploring what user experience is and applying it to the real world.
		I believe that technology is an integral part of any designer's toolkit. Being able to code & keeping up to date with front-end has vastly expanded my outlook towards the products that I design and build.
		My current focus is doing user experience design, where I strive to optimize complexity and prevent noise in digital products.</p>
	</div>
</template>

<script>
export default {
	name: 'About',
	data: function() {
		return {
			aboutAreaStart: 0,
			aboutAreaEnd: 0		
		}
	},
	methods: {
		getAboutArea() {
			this.aboutAreaStart = this.$refs.about.offsetTop;
			this.aboutAreaEnd = this.$refs.about.offsetTop + this.$refs.about.offsetHeight;
			this.$emit('aboutAreaStartCalculated', this.aboutAreaStart)
			this.$emit('aboutAreaEndCalculated', this.aboutAreaEnd)
		}
	},
	mounted() {
		this.getAboutArea();
		console.log(this.aboutAreaStart)
	}
}
</script>

<style scoped lang="scss">
@import '@/scss/utils.scss';

#about {
	/*padding-top-top: calc(#{$nav-height} * 2);*/
	padding-top: $nav-height;
	/*margin-bottom: 100px;*/
}

.about-heading {

}

p {
	grid-column: 6 / 11;
	text-align: left;
	align-self: center;
	/*background-image: linear-gradient(0deg, #47D8D8 0%, #4FD1DB 15%, #A68AFF 43%, #2B507D 66%, #4AADE2 100%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent*/
}

img {
	grid-column: 2 / 5;
	height: 760px;
}

</style>