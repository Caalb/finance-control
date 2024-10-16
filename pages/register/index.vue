<script setup>
definePageMeta({
  layout: 'auth',
});
</script>

<template>
  <div>
    <h6 class="text-3xl mb-10 uppercase font-extrabold">
      {{ $t('auth.register.title') }}
    </h6>

    <i18n-t
      keypath="auth.register.message"
      tag="p"
      class="mb-12"
    >
      <template #link>
        <UButton
          variant="link"
          :padded="false"
          to="/login"
          size="xl"
        >
          {{ $t('auth.login.sign_in') }}
        </UButton>
      </template>
    </i18n-t>

    <RegisterForm />
  </div>
</template>
