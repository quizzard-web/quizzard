<script setup lang="ts">
defineProps<{
  subHeading?: string;
  title: string;
  subTitle?: string;
  element: "h1" | "h2" | "h3" | "h4" | "h5";
  size: "xl" | "lg" | "md";
}>();
</script>

<template>
  <div class="uppercase">{{ subHeading }}</div>
  <element>{{ title }}</element>
  <p class="subtitle">
    {{ subTitle }}
  </p>
</template>
