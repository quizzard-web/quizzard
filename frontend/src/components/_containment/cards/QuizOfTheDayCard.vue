<script setup lang="ts">
import Card from "./Card.vue";

defineProps<{
    backgroundColor: string;
    accentColor: string;
    title: string;
    description: string;
    totalQuestion: number;
    imgUrl: string;
}>();
</script>

<template>
    <Card
        :background-color="backgroundColor"
        size="expanded"
        class="min-w-full md:min-w-md min-h-[416px] md:min-h-[464px] px-4 pt-6 overflow-hidden relative"
    >
        <div class="flex flex-col gap-2">
            <h3 class="font-bold text-xl md:text-2xl">
                {{ title }}
            </h3>
            <p class="font-normal text-ellipsis line-clamp-2">
                {{ description }}
            </p>
            <p class="font-light">{{ totalQuestion }} questions</p>
        </div>
        <div
            class="h-96 w-xs absolute rotate-45 shadow-card top-64 left-12"
            :style="{ backgroundColor: accentColor }"
        ></div>
    </Card>
</template>
