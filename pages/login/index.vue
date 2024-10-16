<script lang="ts" setup>
useHead({ title: 'Login Page | Login ' });
definePageMeta({
  layout: 'auth',
});
</script>

<template>
  <div>
    <h6 class="text-3xl mb-10 uppercase font-extrabold">
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
          to="/register"
          size="xl"
        >
          {{ $t('auth.login.sign_up') }}
        </UButton>
      </template>
    </i18n-t>

    <LoginForm />
  </div>
</template>

