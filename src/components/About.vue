<template>
	<div id="about" ref="about">
		About section
	</div>
</template>

<script>
export default {
	name: 'About',
  	data: function() {
   		return {
   			scrollPosition: null,
   			aboutAreaStart: null,
   			aboutAreaEnd: null,
   			isActive: false
   		}
  	},

	methods: {
		getSectionPos() {
			let aboutSection = this.$refs.about;
			this.aboutAreaStart = aboutSection.offsetTop;
			this.aboutAreaEnd = this.aboutAreaStart + aboutSection.offsetHeight;

		},
		updateScroll() {
			this.scrollPosition = window.scrollY

			if (this.scrollPosition >= this.aboutAreaStart) {
				if (this.isActive) {
					this.isActive = true;
					this.$emit('inAbout') 
				}
			}
		}
	},

	mounted() {
		window.addEventListener('scroll', this.updateScroll);
		this.getSectionPos();
	}
}
</script>

<style scoped lang="scss">
@import '@/scss/utils.scss';

#about {
	padding-top: $nav-height;
	height: 100vh;
	background: hotpink;
}
</style>