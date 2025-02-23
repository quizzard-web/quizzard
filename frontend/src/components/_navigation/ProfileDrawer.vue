<script setup lang="ts">
import { PhArticleNyTimes, PhGearSix, PhSignOut, PhTray } from "@phosphor-icons/vue";
import { ref } from "vue";
import ThemeToggle from "../_containment/buttons/ThemeToggle.vue";

const {
  value: { accountName, accountNumber },
} = ref({
  accountName: "John Lois Floro",
  accountNumber: "TEFCDCTEX",
});
</script>

<template>
  <div
    class="bg-white-100 flex flex-col gap-3 p-5 rounded-md border-1 border-white-300 w-2xs drop-shadow-theme absolute z-10 top-14 right-0 m-5"
  >
    <div>
      <div class="text-lg font-bold">{{ accountName }}</div>
      <div class="text-black-950 text-xs">{{ accountNumber }}</div>
    </div>
    <hr class="border-t-white-300" />
    <div class="flex justify-between">
      <span class="font-semibold">Appearance</span>
      <ThemeToggle />
    </div>
    <div class="flex justify-between">
      <span class="font-semibold">Invitations</span>
      <PhTray :size="24" />
    </div>
    <div class="flex justify-between">
      <span class="font-semibold">My Quizzes</span>
      <PhArticleNyTimes :size="24" />
    </div>
    <div class="flex justify-between">
      <span class="font-semibold">Settings</span>
      <PhGearSix :size="24" />
    </div>
    <hr class="border-t-white-300" />
    <div class="flex justify-between">
      <span class="font-semibold text-red-600">Logout</span>
      <PhSignOut :size="24" class="fill-red-600" />
    </div>
  </div>
</template>
