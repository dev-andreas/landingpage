<template>
  <div>
    <Nuxt />
    <FooterPart />
  </div>
</template>

<script>
import FooterPart from "../components/indexPage/FooterPart.vue";
export default {
  components: {
    FooterPart,
  },
  head: {
    titleTemplate: 'Lumen Dev | %s',
    htmlAttrs: {
      lang: 'de'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 
      `
      
      ` }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
};
</script>
