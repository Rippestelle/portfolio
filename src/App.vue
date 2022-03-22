<template>
  <div id="app">
    <HeaderLayout />
    <ThemeButton />
    <router-view />
    <FooterLayout />
  </div>
</template>

<script>
import HeaderLayout from "@/components/HeaderLayout.vue";
import ThemeButton from '@/components/ThemeButton.vue';
import FooterLayout from "@/components/FooterLayout.vue";


export default {
  name: "App",
  components: {
    HeaderLayout,
    ThemeButton,
    FooterLayout
  },
  mounted() {
  const initUserTheme = this.getMediaPreference();
  this.setTheme(initUserTheme);
  },
  data() {
    return {
      userTheme: "dark-theme",
    };
  },
  methods: {
    setTheme(theme) {
    localStorage.setItem("user-theme", theme);
    this.userTheme = theme;
    document.documentElement.className = theme;
  },
  toggleTheme() {
  const activeTheme = localStorage.getItem("user-theme");
  if (activeTheme === "light-theme") {
    this.setTheme("dark-theme");
  } else {
    this.setTheme("light-theme");
  }
},
getMediaPreference() {
  const hasDarkPreference = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  if (hasDarkPreference) {
    return "dark-theme";
  } else {
    return "light-theme";
  }
}
  }
}
</script>

<style>
html,
body {
  font-size: 100%;
  font-family: "Montserrat";
  line-height: 1.5;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
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
  color: #838f9c;
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
  max-width: 90%;
  margin-left: auto;
  margin-right: auto;
}

/* Define styles for the default root window element */
:root {
  --background-color-primary: #121212;
  --background-color-secondary: #fff;
  --accent-color: #cacaca;
  --text-primary-color: #838f9c;
  --title-primary-color: #22d49e;
  --title-secondary-color: #121212;
  --element-size: 4rem;
}

/* Define styles for the root window with dark - mode preference */
:root.light-theme {
  --background-color-primary: #fff;
  --background-color-secondary: #121212;
  --accent-color: #fff;
  --text-primary-color: #838f9c;
  --title-primary-color: #22d49e;
  --title-secondary-color: #fff;

}

#app {
    background-color: var(--background-color-primary);
    color: var(--text-primary-color);
}

</style>
