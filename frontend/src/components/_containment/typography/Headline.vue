<script setup lang="ts">
defineProps<{
  subHeading?: string;
  title: string;
  subTitle?: string;
  element: "h1" | "h2" | "h3" | "h4" | "h5";
  size: "xl" | "lg" | "md";
  classNames?: string;
}>();

const headlineStyleMap: Record<string, Record<string, string>> = {
  xl: {
    container: "flex flex-col gap-7 md:gap-8",
    subHeading: "font-medium",
    title: "text-4xl font-black md:text-6xl",
    subtitle: "text-sm md:text-xl",
  },
  lg: {
    subHeading: "font-bold",
    title: "font-black",
  },
};
</script>

<template>
  <div :class="[headlineStyleMap[size]?.container, classNames]">
    <div
      class="uppercase tracking-wide"
      :class="headlineStyleMap[size]?.subHeading"
    >
      {{ subHeading }}
    </div>
    <element :class="headlineStyleMap[size]?.title">{{ title }}</element>
    <p :class="headlineStyleMap[size]?.subtitle" class="font-normal">
      {{ subTitle }}
    </p>
  </div>
</template>
