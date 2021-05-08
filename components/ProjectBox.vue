<template>
  <div
    @mouseover="hover = true"
    @mouseleave="hover = false"
    class="bgg w-80 h-60 p-5 bg-repeat bg-clip-content border border-primary-600 flex flex-col justify-center items-center"
  >
    <transition name="slide" mode="out-in">
      <div v-if="!hover" key="nonhover" class="flex flex-col justify-center items-center">
        <img :src="logo" :alt="alt" class="w-40" />
        <p class="text-2xl font-bold">{{ title }}</p>
      </div>
      <div v-else key="hover" class="flex flex-col justify-center items-center">
        <p class="text-lg text-center">{{ text }}</p>
        <a
          :href="link.url"
          class="mt-2 font-bold hover:text-primary-500 transition ease-out duration-200"
          >{{ link.name }}</a
        >
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    logo: {
      type: String,
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
    link: {
      type: Object,
      default: "",
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
  background-image: url("~assets/images/diagonal_line.svg");
  background-size: 1rem;
}

</style>