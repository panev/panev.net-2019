<template>
	<div class="home-container app-view">
		<MainNav	
			:helloAreaStart="helloAreaStart"
			:helloAreaEnd="helloAreaEnd"
			:aboutAreaStart="aboutAreaStart"
			:aboutAreaEnd="aboutAreaEnd"
			:worksAreaStart="worksAreaStart"
			:worksAreaEnd="worksAreaEnd"
			:contactAreaStart="contactAreaStart"
			:contactAreaEnd="contactAreaEnd">		
		</MainNav>

		<Hello
			@helloAreaStartCalculated="helloAreaStart = $event"
			@helloAreaEndCalculated="helloAreaEnd = $event" >
		</Hello>

		<About 
			@aboutAreaStartCalculated="aboutAreaStart = $event" 
			@aboutAreaEndCalculated="aboutAreaEnd = $event" >
		</About>

		<Works 
			@worksAreaStartCalculated="worksAreaStart = $event" 
			@worksAreaEndCalculated="worksAreaEnd = $event" >
		</Works>

		<Contact 
			@contactAreaStartCalculated="contactAreaStart = $event" 
			@contactAreaEndCalculated="contactAreaEnd = $event" >
		</Contact>
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
	data: function() {
		return {
			helloAreaStart: 0,
			helloAreaEnd: 0,
			aboutAreaStart: 0,
			aboutAreaEnd: 0,
			worksAreaStart: 0,
			worksAreaEnd: 0,
			contactAreaStart: 0,
			contactAreaEnd: 0,
		}
	},
  components: {
  	MainNav,
    Hello,
    About,
    Works,
    Contact
  },
  mounted() {

  }
}
</script>