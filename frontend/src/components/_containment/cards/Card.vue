<script setup lang="ts">
defineProps<{
    size: "compact" | "expanded";
    backgroundColor: string;
}>();

const styleMap: Record<string, string> = {
    compact: "h-36 w-72 md:min-h-44 md:w-[332px]",
    expanded: "h-72 w-72 md:min-h-[462px] md:w-[474px]",
};
</script>

<template>
    <div
        class="overflow-hidden rounded-xl"
        :style="{ backgroundColor: backgroundColor }"
        :class="styleMap[size]"
    >
        <slot></slot>
    </div>
</template>
