<script setup lang="ts">
import { PhArrowRight } from "@phosphor-icons/vue";

defineProps<{
    url: string;
}>();
</script>

<template>
    <a :href="url" class="font-bold flex items-center gap-1.5">
        <span>Take a quiz </span>
        <PhArrowRight :size="20" />
    </a>
</template>
