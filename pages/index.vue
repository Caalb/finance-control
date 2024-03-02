<template>
  <div class="flex justify-between">
    <div class="w-1/3">
      <h6 class="text-2xl mb-5">
        WELCOME BACK!
      </h6>

      <p>
        Don't have an account?

        <NuxtLink to="/signup">
          Sign up
        </NuxtLink>
      </p>

      <LoginForm />
    </div>

    <div class="w-3/4">
      <img
        src="~/assets/images/login.svg"
        alt="Login"
      >
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>