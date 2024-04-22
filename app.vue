<template>
  <NuxtLayout>
    <UContainer>
      <NuxtPage />
    </UContainer>

    <UNotifications />
  </NuxtLayout>
</template>

<script type="ts" setup>
const colorMode = useColorMode()
const setThemePreference = () => {
  const theme = localStorage.getItem('theme')
  if (theme) {
    return colorMode.preference = theme
  }
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  return colorMode.preference = prefersDark ? 'dark' : 'light'
}
  
onMounted(() => setThemePreference())
</script>
