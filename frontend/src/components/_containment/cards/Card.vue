<script setup lang="ts">
defineProps<{
  size: "compact" | "expanded";
  backgroundColor: string;
}>();

const styleMap: Record<string, string> = {
  compact: "h-36 w-72 md:min-h-44 md:max-w-80",
  expanded: "h-72 w-64 md:min-h-[462px] md:w-[474px]",
};
</script>

<template>
  <div
    class="overflow-hidden rounded-xl"
    :class="styleMap[size]"
    :style="{ backgroundColor: backgroundColor }"
  >
    <slot> </slot>
  </div>
</template>
