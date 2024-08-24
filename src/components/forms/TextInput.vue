<script setup lang="ts">
import { v4 as uuidv4 } from "uuid";

defineProps({
  label: String,
  modelValue: String
})

const id = uuidv4();

const emit = defineEmits(['update:modelValue'])

const updateValue = (event: Event) => {
  emit('update:modelValue', event.target?.value)
}
</script>

<template>
  <div class="wrapper">
    <label :for="id">{{ label }}</label>
    <input :id="id" type="text" :value="modelValue" @input="updateValue" required />
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin: 10px 0;
}
</style>