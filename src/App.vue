<template>
  <div id="app">
    <HeaderLayout />
    <router-view />
    <FooterLayout />
  </div>
</template>

<script>
import HeaderLayout from "@/components/HeaderLayout.vue";
import FooterLayout from "@/components/FooterLayout.vue";

export default {
  name: "App",
  components: {
    HeaderLayout,
    FooterLayout
  }
}
</script>

<style>
html,
body {
  font-size: 15px;
  font-family: "Montserrat";
  line-height: 1.5;
  margin: 0;
  background-color: #121212;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #838f9c;
}

nav {
  padding: 30px;
}

nav a {
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #22d49e;
}

* {
  box-sizing: border-box;
}
a {
  color: #000;
  text-decoration: none;
}
h1,
h3 {
  font-family: "Montserrat";
  text-transform: uppercase;
}

h2 {
  font-family: 'Source Code Pro', monospace;
  color: #22d49e;
  font-size: x-large;
  }

.main-container {
  padding-top: 5rem;
  padding-bottom: 5rem;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
}
</style>
