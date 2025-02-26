<script setup lang="ts">
import { PhNotePencil } from "@phosphor-icons/vue";
</script>

<template>
  <div class="hidden md:flex gap-1 items-center cursor-pointer">
    <PhNotePencil :size="18" weight="bold" />
    <span class="font-action-md font-bold"> Create Quiz </span>
  </div>
</template>
