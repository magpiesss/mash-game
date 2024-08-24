<script setup lang="ts">
import { type Game, OptionCategory, type SelectionOption } from '@/types'
import { computed, ref } from 'vue'
import { delay, DELAY_LENGTH } from '@/utils'
import CategoryCard from '@/components/CategoryCard.vue'

const emit = defineEmits(['setFortune']);

const { game } = defineProps<{ game: Game }>()

let id = 0;

const selectedId = ref<number>(0);
const selectionOptions = ref<SelectionOption[]>(game.options.map(option => { return { id: id++, ...option, cancelled: false, selected: false } }))
const gameState = ref<'not-started' | 'in-progress' | 'done'>('not-started');

const homeOptions = computed(() => { return selectionOptions.value.filter(option => option.category === OptionCategory.HOME) });
const lifePartnerOptions = computed(() => { return selectionOptions.value.filter(option => option.category === OptionCategory.LIFE_PARTNER) });
const kidsOptions = computed(() => { return selectionOptions.value.filter(option => option.category === OptionCategory.NUMBER_OF_CHILDREN) });
const jobOptions = computed(() => { return selectionOptions.value.filter(option => option.category === OptionCategory.JOB) });
const salaryOptions = computed(() => { return selectionOptions.value.filter(option => option.category === OptionCategory.SALARY) });
const carOptions = computed(() => { return selectionOptions.value.filter(option => option.category === OptionCategory.CAR) });
const geographyOptions = computed(() => { return selectionOptions.value.filter(option => option.category === OptionCategory.GEOGRAPHY) });

async function beginGame() {
  gameState.value = 'in-progress';

  while (selectionOptions.value.filter(option => !(option.selected || option.cancelled)).length > 0) {
    await pickAnOption();

    const selectedOption = selectionOptions.value.find(x => x.id === selectedId.value);

    if (!selectedOption) throw Error('Selection has gone horribly wrong.');

    selectedOption.cancelled = true;

    const remainingOptionsInCategory = selectionOptions.value.filter(x => x.category === selectedOption.category && !x.cancelled);

    if (remainingOptionsInCategory.length === 1) remainingOptionsInCategory[0].selected = true;

    await delay(DELAY_LENGTH);
  }

  gameState.value = 'done';
}

async function pickAnOption() {
  let currentIndex = selectionOptions.value.findIndex(x => x.id === selectedId.value);
  let currentStepNumber = 0;

  while (currentStepNumber <= game.stepSize) {
    currentIndex = (currentIndex + 1) % selectionOptions.value.length;

    const currentOption = selectionOptions.value[currentIndex];

    if (currentOption.cancelled || currentOption.selected) continue;

    currentStepNumber ++;
    selectedId.value = currentOption.id;

    await delay(DELAY_LENGTH);

    if (currentStepNumber === game.stepSize) return;
  }
}

function calculateFortune() {
  const home = selectionOptions.value.find(x => x.category === OptionCategory.HOME && x.selected)?.name ?? '';
  const lifePartner = selectionOptions.value.find(x => x.category === OptionCategory.LIFE_PARTNER && x.selected)?.name ?? '';
  const children = selectionOptions.value.find(x => x.category === OptionCategory.NUMBER_OF_CHILDREN && x.selected)?.name ?? ''
  const job = selectionOptions.value.find(x => x.category === OptionCategory.JOB && x.selected)?.name ?? '';
  const salary = selectionOptions.value.find(x => x.category === OptionCategory.SALARY && x.selected)?.name ?? '';
  const car = selectionOptions.value.find(x => x.category === OptionCategory.CAR && x.selected)?.name ?? '';
  const geography = selectionOptions.value.find(x => x.category === OptionCategory.GEOGRAPHY && x.selected)?.name ?? '';

  const fortune = `You will live in ${home[0] === 'a' ? 'an' : 'a'} ${home} and be happily married to ${lifePartner} with ${children} children.\n` +
    `You will work as ${job[0] === 'a' ? 'an' : 'a'} ${job} and earn ${salary} per year.\n` +
    `You will drive ${car[0] === 'a' ? 'an' : 'a'} ${car} and live in ${geography}.`

  emit('setFortune', fortune);
}

</script>

<template>
  <div class="status-block">
    <button v-if="gameState === 'not-started'" @click="beginGame">Begin!</button>
    <p v-else-if="gameState === 'in-progress'">Calculating...</p>
    <button v-else @click="calculateFortune">Reveal your fortune...</button>
  </div>

  <div class="wrapper">
    <CategoryCard :category="OptionCategory.HOME" :options="homeOptions" :selectedId="selectedId" />
    <CategoryCard :category="OptionCategory.LIFE_PARTNER" :options="lifePartnerOptions" :selectedId="selectedId" />
    <CategoryCard :category="OptionCategory.NUMBER_OF_CHILDREN" :options="kidsOptions" :selectedId="selectedId" />
    <CategoryCard :category="OptionCategory.JOB" :options="jobOptions" :selectedId="selectedId" />
    <CategoryCard :category="OptionCategory.SALARY" :options="salaryOptions" :selectedId="selectedId" />
    <CategoryCard :category="OptionCategory.CAR" :options="carOptions" :selectedId="selectedId" />
    <CategoryCard :category="OptionCategory.GEOGRAPHY" :options="geographyOptions" :selectedId="selectedId" />
  </div>
</template>

<style scoped>

.wrapper {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
}

.status-block {
  margin-bottom: 20px;
}

@media (min-width: 480px) {
  .wrapper {
    grid-template-columns: 1fr 1fr;
  }
}

@media (min-width: 768px) {
  .wrapper {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

@media (min-width: 1024px) {
  .wrapper {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}

</style>