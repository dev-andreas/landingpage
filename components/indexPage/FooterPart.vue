<template>
  <footer
    class="flex flex-col md:flex-row items-center justify-center md:justify-between h-52 md:h-40 bg-backg-dark px-10"
  >
    <div class="text">
      <p class="text-font-light">&copy; 2022 Andreas Gerasimow</p>
      <NuxtLink to="/impressum" class="text-primary-600 font-bold mr-2">Impressum</NuxtLink>
      <NuxtLink to="/datenschutz" class="text-primary-600 font-bold">Datenschutzerklärung</NuxtLink>
    </div>
    <div class="flex mt-5 lg:mt-0">
      <a href="https://github.com/dev-andreas" target="_blank" rel="noopener"
        ><img
          src="../../assets/images/social_nets/github.svg"
          alt="github"
          class="w-12"
      /></a>
      <a
        href="https://www.linkedin.com/in/andreas-gerasimow-341a551b2/"
        target="_blank"
        rel="noopener"
        class="ml-5"
        ><img
          src="../../assets/images/social_nets/linkedin.svg"
          alt="linkedin"
          class="w-12"
      /></a>
    </div>
  </footer>
</template>
