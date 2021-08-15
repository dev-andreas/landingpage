<template>
  <article
    class="flex flex-col items-center py-10 sm:py-20 my-10 sm:my-20 standard-grid-width"
    id="aboutme"
  >
    <IntersectionAnimation
      startingClass="opacity-0 translate-y-10"
      endingClass="opacity-100 translate-x-0"
      sentinalName="about_me"
    >
      <h2
        class="
          text-4xl
          sm:text-6xl
          font-extralight
          pb-3
          px-1
          border-b border-primary-600
        "
      >
        Über mich
      </h2>
    </IntersectionAnimation>
    <div>
      <div class="flex flex-col lg:flex-row items-center justify-center mt-16">
        <IntersectionAnimation
          startingClass="opacity-0 -translate-x-32"
          endingClass="opacity-100 translate-x-0"
          sentinalName="about_me"
        >
          <div class="flex flex-col sm:flex-row lg:flex-col items-center justify-center">
            <img
              src="../../assets/images/andreas_gerasimow.jpg"
              alt="Andreas Gerasimow"
              class="
                bg-white
                w-48
                h-48
                xs:w-60 xs:h-60
                object-cover
                rounded-md
                shadow-lg
              "
            />
            <div
              class="
                border-l
                border-primary-600
                pl-3
                text-base
                ml-0 mt-5 sm:ml-5 sm:mt-0 lg:ml-0 lg:mt-5
              "
            >
              <p class="font-bold">Andreas Gerasimow</p>
              <p class="font-light">Ulm, Baden-Württemberg</p>
              <p class="font-light">andreas.gerasimow12@gmail.com</p>
              <p class="font-light">+49 1575 3223015</p>
            </div>
          </div>
        </IntersectionAnimation>
        <IntersectionAnimation
          startingClass="opacity-0 translate-y-10"
          endingClass="opacity-100 translate-x-0"
          sentinalName="about_me"
        >
          <div class="mt-10 md:mt-20 lg:mt-0 ml-0 lg:ml-20">
            <div class="text-sm sm:text-xl">
              <h3 class="text-xl sm:text-2xl font-bold">Wer ich bin:</h3>
              Hallo, mein Name ist Andreas und ich bin seit meiner Kindheit
              begeistert von Informatik. Im Jahr 2021 beginnt mein Studium,
              weshalb ich mich entschlossen habe Freelancer zu werden.
            </div>
            <div class="text-sm sm:text-xl mt-5">
              <h3 class="text-xl sm:text-2xl font-bold">Warum mache ich das?</h3>
              Flexibilität ist im Studium generell ziemlich wichtig, daher
              möchte ich selber entscheiden, wann und wie lange ich arbeite.
              Außerdem macht es mir Spaß neue Dinge zu lernen und mich als
              Person weiterzuentwickeln. Genau das ist der Grund weshalb ich
              ein Freelancer werden wollte.
            </div>
          </div>
        </IntersectionAnimation>
      </div>
      <IntersectionAnimation
        startingClass="opacity-0 translate-y-10"
        endingClass="opacity-100 translate-x-0"
        sentinalName="about_me"
        class="mt-5 lg:mt-16"
      >
        <div class="text-sm sm:text-xl">
          <h3 class="text-xl sm:text-2xl font-bold">Warum bei mir?</h3>
          Sie haben den Vorteil, dass sich kein großes Unternehmen hinter mir
          verbirgt, welches Gehälter und Miete zahlen muss. Dadurch fallen für
          Sie weniger Kosten an. Außerdem steht bei mir Qualität im Fokus. Ich
          arbeite ungern an vielen Aufträgen auf einmal, denn darunter leidet
          das individuelle Projekt. Die Kundenzufriedenheit ist mir am
          wichtigsten, weshalb ich immer ehrlich bin und für Sie auch nach der
          Fertigstellung des Auftrags zur Verfügung stehe.
        </div>
      </IntersectionAnimation>
    </div>
  </article>
</template>

<script>
import IntersectionAnimation from "../../components/IntersectionAnimation.vue";
export default {
  components: {
    IntersectionAnimation,
  },
};
</script>

<style>
</style>