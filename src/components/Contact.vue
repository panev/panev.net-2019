<template>
	<div id="contact" ref="contact">
		Contact section
	</div>
</template>

<script>
export default {
	name: 'Contact',
	mounted() {
		console.log("contact is at " + this.$refs.contact.offsetTop)
	}
}
</script>

<style scoped lang="scss">
@import '@/scss/utils.scss';

#contact {
	padding-top: $nav-height;
	height: 100vh;
	background: #fcfcfc;
}

</style>