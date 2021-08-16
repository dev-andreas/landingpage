<template>
  <article
    class="
      flex flex-col
      items-center
      py-10
      sm:py-20
      my-10
      sm:my-20
      standard-grid-width
    "
    id="projects"
  >
    <IntersectionAnimation
      startingClass="opacity-0 translate-y-10"
      endingClass="opacity-100 translate-x-0"
      sentinalName="projects"
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
        Projekte
      </h2>
      <p
        class="mx-5 text-lg sm:text-xl md:text-2xl lg:text-3xl mt-6 font-bold text-center"
      >
        Projekte die ich abgeschlossen habe, oder an denen ich immer noch
        arbeite:
      </p>
    </IntersectionAnimation>
    <IntersectionAnimation
      startingClass="opacity-0 translate-y-10"
      endingClass="opacity-100 translate-x-0"
      sentinalName="projects_tap"
    >
      <p class="text-xs sm:text-base mx-2 mt-20 mb-10 font-light text-center">
        Berühre die einzelnen Kästchen, um mehr zu erfahren:
      </p>
    </IntersectionAnimation>
    <div class="flex items-center justify-center flex-wrap">
      <ProjectBox
        :logo="require('../../assets/images/external/ultratec_logo.svg')"
        alt="UltraTEC Anlagen"
        title="UltraTEC Anlagen"
        :index="0"
      >
        <p class="text-center">
          Website von einem Unternehmen, welches Ultraschall-Entgratmaschinen
          herstellt.
        </p>
        <a
          href="https://ultratec-anlagen.de"
          class="
            font-bold
            hover:text-primary-600
            transition
            ease-out
            duration-200
            mt-1
          "
          >Zur Website</a
        >
      </ProjectBox>
      <ProjectBox
        :logo="require('../../assets/images/external/cryptoeditor.svg')"
        alt="cryptoeditor"
        title="cryptoeditor"
        :index="1"
      >
        <p class="text-center">
          Ein Programm um Passwörter und Dateien zu verschlüsseln.
        </p>
        <a
          href="https://github.com/dev-andreas/cryptoeditor"
          class="
            font-bold
            hover:text-primary-600
            transition
            ease-out
            duration-200
            mt-1
          "
          >Source code</a
        >
      </ProjectBox>
      <ProjectBox
        :logo="require('../../assets/images/external/pollapp.svg')"
        alt="Pollapp"
        title="Pollapp"
        :index="2"
      >
        <p class="text-center">Eine Web-App für anonyme Umfragen.</p>
        <a
          href="https://github.com/dev-andreas/pollapp"
          class="
            font-bold
            hover:text-primary-600
            transition
            ease-out
            duration-200
            mt-1
          "
          >Source Code</a
        >
      </ProjectBox>
      <ProjectBox
        :logo="require('../../assets/images/external/md_logo.svg')"
        alt="Markdown Blog"
        title="Markdown Blog"
        :index="3"
      >
        <p class="text-center">
          Eine Blog Web-App. Im Moment noch in der Entwicklung.
        </p>
        <a
          href="https://github.com/dev-andreas/pollapp"
          class="
            font-bold
            hover:text-primary-600
            transition
            ease-out
            duration-200
            mt-1
          "
          >Source Code</a
        >
      </ProjectBox>
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
  data() {
    return {};
  },
  computed: {
    projectIndex() {
      return this.$store.state.projectIndex;
    },
  },
};
</script>

<style scoped>
</style>