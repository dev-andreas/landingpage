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
    id="pricing"
  >
    <IntersectionAnimation
      startingClass="opacity-0 translate-y-10"
      endingClass="opacity-100 translate-x-0"
      sentinalName="contact"
      class="flex flex-col items-center"
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
        Preise
      </h2>
      <p
        class="
          text-lg
          sm:text-xl
          md:text-2xl
          lg:text-3xl
          mt-6
          font-bold
          text-center
        "
      >
        Transparente und feste Preisgestaltung.
      </p>
      <p
        class="
          text-md
          sm:text-xl
          lg:text-2xl
          mt-5
          font-light
          text-left
          md:text-center
        "
      >
        Jedes Projekt ist einzigartig und individuell, trotzdem möchte ich die
        Preise so transparent wie möglich machen. Es gilt: Bei mir wird nicht
        die Zeit bezahlt, sondern das Ergebnis. Natürlich gibt es für jedes
        Preispaket trotzdem Möglichkeiten zur Anpassung.
      </p>
    </IntersectionAnimation>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-16 mt-20">
      <IntersectionAnimation
        startingClass="opacity-0 -translate-x-10"
        endingClass="opacity-100 translate-x-0"
        sentinalName="contact"
        class="
          flex flex-col
          items-center
          border border-primary-600
          shadow-md
          rounded-sm
          p-5
        "
      >
        <div class="p-5 flex flex-col items-center">
          <h3 class="text-5xl font-light mb-10 text-center">Einfach</h3>
          <img src="../../assets/images/landingpage.svg" alt="Einfach" />
          <h4 class="text-center text-6xl my-10">300 €</h4>
          <ul class="list-disc list-outside text-base ml-5 sm:ml-0">
            <li class="font-bold">1 Seite</li>
            <li>Bis zu 8 Abschnitten</li>
            <li>Perfekt für Landingpages oder Portfolios.</li>
            <li>On-Page Suchmaschinenoptimierung</li>
          </ul>
        </div>
      </IntersectionAnimation>
      <IntersectionAnimation
        startingClass="opacity-0 -translate-x-10"
        endingClass="opacity-100 translate-x-0"
        sentinalName="contact"
        :delay="200"
        class="
          flex flex-col
          items-center
          border border-primary-600
          shadow-md
          rounded-sm
          p-5
        "
      >
        <div class="p-5 flex flex-col items-center">
          <h3 class="text-5xl font-light mb-10 text-center">Business</h3>
          <img src="../../assets/images/website.svg" alt="Business" />
          <h4 class="text-center text-6xl my-10">500 €</h4>
          <ul class="list-disc list-outside text-base ml-5 sm:ml-0">
            <li class="font-bold">10 Seiten</li>
            <li>
              Eine Homepage mit 9 Unterseiten. Geeignet für kleine und mittlere
              Unternehmen bzw. Start-Ups.
            </li>
            <li>On-Page Suchmaschinenoptimierung</li>
          </ul>
        </div>
      </IntersectionAnimation>
      <IntersectionAnimation
        startingClass="opacity-0 -translate-x-10"
        endingClass="opacity-100 translate-x-0"
        sentinalName="contact"
        :delay="400"
        class="
          flex flex-col
          items-center
          border border-primary-600
          shadow-md
          rounded-sm
          p-5
        "
      >
        <div class="p-5 flex flex-col items-center">
          <h3 class="text-5xl font-light mb-10 text-center">Individuell</h3>
          <img src="../../assets/images/individuell.svg" alt="Individuell" />
          <h4 class="text-center text-6xl my-10">30 €/h</h4>
          <ul class="list-disc list-outside text-base ml-5 sm:ml-0">
            <li class="font-bold">Individuelle Gestaltung</li>
            <li>
              Sie wollen ein Shop oder eine spezielle (Progressive) Web App?
              Setzen Sie sich mit mir in Verbindung und wir finden eine Lösung.
            </li>
          </ul>
        </div>
      </IntersectionAnimation>
      <IntersectionAnimation
        startingClass="opacity-0 translate-y-10"
        endingClass="opacity-100 translate-y-0"
        sentinalName="contact"
        class="lg:col-span-3 flex flex-col justify-center items-center"
      >
        <p class="text-xl text-center">Eine zusätzliche Seite: 30 €</p>
        <p class="mt-5 text-center">
          Preise können sich in der Zukunft verändern.
        </p>

        <a href="#contact" class="btn-primary mt-5">Jetzt kontaktieren</a>
      </IntersectionAnimation>
    </div>
  </article>
</template>

<script>
export default {};
</script>

<style>
</style>