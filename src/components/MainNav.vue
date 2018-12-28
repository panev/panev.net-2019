<template> 
	<section class="header">
		<nav v-bind:class=" { 
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
   		}
  	},

	methods: {

		updateScroll() {
			this.scrollPosition = window.scrollY
			
			if (this.scrollPosition > 0 && 
				this.scrollPosition < 328 && 
				this.helloActive === false) {
					this.helloActive = true;
		   			this.aboutActive = false,
					this.worksActive = false,
					this.contactActive = false
			}
			if (this.scrollPosition >= 328 && 
				this.scrollPosition < 1156 && 
				this.aboutActive === false) {
					this.helloActive = false;
		   			this.aboutActive = true,
					this.worksActive = false,
					this.contactActive = false
			}
			if (this.scrollPosition >= 1156 && 
				this.scrollPosition < 1984 && 
				this.worksActive === false) {
					this.helloActive = false;
		   			this.aboutActive = false,
					this.worksActive = true,
					this.contactActive = false
			}
			if (this.scrollPosition >= 1984 && 
				this.scrollPosition < 5000 && 
				this.contactActive === false) {
					this.helloActive = false;
		   			this.aboutActive = false,
					this.worksActive = false,
					this.contactActive = true
			
			}
		}

	},

	mounted() {
		window.addEventListener('scroll', this.updateScroll);
	}
}

</script>

<style scoped lang="scss">

@import '@/scss/utils.scss';

.line {

}

.header {
	height: $nav-height;
	background: #fff;
	position: fixed;
	top: 0;
	width: 100%;
	z-index: 9000;
}

nav {
	width: 480px;
	margin: 0 auto;
}

a {
	box-sizing: border-box;
	padding: 20px;
	margin: 50px 0 0 0;
	display: inline-block;
	font-size: 18px;
	color: $wl-second;
	width: 120px;
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
}

.helloActive .active-marker {
	transform: translateX(0);
}

.aboutActive .active-marker {
	transform: translateX(120px);
}

.worksActive .active-marker {
	transform: translateX(240px);
}

.contactActive .active-marker {
	transform: translateX(360px);
}


</style>