<template>
  <article class="flex flex-col items-center py-20 my-20" id="projects">
    <IntersectionAnimation
      startingClass="opacity-0 translate-y-10"
      endingClass="opacity-100 translate-x-0"
      sentinalName="projects"
      class="flex flex-col items-center"
    >
      <h2
        class="text-6xl font-extralight pb-3 px-1 border-b-4 border-primary-600"
      >
        Projekte
      </h2>
      <p class="text-xl md:text-2xl lg:text-3xl mt-6 font-light">
        Projekte die ich abgeschlossen habe, oder an denen ich immer noch
        arbeite:
      </p>
    </IntersectionAnimation>
    <IntersectionAnimation
      startingClass="opacity-0 translate-y-10"
      endingClass="opacity-100 translate-x-0"
      sentinalName="projects_tap"
    >
      <p class="mt-20 mb-10 font-bold">
        Berühre die einzelnen Kästen, um mehr zu erfahren:
      </p>
    </IntersectionAnimation>
    <div class="flex items-center justify-center flex-wrap gap-20">
      <ProjectBox
        :logo="require('../../assets/images/external/cryptoeditor.svg')"
        title="cryptoeditor"
      >
        <p class="text-center">
          Ein Programm um Passwörter und Dateien zu verschlüsseln.
        </p>
        <a
          href="https://github.com/dev-andreas/cryptoeditor"
          class="font-bold hover:text-primary-600 transition ease-out duration-200 mt-1"
          >Source Code</a
        >
      </ProjectBox>
      <ProjectBox
        :logo="require('../../assets/images/external/pollapp.svg')"
        alt="Pollapp"
        title="Pollapp"
      >
        <p class="text-center">Eine Web-App um anonyme Umfragen zu starten.</p>
        <a
          href="https://github.com/dev-andreas/pollapp"
          class="font-bold hover:text-primary-600 transition ease-out duration-200 mt-1"
          >Source Code</a
        >
      </ProjectBox>
      <ProjectBox
        title="Irgendwas"
        text="Irgendein schäbiges Project, welches ich mir aus dem A!$*@ gezogen habe."
        :link="{ url: 'some url', name: 'Mehr erfahren' }"
      />
    </div>
  </article>
</template>

<script>
import ProjectBox from "../ProjectBox.vue";
import IntersectionAnimation from "../../components/IntersectionAnimation.vue";
export default {
  components: {
    ProjectBox,
    IntersectionAnimation,
  },
};
</script>

<style scoped>
</style>