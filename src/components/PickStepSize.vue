<script setup lang="ts">
import { onMounted, ref } from 'vue'

const currentStepSize = ref<number>(3);
const numberChosen = ref<boolean>(false);

let interval: number;

function incrementStepSizeWithinBounds() {
  if (currentStepSize.value > 9) {
    currentStepSize.value = 3;
  } else {
    currentStepSize.value ++;
  }
}

onMounted(() => {
  interval = setInterval(incrementStepSizeWithinBounds, 250)
});

function stopCounting() {
  clearInterval(interval);
  numberChosen.value = true;
}
</script>

<template>
  <div class="wrapper">
    <h2>Press the button to pick a number...</h2>
    <p>{{ currentStepSize }}</p>
    <button v-if="numberChosen" @click="$emit('setStepSize', currentStepSize)">Next</button>
    <button v-else @click="stopCounting">Stop!</button>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

p {
  font-size: xxx-large;
}
</style>