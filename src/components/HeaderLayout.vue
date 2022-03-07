<template>
  <header class="header">
    <div class="header-main fade-in">
      <h1 class="text-container">
        Bonjour,<br />
        Je suis <span class="first-part"> {{ title }}</span> 
        <span class="second-part">Développeuse Web</span>
      </h1>
      <div class="downArrow bounce">
        <a href="#nav" class="arrow-down"><i class="fa-solid fa-angles-down"></i></a>
      </div>
    </div>
  </header>
  <nav class="nav" id="nav">
    <ul class="nav__list">
      <li class="nav__list__item">
        <a href="#about" class="nav__list__item__link">A propos</a>
      </li>
      <li class="nav__list__item">
        <a href="#techno" class="nav__list__item__link">Compétences</a>
      </li>
      <li class="nav__list__item">
        <a href="#projects" class="nav__list__item__link">Projets</a>
      </li>
      <li class="nav__list__item">
        <a href="#contact" class="nav__list__item__link">Contact</a>
      </li>
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
      title: "E s t e l l e",
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
  color: var(--title-secondary-color);
  font-family: 'Source Code Pro', monospace;
}

.header-main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 1em;
}

.first-part {
font-family: 'Audiowide', cursive;
font-family: 'Cutive Mono', monospace;
font-family: 'JetBrains Mono', monospace;
font-family: 'Major Mono Display', monospace;
font-family: 'Montserrat', sans-serif;
font-family: 'Red Hat Mono', monospace;
font-family: 'Share Tech Mono', monospace;
font-family: 'Source Code Pro', monospace;
font-family: 'Syne Mono', monospace;
font-family: 'Monofett', cursive;
  font-size: xxx-large;
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

.arrow-down {
  color: var(--title-secondary-color);
  font-size: xx-large;
}
.bounce {
  -moz-animation: bounce 3s infinite;
  -webkit-animation: bounce 3s infinite;
  animation: bounce 3s infinite;
}
@-moz-keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    -moz-transform: translateY(0);
    transform: translateY(0);
  }
  40% {
    -moz-transform: translateY(-30px);
    transform: translateY(-30px);
  }
  60% {
    -moz-transform: translateY(-15px);
    transform: translateY(-15px);
  }
}
@-webkit-keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  40% {
    -webkit-transform: translateY(-30px);
    transform: translateY(-30px);
  }
  60% {
    -webkit-transform: translateY(-15px);
    transform: translateY(-15px);
  }
}
@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  40% {
    -moz-transform: translateY(-30px);
    -ms-transform: translateY(-30px);
    -webkit-transform: translateY(-30px);
    transform: translateY(-30px);
  }
  60% {
    -moz-transform: translateY(-15px);
    -ms-transform: translateY(-15px);
    -webkit-transform: translateY(-15px);
    transform: translateY(-15px);
  }
}


</style>