<script setup lang="ts">
  definePageMeta({
    title: "Home",
    middleware: ["auth"]
  });

  useHead({ title: "Login Page | Home" })
</script>

<template>
  <div class="w-full">
    <h1>Home</h1>
  </div>
</template>
