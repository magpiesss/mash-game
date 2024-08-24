<script setup lang="ts">
import { ref } from 'vue'
import { type Game, type GameOption, Steps } from '@/types'
import BeginGame from '@/components/BeginGame.vue'
import PickCustomOptions from '@/components/PickCustomOptions.vue'
import PickStepSize from '@/components/PickStepSize.vue'
import PlayGame from '@/components/PlayGame.vue'
import { ALL_OPTIONS } from '@/utils'
import GameResults from '@/components/GameResults.vue'


const step = ref<Steps>(Steps.BEGIN);
const game = ref<Game>({ stepSize: 0, options: [], fortune: '' });

// testing
// const step = ref<Steps>(Steps.CALCULATE_FORTUNE);
//
// const options: GameOption[] = [
//   ...ALL_OPTIONS,
//   { name: 'your mum', category: OptionCategory.LIFE_PARTNER },
//   { name: 'your mum', category: OptionCategory.NUMBER_OF_CHILDREN },
//   { name: 'your mum', category: OptionCategory.JOB },
//   { name: 'your mum', category: OptionCategory.SALARY },
//   { name: 'your mum', category: OptionCategory.CAR },
//   { name: 'your mum', category: OptionCategory.GEOGRAPHY },
// ].sort((x, y) => x.category < y.category ? -1 : 1)
//
// const game = ref<Game>({
//   stepSize: 7,
//   options: options,
//   fortune: ''
// })
// end testing

function setCustomOptions(customOptions: GameOption[]) {
  game.value.options = [
    ...ALL_OPTIONS,
    ...customOptions
  ].sort((x, y) => x.category < y.category ? -1 : 1);
  step.value = Steps.PICK_NUMBER;
}

function setStepSize(stepNumber: number) {
  game.value.stepSize = stepNumber;
  step.value = Steps.CALCULATE_FORTUNE;
}

function setFortune(fortune: string) {
  game.value.fortune = fortune;
  step.value = Steps.RESULTS;
}

function playAgain() {
  game.value = { stepSize: 0, options: [], fortune: '' };
  step.value = Steps.BEGIN;
}

</script>

<template>
  <header>
    <h1>MASH</h1>
  </header>

  <main>
    <BeginGame v-if="step === 0" @nextStep="(nextStep) => step = nextStep" />
    <PickCustomOptions v-else-if="step === 1" @setCustomOptions="setCustomOptions" />
    <PickStepSize v-else-if="step === 2" @setStepSize="setStepSize" />
    <PlayGame v-else-if="step === 3" :game="game" @setFortune="setFortune" />
    <GameResults v-else :fortune="game.fortune" @playAgain="playAgain" />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  font-size: xxx-large;
}

</style>
