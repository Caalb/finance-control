<script setup lang="ts">
import { z } from 'zod';
import { useI18n } from 'vue-i18n';
import type { FormSubmitEvent } from '#ui/types';

const { t } = useI18n();
const remember = ref<boolean>(false);
const showPassword = ref<boolean>(false);

const schema = z.object({
  email: z.string().email({ message: t('auth.login.validations.email')}),
  password: z.string()
    .min(8, { message: t('auth.login.validations.password.min') })
    .regex(/[!@#$%^&*()\-_+=[\]{};:'"\\|<,>.?/]/, { message: t('auth.login.validations.password.special' )})
    .regex(/[A-Z]/, { message: t('auth.login.validations.password.uppercase') })
});


type Schema = z.output<typeof schema>
const form = reactive<Schema>({
  email: '',
  password: '',
});

const getEyeIcon = computed<string>(() => showPassword.value
  ? 'i-heroicons-eye-20-solid'
  : 'i-heroicons-eye-slash-20-solid');

const toggleShowPassword = () => showPassword.value = !showPassword.value;
const onSubmit = async ({ data: { email }}: FormSubmitEvent<Schema>) => {
  const expiration = new Date();
  expiration.setMinutes(expiration.getMinutes() + 20);

  localStorage.setItem('auth', JSON.stringify({
    email,
    expiration: expiration.toISOString(),
    remember: remember.value,
  }));

  await navigateTo('/');
};
</script>

<template>
  <div>
    <UForm
      :state="form"
      :schema
      class="flex flex-col gap-4"
      @submit="onSubmit"
    >
      <UFormGroup
        :label="$t('auth.login.labels.email')"
        name="email"
      >
        <UInput v-model="form.email" />
      </UFormGroup>

      <UFormGroup
        :label="$t('auth.login.labels.password')"
        name="password"
      >
        <UInput
          v-model="form.password"
          :type="showPassword ? 'text' : 'password'"
          :ui="{ icon: { trailing: { pointer: '' } } }"
        >
          <template #trailing>
            <UButton
              color="gray"
              variant="link"
              :padded="false"
              :icon="getEyeIcon"
              @click="toggleShowPassword"
            />
          </template>
        </UInput>
      </UFormGroup>

      <div class="flex justify-between mt-3 items-center">
        <UCheckbox
          v-model="remember"
          :label="$t('auth.login.remember')"
        />

        <UButton variant="link">
          {{ $t('auth.login.forgot_password') }}
        </UButton>
      </div>


      <UButton
        type="submit"
        color="primary"
        class="block w-full mt-5"
      >
        {{ $t('auth.login.sign_in') }}
      </UButton>
    </UForm>

    <UDivider
      class="mt-5"
      :label="$t('auth.login.or_continue_with')"
      :ui="{ label: 'text-primary-500 dark:text-primary-400' }"
    />

    <div class="flex justify-center gap-3 mt-5">
      <UButton
        color="primary"
        variant="outline"
        icon="i-mdi-google"
        size="md"
      />

      <UButton
        variant="outline"
        icon="i-mdi-github"
        size="md"
      />

      <UButton
        color="primary"
        variant="outline"
        icon="i-mdi-facebook"
        size="md"
      />
    </div>
  </div>
</template>

