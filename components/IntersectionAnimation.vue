<template>
  <div
    class="transition ease-out duration-1000 transform"
    :class="[intersected ? endingClass : startingClass]"
  >
    <div class="w-full absolute top-2/3 pointer-events-none">
      <IntersectionObserver
        :sentinalName="sentinalName"
        @intersecting="intersect"
      />
    </div>
    <slot></slot>
  </div>
</template>

<script>
import IntersectionObserver from "./IntersectionObserver.vue";
export default {
  components: {
    IntersectionObserver,
  },
  props: {
    sentinalName: String,
    startingClass: String,
    endingClass: String,
    delay: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      intersected: false,
    };
  },
  methods: {
    async intersect() {
      await setTimeout(() => {
        console.log('intersecting');
        this.intersected = true;
      }, this.delay);
    },
  },
};
</script>

<style>
</style>