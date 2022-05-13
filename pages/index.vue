<template>
    <div>
        <p>Hello world</p>
        <p>{{ isAuthenticated }}</p>
        <button @click="isAuthenticated = !isAuthenticated">authenticate</button>
        <p>{{ currentTheme }}</p>
        <button @click="toggleTheme(theme = !theme)">setTheme</button>
    </div>
</template>

<script lang="ts" setup>
import { useAuthStore } from "~/composables/auth";
import { useSettingsStore } from "~/composables/settings";
const settings = useSettingsStore();
const auth = useAuthStore();

const isAuthenticated = computed({
    get: () => auth.getAuthenticated,
    set: (val) => {
        auth.setAuthenticated(val)
    }
})
let currentTheme = computed({
    get: () => settings.getTheme,
    set: (val) => {
        settings.setTheme(val)
    }
})

let theme = false
function toggleTheme(theme) {
    console.log(theme)
    currentTheme.value = theme ? 'dark' : 'light'
}
</script>