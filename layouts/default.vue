<template>
  <div class="p-10 h-screen">
    <header class="flex gap-3 items-center justify-end">
      <UButton
        variant="ghost"
        color="gray"
        size="xs"
      >
        Help
      </UButton>

      <UButton
        variant="ghost"
        color="gray"
        size="xs"
      >
        Contact us
      </UButton>

      <ToggleTheme />
      <SelectLanguage />

      <UButton
        variant="ghost"
        color="gray"
        size="xs"
      >
        Sign Up
      </UButton>
    </header>

    <main>
      <NuxtPage />
    </main>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>