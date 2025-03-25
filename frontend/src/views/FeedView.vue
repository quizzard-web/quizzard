<script setup lang="ts">
import FeedLayout from "@/layouts/FeedLayout.vue";
import axiosClient from "@/lib/axiosClient";
import useAuthStore from "@/stores/useAuthStore";
import { ref } from "vue";

const authStore = useAuthStore();
const quizzes = ref([] as any);

const getQuizzes = async () => {
  try {
    const res = await axiosClient.get("/api/quiz");

    if (res.status !== 200) throw new Error();

    quizzes.value = res.data;
  } catch (e) {
    console.error(e);
  }
};

getQuizzes();
</script>

<template>
  <FeedLayout>
    <Headline
      element="h1"
      title="Most Popular Quizzes"
      sub-title="Non interdum nisl luctus morbi tellus posuere pellentesque aliquam ultrices."
      sub-heading="Vel amet faucibus tellus turpis"
      size="lg"
    />
    <ul v-if="quizzes.length">
      <li v-for="quiz in quizzes" :key="quiz.id">
        <h3>{{ quiz.title }}</h3>
        <p>{{ quiz.description }}</p>
      </li>
    </ul>
    <button v-if="authStore.isAuthenticated" @click="authStore.logout">Logout</button>
  </FeedLayout>
</template>
