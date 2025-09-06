import axios from "axios";
import { defineStore } from "pinia";

export const useAuthStore = defineStore("authStore", {
    state: () => ({
        token: null,
        isAuthenticated: false,
    }),
    actions: {

        async login(username, password) {
            const res = await axios.post('https://fakestoreapi.com/auth/login', { username, password },
                { headers: { "Content-Type": "application/json" } }
            )
            this.token = res.data.token;
            this.isAuthenticated = true;
        },
        logout() {
            this.token = null;
            this.isAuthenticated = false;
        }
    },
    persist: {
        enabled: true,
        strategies: [{
            key: "auth",
            storage:localStorage
         }]
    }
})