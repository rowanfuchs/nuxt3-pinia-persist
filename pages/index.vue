<template>
    <div>
        <p>Hello world, authenticated: {{ isAuthenticated }}</p>
        <button @click="isAuthenticated = !isAuthenticated">authenticate</button>
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
const currentTheme = computed({
    get: () => settings.getTheme,
    set: (val) => {
        settings.setTheme(val)
    }
})
</script>