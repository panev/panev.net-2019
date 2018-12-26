<template>
	<div>
		<HomeNav></HomeNav>
		<Hello></Hello>
		<About></About>
		<Works></Works>
		<Contact></Contact>
	</div>
</template>

<script>
// @ is an alias to /src
import HomeNav from '@/components/HomeNav.vue'
import Hello from '@/components/Hello.vue'
import About from '@/components/About.vue'
import Works from '@/components/Works.vue'
import Contact from '@/components/Contact.vue'

export default {
  name: 'home',
  components: {
    HomeNav,
    Hello,
    About,
    Works,
    Contact
  }
}
</script>
