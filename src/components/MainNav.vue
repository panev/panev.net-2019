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
   			helloActive: true,
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
			if (this.scrollPosition >= 65 && this.personHasScrolled === false) {
				this.personHasScrolled = true;
			}

			if (this.scrollPosition <= 65 && this.personHasScrolled === true) {
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


.personHasScrolled {
	
	&.header {
		transform: translateY(0);
		
		&::after {
			opacity: 0.03;
			transform: scaleY(1);

		}
	}
}

.header {
	height: $nav-height;
	transform: translateY($nav-height);
	background: rgba(255,255,255,1);
	position: fixed;
	top: 0;
	width: 100%;
	z-index: 9000;
	transition: 0.25s;

	/* this is like a curtain, so you don't see the content underneath in the transition time when the header snaps to top */
	&::before {
		content: '';
		display: block;
		width: 100%;
		height: 70px;
		background: #fff;
		position: absolute;
		top: -$nav-height;
	}
	
	&::after {
		content: '';
		display: block;
		width: 100%;
		height: 30px;
		/*background: rgba(255,255,255,0.2);*/
		background-image: linear-gradient(-180deg, #000 0%, rgba(255,255,255,0.00) 100%);
		opacity: 0;
		transition: 0.3s;
		transform: scaleY(0);
		transform-origin: top;
	}
}

nav {
	width: 480px;
	margin: 0 auto;
}

a {
	box-sizing: border-box;
	padding: 20px;
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
}

.active-marker {
	background: $wl-prime;
	height: 8px;
	width: 120px;
	transition: 0.3s;
	transform: translateX(0) translateY(0px);
	z-index: -5;
	position: relative;

}

.helloActive .active-marker {
	transform: translateX(0) translateY(0px);
}

.aboutActive .active-marker {
	transform: translateX(120px) translateY(0px);
}

.worksActive .active-marker {
	transform: translateX(240px) translateY(0px);
}

.contactActive .active-marker {
	transform: translateX(360px) translateY(0px);
}


</style>