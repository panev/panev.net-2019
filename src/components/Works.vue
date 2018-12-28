<template> 
    <div id="works" ref="works">
    Works section
      <router-link to="/project-lockedinlive">Lockedin Live</router-link>
    </div>
    <!-- <router-view/> -->
</template>

<script>
export default {
	name: 'Works',
	mounted() {
		console.log("works is at " + this.$refs.works.offsetTop)
	}
}
</script>

<style scoped lang="scss">
@import '@/scss/utils.scss';

#works {
	padding-top: $nav-height;
	height: 100vh;
	background: khaki;
}

</style>