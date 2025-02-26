<script setup lang="ts">
import { PhMoon, PhSunDim } from "@phosphor-icons/vue";
</script>

<template>
  <div class="flex items-center rounded-full border-1 border-white-400 gap-1">
    <PhSunDim :size="20" class="p-1 box-content bg-black-100 fill-white-100 rounded-full" />
    <PhMoon :size="20" class="p-1 box-content" />
  </div>
</template>
