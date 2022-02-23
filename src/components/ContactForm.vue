<template>
  <div class="contact">
    <h2>&lt;	Me Contacter /&gt;</h2>
    <form action="" method="" class="form">
    <div class="form-example">
        <label for="name">Nom </label>
        <input type="text" name="name" id="name" required>
    </div>
    <div class="form-example">
        <label for="email">Email </label>
        <input type="email" name="email" id="email" required>
    </div>
        <div class="form-message">
        <label for="email">Message </label>
        <input type="message" name="message" id="message" required>
    </div>
    <div class="form-submit">
        <input type="submit" value="Envoyer">
    </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ContactForm'
}
</script>

<style scoped>
h2 {
  text-align: left;
}

.form {
  display: flex;
    flex-direction: column;
}

.form-example {
  padding: 1em;
}

#name {
  width: 400px;
}

#email {
  width: 400px;
}

#message {
  width: 800px;
  height: 250px;
}

.form-submit input {
    padding-inline-start: 1em;
    padding-inline-end: 1em;
    padding-top: .5em;
    padding-bottom: .5em;
    margin: 1em;
    border: none;
    outline: none;
    background: #2f2f2f;
    color: #fff;
    font-size: 22px;
    border-radius: 40px;
    text-align: center;
    box-shadow: 0 6px 20px -5px rgba(0,0,0,0.4);
    position: relative;
    overflow: hidden;
    cursor: pointer;
}
</style>