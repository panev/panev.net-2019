<template> 
	<section class="header" :class="{ personHasScrolled: personHasScrolled }">
		<nav :class=" { 
			helloActive: helloActive,
			aboutActive: aboutActive,
			worksActive: worksActive,
			contactActive: contactActive 
		 }" >
			<a href="#" class="hello-link" v-scroll-to="'#hello'">Hello</a>
			<a href="#" class="about-link" v-scroll-to="'#about'">About</a>
			<a href="#" class="works-link" v-scroll-to="'#works'">Work</a>
			<a href="#" class="contact-link" v-scroll-to="'#contact'">Contact</a>
			<div class="active-marker"></div>
		</nav>

	</section>
</template>

<script>

export default {
	name: 'MainNav',
  	data: function() {
   		return {
   			scrollPosition: null,
   			helloActive: false,
   			aboutActive: false,
   			worksActive: false,
   			contactActive: false,
   			personHasScrolled: false
   		}
  	},
  	props: [ 
  		'helloAreaStart',
  		'helloAreaEnd',
  		'aboutAreaStart',
  		'aboutAreaEnd',
  		'worksAreaStart',
  		'worksAreaEnd',
  		'contactAreaStart',
  		'contactAreaEnd',
  	],
	methods: {

		checkIfPersonHasScrolled() {
			if (this.scrollPosition >= 90 && this.personHasScrolled === false) {
				this.personHasScrolled = true;
			}

			if (this.scrollPosition <= 90 && this.personHasScrolled === true) {
				this.personHasScrolled = false;
			}
		},

		updateSections() {
			if (this.scrollPosition >= this.helloAreaStart && 
				this.scrollPosition < this.helloAreaEnd && 
				this.helloActive === false) {
					this.helloActive = true;
		   			this.aboutActive = false,
					this.worksActive = false,
					this.contactActive = false
			}

			if (this.scrollPosition >= this.aboutAreaStart && 
				this.scrollPosition < this.aboutAreaEnd && 
				this.aboutActive === false) {
					this.helloActive = false;
		   			this.aboutActive = true,
					this.worksActive = false,
					this.contactActive = false
			}

			if (this.scrollPosition >= this.worksAreaStart  && 
				this.scrollPosition < this.worksAreaEnd  && 
				this.worksActive === false) {
					this.helloActive = false;
		   			this.aboutActive = false,
					this.worksActive = true,
					this.contactActive = false
			}

			if (this.scrollPosition >= this.contactAreaStart  && 
				this.scrollPosition < this.contactAreaEnd  && 
				this.contactActive === false) {
					this.helloActive = false;
		   			this.aboutActive = false,
					this.worksActive = false,
					this.contactActive = true
			}
		},

		updateScroll() {

			this.scrollPosition = window.scrollY

			this.checkIfPersonHasScrolled();

			this.updateSections();
			
		}
	},

	mounted() {
		window.addEventListener('scroll', this.updateScroll);
	}
}

</script>

<style scoped lang="scss">

@import '@/scss/utils.scss';

.personHasScrolled nav a {
	transform: translateY(0px);
}

.personHasScrolled.header {
	height: 70px;
}

.header {
	height: $nav-height;
	background: #fff;
	position: fixed;
	top: 0;
	width: 100%;
	z-index: 9000;
	transition: 0.3s;
}

nav {
	width: 480px;
	margin: 0 auto;
}

a {
	box-sizing: border-box;
	padding: 20px;
	transform: translateY(50px);
	display: inline-block;
	font-size: 18px;
	color: $wl-second;
	width: 120px;
	transition: 0.3s;

}

.helloActive .hello-link,
.aboutActive .about-link,
.worksActive .works-link,
.contactActive .contact-link {
	font-weight: bold;
	color: $wl-prime;
}

.active-marker {
	background: $wl-prime;
	height: 7px;
	width: 120px;
	transition: 0.3s;
	transform: translateX(0) translateY(50px);

}

.helloActive nav.active-marker {
	transform: translateX(0) translateY(0px);
}

.aboutActive nav.active-marker {
	transform: translateX(120px) translateY(50px);
}

.worksActive nav.active-marker {
	transform: translateX(240px) translateY(50px);
}

.contactActive nav.active-marker {
	transform: translateX(360px) translateY(50px);
}

.personHasScrolled nav.helloActive .active-marker {
	transform: translateX(0) translateY(0px);
}

.personHasScrolled nav.aboutActive .active-marker {
	transform: translateX(120px) translateY(0px);
}

.personHasScrolled nav.worksActive .active-marker {
	transform: translateX(240px) translateY(0px);
}

.personHasScrolled nav.contactActive .active-marker {
	transform: translateX(360px) translateY(0px);
}


</style>