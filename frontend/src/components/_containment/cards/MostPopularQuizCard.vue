<script setup lang="ts">
import Card from "./Card.vue";

defineProps<{
  title: string;
  description: string;
  url: string;
  rank: number;
  totalUser: number;
  totalQuestion: number;
}>();
</script>

<template>
  <Card size="expanded" background-color="#006450"> </Card>
</template>
