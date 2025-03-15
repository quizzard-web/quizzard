<script setup lang="ts">
import FeedLayout from "@/layouts/FeedLayout.vue";
import { ref } from "vue";

const quizzes = ref([] as any);
let user = JSON.parse(localStorage.getItem("user") || "{}");
const token = localStorage.getItem("accessToken");
const serverUrl = import.meta.env.VITE_SERVER_URL;

const fetchQuizzes = async () => {
  /**
   * temporarily store in localStorage while
   * state management is not yet setup
   */
  try {
    const response = await fetch(
      serverUrl + "/api/quiz", {
        method: "GET",
        headers: {
            "Authorization": "Bearer " + token,
            "Content-Type": "application/json",
        },
        credentials: "include"
      }
    );

    if (!response.ok) throw new Error("Failed to fetch quizzes.");

    quizzes.value = await response.json();

  } catch (e) {
    console.error(e);
  }
};

if (token) {
  fetchQuizzes();
}
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
    <p v-if="user">{{ user.firstName }}</p>
    <ul v-if="quizzes.length">
      <li v-for="quiz in quizzes" :key="quiz.id">
        <h3>{{ quiz.title }}</h3>
        <p>{{ quiz.description }}</p>
      </li>
    </ul>
  </FeedLayout>
</template>
