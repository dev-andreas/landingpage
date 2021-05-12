<template>
    <article class="flex flex-col items-center py-20 my-20" id="aboutme">
        <IntersectionAnimation startingClass="opacity-0 translate-y-10" endingClass="opacity-100 translate-x-0"
            sentinalName="about_me">
            <h2 class="text-6xl font-extralight pb-3 px-1 border-b-4 border-primary-600">
                Über mich
            </h2>
        </IntersectionAnimation>
        <div class="flex flex-col lg:flex-row gap-20 items-center justify-center mt-20">
            <IntersectionAnimation startingClass="opacity-0 -translate-x-32" endingClass="opacity-100 translate-x-0"
                sentinalName="about_me">
                <div class="flex gap-5 lg:flex-col items-center">
                    <img src="" alt="Andreas Gerasimow" class="bg-white w-40 h-40 md:w-60 md:h-60 object-cover rounded-full" />
                    <div class="border-l border-primary-600 pl-3">
                        <p class="font-bold">Andreas Gerasimow</p>
                        <p class="font-light">Ulm, Baden-Württemberg</p>
                        <p class="font-light">andreas.gerasimow12@gmail.com</p>
                        <p class="font-light">+49 1575 3223015</p>
                    </div>
                </div>
            </IntersectionAnimation>
            <IntersectionAnimation startingClass="opacity-0 translate-y-10" endingClass="opacity-100 translate-x-0"
            sentinalName="about_me">
            <div class="w-132">
                <div class="text-lg">
                    <h3 class="text-xl font-bold">Wer ich bin:</h3>
                    Hallo! Mein Name ist Andreas und ich bin seit meiner Kindheit
                    begeistert von Informatik. Im Jahr 2021 beginnt mein Studium, weshalb
                    ich mich entschlossen habe Freelancer zu werden.
                </div>
                <div class="text-lg mt-5">
                    <h3 class="text-xl font-bold">Warum mache ich das?</h3>
                    Flexibilität ist im Studium generell ziemlich wichtig. Ich möchte
                    selber entscheiden, wann und wie lange ich arbeite, damit ich auch
                    genügend Zeit zum lernen finde. Genau das ist der Grund weshalb ich
                    mich für eine freiberufliche Tätigkeit entschieden habe. Außerdem
                    macht es mir Spaß neue Dinge zu lernen und mich als Person
                    weiterzuentwickeln.
                </div>
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
        }
    };
</script>

<style>
</style>