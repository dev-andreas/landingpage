<template>
  <article
    class="flex flex-col items-center py-10 sm:py-20 my-10 sm:my-20"
    id="contact"
  >
    <IntersectionAnimation
      startingClass="opacity-0 translate-y-10"
      endingClass="opacity-100 translate-x-0"
      sentinalName="contact"
      class="flex flex-col items-center"
    >
      <h2
        class="text-4xl sm:text-6xl font-extralight pb-3 px-1 border-b-4 border-primary-600"
      >
         Kontakt
      </h2>
      <p
        class="mx-5 text-lg sm:text-xl md:text-2xl lg:text-3xl mt-6 font-light"
      >
        Jetzt sind Sie an der Reihe, kontaktieren Sie mich unverbindlich:
      </p>
    </IntersectionAnimation>
    <div class="flex flex-col lg:flex-row justify-center items-center mt-20">
      <IntersectionAnimation
        startingClass="opacity-0 -translate-x-32"
        endingClass="opacity-100 translate-x-0"
        sentinalName="contact"
        class="flex flex-col items-center"
      >
        <div
          class="w-40 lg:w-108 h-40 lg:h-108 flex justify-center items-center"
        >
          <img
            class="w-32 lg:w-64 h-32 lg:h-64 transform hover:scale-105 transition ease-out duration-300"
            src="../../assets/images/mail.svg"
            alt="mail"
          />
        </div>
      </IntersectionAnimation>
      <IntersectionAnimation
        startingClass="opacity-0 translate-y-10"
        endingClass="opacity-100 translate-x-0"
        sentinalName="contact"
        class="flex flex-col items-center mt-10 lg:mt-0"
      >
        <div class="flex flex-col items-center sm:items-stretch">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
            <p class="text-primary-600">{{ response }}</p>
            <p v-if="error" class="text-red-600">{{ Object.values(error)[0][0] }}</p>
          </div>
        </div>
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
  methods: {
    onSubmit() {
      this.loading = true;
      this.response = "";
      this.error = "";

      const data = new FormData();
      data.append("first_name", this.firstName);
      data.append("last_name", this.lastName);
      data.append("email", this.email);
      data.append("message", this.message);

      axios({
        method: "POST",
        url: "http://127.0.0.1:8000/contact/",
        headers: {
          "X-CSRFToken": "csrftoken",
        },
        data: data,
        xsrfCookieName: "csrftoken",
        xsrfHeaderName: "X-CSRFToken",
      })
        .then((res) => {
          this.response = "Nachricht gesendet. Ich melde mich.";
        })
        .catch((err) => {
          this.error = err.response.data;
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>

<style>
</style>