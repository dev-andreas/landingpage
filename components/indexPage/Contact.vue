<template>
  <article
    class="flex flex-col items-center py-10 sm:py-20 my-10 sm:my-20 standard-grid-width"
    id="contact"
  >
    <IntersectionAnimation
      startingClass="opacity-0 translate-y-10"
      endingClass="opacity-100 translate-x-0"
      sentinalName="contact"
      class="flex flex-col items-center"
    >
      <h2
        class="
          text-4xl
          sm:text-6xl
          font-extralight
          pb-3
          px-1
          border-b border-primary-600
        "
      >
        Kontakt
      </h2>
      <p
        class="mx-5 text-lg sm:text-xl md:text-2xl lg:text-3xl mt-6 font-bold text-center"
      >
        Jetzt sind Sie an der Reihe, kontaktieren Sie mich unverbindlich:
      </p>
    </IntersectionAnimation>
    <div class="grid lg:grid-cols-3 place-items-center gap-20 mt-20">
      <IntersectionAnimation
        startingClass="opacity-0 -translate-x-32"
        endingClass="opacity-100 translate-x-0"
        sentinalName="contact"
        class="flex flex-col items-center"
      >
        <div
          class="flex justify-center items-center"
        >
          <img
            class="
              transform
              hover:scale-105
              transition
              ease-out
              duration-300
            "
            src="../../assets/images/mail.svg"
            alt="Mail"
          />
        </div>
      </IntersectionAnimation>
      <IntersectionAnimation
        startingClass="opacity-0 translate-y-10"
        endingClass="opacity-100 translate-x-0"
        sentinalName="contact"
        class="mt-10 lg:mt-0 lg:col-span-2"
      >
        <form class="" method="POST">
          <div class="flex flex-col">
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 place-items-center gap-5">
              <label class="flex flex-col text-xs">
                <input
                  type="text"
                  name=""
                  id="first_name"
                  class="inpt"
                  v-model="firstName"
                />
                Vorname
              </label>
              <label class="flex flex-col text-xs">
                <input
                  type="text"
                  name=""
                  id="last_name"
                  class="inpt"
                  v-model="lastName"
                />
                Nachname
              </label>
              <label class="flex flex-col text-xs">
                <input
                  type="email"
                  name=""
                  id="email"
                  class="inpt"
                  v-model="email"
                />
                E-Mail
              </label>
            </div>
            <label class="flex flex-col mt-5 text-sm">
              Nachricht
              <textarea
                name=""
                id="message"
                cols="30"
                rows="8"
                class="tbox p-2"
                v-model="message"
              ></textarea>
            </label>
          </div>
          <p class="text-sm text-center sm:text-left mt-5">
            Dieses Kontaktformular ist durch reCAPTCHA geschützt und es gelten die
            <a
              class="text-primary-600"
              href="https://policies.google.com/privacy"
              >Datenschutzbestimmungen</a
            >
            und
            <a class="text-primary-600" href="https://policies.google.com/terms"
              >Nutzungsbedingungen</a
            >
            von Google.
          </p>
          <div class="flex mt-5">
            <input
              class="btn-primary bg-transparent"
              type="button"
              value="Senden"
              @click="onSubmit"
            />
            <LoadingShape v-if="loading" />
            <div class="items-center ml-5">
              <p class="font-bold text-xs">+49 1575 3223015</p>
              <p class="font-bold text-xs">andreas.gerasimow12@gmail.com</p>
            </div>
          </div>
          <div class="mt-2">
            <p class="text-primary-600 text-sm sm:text-base mx-3 sm:mx-0">
              {{ response }}
            </p>
            <p
              v-if="error"
              class="text-red-600 text-sm sm:text-base mx-3 sm:mx-0"
            >
              {{ error }}
            </p>
          </div>
        </form>
      </IntersectionAnimation>
    </div>
  </article>
</template>

<script>
import IntersectionAnimation from "../../components/IntersectionAnimation.vue";
import LoadingShape from "../../components/LoadingShape.vue";
import axios from "axios";
export default {
  components: {
    IntersectionAnimation,
    LoadingShape,
  },
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      message: "",

      loading: false,
      response: "",
      error: "",
    };
  },

  async mounted() {
    try {
      await this.$recaptcha.init();
    } catch (e) {
      console.error(e);
    }
  },

  beforeDestroy() {
    this.$recaptcha.destroy();
  },

  methods: {
    async onSubmit() {
      this.loading = true;
      this.response = "";
      this.error = "";

      const token = await this.$recaptcha.execute("login");

      const data = new FormData();
      data.append("first_name", this.firstName);
      data.append("last_name", this.lastName);
      data.append("email", this.email);
      data.append("message", this.message);
      data.append("token", token);

      await axios({
        method: "POST",
        url: "/api/contact/",
        data: data,
      })
        .then((res) => {
          this.response = "Nachricht gesendet. Ich melde mich.";
        })
        .catch((err) => {
          console.error(err.response);
          if (err.response.status >= 500) {
            this.error =
              "Es gibt Probleme mit dem Server. Bitte versuchen Sie mich per Mail zu kontaktieren.";
          } else {
            this.error = Object.values(err.response.data)[0][0];
          }
        })
        .finally(() => {
          this.firstName = "";
          this.lastName = "";
          this.email = "";
          this.message = "";
          this.loading = false;
        });
    },
  },
};
</script>

<style>
</style>
