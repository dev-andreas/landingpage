<template>
  <article class="flex flex-col items-center pt-10 px-10 mb-40">
    <h2
      class="text-6xl font-extralight pb-3 px-1 border-b-4 border-primary-600"
    >
      Projekte
    </h2>
    <p class="text-3xl mt-6 font-light">
      Projekte die ich abgeschlossen habe, oder an denen ich immer noch arbeite:
    </p>
    <p class="mt-10 mb-5 font-bold">
      Berühre die einzelnen Kästen, um mehr zu erfahren:
    </p>
    <div class="flex gap-20">
      <ProjectBox
        img=""
        title="Irgendwas"
        text="Irgendein schäbiges Project, welches ich mir aus dem A!$*@ gezogen habe."
      />
       <ProjectBox
        img=""
        title="Irgendwas"
        text="Irgendein schäbiges Project, welches ich mir aus dem A!$*@ gezogen habe."
      />
       <ProjectBox
        img=""
        title="Irgendwas"
        text="Irgendein schäbiges Project, welches ich mir aus dem A!$*@ gezogen habe."
      />
    </div>
  </article>
</template>

<script>
import ProjectBox from "../ProjectBox.vue";
export default {
  components: {
    ProjectBox,
  },
};
</script>

<style scoped>
</style>