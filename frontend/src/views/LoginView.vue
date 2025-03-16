<script setup lang="ts">
import useAuthStore from "@/stores/useAuthStore";
import { useRouter, useRoute } from "vue-router";

const serverUrl = import.meta.env.VITE_SERVER_URL;

const route = useRoute();
const router = useRouter();
const authStore = useAuthStore();

const loginResult = route.query.success;

if (loginResult) {
    if (loginResult === "true") {
        authStore.getProfile();
        router.push("/");
    } else {
        console.log("Login failed. Please try again later.");
    }
}
</script>

<template>
    <div>
        <a :href="`${serverUrl}/auth/login/federated/google`">
            Login with Google
        </a>
    </div>
</template>
