<template>
	<div id="contact" ref="contact" class="grid-container">
		<h1 class="section-heading contact-heading">Get in touch</h1>
		<h2>Feel free to contact me via <a href="mailto:todor@panev.net">email</a> or directly message me on&nbsp;<a href="https://twitter.com/messages/compose?recipient_id=553687251" target="_blank">twitter</a>.</h2>
		<div class="social-links">
			<a href="https://www.linkedin.com/in/todorpanev/" target="_blank">
				<img src="@/assets/social-icons/linkedin.svg" alt="linkedin icon">
			</a>
			<a href="https://github.com/panev" target="_blank">
				<img src="@/assets/social-icons/github.svg" alt="github icon">
			</a>
			<a href="https://twitter.com/todorpanev" target="_blank">
				<img src="@/assets/social-icons/twitter.svg" alt="twitter icon">
			</a>
			<a href="https://medium.com/@panev" target="_blank">
				<img src="@/assets/social-icons/medium.svg" alt="medium icon">
			</a>
			<a href="https://www.instagram.com/todorezashto/" target="_blank">
				<img src="@/assets/social-icons/instagram.svg" alt="instagram icon">
			</a>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Contact',
	data: function() {
		return {
			contactAreaStart: 0,
			contactAreaEnd: 0		
		}
	},
	methods: {
		getContactArea() {
			this.contactAreaStart = this.$refs.contact.offsetTop;
			this.contactAreaEnd = this.$refs.contact.offsetTop + this.$refs.contact.offsetHeight;
			this.$emit('contactAreaStartCalculated', this.contactAreaStart)
			this.$emit('contactAreaEndCalculated', this.contactAreaEnd)
		}
	},
	mounted() {
		this.getContactArea();
	}
}
</script>

<style scoped lang="scss">
@import '@/scss/utils.scss';

#contact {
	padding-top: calc(#{$nav-height} * 2);
	background: #fcfcfc;
}

.contact-heading {
	margin-bottom: 0;
	margin-top: 0;
}

h2 {
	grid-column: 3 / 11;
	text-align: left;

	& a {
		font-weight: bold;
		color: $wl-prime;
		text-decoration: underline;
	}
}

.social-links {
	grid-column: 1 / 13;
	justify-content: center;

	& a {
		margin: 0px 25px;
	}
}

</style>