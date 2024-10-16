<template>
  <div class="h-screen flex">
    <LayoutSidebar />

    <div class="p-10 w-full">
      <header class="flex gap-3 items-center justify-end">
        <ToggleTheme />
        <SelectLanguage />
      </header>

      <main class="h-full">
        <NuxtPage />
      </main>
    </div>
  </div>
</template>
