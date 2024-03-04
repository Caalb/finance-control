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

<script setup lang="ts">
console.log(useColorMode().value)
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

  const toggleTheme = (): boolean => {
    return isDark.value = !isDark.value
  }
</script>
