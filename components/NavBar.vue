<template>
  <nav class="h-16 flex bg-backg-lighttrans justify-between items-center px-4 sticky top-0 tinted z-50">
    <div class="flex items-center">
      <img src="../assets/images/head_blue.svg" alt="Logo" class="h-10" />
      <ul class="flex">
        <li v-for="link in links" :key="link.name" class="ml-4">
          <p class="tracking-wider">{{ link.name }}</p>
        </li>
      </ul>
    </div>
    <p class="btn-primary">Kontakt</p>
  </nav>
</template>

<script>
export default {
  name: "Joke",
  props: {
    links: Array,
  },
};
</script>

<style>

</style>