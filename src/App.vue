<template>
    <router-view/>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=PT+Sans:400,700');

/* some global scss lives here */

::selection {
  background: lighten(#A68AFF, 15%);
  color: #353535;
}

* {
  box-sizing: border-box;
}

a {
  text-decoration: none;
}

a:visited {
  color: inherit;
}

li {
  list-style: none;
}


html {
  padding: 0;
  margin: 0;
}

body {
  padding: 0;
  margin: 0;
}

.app-view {
  font-family: 'PT Sans', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
