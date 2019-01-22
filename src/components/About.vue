<template>
	<div id="about" ref="about" class="grid-container">
		<h1 class="about-heading section-heading">About me</h1>
		<img src="@/assets/aboutGraph.svg" alt="timeline graph">
		<p>I've spent the last decade of my career exploring visual communication, learning about the intracacies that technology has to offer and delving into what user experience is and applying it in the real world.
		<br>
		<br>
		I believe that technology is an integral part of any designer's toolkit. Being able to code &amp; keeping up to date with front-end has vastly expanded my outlook towards the products that I design and build.
		<br>
		<br>
		My current focus is doing product design, where I strive to optimize complexity and prevent noise in digital products.</p>
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
		},
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

p {
	grid-column: 6 / 11;
	text-align: left;
	align-self: center;
}

img {
	grid-column: 2 / 5;
	height: 760px;
}

</style>