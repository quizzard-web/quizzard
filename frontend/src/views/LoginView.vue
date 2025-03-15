<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const token = route.query.token as string|null || localStorage.getItem("accessToken");
const serverUrl = import.meta.env.VITE_SERVER_URL;

/**
 * @todo
 * 1. use axios
 * 2. implement refresh token functionality
 * 3. implement logout functionality
 */
async function fetchUser() {
        try {
            const response = await fetch(serverUrl + "/api/user", {
                method: "GET",
                headers: {
                    "Authorization": "Bearer " + token,
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) throw new Error("Failed to fetch user data");

            const user = await response.json();

            /**
             * temporarily store in localStorage while
             * state management is not yet setup
             */
            localStorage.setItem("user", JSON.stringify(user));
        } catch (error) {
            console.error(error);
        }
}
    
if (token) {
    /**
     * temporarily store in localStorage while
     * state management is not yet setup
     */
    localStorage.setItem("accessToken", token);

    (async () => {
        await fetchUser();
        router.push("/");
    })();
}
</script>

<template>
    <div>
        <a v-if="!token" :href="`${serverUrl}/auth/login/federated/google`">
            Login with Google
        </a>
        <div v-if="token">Authenticating...</div>
    </div>
</template>
