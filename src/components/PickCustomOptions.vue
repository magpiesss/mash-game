<script setup lang="ts">
import { ref } from 'vue'
import TextInput from '@/components/forms/TextInput.vue'
import { type GameOption, OptionCategory } from '@/types'

const emit = defineEmits(['setCustomOptions']);

const customLifePartner = ref<string>('');
const customNumberOfKids = ref<string>('');
const customJob = ref<string>('');
const customSalary  = ref<string>('');
const customCar  = ref<string>('');
const customGeography = ref<string>('');

function setOptions() {
  const customOptions: GameOption[] = [
    { category: OptionCategory.LIFE_PARTNER, name: customLifePartner.value },
    { category: OptionCategory.SALARY, name: customSalary.value },
    { category: OptionCategory.JOB, name: customJob.value },
    { category: OptionCategory.NUMBER_OF_CHILDREN, name: customNumberOfKids.value },
    { category: OptionCategory.CAR, name: customCar.value },
    { category: OptionCategory.GEOGRAPHY, name: customGeography.value }
  ];

  emit('setCustomOptions', customOptions);
}
</script>

<template>
  <form @submit.prevent="setOptions">
    <h2>Pick some terrible options for...</h2>
    <TextInput label="A life partner*" v-model="customLifePartner" />
    <TextInput label="Number of children*" v-model="customNumberOfKids" />
    <TextInput label="A job*" v-model="customJob" />
    <TextInput label="Salary*" v-model="customSalary" />
    <TextInput label="A car*" v-model="customCar" />
    <TextInput label="A location to live" v-model="customGeography" />
    <div class="button-section">
      <button>Next Step</button>
    </div>
  </form>
</template>

<style scoped>
.button-section {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}
</style>