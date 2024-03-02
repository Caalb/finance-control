<template>
  <UToggle
    on-icon="i-heroicons-moon-20-solid"
    off-icon="i-heroicons-sun-20-solid"
    :model-value="isDark"
    color="gray"
    @click="toggleTheme"
  />
</template>

<script setup lang="ts">
  const colorMode = useColorMode()

  const isDark = computed<boolean>({
    get () {
      return colorMode.value === 'dark'
    },

    set () {
      colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
      localStorage.setItem('theme', colorMode.preference)
    }
  })

  const toggleTheme = (): boolean => {
    colorMode.preference = isDark.value ? 'dark' : 'light'

    return isDark.value = !isDark.value
  }
</script>
