<template>
  <div class="flex justify-between h-full">
    <div class="w-full m-auto max-w-[500px]">
      <h6 class="text-3xl mb-10">
        {{ $t('auth.login.title') }}
      </h6>


      <i18n-t
        keypath="auth.login.message"
        tag="p"
        class="mb-12"
      >
        <template #link>
          <UButton
            variant="link"
            :padded="false"
            size="xl"
          >
            {{ $t('auth.login.sign_up') }}
          </UButton>
        </template>
      </i18n-t>

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

<script lang="ts" setup>
  useHead({ title: "Login Page | Login " })
</script>
