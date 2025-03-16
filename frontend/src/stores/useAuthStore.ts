import { computed, ref, watch } from "vue";
import { defineStore } from "pinia";
import { useRouter } from "vue-router";
import axiosClient from "@/lib/axiosClient";

const useAuthStore = defineStore("auth", () => {
    const router = useRouter();

    const storedUser = localStorage.getItem("user");
    const user = ref(storedUser ? JSON.parse(storedUser) : storedUser);
    
    const isAuthenticated = computed(() => !!user.value);

    const getProfile = async () => {
        try {
            const res = await axiosClient.get("/api/me");
            
            if (res.status !== 200) throw new Error();

            const userData = res.data;

            user.value = userData;
            localStorage.setItem("user", JSON.stringify(userData));

        } catch (e) {
            console.error(e);
        }
    }

    const logout = async () => {
        try {
            const res = await axiosClient.post("/auth/logout");

            if (res.status !== 200) throw new Error();
    
            handleUnauthenticated();
        } catch (e) {
            console.error(e);
        }
    }

    const handleUnauthenticated = () => {
        localStorage.removeItem("user");
        user.value = null;
        router.push("/login");
    }

    return {
        user,
        isAuthenticated,
        getProfile,
        logout,
        handleUnauthenticated,
    }
});

export default useAuthStore;
