<template>
  <div>
    <HeaderPart />
    <NavBar :links="links" />
    <div class="overflow-x-hidden flex flex-col items-center">
      <Service />
      <Pricing />
      <Technologies />
      <Projects />
      <AboutMe />
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
import Pricing from "../components/indexPage/Pricing.vue";
import Projects from "../components/indexPage/Projects.vue";
import Contact from "../components/indexPage/Contact.vue";
export default {
  transition: {
    name: "slide-bottom",
    mode: "out-in",
  },
  components: {
    HeaderPart,
    NavBar,
    Technologies,
    AboutMe,
    Service,
    Pricing,
    Projects,
    Contact,
  },
  data() {
    return {
      links: [
        { name: "Dienstleistungen", route: "#service" },
        { name: "Preise", route: "#pricing" },
        { name: "Technologien", route: "#tech" },
        { name: "Projekte", route: "#projects" },
        { name: "Über mich", route: "#aboutme" },
      ],
    };
  },
  head: {
    htmlAttrs: {
      lang: "de",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Sie wollen eine professionelle Website oder Webanwendung für sich oder ihr Unternehmen? Dann sind Sie hier genau richtig. Kostengünstig ✓ Gutaussehend ✓ Performant ✓",
      },
      {
        hid: "og:title",
        name: "og:title",
        content: "Andreas G. | Webentwickler und Freelancer aus Ulm.",
      },
      {
        hid: "og:description",
        name: "og:description",
        content:
          "Sie wollen eine professionelle Website oder Webanwendung für sich oder ihr Unternehmen? Dann sind Sie hier genau richtig. Kostengünstig ✓ Gutaussehend ✓ Performant ✓",
      },
      { hid: "og:image", name: "og:image", content: "/og_image.jpg" },
      { hid: "og:url", name: "og:url", content: "https://www.andreasgera.de/" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
};
</script>
