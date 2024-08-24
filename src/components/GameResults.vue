<script setup lang="ts">
defineProps<{ fortune: string }>()
</script>

<template>
  <div class="wrapper">
    <p>{{ fortune }}</p>
    <div>
      <button @click="$emit('playAgain')">Play again?</button>
    </div>
  </div>
</template>

<style scoped>

.wrapper {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
}

p {
  font-weight: bold;
  font-size: large;
  white-space: pre-line;
}

button {
  font-size: larger;
  padding: 20px 40px;
}

</style>