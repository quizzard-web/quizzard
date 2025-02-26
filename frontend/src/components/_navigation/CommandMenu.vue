<script setup lang="ts">
import { PhCommand } from "@phosphor-icons/vue";
</script>

<template>
  <div
    class="bg-white-200 hover:bg-white-300 border-[1px] border-white-400 hover:border-white-950 hidden md:flex items-center justify-between px-2.5 py-2 rounded-md md:min-w-xs xl:min-w-xl cursor-pointer transition delay-150 duration-300"
  >
    <span class="text-black-500 font-medium"> Search </span>
    <div class="flex gap-1">
      <PhCommand
        :size="20"
        class="fill-black-300 p-0.5 box-content border-1 border-black-500 rounded-xs"
      />
      <div
        class="w-5 text-center p-0.5 box-content border-1 border-black-500 rounded-xs font-space-grotesk text-sm"
      >
        K
      </div>
    </div>
  </div>
</template>
