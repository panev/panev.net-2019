<template> 
    <div id="works" ref="works">
   		<h1 class="works-heading section-heading">
   			Work
   			<div class="heading-ani">
   				<img src="@/assets/homeWork.svg" alt="section thumbnail" style="height: 97px;">
   			</div>
   		</h1>
    	
    	<ul class="grid-container">
			
			<li class="project lockedin">
				<router-link to="/project-lockedinlive">
					<img class="hidden" src="@/assets/worksThumbLockedinHover.svg" alt="project thumbnail">
					<img src="@/assets/worksThumbLockedin.svg" alt="project thumbnail">
					<h3>Lockedin Live</h3>
					<p>A Progressive Web App that allows you to easily listen to online radio.</p>
					<span class="cta">View case study >></span>
				</router-link>
			</li>

			<li class="project ticketmaster">
				<router-link to="/project-ticketmaster">
					<img class="hidden" src="@/assets/worksThumbTicketmasterHover.svg" alt="project thumbnail">
					<img src="@/assets/worksThumbTicketmaster.svg" alt="project thumbnail">
					<h3>Ticketmaster</h3>
					<p>UI and design system work for the ticketmaster.com website.</p>
					<span class="cta">View case study >></span>
				</router-link>
			</li>

			<li class="project sunflow">
				<router-link to="/project-sunflow">
					<img class="hidden" src="@/assets/worksThumbSunflowHover.svg" alt="project thumbnail">
					<img src="@/assets/worksThumbSunflow.svg" alt="project thumbnail">
					<h3>Sunflow</h3>
					<p>A web app that allows you to create flows & mind maps.</p>
					<span class="cta">View case study >></span>
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
@import '@/scss/core.scss';

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
	
	margin-top: 100px;
	position: relative;
	display: inline-block;

    & .heading-ani {
        width: 111px;
        height: 111px;
        position: absolute;
        right: -120px;
        bottom: 0px;
    }
}

.project {
	height: 360px;
	background: #fff;
	border-radius: 16px;
	border: 1px solid #E4E4E4;
	margin-bottom: 25px;
	text-align: left;
	padding-left: 30px;
	padding-top: 190px;
	box-sizing: border-box;
	box-shadow: 0 7px 10px 0 rgba(0,0,0,0.09);
	position: relative;
	z-index: 20;
	overflow: hidden;
	transition: 0.3s;

	& h3 {
		font-size: 30px;
		text-transform: uppercase;
		margin-bottom: 10px;
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
		color: $wl-prime;
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

		&.hidden {
			opacity: 0;
		}
	}

	&:hover {
	
		& h3 {
			transform: translateY(-40px);
		}
	
		& p {
			transform: translateY(-35px);
		}
	
		& .cta {
			opacity: 1;
			transform: translateY(-25px);
		}

		& img.hidden {
			opacity: 1;
		}

		img {
			opacity: 0;
		}
	}

	&.lockedin {

		& h3 {
			color: $wl-lockedin;
		}

		& .cta {
			color: $wl-lockedin;
		}
		
	}

	&.ticketmaster {

		& h3 {
			color: $wl-ticketmaster;
		}

		& .cta {
			color: $wl-ticketmaster;
		}	
	}

	&.sunflow {

		& h3 {
			color: $wl-sunflow;
		}

		& .cta {
			color: $wl-sunflow;
		}

	}


}

</style>