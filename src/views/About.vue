<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{ whatever }}</p>
  </div>
</template>

<script>
	export default {
		data: function() {
			return {
				whatever: 'blah'
			}
		}
	}
</script>