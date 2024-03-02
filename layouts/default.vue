<template>
  <div class="p-10 h-screen">
    <header class="flex gap-3 items-center justify-end">
      <ToggleTheme />
      <SelectLanguage />
    </header>

    <main class="h-full">
      <NuxtPage />
    </main>
  </div>
</template>
