<template>
  <article class="flex flex-col items-center py-20 my-10 sm:my-20" id="service">
    <IntersectionAnimation
      startingClass="opacity-0 translate-y-10"
      endingClass="opacity-100 translate-x-0"
      sentinalName="service-title"
    >
      <h2
        class="text-4xl sm:text-6xl font-extralight pb-3 px-1 border-b-4 border-primary-600"
      >
        Dienstleistungen
      </h2>
    </IntersectionAnimation>

    <IntersectionAnimation
      startingClass="opacity-0 -translate-x-32"
      endingClass="opacity-100 translate-x-0"
      sentinalName="service-fullstack"
    >
      <div class="flex flex-col lg:flex-row items-center justify-center mt-24">
        <img
          src="../../assets/images/webdev.svg"
          alt="Webentwicklung"
          class="w-52 sm:w-72 lg:w-80 mb-10 lg:mb-0 lg:mr-20"
        />

        <div class="w-72 xs:w-80 sm:w-120 lg:w-132">
          <p class="text-2xl lg:text-3xl font-bold">
            Fullstack Webentwicklung.
          </p>
          <p class="text-md sm:text-xl lg:text-2xl mt-5 font-light">
            Ich entwickle Webseiten für Unternehmen und Personen. Benötigen Sie
            eine professionelle Landingpage, Homepage oder eine spezielle
            Web-App? Dann sind Sie hier genau richtig.
          </p>
        </div>
      </div>
    </IntersectionAnimation>

    <IntersectionAnimation
      startingClass="opacity-0 translate-x-32"
      endingClass="opacity-100 translate-x-0"
      sentinalName="service-frontend"
    >
      <div
        class="flex flex-col-reverse md:flex-row items-center justify-center mt-32"
      >
        <div class="w-72 xs:w-80 sm:w-120 lg:w-168">
          <p class="text-xl lg:text-2xl font-bold">Frontend / Design</p>
          <p class="text-md sm:text-xl lg:text-2xl mt-5 font-light">
            Die Benutzeroberfläche ist die einzige Sache, die der Benutzer
            sieht. Eine einfach bedienbare Oberfläche und eine übersichtliche
            Navigation ist wichtig für die User Experience. Auch die Schönheit
            spielt eine wichtige Rolle: Das Design sollte einfach und schlicht
            gehalten werden. Dadurch ist der Inhalt leichter zu verdauen. Keine
            unnötige große Anzahl von komplexen Grafiken und keine
            Pop-up-Fenster, diese lassen die Webseite länger laden und
            irritieren die Benutzer.
          </p>
        </div>
        <img
          src="../../assets/images/frontend.svg"
          alt="Webdesign"
          class="w-24 sm:w-36 lg:w-40 mb-10 md:mb-0 md:ml-16"
        />
      </div>
    </IntersectionAnimation>

    <IntersectionAnimation
      startingClass="opacity-0 -translate-x-32"
      endingClass="opacity-100 translate-x-0"
      sentinalName="service-fullstack"
    >
      <div class="flex flex-col md:flex-row items-center justify-center mt-32">
        <img
          src="../../assets/images/backend.svg"
          alt="Datenbank"
          class="w-24 sm:w-36 lg:w-40 md:mr-16 mb-10 md:mb-0"
        />
        <div class="w-72 xs:w-80 sm:w-120 lg:w-168">
          <p class="text-xl lg:text-2xl font-bold">Backend</p>
          <p class="text-md sm:text-xl lg:text-2xl mt-5 font-light">
            Manche Webanwendungen haben es nötig, Informationen und
            Userdaten in Datenbanken zu speichern und zu verwalten. Über all
            dies kümmere ich mich, damit Sie sich nicht den Kopf zerbrechen
            müssen. Auch das Hosting ihrer Website können Sie mir überlassen,
            wenn Sie möchten.
          </p>
        </div>
      </div>
    </IntersectionAnimation>
  </article>
</template>

<script>
import IntersectionAnimation from "../IntersectionAnimation.vue";
export default {
  components: {
    IntersectionAnimation,
  },
};
</script>

<style>
</style>