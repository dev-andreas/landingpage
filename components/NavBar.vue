<template>
  <nav class="h-0 sticky top-0 z-50">
    <div
      class="
        flex flex-col
        md:flex-row
        justify-between
        px-5
        bg-backg-light
        tinted
      "
    >
      <div class="flex justify-between items-center">
        <NuxtLink to="/" class="flex justify-center items-center">
          <img
            src="../assets/images/lumen_logo_black.svg"
            alt="Lumen"
            class="h-10 my-2"
          />
        </NuxtLink>
        <!-- burger -->
        <div
          v-if="mobileView"
          class="flex flex-col justify-center"
          @click="toggle"
        >
          <div
            class="
              w-8
              h-1
              my-0.5
              bg-font-dark
              transition
              ease-out
              duration-300
              transform
            "
            :class="[open ? '-rotate-45 translate-y-2' : 'rotate-0']"
          ></div>
          <div
            class="w-8 h-1 my-0.5 bg-font-dark transition ease-out duration-300"
            :class="[open ? 'opacity-0' : 'opacity-100']"
          ></div>
          <div
            class="
              w-8
              h-1
              my-0.5
              bg-font-dark
              transition
              ease-out
              duration-300
              transform
            "
            :class="[open ? 'rotate-45 -translate-y-2' : 'rotate-0']"
          ></div>
        </div>
      </div>
      <div
        class="
          flex flex-col
          md:flex-row
          md:ml-5
          items-center
          transform
          transition-all
          ease-out
          duration-500
        "
        :class="[open || !mobileView ? 'max-h-72' : 'max-h-0 scale-0']"
      >
        <ul class="flex flex-col md:flex-row items-center mb-10 md:mb-0">
          <li
            v-for="link in links"
            :key="link.name"
            class="md:ml-4 my-2 md:my-0"
          >
            <a
              :href="link.route"
              class="
                tracking-wider
                py-1
                text-xl
                font-bold
                md:font-normal
                md:text-sm
                border-b border-transparent
                hover:border-primary-600
                transition
                ease-out
                duration-200
              "
              @click="open = false"
            >
              {{ link.name }}
            </a>
          </li>
          <li class="md:ml-4 my-2 md:my-0">
            <a
              href="#contact"
              class="
                tracking-wider
                py-1
                text-xl text-primary-600
                font-bold
                md:text-sm
                border-b border-transparent
                hover:border-primary-600
                transition
                ease-out
                duration-200
              "
              @click="open = false"
            >
              Kontakt
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
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