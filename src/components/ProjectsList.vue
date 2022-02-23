<template>
  <div class="projects">
    <h2>&lt;	Mes Projets /&gt;</h2>

    <div class="projects__list">
      <div class="project">
        <img src="@/assets/ozartt.png">
        <h3>Oz'Art</h3>
      </div>
      <div class="project">
        <img src="@/assets/lb.png">
        <h3>Leaf &amp; Bloom</h3>
      </div>
      <div class="project">
        <img src="@/assets/prime.png">
        <h3>Prime Copy (stagiaire)</h3>
      </div>
      <div class="project">
        <img src="@/assets/1.png">
        <h3>Quick Services (en cours)</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectsList'
}
</script>

<style scoped>

h2 {
  text-align: left;
}

.projects__list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
.project {
  margin: 15px;
}

.project img {
  max-width: 100%;
  width: 500px;
  height: 300px;
  object-fit: cover;
  }

</style>