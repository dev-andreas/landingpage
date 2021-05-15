<template>
  <nav class="h-0 sticky top-0 z-50">
    <div
      class="flex flex-col md:flex-row justify-start px-5 bg-backg-light tinted shadow-sm"
    >
      <div class="flex justify-between items-center">
        <div class="flex justify-center items-center">
          <img
            src="../assets/images/lightbulb_black.svg"
            alt="Logo"
            class="h-10 my-2"
          />
          <p class="text-2xl font-light tracking-wider ml-2">LUMEN</p>
        </div>
        <!-- burger -->
        <div
          v-if="mobileView"
          class="flex flex-col justify-center"
          @click="toggle"
        >
          <div
            class="w-8 h-1 my-0.5 bg-font-dark transition ease-out duration-300 transform"
            :class="[open ? '-rotate-45 translate-y-2' : 'rotate-0']"
          ></div>
          <div
            class="w-8 h-1 my-0.5 bg-font-dark transition ease-out duration-300"
            :class="[open ? 'opacity-0' : 'opacity-100']"
          ></div>
          <div
            class="w-8 h-1 my-0.5 bg-font-dark transition ease-out duration-300 transform"
            :class="[open ? 'rotate-45 -translate-y-2' : 'rotate-0']"
          ></div>
        </div>
      </div>
      <div
        class="flex flex-col md:flex-row md:ml-5 justify-between items-center transform transition-all ease-out duration-500 w-full"
        :class="[open || !mobileView ? 'max-h-64' : 'max-h-0 scale-0']"
      >
        <ul class="flex flex-col md:flex-row items-center">
          <li
            v-for="link in links"
            :key="link.name"
            class="md:ml-4 my-2 md:my-0"
          >
            <a
              :href="link.route"
              class="tracking-wider text-xl font-bold md:font-normal md:text-sm"
              @click="open = false"
            >
              {{ link.name }}
            </a>
          </li>
        </ul>
        <a
          href="#contact"
          class="btn-primary"
          :class="[mobileView ? 'my-5 ml-0' : 'my-0 ml-5']"
          @click="open = false"
        >
          Kontakt
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Joke",
  props: {
    links: Array,
  },
  data() {
    return {
      open: false,
      windowWidth: 0,
      widthSizes: {
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280,
        "2xl": 1536,
      },
      mobileView: false,
    };
  },
  mounted() {
    const onWidthChange = () => (this.windowWidth = window.innerWidth);
    window.addEventListener("resize", onWidthChange);
    onWidthChange();
  },
  unmounted() {
    window.removeEventListener("resize", onWidthChange);
  },
  watch: {
    windowWidth(value) {
      if (this.windowWidth < this.widthSizes.md) {
        this.mobileView = true;
      } else {
        this.mobileView = false;
      }
    },
  },
  methods: {
    toggle() {
      this.open = !this.open;
    },
  },
};
</script>

<style>
</style>