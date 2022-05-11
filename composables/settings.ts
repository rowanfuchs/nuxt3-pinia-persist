import { defineStore } from 'pinia'

export const useSettingsStore = defineStore('settings', {
    state: () => {
        return {
            theme: 'light',
            locale: 'en'
        };
    },
    getters: {
        getLocale: (state) => state.locale,
        getTheme: (state) => state.theme
    },
    actions: {
        setLocale: async function (payload) {
            this.locale = payload
        },
        setTheme: async function (payload) {
            this.theme = payload
        }
    }
}, {
    persist: true
})
