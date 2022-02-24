<template>
  <footer class="footer">
    <!--<nav class="footer-nav">
      <div class="nav-section">
        <h3>Contact</h3>
        <ul class="nav-section__list">
          <li class="nav-section__list__item">estelle.rippe.pro@gmail.com</li>
          <li class="nav-section__list__item">LinkedIn</li>
        </ul>
      </div>
      <div class="nav-section">
        <h3>Infos</h3>
        <ul class="nav-section__list">
          <li class="nav-section__list__item">Mentions Légales</li>
          <li class="nav-section__list__item">Projets</li>
        </ul>
      </div>
      <div class="nav-section">
        <h3>Contact</h3>
        <ul class="nav-section__list">
          <li class="nav-section__list__item">Accueil</li>
          <li class="nav-section__list__item">Projets</li>
          <li class="nav-section__list__item">Formation</li>
        </ul>
      </div>
    </nav>-->
    <div>
      <p>&copy; 2022 | Estelle Rippe | <a>Mentions Légales</a></p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterLayout",
};
</script>

<style>
.footer {
  background-color: #121212;
  width: 100%;
  box-shadow: 0px 0px 10px rgba(20, 20, 20, 0.2);
  bottom: 0;
}

.footer-nav {
  align-items: center;
  display: flex;
  justify-content: space-around;
  padding: 1rem;
}

.footer-nav__list {
    list-style-type: none;
}
</style>