<template>
  <div class="transition ease-out duration-1000 transform" :class="[ intersected ? endingClass : startingClass ]">
    <div class="w-full absolute top-2/3 pointer-events-none">
      <IntersectionObserver :sentinalName="sentinalName" @intersecting="intersected=true" class="bg-red-500"/>
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