<template>
  <article class="flex flex-col items-center py-20 my-20" id="service">
    <IntersectionAnimation startingClass="opacity-0 translate-y-10" endingClass="opacity-100 translate-x-0"
      sentinalName="service-title">
      <h2 class="text-6xl font-extralight pb-3 px-1 border-b-4 border-primary-600">
        Dienstleistungen
      </h2>
    </IntersectionAnimation>

    <IntersectionAnimation startingClass="opacity-0 -translate-x-32" endingClass="opacity-100 translate-x-0"
      sentinalName="service-fullstack">
      <div class="flex flex-col lg:flex-row gap-20 items-center justify-center mt-24">
        <img src="../../assets/images/webdev.svg" alt="Webentwicklung" class="w-72 lg:w-80" />

        <div class="w-108 sm:w-120 lg:w-132">
          <p class="text-2xl lg:text-3xl font-bold">Fullstack Webentwicklung.</p>
          <p class="text-xl lg:text-2xl mt-5 font-light">
            Ich entwickle Webseiten für Unternehmen und Personen. Benötigen Sie
            eine Landing Page oder eine spezielle Web-App? Dann sind Sie hier
            genau richtig.
          </p>
        </div>
      </div>
    </IntersectionAnimation>

    <IntersectionAnimation startingClass="opacity-0 translate-x-32" endingClass="opacity-100 translate-x-0"
      sentinalName="service-frontend">
      <div class="flex flex-col-reverse md:flex-row gap-10 items-center justify-center mt-32">
        <div class="w-108 sm:w-120 lg:w-168">
          <p class="text-xl lg:text-2xl font-bold">UI/UX</p>
          <p class="text-xl lg:text-2xl mt-5 font-light">
            Die Benutzeroberfläche ist die einzige Sache, die der Benutzer sieht.
            Daher ist eine schöne, einfach bedienbare Oberfläche und eine
            übersichtliche Navigation extrem wichtig für die User Experience. Das
            Design soll einfach und schlicht gehalten werden. Dadurch ist der
            Inhalt leichter zu verdauen. Wenig komplexe Grafiken und keine Pop-Up
            Fenster, diese lassen die Webseite länger laden und irritieren die
            Benutzer.
          </p>
        </div>
        <img src="../../assets/images/frontend.svg" alt="Frontend" class="w-36 lg:w-40" />
      </div>
    </IntersectionAnimation>

    <IntersectionAnimation startingClass="opacity-0 -translate-x-32" endingClass="opacity-100 translate-x-0"
      sentinalName="service-fullstack">
      <div class="flex flex-col md:flex-row gap-10 items-center justify-center mt-32">
        <img src="../../assets/images/backend.svg" alt="Backend" class="w-36 lg:w-40" />
        <div class="w-108 sm:w-120 lg:w-168">
          <p class="text-xl lg:text-2xl font-bold">Backend</p>
          <p class="text-xl lg:text-2xl mt-5 font-light">
            Webanwendungen haben es auch nötig, Userdaten in Datenbanken zu
            speichern und zu verwalten. Über all dies kümmere ich mich, damit Sie
            sich nicht den Kopf zerbrechen müssen.
          </p>
        </div>
      </div>
    </IntersectionAnimation>
  </article>
</template>

<script>
  import IntersectionAnimation from "../IntersectionAnimation.vue"
  export default {
    components: {
      IntersectionAnimation,
    },
  };
</script>

<style>
</style>