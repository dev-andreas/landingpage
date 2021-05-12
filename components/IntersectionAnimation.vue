<template>
  <div class="transition ease-out duration-1000 transform" :class="[ intersected ? endingClass : startingClass ]">
    <slot></slot>
    <IntersectionObserver :sentinalName="sentinalName" @intersecting="intersected=true" />
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
  },
    data() {
        return {
            intersected: false,
        }
    }
};
</script>

<style>
</style>