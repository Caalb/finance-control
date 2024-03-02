<template>
  <div class="flex justify-between h-full">
    <div class="w-1/3 m-auto">
      <h6 class="text-3xl mb-5">
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

    <div class="w-3/5 m-auto">
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