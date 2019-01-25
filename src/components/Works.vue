<template> 
    <div id="works" ref="works">
   		<h1 class="works-heading section-heading">
   			Work
   			<div class="heading-ani">
   				<svg width="77px" height="97px" viewBox="0 0 77 97" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
				    <title>Group 21</title>
	                <g id="Group-29" transform="translate(0.000000, 17.000000)">
	                    <g id="Group-28" transform="translate(0.000000, 40.634921)">
	                        <path d="M56.8032787,38.0952381 C56.8032787,24.445427 46.630601,30.5817678 34.0819672,30.5817678 C21.5333334,30.5817678 11.3606557,24.445427 11.3606557,38.0952381 L56.8032787,38.0952381 Z" id="Oval-4" fill="#E1E1E1" transform="translate(34.081967, 33.650794) rotate(-360.000000) translate(-34.081967, -33.650794) "></path>
	                        <ellipse id="Oval-2" fill="#E1E1E1" cx="66.2704918" cy="13.3333333" rx="9.46721311" ry="9.52380952"></ellipse>
	                        <path d="M66.9016393,33.015873 C66.9016393,14.7817098 51.9251972,0 33.4508197,0 C14.9764421,0 0,14.7817098 0,33.015873 L66.9016393,33.015873 Z" id="Oval-4" fill="#F0EFEF" transform="translate(33.450820, 16.507937) rotate(-180.000000) translate(-33.450820, -16.507937) "></path>
	                    </g>
	                    <g transform="translate(0.000000, -10.000000)">
	                    	<rect id="Beam-1" fill="#63DFDF" x="22.7213115" y="6.5079365" width="5.04918033" height="17.7777778" rx="2.52459016"></rect>
	                    	<rect id="Beam-2" fill="#63DFDF" x="31.557377" y="-10" width="5.04918033" height="34.2857143" rx="2.52459016"></rect>
	                    	<rect id="Beam-3" fill="#63DFDF" x="40.3934426" y="4.1269841" width="5.04918033" height="10.1587302" rx="2.52459016"></rect>
	                	</g>
	                </g>
	                <circle id="Spark-1" fill="#F0EFEF" cx="72.5" cy="35.5" r="4.5"></circle>
	                <circle id="Spark-2" fill="#E1E1E1" cx="16.5" cy="44.5" r="1.5"></circle>
	                <circle id="Spark-3" fill="#F0EFEF" cx="22" cy="2" r="2"></circle>
				</svg>
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


#Beam-1,
#Beam-2,
#Beam-3 {
	animation: updown 3s infinite; 
	transform-origin: center;
	transform: translateY(20px);
}

#Beam-1 {
	animation-delay: 2.2s;
}

#Beam-2 {
	animation-delay: 0.1s;
}

#Beam-3 {
	animation-delay: 0.55s;
}

@keyframes updown {
	0% {transform: scaleY(0) translateY(20px); opacity: 1;}
	50% {opacity: 1;}
	100% {transform: scaleY(1) translateY(20px); opacity: 0;}
}


#Spark-1 {
	animation: spark1 2s infinite;
}

@keyframes spark1 {
	0% {transform:translate(0px, 0px); opacity: 1}
	100% {transform:translate(5px, -25px); opacity: 0}
}

#Spark-2 {
	animation: spark2 2s infinite;
	transform-origin: center center;
	animation-delay: 0.5s;
}

@keyframes spark2 {
	0% {transform:translate(0px, 0px) scale(1); opacity: 1}
	100% {transform:translate(0px, 0px) scale(2.5); opacity: 0}
}

#Spark-3 {
	animation: spark3 2s infinite;
	transform-origin: center;
	animation-delay: 0.25s;
}

@keyframes spark3 {
	0% {transform: scale(1); opacity: 1}
	100% {transform: scale(1.2); opacity: 0;}
}

svg {
	overflow: visible;
}















</style>