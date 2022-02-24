<template>
  <div class="techno">
    <h2>&lt; Technologies &amp; Compétences /&gt;</h2>
    <p>Voici une liste des Technologies que je maîtrise:</p>
    <div class="techno__list">
      <img
        src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
      />
      <img
        src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
      />
      <img
        src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white"
      />
      <img
        src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white"
      />
      <br />
      <img
        src="https://img.shields.io/badge/WordPress-%23117AC9.svg?style=for-the-badge&logo=WordPress&logoColor=white"
      />
      <img
        src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"
      />
      <img
        src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"
      />
      <img
        src="https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white"
      />
      <img
        src="https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vue.js&logoColor=4FC08D"
      />
      <img
        src="https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white"
      /><img
        src="https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white"
      />
      <img
        src="https://img.shields.io/badge/Amazon_AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white"
      />
      <img
        src="https://img.shields.io/badge/-Jasmine-%238A4182?style=for-the-badge&logo=Jasmine&logoColor=whit"
      />
      <img
        src="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white"
      />
    </div>
    <p>Celles que je suis en train d'apprendre:</p>
    <div class="techno__list">
      <img
        src="https://img.shields.io/badge/AngularJS-E23237?style=for-the-badge&logo=angularjs&logoColor=white"
      />
      <img
        src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"
      />
      <img
        src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"
      />
      <img
        src="https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white"
      />
    </div>
    <p>Et celles que je souhaite découvrir dans un futur proche:</p>
      <div class="techno__list">
        <img
        src="https://img.shields.io/badge/C%2B%2B-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white"
      />
      <img
        src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
      />
      <img
        src="https://img.shields.io/badge/Gatsby-663399?style=for-the-badge&logo=gatsby&logoColor=white"
      />
    </div>
  </div>
  <div class="infos">
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
</template>

<script>
export default {
  name: "TechnoCursus",
};
</script>

<style scoped>

.techno {
  width: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

 .techno__list {
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
   justify-content: center;
   width: 80%;
 }
 
.techno p {
  font-weight: 700;
  font-size: larger;
}
.techno h2 {
  align-self: flex-start;
}

.infos {
  width: 100%;
}

.infos h3 {
  color: #22d49e;
}

img {
  margin: 5px;
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
  justify-content: center;
}

@media screen and (max-width: 1183px) {
  .skills__list {
    justify-content: flex-start;
  }
}

ul {
  list-style-type: circle;
  text-align: left;
}

.grade__list__item {
  border: solid 1px #22d49e;
  border-radius: 5px;
  padding: 2em;
}
</style>