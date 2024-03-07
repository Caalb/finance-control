<script setup lang="ts">
  const colorMode = useColorMode()

  const isDark = computed<boolean>({
    get () {
      return colorMode.value === 'dark'
    },
    set () {
      colorMode.preference = colorMode.value === 'light' ? 'dark' : 'light'
      localStorage.setItem('theme', colorMode.preference)
    }
  })

  const toggleTheme = (): boolean => isDark.value = !isDark.value
</script>

<template>
  <UToggle
    on-icon="i-heroicons-sun-20-solid"
    off-icon="i-heroicons-mon-20-solid"
    :model-value="! isDark"
    color="yellow"
    data-testid="toggle-theme"
    @click="toggleTheme"
  />
</template>
