<template>
  <div
    class="flex flex-col items-start justify-center justify-self-center"
  >
    <div
      v-for="item in items"
      :key="item.id"
      class="my-4 flex items-center h-full transform hover:translate-x-2 transition ease-out duration-200"
    >
      <div class="flex flex-col items-start h-full border-font-dark">
        <p class="text-xs font-bold">
          {{ item.name }}
        </p>
        <div class="text-center flex">
          <transition name="rise" appear>
            <div
              class="h-8 border border-l-4 border-primary-600 bgg"
              :style="{
                width: (item.votes / 100) * 30 + 'rem',
              }"
            ></div>
          </transition>
        </div>
      </div>
    </div>
    <div class="flex justify-between w-full">
      <p class="text-xs">Noob</p>
      <p class="text-xs">Pro</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: Array,
  },
  computed: {
    votesAmt() {
      return this.$props.items.length;
    },
    mostVoted() {
      let maxVal = 0;
      this.$props.items.forEach((item) => {
        maxVal = item.votes > maxVal ? item.votes : maxVal;
      });
      return maxVal;
    },
  },
};
</script>

<style scoped>

</style>