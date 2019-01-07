<template> 
    <div id="works" ref="works">
   		<h1 class="works-heading section-heading">Works</h1>
    	
    	<ul class="grid-container">
			
			<li class="project lockedin">
				<router-link to="/project-lockedinlive">
					<img src="@/assets/worksThumbLockedin.svg" alt="">
					<h3>Lockedin Live</h3>
					<p>A Progressive Web App that allows you to easily listen to online radio.</p>
					<span class="cta">View case study ></span>
				</router-link>
			</li>

			<li class="project">
				<router-link to="/project-ticketmaster">
					<h3>Ticketmaster</h3>
					<p>A Progressive Web App that allows you to easily listen to online radio.</p>
				</router-link>
			</li>

			<li class="project">
				<router-link to="/project-lockedinlive">
					<h3>Beoynd PWA</h3>
					<p>A Progressive Web App that allows you to easily listen to online radio.</p>
				</router-link>
			</li>

		</ul>

    </div>
</template>

<script>
export default {
	name: 'Works',
	data: function() {
		return {
			worksAreaStart: 0,
			worksAreaEnd: 0		
		}
	},
	methods: {
		getWorksArea() {
			this.worksAreaStart = this.$refs.works.offsetTop;
			this.worksAreaEnd = this.$refs.works.offsetTop + this.$refs.works.offsetHeight;
			this.$emit('worksAreaStartCalculated', this.worksAreaStart)
			this.$emit('worksAreaEndCalculated', this.worksAreaEnd)
			console.log(this.worksAreaStart)
		}
	},
	mounted() {
		this.getWorksArea();
	}
}
</script>

<style scoped lang="scss">
@import '@/scss/utils.scss';

$wl-lockedin: #6FADF5;

#works {
	padding-top: calc(#{$nav-height} * 2);

	& .grid-container {


		& a {

		}

		& .project:nth-child(odd) {
			grid-column: 2 / 7;
		}

		& .project:nth-child(even) {
			grid-column: 7 / 12
		}
	}
}

.works-heading {

}

.project {
	height: 360px;
	background: #fff;
	border-radius: 16px;
	border: 1px $wl-gray;
	border-style: dashed;
	margin-bottom: 25px;
	text-align: left;
	padding-left: 30px;
	padding-top: 190px;
	box-sizing: border-box;
	box-shadow: 0 3px 5px 0 rgba(0,0,0,0.06);
	position: relative;
	z-index: 20;
	overflow: hidden;
	transition: 0.3s;

	& h3 {
		font-size: $type-small-heading;
		text-transform: uppercase;
		margin-bottom: 10px;
		color: $wl-lockedin;
		z-index: 20;
		position: relative;
		transition: 0.3s;
	}

	& p {
		max-width: 80%;
		margin-top: 0px;
		z-index: 20;
		position: relative;
		transition: 0.3s;
	}

	& .cta {
		opacity: 0;
		transition: 0.3s;
		transform: translateY(0px);
		font-size: $type-paragraph;
		font-weight: bold;
		text-transform: uppercase;
		color: #fff;
		display: inline-block;
	}

	&.lockedin {

		z-index: 20;

		& img {
			position: absolute;
			top: 0;
			right: 0;
			z-index: 10;
			transition: 0.3s;
		}

		&::before {
			content: '';
			display: block;
			position: absolute;
			z-index: -10;
			background: url('../assets/worksBackLockedin.svg') no-repeat;
			width: 319px;
			height: 303px;
    		top: -120px;
    		right: -90px;
		}

		&:hover {

			background: $wl-lockedin;
			
			& img {
				transform: scale(5) rotate(-45deg);

			}

			& h3 {
				color: #fff;
				transform: translateY(-40px);
			}

			& p {
				color: #fff;
				transform: translateY(-35px);
			}

			& .cta {
				opacity: 1;
				transform: translateY(-25px);
			}
		}
	}
}

</style>