<template>
	<div class="home-container">
		<MainNav></MainNav>
		<Hello></Hello>
		<About></About>
		<Works></Works>
		<Contact></Contact>
	</div>
</template>

<script>

import MainNav from '@/components/MainNav.vue'
import Hello from '@/components/Hello.vue'
import About from '@/components/About.vue'
import Works from '@/components/Works.vue'
import Contact from '@/components/Contact.vue'

export default {
  name: 'home',
  components: {
  	MainNav,
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