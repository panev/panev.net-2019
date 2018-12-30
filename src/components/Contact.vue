<template>
	<div id="contact" ref="contact">
		Contact section
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
	height: 100vh;
	background: #fcfcfc;
}

</style>