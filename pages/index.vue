<template>
  <div class="flex justify-between h-full">
    <div class="w-full m-auto max-w-[500px]">
      <h6 class="text-3xl mb-10">
        {{ $t('auth.login.title') }}
      </h6>

      <p class="mb-12">
        {{ $t('auth.login.message') }}

        <NuxtLink to="/signup">
          Sign up
        </NuxtLink>
      </p>

      <LoginForm />
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

<script setup lang="ts">

</script>
