<template>
  <div>
    <HeaderPart />
    <NavBar :links="links" />
    <div class="overflow-x-hidden">
      <AboutMe />
      <Service />
      <Technologies />
      <Projects />
      <Contact />
    </div>
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
  head: {
    title: "Webentwickler und Freelancer aus Ulm.",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Sie wollen eine professionelle Website oder Webanwendung für sich oder ihr Unternehmen? Dann sind Sie hier genau richtig. Kostengünstig ✓ Schön ✓ Performant ✓",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
};
</script>