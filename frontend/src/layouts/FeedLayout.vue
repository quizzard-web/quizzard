<script setup lang="ts">
import Header from "@/components/_navigation/app-shell/Header.vue";
import { PhPlus } from "@phosphor-icons/vue";
import { ref } from "vue";

const position = ref(window.innerHeight - 80);
</script>

<template>
  <Header />
  <main class="bg-white-200 relative">
    <slot></slot>
    <div
      class="bg-black-100 rounded-full w-fit p-3 box-content drop-shadow-lg fixed right-0 mr-4 md:hidden"
      :style="{ top: position + 'px' }"
    >
      <PhPlus :size="40" weight="bold" class="fill-white-100" />
    </div>
  </main>
</template>
