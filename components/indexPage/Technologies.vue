<template>
  <article class="flex flex-col items-center pt-10 mb-40">
      <h2 class="text-6xl font-extralight pb-3 px-1 border-b-4 border-primary-600">Technologien</h2>
      <p class="text-3xl mt-6 font-light">Der Technology Stack. Hier kenne ich mich aus:</p>
      <div class="flex gap-6 mt-20 mx-32">
        <!-- Frameworks -->
        <div class="flex flex-wrap items-center justify-center">
            <div class="framework">
                <img src="../../assets/images/django.svg" alt="Django" class="h-16">
                <p class="text-xl font-bold my-1">Django</p>
            </div>
            <div class="framework">
                <img src="../../assets/images/vue.svg" alt="Django" class="h-16">
                <p class="text-xl font-bold my-1">Vue.js</p>
            </div>
            <div class="framework">
                <img src="../../assets/images/nuxt.svg" alt="Django" class="h-16">
                <p class="text-xl font-bold my-1">Nuxt.js</p>
            </div>
            <div class="framework">
                <img src="../../assets/images/tailwindcss.svg" alt="Django" class="h-16">
                <p class="text-xl font-bold my-1">Tailwind CSS</p>
            </div>
            <div class="framework">
                <img src="../../assets/images/pgsql.svg" alt="Django" class="h-16">
                <p class="text-xl font-bold my-1">pgSQL</p>
            </div>
            <div class="framework">
                <img src="../../assets/images/git.svg" alt="Django" class="h-16">
                <p class="text-xl font-bold my-1">Git</p>
            </div>
            <div class="framework">
                <img src="../../assets/images/jfx.svg" alt="Django" class="h-16">
                <p class="text-xl font-bold my-1">JavaFX</p>
            </div>
        </div>
        <div class="w-1 bg-font-dark">

        </div>
        <div class="flex flex-col justify-center items-center">
            <StatGraph :items="items" />
        </div>
      </div>
  </article>
</template>

<script>
import StatGraph from "../StatGraph.vue";
export default {
    components: {
        StatGraph
    },
    data() {
        return {
            items: [
                {name: 'Python', votes: 8},
                {name: 'JavaScript', votes: 5},
                {name: 'SQL', votes: 4},
                {name: 'Java SE', votes: 10},
            ],
        };
    }
}
</script>

<style scoped>
</style>