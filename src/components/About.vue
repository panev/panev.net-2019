<template>
	<div id="about" ref="about" class="grid-container">
		<h1 class="about-heading section-heading">About me</h1>
		<img src="@/assets/aboutGraph.svg" alt="timeline graph">
		<p>
			I've spent most of my career helping build digital products, learning about the intracacies that  the tech world has to offer and exploring what user experience is and applying it to the real world.
			<br><br>
			My current interests lie in understanding complex problems holistically and applying solutions that have a positive impact throughout the entire system or product. 
		</p>
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
@import '@/scss/utils.scss';

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
	/*background-image: linear-gradient(0deg, #47D8D8 0%, #4FD1DB 15%, #A68AFF 43%, #2B507D 66%, #4AADE2 100%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent*/
}

img {
	grid-column: 2 / 5;
	height: 760px;
}

</style>