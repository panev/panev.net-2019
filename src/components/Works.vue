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
	data: function() {
		return {
			worksAreaStart: 0,
			worksAreaEnd: 0		
		}
	},
	methods: {
		getWorksArea() {
			this.worksAreaStart = this.$refs.works.offsetTop;
			this.worksAreaEnd = this.$refs.works.offsetTop + this.$refs.works.offsetHeight;
			this.$emit('worksAreaStartCalculated', this.worksAreaStart)
			this.$emit('worksAreaEndCalculated', this.worksAreaEnd)
		}
	},
	mounted() {
		this.getWorksArea();
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