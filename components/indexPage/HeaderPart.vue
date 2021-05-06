<template>
  <header class="bgg">
    <IntersectionObserver
      sentinal-name="headerIntersection"
      @intersecting="changeIntersection"
    />
    <div
      class="flex flex-col items-center justify-center py-20 transition-all ease-in-out duration-1000"
      :class="[intersects ? 'h-screen' : 'h-80']"
    >
      <div>
        <div class="flex items-center">
          <img
            src="../../assets/images/head.svg"
            alt="Primary Keyword"
            class="w-72 mr-5 mb-3 transform hover:scale-110 transition ease-out duration-500"
          />
          <div>
            <h1 class="text-6xl font-bold tracking-wider text-primary-600">
              NAME
            </h1>
            <h3 class="text-3xl mt-3 font-light text-font-light">
              Webentwickler und Freelancer aus Ulm.
            </h3>
            <p class="text-sm text-primary-600">Andreas Gerasimow</p>
          </div>
        </div>
      </div>
      <div
        class="animate-bounce transition ease-out duration-200 delay-200"
        :class="[intersects ? 'opacity-100' : 'opacity-0']"
      >
        <svg
          class="h-10 w-10 stroke-font-light"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  </header>
</template>

<script>
import IntersectionObserver from "../IntersectionObserver.vue";
export default {
  components: {
    IntersectionObserver,
  },

  data() {
    return {
      intersects: true,
    };
  },

  methods: {
    changeIntersection(value) {
      this.intersects = value;
    },
  },
};
</script>

<style scoped>
.bgg {
  background-image: url('~assets/images/coded.jpg');
  background-size: 100rem;
}
</style>