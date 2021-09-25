<template>
  <article
    class="
      flex flex-col
      items-center
      py-10
      sm:py-20
      my-10
      sm:my-20
      standard-grid-width
    "
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
    <div class="grid lg:grid-cols-3 mt-10 sm:mt-20 gap-10">
      <IntersectionAnimation
        startingClass="opacity-0 -translate-x-32"
        endingClass="opacity-100 translate-x-0"
        sentinalName="about_me"
      >
        <div
          class="
            flex flex-col
            sm:flex-row
            lg:flex-col
            items-center
            justify-center
          "
        >
          <img
            src="../../assets/images/andreas_gerasimow.jpg"
            alt="Andreas Gerasimow"
            class="
              bg-white
              w-48
              h-48
              xs:w-80
              xs:h-80
              object-cover
              rounded-md
              shadow-lg
            "
          />
          <div
            class="
              border-l border-primary-600
              pl-3
              text-base
              ml-0
              mt-10
              sm:ml-10
              sm:mt-0
              lg:ml-0
              lg:mt-10
            "
          >
            <p class="font-bold">Andreas Gerasimow</p>
            <p class="font-light">Ulm, Baden-Württemberg</p>
            <p class="font-light">andreas.gerasimow12@gmail.com</p>
            <p class="font-light">+49 1575 3223015</p>
          </div>
        </div>
      </IntersectionAnimation>
      <div class="lg:col-span-2 flex flex-col items-center justify-center">
        <IntersectionAnimation
          startingClass="opacity-0 translate-y-10"
          endingClass="opacity-100 translate-x-0"
          sentinalName="who am i"
          class="text-sm sm:text-xl"
        >
          <h3 class="text-xl sm:text-2xl font-bold">Wer ich bin:</h3>
          Hallo, mein Name ist Andreas und ich bin seit meiner Kindheit
          begeistert von Informatik. Im Jahr 2021 beginnt mein Studium, weshalb
          ich mich entschlossen habe Freelancer zu werden.
        </IntersectionAnimation>
        <IntersectionAnimation
          startingClass="opacity-0 translate-y-10"
          endingClass="opacity-100 translate-x-0"
          sentinalName="why i do it"
          class="text-sm sm:text-xl mt-5"
        >
          <h3 class="text-xl sm:text-2xl font-bold">Warum mache ich das?</h3>
          Flexibilität ist im Studium generell ziemlich wichtig, daher möchte
          ich selber entscheiden, wann und wie lange ich arbeite. Außerdem macht
          es mir Spaß neue Dinge zu lernen und mich als Person
          weiterzuentwickeln. Genau das ist der Grund weshalb ich ein Freelancer
          werden wollte.
        </IntersectionAnimation>
        <IntersectionAnimation
          startingClass="opacity-0 translate-y-10"
          endingClass="opacity-100 translate-x-0"
          sentinalName="why i"
          class="text-sm sm:text-xl mt-5"
        >
          <h3 class="text-xl sm:text-2xl font-bold">Warum bei mir?</h3>
          Sie haben den Vorteil, dass sich kein großes Unternehmen hinter mir
          verbirgt, welches Gehälter und Miete zahlen muss. Dadurch fallen für
          Sie weniger Kosten an. Außerdem steht bei mir Qualität im Fokus. Ich
          arbeite ungern an vielen Aufträgen auf einmal, denn darunter leidet
          das individuelle Projekt. Die Kundenzufriedenheit ist mir am
          wichtigsten, weshalb ich immer ehrlich bin und für Sie auch nach der
          Fertigstellung des Auftrags zur Verfügung stehe.
        </IntersectionAnimation>
      </div>
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