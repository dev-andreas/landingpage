<template>
  <article class="flex flex-col items-center py-20 my-20" id="contact">
    <IntersectionAnimation
      startingClass="opacity-0 translate-y-10"
      endingClass="opacity-100 translate-x-0"
      sentinalName="contact"
      class="flex flex-col items-center"
    >
      <h2
        class="text-6xl font-extralight pb-3 px-1 border-b-4 border-primary-600"
      >
        Kontakt
      </h2>
      <p class="text-xl md:text-2xl lg:text-3xl mt-6 font-light">
        Jetzt sind Sie an der Reihe, kontaktieren Sie mich unverbindlich:
      </p>
    </IntersectionAnimation>
    <div
      class="flex flex-col lg:flex-row justify-center items-center gap-10 mt-20"
    >
      <IntersectionAnimation
        startingClass="opacity-0 -translate-x-32"
        endingClass="opacity-100 translate-x-0"
        sentinalName="contact"
        class="flex flex-col items-center"
      >
        <div class="w-64 lg:w-108 h-64 lg:h-108 flex justify-center items-center">
          <img class="w-32 lg:w-64 h-32 lg:h-64 transform hover:scale-105 transition ease-out duration-300" src="../../assets/images/mail.svg" alt="mail" />
        </div>
      </IntersectionAnimation>
      <IntersectionAnimation
        startingClass="opacity-0 translate-y-10"
        endingClass="opacity-100 translate-x-0"
        sentinalName="contact"
        class="flex flex-col items-center"
      >
        <form method="POST" class="flex flex-col gap-5">
          <div class="grid grid-cols-2 gap-2">
            <div>
              <input type="text" name="" id="first_name" class="inpt" />
              <p class="text-xs">Vorname</p>
            </div>
            <div>
              <input type="text" name="" id="last_name" class="inpt" />
              <p class="text-xs">Nachname</p>
            </div>
            <div class="col-span-2">
              <input type="email" name="" id="email" class="inpt" />
              <p class="text-xs">Email</p>
            </div>
          </div>
          <div class="flex flex-col">
            <p class="text-sm">Nachricht</p>
            <textarea
              name=""
              id="message"
              cols="30"
              rows="8"
              class="tbox p-2"
            ></textarea>
          </div>
          <div class="flex gap-10">
            <input
              class="btn-primary bg-transparent"
              type="button"
              value="Senden"
            />
            <div>
              <p class="font-bold text-xs">+49 1575 3223015</p>
              <p class="font-bold text-xs">andreas.gerasimow12@gmail.com</p>
            </div>
          </div>
        </form>
      </IntersectionAnimation>
    </div>
  </article>
</template>

<script>
import IntersectionAnimation from "../../components/IntersectionAnimation.vue";
export default {
  IntersectionAnimation,
};
</script>

<style>
</style>