<template>
  <div class="bg-backg-light overflow-x-hidden">
    <section
      class="
        flex flex-col
        items-center
        justify-center
        bg-backg-dark
        diagonal
        pb-32
        sm:pb-64
      "
    >
      <IntersectionAnimation
        startingClass="opacity-0 translate-y-10"
        endingClass="opacity-100 translate-x-0"
        sentinalName="about_me"
        class="mt-5 lg:mt-16 flex flex-col items-center"
      >
        <img
          class="
            mt-7
            sm:mt-16
            w-24
            sm:w-32
            xl:w-40
            mr-5
            transform
            hover:scale-110
            transition-all
            duration-1000
            ease-out
          "
          src="../assets/images/external/cryptoeditor.svg"
          alt="Cryptoeditor logo"
        />
        <h1 class="text-font-light text-4xl sm:text-6xl xl:text-8xl">
          Cryptoeditor
        </h1>
        <h2
          class="
            mx-5
            mt-5
            xl:mt-10
            text-sm
            sm:text-xl
            xl:text-3xl
            text-gray-400 text-center
          "
        >
          Speichere deine Dateien und Passwörter verschlüsselt.
        </h2>
      </IntersectionAnimation>

      <div
        class="
          grid grid-cols-1
          place-items-center
          lg:grid-cols-2
          w-216
          gap-5
          lg:gap-20
          mt-10
          sm:mt-20
        "
      >
        <IntersectionAnimation
          startingClass="opacity-0 translate-y-10"
          endingClass="opacity-100 translate-x-0"
          sentinalName="about_me"
          :delay="200"
          class="flex flex-col xs:flex-row items-center"
        >
          <img
            src="../assets/images/external/shield.svg"
            alt="Shield"
            class="
              w-10
              sm:w-24
              xl:w-32
              transform
              hover:scale-110
              transition-all
              duration-500
              ease-out
            "
          />
          <span class="mt-3 xs:mt-0 xs:ml-5">
            <h3 class="text-xl xl:text-2xl font-bold text-font-light">
              Sicher
            </h3>
            <p class="text-xs sm:text-sm xl:text-base text-gray-400">
              2048 bit RSA Verschlüsselung
            </p>
          </span>
        </IntersectionAnimation>
        <IntersectionAnimation
          startingClass="opacity-0 translate-y-10"
          endingClass="opacity-100 translate-x-0"
          sentinalName="about_me"
          :delay="400"
          class="flex flex-col xs:flex-row items-center mt-5 lg:mt-0"
        >
          <img
            src="../assets/images/external/internet.svg"
            alt="Shield"
            class="
              w-10
              sm:w-24
              xl:w-32
              transform
              hover:scale-110
              transition-all
              duration-500
              ease-out
            "
          />
          <span class="mt-3 xs:mt-0 xs:ml-5">
            <h3 class="text-xl xl:text-2xl font-bold text-font-light">
              Funktioniert offline
            </h3>
            <p class="text-xs sm:text-sm xl:text-base text-gray-400">
              Daten werden auf dem Computer verschlüsselt.
            </p>
          </span>
        </IntersectionAnimation>
      </div>
    </section>

    <!-- Downloads -->
    <section
      class="
        flex flex-col-reverse
        xl:flex-row
        items-center
        justify-center
        mb-20
        mt-20
      "
    >
      <div
        class="
          w-72
          xs:w-96
          sm:w-144
          md:w-180
          lg:w-228
          xl:w-144
          2xl:w-216
          mt-32
          2xl:mt-0
        "
      >
        <h2 class="text-center text-4xl mb-5">Downloads</h2>
        <p>
          Das Programm basiert auf Java und funktioniert ausschließlich mit
          Version 1.8 oder mit OpenJDK ab Version 11. Sollten andere Versionen
          auf dem Computer installiert sein, besteht die Möglichkeit, dass das
          Programm nicht ordnungsgemäß startet.
          <br />
          <a
            href="https://www.java.com/de/download/manual.jsp"
            target="_blank"
            rel="noopener"
            class="text-primary-600 font-body"
            >Zur offiziellen Java Website</a
          >
          <br />
          <a
            href="https://www.java.com/de/download/help/version_manual.html"
            target="_blank"
            rel="noopener"
            class="text-primary-600 font-body"
            >Wie finde ich meine Version heraus?</a
          >
        </p>
        <table class="my-10">
          <tr>
            <td class="text-xl">Versionen:</td>
          </tr>
          <tr>
            <td>
              <a href="" class="text-primary-600 font-body font-bold"
                >Version 1.4 (x MB)</a
              >
            </td>
          </tr>
          <a
            href="https://github.com/dev-andreas/cryptoeditor"
            class="text-primary-600 font-body font-bold text-xs"
            >Source Code</a
          >
        </table>
        <p class="border border-primary-600 border-dashed rounded-md p-5">
          <span class="text-primary-600">Achtung:</span> Wichtige Daten oder
          Passwörter sollten generell nie auf Computern gespeichert werden,
          sobald ein Fremder mit ihnen große Schäden anrichten könnte. Es gibt
          keine 100 % Garantie, dass diese nicht geklaut werden können und ich
          hafte keineswegs für gestohlene oder verlorengegangene Daten!
        </p>
      </div>
      <div class="xl:ml-10 flex flex-col-reverse xl:flex-col">
        <IntersectionAnimation
          startingClass="opacity-0 -translate-x-32"
          endingClass="opacity-100 translate-x-0"
          sentinalName="about_me"
        >
          <img
            class="
              w-228
              xl:w-120
              xl:mr-16
              transform
              -translate-x-24
              sm:-translate-x-52
              xl:translate-x-0
              mt-20
              xl:mt-0
              xl:hover:translate-x-3
              xl:transition-all
              xl:duration-500
              xl:ease-out
            "
            src="../assets/images/external/dark.png"
            alt="cryptoeditor index dark"
          />
        </IntersectionAnimation>
        <IntersectionAnimation
          startingClass="opacity-0 translate-x-32"
          endingClass="opacity-100 translate-x-0"
          sentinalName="about_me"
        >
          <img
            class="
              w-228
              xl:w-120
              xl:ml-16
              mt-5
              transform
              translate-x-24
              sm:translate-x-52
              xl:translate-x-0
              xl:hover:translate-x-3
              xl:transition-all
              xl:duration-500
              xl:ease-out
            "
            src="../assets/images/external/light.png"
            alt="cryptoeditor light"
          />
        </IntersectionAnimation>
      </div>
    </section>
  </div>
</template>

<script>
import IntersectionAnimation from "../components/IntersectionAnimation.vue";
export default {
  head: {
    title: "Cryptoeditor | Datenverschlüsselung",
    htmlAttrs: {
      lang: "de",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: `
        Verschlüssele deine Daten ond speichere sie offline auf deinem Computer. Auch Passwörter können problemlos gespeichert werden. Kostenlos und Open Source...
      `,
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }],
  },
  components: {
    IntersectionAnimation,
  },
};
</script>

<style>
td {
  @apply p-2 border border-gray-200;
}

.diagonal {
  clip-path: polygon(0 0, 100% 0, 100% calc(100% - 7vw), 0 100%);
}

.diagonal-reverse {
  clip-path: polygon(0 0, 100% 5vw, 100% 100%, 0 100%);
  background: linear-gradient(to bottom left, #ca02ffff, #01adffff);
}

.h-almost {
  height: calc(100vh - 4rem);
}
</style>