<template>
  <footer class="footer">
    <p class="block">&#9888; Site en cours de construction &#9888;</p>
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

.block {
  font-weight: 700;
  font-size: larger;
}
</style>