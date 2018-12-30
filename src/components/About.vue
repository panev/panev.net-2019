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
			aboutAreaStart: 0,
			aboutAreaEnd: 0		}
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
	}
}
</script>

<style scoped lang="scss">
@import '@/scss/utils.scss';

#about {
	padding-top: calc(#{$nav-height} * 2);
	height: 100vh;
	background: hotpink;
}
</style>