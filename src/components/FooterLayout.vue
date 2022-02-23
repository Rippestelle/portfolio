<template>
  <footer class="footer">
    <nav class="footer-nav">
        <ul class="footer-nav__list">
          <h3> Contact</h3>
            <li class="footer-nav__list__item">Accueil</li>
            <li class="footer-nav__list__item">Projets</li>
            <li class="footer-nav__list__item">Formation</li>
        </ul>
    </nav>
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