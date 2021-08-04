<template>
  <header class="bg bg-fixed">
    <IntersectionObserver
      sentinal-name="headerIntersection"
      @intersecting="changeIntersection"
    />
    <div
      class="
        flex flex-col
        items-center
        justify-center
        py-20
        transition-all
        ease-in-out
        duration-1000
        h-screen
      "
    >
      <div>
        <div class="flex items-center justify-center px-4">
          <img
            src="../../assets/images/lumen_logo_blue.svg"
            alt="Logo"
            class="
              h-32
              md:h-48
              mr-5
              mb-3
              transform
              hover:scale-110
              transition
              ease-out
              duration-500
            "
          />
          <div class="flex flex-col-reverse">
            <h1
              class="
                text-sm
                xs:text-lg
                sm:text-2xl
                md:text-3xl
                mt-3
                font-light
                text-font-light
              "
            >
              Webentwickler und Freelancer aus Ulm.
            </h1>
            <p
              class="
                text-3xl
                xs:text-4xl
                sm:text-5xl
                md:text-6xl
                font-bold
                tracking-wider
                text-primary-600
              "
            >
              Hallo, ich bin Andreas.
            </p>
          </div>
        </div>
      </div>
      <div
        class="animate-bounce transition ease-out duration-200 delay-200 mt-5"
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
.bg {
  background-image: url("~assets/images/coded.jpg");

  /* Center and scale the image nicely */
  background-color: #333333;
  background-position: top-left;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>