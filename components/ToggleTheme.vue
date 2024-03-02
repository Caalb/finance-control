<template>
  <ClientOnly>
    <UToggle
        on-icon="i-heroicons-moon-20-solid"
        off-icon="i-heroicons-sun-20-solid"
        :model-value="isDark"
        @click="toggleTheme"
    />
  </ClientOnly>
</template>

<script setup lang="ts">
  const colorMode = useColorMode()

  const isDark = computed({
    get () {
      return colorMode.value === 'dark'
    },

    set () {
      colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
      localStorage.setItem('theme', colorMode.preference)
    }
  })

  const toggleTheme = () => {
    colorMode.preference = isDark.value ? 'dark' : 'light'

    return isDark.value = !isDark.value
  }
</script>
