<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script type="ts" setup>
  import { onMounted } from "vue";

  const colorMode = useColorMode()

  onMounted(() => {
    setThemePreference()
  })

  const setThemePreference = () => {
    const theme = localStorage.getItem('theme')

    if (theme) {
      return colorMode.preference = theme
    }

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    return colorMode.preference = prefersDark ? 'dark' : 'light'
  }
</script>
