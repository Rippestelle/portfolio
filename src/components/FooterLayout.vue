<template>
  <footer class="footer">
    <p class="block">&#9888; Site en cours de construction &#9888;</p>
    <div>
      <p>
        &copy; 2022 | Estelle Rippe |
        <a href="#" v-on:click="showAlert">Mentions Légales</a>
      </p>
    </div>
  </footer>
</template>

<script>
import Swal from "sweetalert2";

export default {
  name: "FooterLayout",
  methods: {
    showAlert() {
        Swal.fire({
        title: "Mentions Légales",
        icon: 'info',
        html:
          '<h3>1. Présentation du site</h3>' +
          '<p>Propriétaire: Estelle RIPPE</p>' +
          '<p>Créateur: Estelle RIPPE</p>' +
          '<p>Hébergeur: https://www.netlify.com/</p>' +
          '<h3>2. Description des services fournis.</h3>' +
          '<p>Le site a pour objet de fournir une information concernant l\'ensemble d\'une activité. <br>Tous les informations indiquées sur le site sont données à titre indicatif, et sont susceptibles d\'évoluer. Par ailleurs, les renseignements figurant sur le site ne sont pas exhaustifs. Ils sont donnés sous réserve de modifications ayant été apportées depuis leur mise en ligne.</p>' +
          '<h3>3. Conditions générales d\'utilisation du site et des services proposés</h3>' +
          '<p>L\'utilisation du site implique l\'acceptation pleine et entière des conditions générales d\'utilisation ci-après décrites. Ces conditions d\'utilisation sont susceptibles d\'être modifiées ou complétées à tout moment, les utilisateurs du site sont donc invités à les consulter de manière régulière.</p>' +
          '<h3>4. Limitations contractuelles sur les données techniques.</h3>' +
          '<p>Le site utilise la technologie JavaScript (framework Vue.js).<br>Le site Internet ne pourra être tenu responsable de dommages matériels liés à l\'utilisation du site</p>' +
          '<h3>5. Propriété intellectuelle et contrefaçons.</h3>' +
          '<p>Estelle RIPPE est propriétaire des droits de propriété intellectuelle ou détient les droits d\'usage sur tous les éléments accessibles sur le site, notamment les textes, images, graphismes, logo, icônes, sons, logiciels.<br>Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de : Estelle RIPPE. Toute exploitation non autorisée du site ou de l\'un quelconque des éléments qu\'il contient sera considérée comme constitutive d\'une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.</p>',
        showCloseButton: true,
        confirmButtonColor: "#22d49e"
      });
    }
  }
};
</script>

<style>
.footer {
  width: 100%;
  bottom: 0;
}

.block {
  font-weight: 500;
  font-size: larger;
}
</style>