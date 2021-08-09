<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <h1 class="text-9xl text-primary-600">{{ error.statusCode }}</h1>
    <h2
      v-if="error.statusCode == 404"
      class="text-2xl sm:text-4xl text-primary mt-7 text-center"
    >
      Seite konnte nicht gefunden werden!
    </h2>
    <h2 v-else class="text-2xl sm:text-4xl text-primary mt-7 text-center">
      Seite konnte nicht geladen werden!
    </h2>
    <img class="w-80 sm:w-108 transform hover:-translate-y-3 ease-out duration-500" src="../assets/images/error.png" alt="Strauß mit Kopf im Sand">
    <NuxtLink to="/" class="btn-primary bg-transparent mt-5">Zurück</NuxtLink>
  </div>
</template>

<script>
export default {
  props: ["error"],
  layout: "error",
};
</script>

<style>
</style>