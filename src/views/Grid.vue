<template>

<div class="grid-container">
	<div class="col-1">1</div>
	<div class="col-2">2</div>
	<div class="col-3">3</div>
	<div class="col-4">4</div>
	<div class="col-5">5</div>
	<div class="col-6">6</div>
	<div class="col-7">7</div>
	<div class="col-8">8</div>
	<div class="col-9">9</div>
	<div class="col-10">10</div>
	<div class="col-11">11</div>
	<div class="col-12">12</div>

	<div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima dignissimos tenetur dolores nesciunt possimus, eius, itaque laudantium voluptatibus tempore eaque nulla aliquid doloremque quibusdam, veniam ipsam deserunt ullam necessitatibus architecto.</div>

</div>

</template>

<script>

</script>

<style type="text/css">

* {
	box-sizing: border-box;
}

.grid-container { 
	display: grid;
	grid-template-columns: repeat(12, 68px);
	grid-column-gap: 30px;
	height: 100vh;
	justify-content: center;
	position: relative;
}

.col-1 {
	grid-column-start: 1;
	grid-column-end: 1;
	background: rgba(255,0,0,0.4);
}

.col-2 {
	grid-column-start: 2;
	grid-column-end: 2;
	background: rgba(255,0,0,0.4);
}

.col-3 {
	grid-column-start: 3;
	grid-column-end: 3;
	background: rgba(255,0,0,0.4);
}

.col-4 {
	grid-column-start: 4;
	grid-column-end: 4;
	background: rgba(255,0,0,0.4);
}

.col-5 {
	grid-column-start: 5;
	grid-column-end: 5;
	background: rgba(255,0,0,0.4);
}

.col-6 {
	grid-column-start: 6;
	grid-column-end: 6;
	background: rgba(255,0,0,0.4);
}

.col-7 {
	grid-column-start: 7;
	grid-column-end: 7;
	background: rgba(255,0,0,0.4);
}

.col-8 {
	grid-column-start: 8;
	grid-column-end: 8;
	background: rgba(255,0,0,0.4);
}

.col-9 {
	grid-column-start: 9;
	grid-column-end: 9;
	background: rgba(255,0,0,0.4);
}

.col-10 {
	grid-column-start: 10;
	grid-column-end: 10;
	background: rgba(255,0,0,0.4);
}

.col-11 {
	grid-column-start: 11;
	grid-column-end: 11;
	background: rgba(255,0,0,0.4);
}

.col-12 {
	grid-column-start: 12;
	grid-column-end: 12;
	background: rgba(255,0,0,0.4);
}

.text {
	grid-column: 4 / 6;
}


</style>