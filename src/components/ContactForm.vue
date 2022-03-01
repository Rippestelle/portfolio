<template>
  <div class="contact" id="contact">
    <h2>&lt; Me Contacter /&gt;</h2>
    <form class="form" ref="form" @submit.prevent="sendEmail" id="form">
      <label>Nom</label>
      <input
        type="text"
        v-model="name"
        name="name"
        placeholder="Votre Nom"
        class="form-input"
        id="name"
      />
      <label>Email</label>
      <input
        type="email"
        v-model="email"
        name="email"
        placeholder="Votre Email"
        class="form-input"
        id="email"
      />
      <label>Message</label>
      <textarea
        name="message"
        v-model="message"
        cols="30"
        rows="10"
        placeholder="Votre Message"
        id="message"
      >
      </textarea>
      <div class="form-submit">
        <input
          type="submit"
          value="Envoyer"
          class="submit"
          v-on:click="showAlert"
        />
      </div>
    </form>
  </div>
</template>

<script>
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

export default {
  name: "ContactForm",
  methods: {
    showAlert() {
      let name = document.getElementById("name");
      let email = document.getElementById("email");
      let message = document.getElementById("message");

      if (name.value == "" || email.value == "" || message.value == "") {
        this.error();
      } else if (name.value != "" || email.value != "" || message.value != "") {
        this.sendEmail(name.value, email.value, message.value);
        this.success();
       // Reset form field
        document.getElementById("form").reset();
      }
    },
    sendEmail(name, email, message) {
      emailjs.sendForm(
        "service_qrnj3jj",
        "template_rig8f3m",
        this.$refs.form,
        "user_0R2dYz1spFvrq7Cspxv9V", {
          from_name: name,
          email: email,
          message: message
        }
      );
    },
    success() {
      Swal.fire({
        title: "Votre email a bien été envoyé !",
        icon: "success",
        confirmButtonText: "Ok",
        confirmButtonColor: "#22d49e",
      });
    },
    error() {
      Swal.fire({
        title: "Merci de remplir tous les champs: Nom, Email et Message",
        icon: "error",
        confirmButtonText: "Ok",
        confirmButtonColor: "#22d49e",
      });
    }
  },
};
</script>

<style scoped>
.contact {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.contact h2 {
  align-self: flex-start;
}

.form-input {
  max-width: 400px;
  width: 100%;
  align-self: center;
  border-radius: 20px;
  height: 2em;
  border: #22d49e 1px solid;
  padding: 1em;
}

.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
  border: #22d49e 1px solid;
  border-radius: 15px;
  padding-top: 1.5em;
  width: 80%;
  padding-left: 1.5em;
  padding-right: 1.5em;
}

.form textarea {
  max-width: 900px;
  width: 100%;
  border-radius: 20px;
  padding: 0.7em;
  border: #22d49e 1px solid;
}

.form-submit input {
  padding-inline-start: 1em;
  padding-inline-end: 1em;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  margin: 1em;
  outline: none;
  background: var(--background-color-primary);
  color: #22d49e;
  font-size: 22px;
  border: #22d49e 1px solid;
  border-radius: 40px;
  text-align: center;
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

.form-submit input:hover {
  padding-inline-start: 1em;
  padding-inline-end: 1em;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  margin: 1em;
  outline: none;
  background: #22d49e;
  color: var(--background-color-primary);
  font-size: 22px;
  border: var(--background-color-primary) 1px solid;
  border-radius: 40px;
  text-align: center;
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

.swal2-styled.swal2-confirm {
  color: #22d49e;
  background-color: #22d49e;
}
</style>