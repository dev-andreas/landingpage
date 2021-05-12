<template>
  <div>
    <HeaderPart />
    <NavBar :links="links" />
    <AboutMe />
    <Service />
    <Technologies />
    <Projects />
    <Contact />
  </div>
</template>

<script>
import HeaderPart from "../components/indexPage/HeaderPart.vue";
import NavBar from "../components/NavBar.vue";
import Technologies from "../components/indexPage/Technologies.vue";
import AboutMe from "../components/indexPage/AboutMe.vue";
import Service from "../components/indexPage/Service.vue";
import Projects from "../components/indexPage/Projects.vue";
import Contact from "../components/indexPage/Contact.vue";
export default {
  components: {
    HeaderPart,
    NavBar,
    Technologies,
    AboutMe,
    Service,
    Projects,
    Contact,
  },
  data() {
    return {
      links: [
        { name: "Über mich", route: "#aboutme" },
        { name: "Dienstleistungen", route: "#service" },
        { name: "Technologien", route: "#tech" },
        { name: "Projekte", route: "#projects" },
      ],
    };
  },
};
</script>