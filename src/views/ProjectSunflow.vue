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
				<p>To to try out the app, you need an account &ndash; register one <a href="https://sunflow.rs/super-secret-register-page.html" target="_blank" rel="noreferrer">here</a></p>
				<router-link to="/" class="button back">< Back to Home Page</router-link>
				<a href="http://sunflow.rs" target="_blank" class="button visit external" rel="noreferrer">Visit live project <img src="@/assets/iconExternal.svg" alt="external icon"></a>
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
@import '@/scss/core.scss';
@import '@/scss/cs.scss';

#project-sunflow {
	padding-top: $nav-height;
}

nav {
	grid-column: 6 / 13;
}

.hero-unit {
	background-image: linear-gradient(-225deg, #14223C 0%, #192946 100%);
}

.hero-info {

	& li {

		&::before {
			background: $wl-prime;
		}
	}

	& p {
		color: $wl-prime;
	}
}

.hero-subheading {
	color: #fff;
}

.content {

	& em {
		&:before {
			content: '"';
			font-size: 80px;
			color: $wl-prime;
		}
	}

}

#buttons {

	& p a {
		color: $wl-prime;
		text-decoration: underline;
		font-weight: bold;
	}

	& p {
		margin-bottom: 40px;
	}
}


</style>














