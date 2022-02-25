<template>
  <main class="main-container">
    <AboutSection />
    <TechnoCursus />
    <ProjectsList />
    <ContactForm />
  </main>
</template>

<script>
// @ is an alias to /src
import AboutSection from '@/components/AboutSection.vue';
import ProjectsList from '@/components/ProjectsList.vue';
import ContactForm from '@/components/ContactForm.vue';
import TechnoCursus from '@/components/TechnoCursus.vue';

export default {
  name: 'HomeView',
  components: {
    AboutSection,
    TechnoCursus,
    ProjectsList,
    ContactForm
  },
  methods: {
    sendEmail() {},
  }
}
</script>

<style scoped>
.main-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
