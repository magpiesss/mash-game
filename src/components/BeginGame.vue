<script setup lang="ts">
import { Steps } from '@/types'
</script>

<template>
  <button class="massive-button" @click="$emit('nextStep', Steps.PICK_OPTIONS)">
      Begin Game
  </button>
</template>