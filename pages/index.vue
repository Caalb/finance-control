<template>
  <div>
    <h1>Home</h1>
  </div>
</template>

<script setup lang="ts">
  definePageMeta({
    title: "Home",
    middleware: ["auth"]
  });

  useHead({ title: "Login Page | Home" })
</script>