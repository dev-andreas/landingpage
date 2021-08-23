<template>
  <IntersectionAnimation
    startingClass="opacity-0 translate-y-10"
    endingClass="opacity-100 translate-x-0"
    :sentinalName="title"
    class="mt-5 mx-5 sm:mt-10 sm:mx-10"
  >
    <div
      class="bgg w-80 h-60 p-5 bg-repeat bg-clip-content flex flex-col justify-center items-center border border-primary-600 shadow-md rounded-sm"
      @mouseover="onHover()"
      @mouseleave="onLeave()"
    >
      <transition name="slide-top" mode="out-in">
        <div
          v-if="!showSlot"
          key="nonhover"
          class="flex flex-col justify-center items-center"
        >
          <img :src="logo" :alt="alt" class="h-32" />
          <p class="text-2xl font-bold mt-2">{{ title }}</p>
        </div>
        <div
          v-else
          key="hover"
          class="flex flex-col justify-center items-center"
        >
          <slot>Project</slot>
        </div>
      </transition>
    </div>
  </IntersectionAnimation>
</template>

<script>
import IntersectionAnimation from "./IntersectionAnimation.vue";
export default {
  components: {
    IntersectionAnimation,
  },
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
    index: {
      type: Number,
    },
  },
  data() {
    return {
      hover: false,
    };
  },
  methods: {
    onHover() {
      this.hover = true;
      this.$store.commit("projects/setProjectIndex", this.index);
    },
    onLeave() {
      this.hover = false;
    },
  },
  computed: {
    showSlot() {
      return (
        this.hover &&
        this.index === this.$store.getters["projects/getProjectIndex"]
      );
    },
  },
};
</script>

<style scoped>
.bgg {
  background-image: url("~assets/images/diagonal_line.svg");
  background-size: 1rem;
}
</style>