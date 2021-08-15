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
      <p class="mx-5 text-lg sm:text-xl md:text-2xl lg:text-3xl mt-6 font-light">
        Transparente und feste Preisgestaltung.
      </p>
    </IntersectionAnimation>
    <p class="text-sm sm:text-xl lg:text-2xl mt-7 font-light">
        Jedes Projekt ist einzigartig und individuell, trotzdem möchte ich die
        Preise so transparent wie möglich machen. Es gilt: Bei mir wird nicht
        die Zeit bezahlt, sondern das Ergebnis. Natürlich gibt es für jedes
        Preispaket trotzdem Möglichkeiten zur Anpassung.
      </p>
    <div class="grid grid-cols-3 gap-32 mt-20">
      <div>
        <h3 class="text-5xl font-light mb-3 text-center">Einfach</h3>
        <img src="../../assets/images/landingpage.svg" alt="Einfach" />
        <h4 class="text-center text-6xl my-10">300 €*</h4>
        <ul class="list-disc list-outside">
          <li class="font-bold">1 Seite</li>
          <li>Bis zu 8 Abschnitten</li>
          <li>
            Perfekt für Landingpages oder Portfolios. Natürlich auch für
            beliebige andere Dinge.
          </li>
          <li>On-Page Suchmaschinenoptimierung</li>
          <li>Optionales Kontaktformular</li>
        </ul>
      </div>
      <div>
        <h3 class="text-5xl font-light mb-3 text-center">Business</h3>
        <img src="../../assets/images/website.svg" alt="Business" />
        <h4 class="text-center text-6xl my-10">500 €*</h4>
        <ul class="list-disc list-outside">
          <li class="font-bold">10 Seiten</li>
          <li>
            Eine Homepage mit 9 Unterseiten. Geeignet für kleine Unternehmen
            bzw. Start-Ups um über ihre Produkte oder Dienstleistungen zu
            informieren.
          </li>
          <li>On-Page Suchmaschinenoptimierung</li>
        </ul>
      </div>
      <div>
        <h3 class="text-5xl font-light mb-3 text-center">Individuell</h3>
        <img src="../../assets/images/individuell.svg" alt="Individuell" />
        <h4 class="text-center text-6xl my-10">30 €/h*</h4>
        <ul class="list-disc list-outside">
          <li class="font-bold">Individuelle Gestaltung</li>
          <li>
            Sie haben einen Wunsch, welcher über eine klassische Website
            hinausgeht, z.B. eine bestimmte Web-App? Setzen Sie sich mit mir in
            Verbindung und wir finden eine Lösung.
          </li>
        </ul>
      </div>
      <div class="col-span-3 flex flex-col justify-center items-center">
        <p class="text-xl">Eine zusätzliche Seite: 30 €*</p>
        <p class="mt-5">* Preise können sich in der Zukunft verändern.</p>
      </div>
    </div>
  </article>
</template>

<script>
export default {};
</script>

<style>
</style>