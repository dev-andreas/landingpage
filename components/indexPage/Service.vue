<template>
  <article class="flex flex-col items-center pt-10 px-10 mb-40">
    <h2 class="text-6xl font-extralight pb-3 px-1 border-b-4 border-primary-600">
      Dienstleistungen
    </h2>
    <div class="flex gap-20 items-center justify-center mt-24">
      <img src="../../assets/images/webdev.svg" alt="Webentwicklung" class="w-80">
      <div class="w-132">
        <p class="text-3xl font-bold">Fullstack Webentwicklung.</p>
        <p class="text-2xl mt-5 font-light">
          Ich entwickle Webseiten für Unternehmen und Personen. Benötigen Sie eine
          Landing Page oder eine spezielle Web-App? Dann sind Sie hier genau
          richtig.
        </p>
      </div>
    </div>

    <div class="flex gap-10 items-center justify-center mt-32">
      <div class="w-144">
        <p class="text-2xl font-bold">UI/UX</p>
        <p class="text-2xl mt-5 font-light">
          Die Benutzeroberfläche ist die einzige Sache, die der Benutzer sieht. Daher
          ist eine schöne, einfach bedienbare und gut strukturierte Oberfläche
          extrem wichtig für die User Experience.
        </p>
      </div>
      <img src="../../assets/images/frontend.svg" alt="Frontend" class="w-40">
    </div>
    <div v-if="false" class="w-192 mt-20">
      <p class="text-3xl font-bold">Grundsatz: Keep it simple!</p>
      <p class="text-2xl mt-5 font-light">
        Meiner Meinung nach sollte das Design einfach und schlicht gehalten werden. Dadurch ist der Inhalt leichter zu
        verdauen. Keine unnötige große Anzahl von komplexen Grafiken und keine Pop-Up Fenster, diese lassen die Webseite
        länger laden und irritieren die Benutzer.
      </p>
    </div>

    <div class="flex gap-10 items-center justify-center mt-32">
      <img src="../../assets/images/backend.svg" alt="Backend" class="w-40">
      <div class="w-144">
        <p class="text-2xl font-bold">Backend</p>
        <p class="text-2xl mt-5 font-light">
          Webanwendungen haben es auch nötig, Userdaten in Datenbanken zu speichern und zu verwalten. Über all dies
          kümmere ich mich, damit Sie sich nicht den Kopf zerbrechen müssen.
        </p>
      </div>
    </div>
  </article>
</template>

<script>
  export default {};
</script>

<style>
</style>