<template>
	<div>
		<nav>
			<a href="#" v-scroll-to="'#hello'">Hello</a>
			<a href="#" v-scroll-to="'#about'">About</a>
			<a href="#" v-scroll-to="'#works'">Work</a>
			<a href="#" v-scroll-to="'#contact'">Contact</a>
		</nav>
		<Hello></Hello>
		<About v-on:isActive="omg"></About>
		<Works></Works>
		<Contact></Contact>
	</div>
</template>

<script>
// @ is an alias to /src
import Hello from '@/components/Hello.vue'
import About from '@/components/About.vue'
import Works from '@/components/Works.vue'
import Contact from '@/components/Contact.vue'

export default {
  name: 'home',
  components: {
    Hello,
    About,
    Works,
    Contact
  },
  methods: {
  	omg: function() {
  		console.log('omg')
  	}
  }
}
</script>

<style lang="scss">
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
