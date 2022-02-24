<template>
  <div class="contact">
    <h2>&lt; Me Contacter /&gt;</h2>
    <form action="" method="" class="form">
      <div class="form-example">
        <label for="name">Nom </label>
        <input type="text" name="name" id="name" required />
      </div>
      <div class="form-example">
        <label for="email">Email </label>
        <input type="email" name="email" id="email" required />
      </div>
      <div class="form-message">
        <label for="email">Message </label>
        <input type="message" name="message" id="message" required />
      </div>
      <div class="form-submit">
        <input type="submit" value="Envoyer" />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "ContactForm",
};
</script>

<style scoped>
.contact {
  width: 100%;
}

.contact h2 {
  text-align: left;
}

.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.form-example {
  padding: 1em;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 100%;
}

#name {
  width: 100%;
}

#email {
  width: 100%;
}

.form-message {
  max-width: 800px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 100%;
}

#message {
  width: 100%;
  min-height: 150px;
  outline: none;
  resize: none;
}

.form-submit input {
  padding-inline-start: 1em;
  padding-inline-end: 1em;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  margin: 1em;
  outline: none;
  background: #121212;
  color: #22d49e;
  font-size: 22px;
  border: #22d49e 1px solid;
  border-radius: 40px;
  text-align: center;
  box-shadow: 0 6px 20px -5px rgba(0, 0, 0, 0.4);
  position: relative;
  overflow: hidden;
  cursor: pointer;
}
</style>