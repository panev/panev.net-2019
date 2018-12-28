<template>
	<nav>
		<a href="#" v-scroll-to="'#hello'">Hello</a>
		<a href="#" v-scroll-to="'#about'">About</a>
		<a href="#" v-scroll-to="'#works'">Work</a>
		<a href="#" v-scroll-to="'#contact'">Contact</a>
	</nav>
</template>

<script>
import About from '@/components/About.vue'

export default {
	name: 'HomeNav'
	// data: function() {
 //   		return {
 //   			scrollPosition: null
 //   		}
 //  	},

	// methods: {
	// 	getSectionPos() {
	// 		let aboutHeight = this.$refs.about.offsetTop;
	// 		console.log(aboutHeight);
	// 	},
	// 	updateScroll() {
	// 	  this.scrollPosition = window.scrollY
	// 	}
	// },

	// mounted() {
	// 	window.addEventListener('scroll', this.updateScroll);
	// 	this.getSectionPos();
	// }
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
	font-size: 20px;
}

</style>