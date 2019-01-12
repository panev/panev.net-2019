<template>
	<div id="project-sunflow" class="app-view">

		<header class="grid-container">
			<div class="logo-and-back">
				<h3>Project<span>:</span> Sunflow.rs</h3>
				<router-link to="/">< Back</router-link>
			</div>
			<nav>
				<p>Casestudy comming soon~</p>
			</nav>
		</header>

		<div class="hero-unit">
			<div class="grid-container">
				<img src="@/assets/project-sunflow/heroThumb.png" alt="hero thumb image" class="hero-thumb">
				<div class="hero-info">
					<div class="hero-heading">
						<span>Sunflow.rs</span> is a web app that allows you to create flows & mind maps. 
					</div>
					<div class="hero-subheading">
						TL;DR:
					</div>
					<p>
						In 2017 I created this web app as a proof of concept. In essence, it is a bidirectional graph editor built with d3 and Firebase.  Today I mostly use it to keep notes and TO-DOs.
					</p>
					<div class="hero-subheading">
						PROJECT ROLES:
					</div>
					<ul>
						<li>Product Designer</li>
						<li>Software Engineer</li>
					</ul>
				</div>
			</div>
		</div>

		<div class="content">

			<section id="context" ref="context" class="grid-container">
				<h2>No Case study for this one yet – only a few screenshots</h2>
				<p>Meanwhile, you can check out this letter I that sent out to the original people who tested the app when I first launched it:</p>
				<p>
					<em>
						<strong>You guys, I totally finished that side project I was working on.</strong>
						<br>
						Hey, you're receiving this because:
						<br>
						   1. I was telling you about that graph tool I was making and you were interested<br>
						   2. I think you may give me some amazing feedback<br>
						   3. I somehow have to justify learning webpack<br>

						<br>
						<strong>What is it?</strong>
						<br>
						It's an app that allows you to create bidirectional graphs. You can create nodes, add text to them and link them to each other. Why do this? It may be useful if you want to create a flowchart, mind map, or just take notes in a graph environment. 
						<br>
						You can watch this semi-instructional video, to get a feel of how things work: https://sunflow.rs/videos/prev.mp4
						<br>

						<strong>Important note: not planning on disrupting anything.</strong>
						<br>
						Nope, not even secretly hoping for this to become a real product, making a start-up out of it or getting VC money and running away on an island. I made this tool because I needed something like it and it wasn't there. I also wanted to learn some technologies. Hopefully, someday, it may be of use to someone else, too.
						<br>

						<strong>Current state</strong>
						<br>
						The first iteration is rough around the edges – some interactions could definitely be improved and it's lacking some very-nice-to-have features, but the essentials are working and you can use it.
						<br>

						<strong>Reliability </strong>
						<br>
						I'm going to be using this tool for real projects. I'll strive to be diligent and ensure there is no downtime or loss of data, should you ever use this thing actively.
						<br>

						<strong>Browsers & Limitations</strong>
						<br>
						Despite my best efforts, currently the tool works best in the latest versions of Chrome. 
						<br>
						Although you can use it in Safari, Opera & Firefox, they all have quirks in their implementations of SVGs and animations will be glitchy and slow. This will lead to serious performance issues over time, so I strongly advice that you use only Chrome for now, sorry about that. IE / Edge were never tested and I don't plan to support them.
						<br>
						A mobile version of the app currently doesn't exist.
						<br>

						<strong>Future</strong>
						<br>
						Plot twist: I'm taking a small break from this project, to do some urgent work on --- and a few other projects, so there will be no major updates in the following month or two... or three. However I have a solid backlog of ideas that I'll be tackling after that: colour coded nodes & links, vastly improved micro interactions, viewport saving, multiple graphs (like trello boards), massive performance optimizations and more.
						<br>
						Eventually, I'll release this as FOSS. 
						<br>

						<strong>Meanwhile</strong>
						<br>
						I'd love to hear your thoughts and impressions on this thing. Is it horrible? Is it amazing? Are the square and circle confusing? Would use it and if yes, what for?
						<br>

						<strong>Oh, and that's right!</strong>
						<br>
						The app itself – it's called Sunflow. Didn't put too much time in the name, but I'm pretty happy about the domain: https://sunflow.rs
						The registration is currently invite-only, you can get an account at: https://sunflow.rs/super-secret-register-page.html
						<br>
						You can follow this twitter for project updates: https://twitter.com/sunflowdotrs
						<br>


						Thanks!
						<br>
						A million thanks for your time & thoughts!
						<br>
						Sincerely,
						Todor
					</em>
				</p>
				<img src="@/assets/project-sunflow/1.jpg" alt="screenshot" class="mock">
				<img src="@/assets/project-sunflow/2.jpg" alt="screenshot" class="mock">
				<img src="@/assets/project-sunflow/3.jpg" alt="screenshot" class="mock">
				<img src="@/assets/project-sunflow/4.jpg" alt="screenshot" class="mock">
				<img src="@/assets/project-sunflow/5.jpg" alt="screenshot" class="mock">
				<img src="@/assets/project-sunflow/6.jpg" alt="screenshot" class="mock">
				<img src="@/assets/project-sunflow/7.jpg" alt="screenshot" class="mock">
			</section>
			<section id="buttons">
				<p>To to try out the app, you need an account &ndash; register one <a href="https://sunflow.rs/super-secret-register-page.html" target="_blank">here</a></p>
				<router-link to="/" class="button back">< Back to Home Page</router-link>
				<a href="http://sunflow.rs" target="_blank" class="button visit external">Visit live project <img src="@/assets/iconExternal.svg" alt="external icon"></a>
			</section>
		</div>

		<Footer></Footer>

	</div>
</template>

<script>
import Footer from '@/components/Footer.vue'

export default {
	name: 'project-sunflow',
	components: {
    	Footer
	}
}
</script>

<style scoped lang="scss">
@import '@/scss/utils.scss';

#project-sunflow {
	padding-top: $nav-height;
}

header {
	height: $nav-height;
	background: #fff;
	box-shadow: 0 2px 4px 0 rgba(0,0,0,0.15);
	position: fixed;
	top: 0;
	z-index: 9000;
}

.logo-and-back {
	grid-column: 1 / 5;
	text-align: left;

	& h3 {
		font-size: $type-project-heading;
		margin: 10px 0 0 0;


		& span {
			color: $wl-prime;
		}
	}

	& a {
		color: $wl-prime;
		font-size: 16px;
		font-weight: bold;
	}
}

nav {
	grid-column: 6 / 13;

	& a {
		display: inline-block;
		box-sizing: border-box;
		display: inline-block;
		font-size: 17px;
		color: $wl-second;
		transition: 0.3s;	
		padding: 25px 20px;
		width: 140px;	
	}
}

.active-marker {
	background: $wl-prime;
	height: 8px;
	width: 140px;
	transition: 0.3s;
	transform: translateX(-450px) translateY(0px) scaleX(1.60);
	z-index: 5;
	position: relative;
}

.contextActive .context-link,
.projectGoalsActive .project-goals-link,
.processActive .process-link,
.outcomeActive .outcome-link {
	font-weight: bold;
}

.contextActive .active-marker {
	transform: translateX(50px) translateY(0px) scaleX(1);
}

.projectGoalsActive .active-marker {
	transform: translateX(185px) translateY(0px) scaleX(1);
}

.processActive .active-marker {
	transform: translateX(330px) translateY(0px) scaleX(1);
}

.outcomeActive .active-marker {
	transform: translateX(470px) translateY(0px) scaleX(1);
}

.hero-unit {
	height: 620px;
	background-image: linear-gradient(-225deg, #14223C 0%, #192946 100%);
	margin-bottom: 50px;
}

.hero-thumb {
	grid-column: 1 / 5;
	margin-top: 150px;
}

.hero-info {
	grid-column: 6 / 13;
	text-align: left;
	margin-top: 70px;

	& ul {
		padding-left: 0;

		& li {
			font-size: $type-paragraph;
			color: #fff;
			margin-bottom: 5px;

			&::before {
				content: '';
				width: 10px;
				height: 10px;
				border-radius: 50%;
				margin-right: 15px;
				background: $wl-prime;
				display: inline-block;
			}
		}
	}

	& p {
		color: $wl-prime;
	}
}

.hero-heading {
	font-size: 42px;
	color: #FFFFFF;
	margin-top: 40px;

	& span {
		font-weight: bold;
	}
}

.hero-subheading {
	font-weight: bold;
	font-size: 21px;
	color: #fff;
	margin-top: 40px;
}

.content {

	h2 {
		grid-column: 1 / 13;
		text-align: center;
		text-transform: uppercase;
		color: $wl-prime;
		font-weight: bold;
	}

	h3 {
		grid-column: 1 / 13;
		text-align: center;
		text-transform: uppercase;
		color: $wl-second;
		font-weight: bold;
	}

	& section {
		padding-top: $nav-height;
		text-align: left;

		&.audio {
			border-top: 1px dashed #ddd;
			border-bottom: 1px dashed #ddd;
			padding-bottom: 50px;
			padding-top: 50px;
			background: #fcfcfc;
			position: relative;
		}
	}

	& p {
		grid-column: 3 / 11;
	}

	& em {
		&:before {
			content: '"';
			font-size: 80px;
			color: $wl-prime;
		}
	}

	& .mock {
		grid-column: 2 / 12;
		margin-top: 10px;
		margin-bottom: 55px;
		justify-self: center;
	}

	& .half-mock {
		grid-column: span 6;
		margin-top: 10px;
		margin-bottom: 55px;
	}

	& .with-shadow {
		box-shadow: 0 2px 60px 0 rgba(155,155,155,0.40);
	}

	ul {
		grid-column: 2 / 12;
		padding: 40px;
		font-size: $type-paragraph;
		background: #FBFBFB;
		border: 1px dashed #E1E1E1;

		& li {
			margin: 25px 0;
			font-weight: bold;
		}

		& li::before {
			content: '';
			width: 16px;
			height: 16px;
			border-radius: 50%;
			background: $wl-prime;
			display: inline-block;
			vertical-align: middle;
			margin-right: 10px;
			margin-top: -4px;
		}
	}
}

.section-thumb,
.duration,
.listen-label,
audio,
video {
	grid-column: 1 / 13;
	justify-self: center;
}

.section-thumb {
	height: 130px;
}

.duration {
	color: $wl-prime;
	margin-bottom: 5px; 
	font-weight: bold;
}

.listen-label {
	margin-bottom: 25px;
}

#buttons {
	width: 100%;
	text-align: center;
	padding-top: 0;

	& p a {
		color: $wl-prime;
		text-decoration: underline;
		font-weight: bold;
	}

	& p {
		margin-bottom: 40px;
	}
}

.button {
	height: 58px;
	border-radius: 30px;
	padding: 20px 30px;
	font-weight: bold;
	color: #fff;
	display: inline-block;
	margin: 0 20px;
	box-shadow: 0 3px 15px 0 rgba(0, 0, 0, 0.15);
	transition: 0.3s;

	&.back {
		background: $wl-second;
	}

	&.visit {
		background: $wl-prime;
	}

	& img {
		vertical-align: bottom;
		margin-left: 8px;
	}

	&:hover {
		transform: translateY(-5px);
		box-shadow: 0 7px 15px 0 rgba(0, 0, 0, 0.20);
	}
}

</style>














