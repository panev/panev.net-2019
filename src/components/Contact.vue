<template>
	<div id="contact" ref="contact" class="grid-container">
		<h1 class="section-heading contact-heading">Get in touch</h1>
		<h2>You can contact me via <a href="mailto:todor@panev.net">email</a> or directly message me on&nbsp;<a href="#">twitter</a>.</h2>
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

</style>