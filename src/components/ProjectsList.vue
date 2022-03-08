<template>
  <div class="projects" id="projects">
    <h2>&lt; Mes Projets /&gt;</h2>
    <div class="projects__list">
      <a href="https://ozart.go.yj.fr/">
        <div class="card">
          <img src="@/assets/ozartt.png" />
          <div class="card__inner">
            <h2>Projet de fin d'études</h2>
            <p>Pour ce projet de fin d'étude réalisé au sein d'une équipe de cinq étudiants/développeurs en méthode Agile (Scrum), nous avons utilisé WordPress et personnalisé le contenu avec un plugin et un thème maison. Ce projet a été ensuite retravaillé avec un thème enfant.</p>
          </div>
        </div>
        <h3>Oz'Art</h3>
      </a>

      <a href="https://leaf-n-bloom.go.yn.fr/">
        <div class="card">
          <img src="@/assets/lb.png" />
          <div class="card__inner">
            <h2>Le Guide de l'Herboriste</h2>
            <p>Voici un projet d'entraînement réalisé avec une camarade de Promo dans le but de continuer à pratiquer après notre formation. Full WordPress avec Custom Post Type et Taxonomies et thème enfant.</p>
          </div>
        </div>
        <h3>Leaf &amp; Bloom</h3>
      </a>

      <a href="https://prime-copy.com/">
        <div class="card">
          <img src="@/assets/prime.png" />
          <div class="card__inner">
            <h2>Projet de stage</h2>
            <p>Au cours de mon stage j'ai participé à la conception d'une application de génération de contenu grâce à une intelligence artificielle (via l'API d'Open AI). J'ai travaillé sur la partie front-end et effectué une veille concurrentiel.</p>
          </div>
        </div>
        <h3>Prime Copy (Stage)</h3>
      </a>

      <a href="#">
        <div class="card">
          <img src="@/assets/qs.png" />
          <div class="card__inner">
            <h2>Cordonnerie Serrurerie</h2>
            <p>Premier site professionnel réalisé en 2022, pour une Cordonnerie - Serrurerie située à Angoulême. Le client souhaitait garder son positionnement et mettre en avant ses services. Veille concurrentielle, mise en avant du contenu et SEO.</p>
          </div>
        </div>
        <h3>Quick Services (en cours)</h3>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectsList",
};
</script>

<style scoped>
.projects {
  width: 100%;
}

h2 {
  text-align: left;
}

.projects__list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

.card {
  margin: 2em;
}

.card img {
  max-width: 100%;
  width: 500px;
  height: 300px;
  object-fit: cover;
}

.card {
  position: relative;
  max-width: 500px;
  height: 300px;
  background-size: cover;
  background-color: black;
  border-radius: 5px;
  background-position: center center;
  overflow: hidden;
}

.card__inner {
  background-color: rgba(0, 0, 0, 0.9);
  color: #fff;
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  z-index: 1;
  opacity: 0;
  padding: 1rem;
  transition: all 0.4s ease 0s;
}

.card:hover .card__inner {
  opacity: 1;
}

.card__inner h2 {
  margin-top: 1rem;
}

.card__inner p {
  /*overflow-y: scroll;*/
  height: 87%;
  padding-right: 1rem;
  font-weight: 200;
  line-height: 2.5rem;
  margin-top: 1.5rem;
}
</style>