<template>
	<footer>
		<div>&copy; Todor Panev 2019</div>
		<div class="tagline">Design without ethics is manipulation.</div>
	</footer>
</template>

<script>
export default {
	name: 'Footer'
}
</script>

<style scoped lang="scss">
@import '@/scss/core.scss';
	
footer {
	height: 250px;
	padding-top: 150px;
	display: block;
}

.tagline {
	color: $wl-gray;
}

</style>