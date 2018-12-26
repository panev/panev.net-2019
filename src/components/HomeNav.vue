<template>
	<nav>
		<a href="#" v-scroll-to="'#hello'">Hello</a>
		<a href="#" v-scroll-to="'#about'">About</a>
		<a href="#" v-scroll-to="'#works'">Work</a>
		<a href="#" v-scroll-to="'#contact'">Contact</a>
	</nav>
</template>

<script>
export default {
	name: 'HomeNav'	
}
</script> 

<style scoped lang="scss">
@import '@/scss/utils.scss';

nav {
	height: $nav-height;
	background: #fff;
	position: fixed;
	top: 0;
	width: 100%;
}

a {
	margin: 0 10px;
	display: inline-block;
}

</style>