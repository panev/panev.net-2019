<template>
	<div id="about" ref="about">
		About section
	</div>
</template>

<script>
export default {
	name: 'About',
	mounted() {
		console.log("about is at " + this.$refs.about.offsetTop)
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