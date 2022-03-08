<template>
  <div class="techno" id="techno">
    <h2>&lt; Technologies &amp; Compétences /&gt;</h2>
    <p>Voici une liste des Technologies que je maîtrise:</p>

    <div class="techno__list">
      <h3>HTML5</h3>
      <h3>CSS3</h3>
      <h3>Bootstrap</h3>
      <h3>PHP</h3>
      <h3>JavaScript</h3>
      <h3>SQL</h3>
      <h3>Wordpress</h3>
      <h3>Laravel</h3>
      <h3>Vue.js</h3>
      <h3>Node.js</h3>
      <h3>JQuery</h3>
      <h3>MySQL</h3>
      <h3>Git</h3>
      <h3>Amazon AWS</h3>
      <h3>Vue.js</h3>
    </div>

    <p>Celles que je suis en train d'apprendre:</p>
    <div class="techno__list">
      <h3>TypeScript</h3>
      <h3>Angular</h3>
      <h3>Jasmine</h3>
      <h3>MongoDB</h3>
    </div>

    <p>Et celles que je souhaite découvrir dans un futur proche:</p>
    <div class="techno__list">
      <h3>C++</h3>
      <h3>Python</h3>
      <h3>Gatsby</h3>
      <h3>React</h3>
      <h3>Symfony</h3>
      <h3>Svelte</h3>
    </div>
  </div>
  <div class="infos" id="infos">
    <div class="grade">
      <h3>Certifications:</h3>
      <div class="grade__list">
        <ul class="grade__list__item">
          <li>Titre Professionnel Développeur Web et Web Mobile (Bac+2)</li>
          <li>Certification Opquast - Maîtrise de la qualité en projet web</li>
          <li>Sécurité Numérique avec l'ANSSI</li>
          <li>SEO (en cours avec OpenClassRoom)</li>
        </ul>
        <ul class="grade__list__item">
          <h4>Autres:</h4>
          <li>Baccalauréat Littéraire Spé Anglais</li>
          <li>Licence Lettres Modernes et Langue et Culture Anglophone</li>
          <li>Master 1 Littérature Jeunesse</li>
        </ul>
      </div>
    </div>
    <div class="skills">
      <h3>Skills:</h3>
      <div class="skills__list">
        <div class="skills__list__block">
          <ul>
            <li>Intégration</li>
            <li>POO</li>
            <li>MVC</li>
            <li>Base de données relationnelle</li>
          </ul>
          <ul>
            <li>Adapatabilité et Ergonomie</li>
            <li>Front-end / Back-end</li>
            <li>WordPress Custom</li>
            <li>SEO - Visibilité</li>
          </ul>
        </div>
        <div class="skills__list__block">
          <ul>
            <li>Rédaction Cahier des Charges</li>
            <li>Méthodes Agiles</li>
            <li>Veille Technologique et Concurentielle</li>
            <li>Responsive Design</li>
          </ul>
          <ul>
            <li>Sens du relationnel</li>
            <li>Bonne communication</li>
            <li>Rédaction et Créativité</li>
            <li>Autonome et Organisée</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TechnoCursus",
};
</script>

<style scoped>
.techno {
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.techno__list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 80%;
}

.techno p {
  font-weight: 700;
  font-size: larger;
}
.techno h2 {
  align-self: flex-start;
}

.techno h3 {
  text-transform: none;
  padding: 10px;
  border: 1px solid #22d49e;
  border-radius: 5px;
  margin: 5px;
}

.infos {
  max-width: 100%;
}

.infos h3 {
  color: #22d49e;
}

.infos {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.grade__list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}

.grade h4 {
  margin-bottom: 3px;
  margin-top: 0;
  font-weight: 600;
}

.grade ul {
  list-style-type: none;
  text-align: left;
}

.skills__list {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}

@media screen and (min-width: 683px) {
  .skills__list {
    justify-content: space-evenly;
  }
}

.skills ul {
  list-style: none;
  text-align: left;
}

.skills li::before {
  content: "\25E6";
  color: #22d49e;
  display: inline-block;
  width: 1em;
  margin-left: -1em;
}
.grade__list__item {
  border: solid 1px #22d49e;
  border-radius: 5px;
  padding: 2em;
  margin: 1em;
}
</style>