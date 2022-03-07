<template>
  <div class="theme-btn">
    <input
      @change="toggleTheme"
      id="checkbox"
      type="checkbox"
      class="switch-checkbox"
    />
    <label for="checkbox" class="switch-label">
      <span title="Thème Clair" class="light-icon"><i class="fa-solid fa-sun"></i></span>
      <span title="Thème Sombre" class="dark-icon"><i class="fas fa-moon"></i></span>
      <div
        class="switch-toggle"
        :class="{ 'switch-toggle-checked': userTheme === 'dark-theme' }"
      ></div>
    </label>
  </div>
</template>

<script>
export default {
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
    toggleTheme() {
      const activeTheme = localStorage.getItem("user-theme");
      if (activeTheme === "dark-theme") {
        this.setTheme("light-theme");
      } else {
        this.setTheme("dark-theme");
      }
    },

    setTheme(theme) {
      localStorage.setItem("user-theme", theme);
      this.userTheme = theme;
      document.documentElement.className = theme;
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
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.theme-btn {
  padding-inline-start: 1em;
  padding-inline-end: 1em;
  margin-left: 3em;
}

.switch-checkbox {
  display: none;
}

.switch-label {
  align-items: center;
  background: var(--background-color-secondary);
  border-radius: var(--element-size);
  cursor: pointer;
  display: flex;
  font-size: calc(var(--element-size) * 0.35);
  height: calc(var(--element-size) * 0.5);
  position: relative;
  padding: calc(var(--element-size) * 0.1);
  transition: background 0.5s ease;
  justify-content: space-between;
  width: var(--element-size);
  z-index: 1;
}

.switch-toggle {
  position: absolute;
  background-color: var(--background-color-primary);
  border-radius: 50%;
  left: calc(var(--element-size) * 0.02);
  height: calc(var(--element-size) * 0.45);
  width: calc(var(--element-size) * 0.45);
  transform: translateX(0);
  transition: transform 0.3s ease, background-color 0.5s ease;
}


.switch-toggle-checked {
  transform: translateX(calc(var(--element-size) * 0.5)) !important;
}

.dark-icon {
  color: #22d49e;
}

.light-icon {
    color: #22d49e;
}
</style>
