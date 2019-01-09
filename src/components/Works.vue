<template> 
    <div id="works" ref="works">
   		<h1 class="works-heading section-heading">Works</h1>
    	
    	<ul class="grid-container">
			
			<li class="project lockedin">
				<router-link to="/project-lockedinlive">
					<img src="@/assets/worksThumbLockedin.svg" alt="project thumbnail">
					<h3>Lockedin Live</h3>
					<p>A Progressive Web App that allows you to easily listen to online radio.</p>
					<span class="cta">View case study ></span>
				</router-link>
			</li>

			<li class="project ticketmaster">
				<router-link to="/project-ticketmaster">
					<img src="@/assets/worksThumbTicketmaster.svg" alt="project thumbnail">
					<h3>Ticketmaster</h3>
					<p>UI and design system work for the ticketmaster.com website.</p>
					<span class="cta">View case study ></span>
				</router-link>
			</li>

			<li class="project sunflow">
				<router-link to="/project-ticketmaster">
					<img src="@/assets/worksThumbSunflow.svg" alt="project thumbnail">
					<h3>Sunflow</h3>
					<p>A web app that allows you to create flows & mind maps.</p>
					<span class="cta">View case study ></span>
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

$wl-lockedin: #40B8C0;
$wl-ticketmaster: #009CDE;
$wl-sunflow: #2B507D;

#works {
	padding-top: $nav-height;

	& .grid-container {

		& .project:nth-child(odd) {
			grid-column: 2 / 7;
		}

		& .project:nth-child(even) {
			grid-column: 7 / 12
		}
	}
}

.works-heading {
    &::after {
        content: '';
        width: 77px;
        height: 97px;
        background: url('../assets/homeWork.svg');
        display: inline-block;
        margin-left: 30px;
    }
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
		z-index: 20;
		position: relative;
		transition: 0.3s;
		text-shadow: 3px 3px 3px rgba(0,0,0,0.00);
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
		position: relative;
		z-index: 20;
	}

	& img {
		position: absolute;
		top: 0;
		right: 0;
		z-index: 10;
		transition: 0.5s;
	}

	&:hover {
	
		& h3 {
			color: #fff!important;
			transform: translateY(-40px);
			text-shadow: 3px 3px 3px rgba(0,0,0,0.15);
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

	&.lockedin {

		&::before {
			content: '';
			display: block;
			position: absolute;
			z-index: -10;
			width: 319px;
			height: 303px;
    		top: -120px;
    		right: -90px;
		}

		&:hover {
			& img {
				transform: scale(10) rotate(-15deg) translate(-30px, -20px);
			}
		}

		& h3 {
			color: $wl-lockedin;
		}
		
	}

	&.ticketmaster {

		&:hover {
			& img {
				transform: scale(10) rotate(-15deg) translate(-50px, -20px);
			}
		}

		& h3 {
			color: $wl-ticketmaster;
		}	
	}

	&.sunflow {

		&:hover {
			& img {
				transform: scale(10) rotate(-15deg) translate(-110px, 0px);
			}
		}

		& h3 {
			color: $wl-sunflow;
		}
	}


}

</style>