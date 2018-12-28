<template> 
    <div id="works">
    Works section
      <router-link to="/project-lockedinlive">Lockedin Live</router-link>
    </div>
    <!-- <router-view/> -->
</template>

<script>
export default {
	name: 'Works'
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