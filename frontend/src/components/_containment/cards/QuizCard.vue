<script setup lang="ts">
import { PhUser } from "@phosphor-icons/vue";
import Card from "./Card.vue";
import TakeQuizButton from "../buttons/TakeQuizButton.vue";

defineProps<{
    backgroundColor: string;
    accentColor: string;
    title: string;
    totalQuestion: number;
    totalUser: number;
    imgUrl: string;
    id: string;
}>();
</script>

<template>
    <Card
        :background-color="backgroundColor"
        size="compact"
        class="p-4 overflow-hidden relative text-white"
    >
        <div class="flex justify-between gap-2 items-start box-border h-full">
            <div class="flex flex-col justify-between h-full">
                <div class="flex flex-col justify-between max-w-36 gap-1.5">
                    <h3 class="font-bold text-xl leading-6">
                        {{ title }}
                    </h3>
                    <p class="font-light text-sm md:text-base">
                        {{ totalQuestion }} Questions
                    </p>
                </div>
                <TakeQuizButton :url="id" class="justify-self-end" />
            </div>
            <div class="flex items-center gap-0.5">
                <PhUser :size="16" />
                <p class="text-sm">{{ totalUser }}</p>
            </div>
        </div>
        <div
            class="h-44 w-44 md:w-45 absolute rotate-[49deg] shadow-card top-20 md:top-18 left-32 md:left-44"
            :style="{ backgroundColor: accentColor }"
        ></div>
    </Card>
</template>
