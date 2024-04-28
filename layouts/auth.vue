<template>
  <div class="flex justify-between h-screen">
    <div class="w-full m-auto max-w-[500px]">
      <NuxtPage />
    </div>

    <div class="w-full max-w-[728px] m-auto max-md:hidden">
      <img
        src="~/assets/images/login.svg"
        alt="Login"
        class="mt-o mx-auto"
      >
    </div>
  </div>
</template>

