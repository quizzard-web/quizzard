<script setup lang="ts">
import CreateQuizButton from "@/components/_containment/buttons/CreateQuizButton.vue";
import AppLogo from "@/components/_misc/AppLogo.vue";
import { PhBellSimple, PhLineVertical, PhMagnifyingGlass, PhQuestion } from "@phosphor-icons/vue";
import { ref } from "vue";
import { RouterLink } from "vue-router";
import AccountAvatar from "../AccountAvatar.vue";
import CommandMenu from "../CommandMenu.vue";
import ProfileDrawer from "../ProfileDrawer.vue";

const isOpen = ref(false);

function toggle() {
  isOpen.value = !isOpen.value;
}
</script>

<template>
  <header
    class="drop-shadow-theme bg-white-100 border-b-2 border-b-white-200 z-10 relative flex justify-between items-center py-5 md:py-3 px-4 lg:px-20"
  >
    <RouterLink to="/"> <AppLogo /> </RouterLink>
    <CommandMenu />
    <div class="flex gap-3.5 items-center">
      <CreateQuizButton />
      <PhLineVertical :size="36" class="hidden md:block" />
      <PhMagnifyingGlass :size="28" class="md:hidden cursor-pointer" />
      <PhQuestion :size="28" class="hidden md:block cursor-pointer" />
      <PhBellSimple :size="28" class="cursor-pointer" />
      <AccountAvatar @click="toggle" />
    </div>
  </header>
  <ProfileDrawer v-if="isOpen" />
</template>
