<script setup lang="ts">
import { OptionCategory, type SelectionOption } from '@/types'

const { category } = defineProps<{ category: OptionCategory, options: SelectionOption[], selectedId: number }>();

function getFriendlyCategoryName() {
  switch (category) {
    case OptionCategory.GEOGRAPHY:
      return 'Place to live';
    case OptionCategory.HOME:
      return 'Home';
    case OptionCategory.LIFE_PARTNER:
      return 'Life partner';
    case OptionCategory.NUMBER_OF_CHILDREN:
      return 'Number of children';
    case OptionCategory.JOB:
      return 'Job';
    case OptionCategory.SALARY:
      return 'Salary';
    case OptionCategory.CAR:
      return 'Car';
    default:
      return 'Place to live;'
  }
}
</script>

<template>
  <div class="category-card">
    <h3>{{ getFriendlyCategoryName() }}</h3>
    <div class="option" v-for="option in options" :key="option.id" :class="{ current: selectedId === option.id, selected: option.selected, cancelled: option.cancelled}">{{option.name}}</div>
  </div>
</template>

<style scoped>

.category-card {
  background-color: #98FF98;
  border-radius: 5px;
  border: 1px solid #333333;
  box-shadow: rgba(0, 0, 0, 0.15) 2px 2px 3px;
  padding: 10px 20px;
}

.option {
  padding: 5px;
}

.current {
  background-color: #FFFFFF;
  transition: background-color 0.1s ease-in-out;
  border-radius: 5px;
}

.selected {
  background-color: #FFD700;
  transition: background-color 0.1s ease-in-out;
  border-radius: 5px;
}

.cancelled {
  text-decoration: line-through;
}

h3 {
  text-decoration: underline;
  margin-bottom: 10px;
}

</style>