<template>
  <div>
    <HeaderPart />
    <NavBar :links="links" />
    <AboutMe />
    <Service />
    <Technologies />
    <Projects />
  </div>
</template>

<script>
  import HeaderPart from "../components/indexPage/HeaderPart.vue"
  import NavBar from "../components/NavBar.vue";
  import Technologies from "../components/indexPage/Technologies.vue"
  import AboutMe from "../components/indexPage/AboutMe.vue" 
  import Service from "../components/indexPage/Service.vue"
  import Projects from "../components/indexPage/Projects.vue"
  export default {
    components: {
      HeaderPart,
      NavBar,
      Technologies,
      AboutMe,
      Service,
      Projects,
    },
    data() {
      return {
        links: [
          { name: 'Über mich', route: '/about' },
          { name: 'Dienstleistungen', route: '/service' },
          { name: 'Technologien', route: '/tech' },
          { name: 'Projekte', route: '/projects' },
        ],

      };
    },
  }
</script>