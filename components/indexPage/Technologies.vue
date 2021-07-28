<template>
  <article class="flex flex-col items-center py-10 sm:py-20 my-10 sm:my-20" id="tech">
    <IntersectionAnimation
      startingClass="opacity-0 translate-y-10"
      endingClass="opacity-100 translate-x-0"
      sentinalName="service-title"
      class="flex flex-col items-center"
    >
      <h2
        class="text-4xl sm:text-6xl font-extralight pb-3 px-1 border-b border-primary-600"
      >
        Technologien
      </h2>
      <p class="mx-5 text-lg sm:text-xl md:text-2xl lg:text-3xl mt-6 font-light">
        Das wird für die Entwicklung eingesetzt. Darin kenne ich mich aus:
      </p>
    </IntersectionAnimation>
    <div class="flex flex-col lg:flex-row lg:gap-10 mt-20 mx-32">
      <!-- Frameworks -->
      <IntersectionAnimation
        startingClass="opacity-0 -translate-x-32"
        endingClass="opacity-100 translate-x-0"
        sentinalName="service-title"
        class="flex flex-col items-center"
      >
        <div class="flex flex-wrap items-center justify-center w-96 sm:w-132 xl:w-144">
          <div class="framework">
            <img
              src="../../assets/images/django.svg"
              alt="Django"
              class="h-8 xs:h-10 sm:h-16"
            />
            <p class="text-xs sm:text-lg xl:text-xl font-bold my-1">Django</p>
          </div>
          <div class="framework">
            <img src="../../assets/images/vue.svg" alt="Vue.js" class="h-8 xs:h-10 sm:h-16" />
            <p class="text-xs sm:text-lg xl:text-xl font-bold my-1">Vue.js</p>
          </div>
          <div class="framework">
            <img src="../../assets/images/nuxt.svg" alt="Nuxt.js" class="h-8 xs:h-10 sm:h-16" />
            <p class="text-xs sm:text-lg xl:text-xl font-bold my-1">Nuxt.js</p>
          </div>
          <div class="framework">
            <img src="../../assets/images/tailwindcss.svg" alt="Tailwind CSS" class="h-8 xs:h-10 sm:h-16" />
            <p class="text-xs sm:text-lg xl:text-xl font-bold my-1">Tailwind</p>
          </div>
          <div class="framework">
            <img src="../../assets/images/pgsql.svg" alt="PostgreSQL" class="h-8 xs:h-10 sm:h-16" />
            <p class="text-xs sm:text-lg xl:text-xl font-bold my-1">pgSQL</p>
          </div>
          <div class="framework">
            <img src="../../assets/images/git.svg" alt="Git" class="h-8 xs:h-10 sm:h-16" />
            <p class="text-xs sm:text-lg xl:text-xl font-bold my-1">Git</p>
          </div>
          <div class="framework">
            <img src="../../assets/images/jfx.svg" alt="JavaFX" class="h-8 xs:h-10 sm:h-16" />
            <p class="text-xs sm:text-lg xl:text-xl font-bold my-1">JavaFX</p>
          </div>
        </div>
      </IntersectionAnimation>

      <IntersectionAnimation
        startingClass="opacity-0 translate-x-32"
        endingClass="opacity-100 translate-x-0"
        sentinalName="service-title"
        class="flex flex-col items-center sm:mt-10 lg:mt-0 transform scale-60 xs:scale-75 sm:scale-100 lg:scale-75 xl:scale-100 w-132 h-72 lg:w-108 xl:w-132" 
      >
          <StatGraph :items="items"/>
      </IntersectionAnimation>
    </div>
  </article>
</template>

<script>
import StatGraph from "../StatGraph.vue";
import IntersectionAnimation from "../IntersectionAnimation.vue";
export default {
  components: {
    StatGraph,
    IntersectionAnimation,
  },
  data() {
    return {
      items: [
        { name: "Python", votes: 80 },
        { name: "JavaScript", votes: 50 },
        { name: "SQL", votes: 40 },
        { name: "Java SE", votes: 90 },
      ],
    };
  },
};
</script>

<style scoped>

</style>