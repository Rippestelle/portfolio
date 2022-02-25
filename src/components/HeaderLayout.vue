<template>
  <header class="header">
    <div class="header-main">
      <h1 class="text-container">
        Bonjour,<br />
        Je suis <span class="first-part"> {{ title }},</span>
        <span class="second-part">Développeuse Web.</span>
      </h1>
    </div>
  </header>
  <nav class="nav">
    <ul class="nav__list">
      <li class="nav__list__item"><a href="#"  class="nav__list__item__link">A propos</a></li>
      <li class="nav__list__item"><a href="#"  class="nav__list__item__link">Formation</a></li>
      <li class="nav__list__item"><a href="#"  class="nav__list__item__link">Projets</a></li>
      <li class="nav__list__item"><a href="#"  class="nav__list__item__link">Contact</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "HeaderLayout",
  // data: function() {
  data() {
    // La méthode data() doit retourner un objet
    return {
      title: "Estelle",
      isActionsVisible: false,
    };
  },
};
</script>

<style>
.header {
  background: url("@/assets/bg.png") no-repeat center center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100%;
  width: 100%;
  height: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
}

@media screen and (min-width: 840px) {
  .header {
  background: url("@/assets/bg.png") no-repeat center center fixed;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100%;
  width: 100%;
  height: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  }
}

.text-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: x-large;
  color: #121212;
}

:root.light-theme.h1 {
  color: var(--text-color-primary);
}


.header-main {
  display: flex;
  justify-content: center;
  align-items: center;
}

.first-part {
  font-family: 'Source Code Pro', monospace;
  font-size: xx-large;
}
.second-part {
  font-weight: 700;
}

@media screen and (max-width: 640px) {
  .nav {
    display: none;
  }
}

.nav a {
  color: #22d49e;
}

.nav__list {
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  font-weight: 400;
}

.nav__list__item {
  text-transform: uppercase;
}
</style>