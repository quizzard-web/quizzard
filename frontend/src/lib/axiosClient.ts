import axios from "axios";
import useAuthStore from "@/stores/useAuthStore";

const axiosClient = axios.create({
    baseURL: import.meta.env.VITE_SERVER_URL,
    withCredentials: true,
});

axiosClient.interceptors.response.use(
    (response) => response,
    (error) => {
        if(
            error.response?.status === 401
            && error.response?.data?.message === "Unauthenticated."
        ) {
            const authStore = useAuthStore();
            authStore.handleUnauthenticated();
        }

        return Promise.reject(error);
    }
);

export default axiosClient;
