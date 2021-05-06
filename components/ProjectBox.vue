<template>
  <div
    @mouseover="hover = true"
    @mouseleave="hover = false"
    class="bgg w-80 h-60 p-5 bg-repeat bg-clip-content border border-primary-600 flex flex-col justify-center items-center"
  >
    <div v-if="!hover" class="flex flex-col justify-center items-center">
      <img :src="logo" :alt="alt" />
      <p class="text-2xl font-bold">{{ title }}</p>
    </div>
    <p v-else class="text-lg text-center">{{ text }}</p>
  </div>
</template>

<script>
export default {
  props: {
    logo: {
      type: String,
      default: "",
    },
    alt: {
      type: String,
      default: "project",
    },
    title: {
      type: String,
      default: "title",
    },
    text: {
      type: String,
      default: "text",
    },
  },
  data() {
    return {
      hover: false,
    };
  },
};
</script>

<style scoped>
.bgg {
    background-image: url('~assets/images/diagonal_line.svg');
    background-size: 1rem;
}
</style>