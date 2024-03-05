<script setup lang="ts">
  definePageMeta({
    title: "Home",
    middleware: ["auth"]
  });

  useHead({ title: "Login Page | Home" })
</script>
<template>
  <!-- sempre dê um nome pra classe, mesmo que seja para não fazer nada ou deixar largura cheia, como neste caso. -->
  <div class="w-full">
    <h1>Home</h1>
  </div>
</template>

