import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
    state: () => {
        return {
            authenticated: false
        };
    },
    getters: {
        getAuthenticated: (state) => state.authenticated
    },
    actions: {
        setAuthenticated: async function (payload) {
            this.authenticated = payload
        }
    }
}, {
    persist: true
});
