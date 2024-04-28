<script setup lang="ts">
import { z } from 'zod';
import { useI18n } from 'vue-i18n';
import type { FormSubmitEvent } from '#ui/types';

import { useUserStore } from '~/stores/user';

const { t } = useI18n();
const userStore = useUserStore();
const toast = useToast();

const showPassword = ref<boolean>(false);
const toggleShowPassword = () => showPassword.value = !showPassword.value;

const getEyeIcon = computed<string>(() => showPassword.value
  ? 'i-heroicons-eye-20-solid'
  : 'i-heroicons-eye-slash-20-solid');

const schema = z.object({
  email: z.string().email({ message: t('auth.register.validations.email')}),
  username: z.string().min(5, { message: t('auth.register.validations.username.min') }),
  name: z.string().min(5, { message: t('auth.register.validations.name.min') }),
  confirm_password: z.string().refine((data: any): Boolean => data === form.password, { message: t('auth.register.validations.confirm_password') }),
  password: z.string()
    .min(8, { message: t('auth.register.validations.password.min') })
    .regex(/[!@#$%^&*()\-_+=[\]{};:'"\\|<,>.?/]/, { message: t('auth.register.validations.password.special' )})
    .regex(/[A-Z]/, { message: t('auth.register.validations.password.uppercase') }),
});

type Schema = z.output<typeof schema>
const form = reactive<Schema>({
  name: '',
  email: '',
  username: '',
  password: '',
  confirm_password: '',
});

const onSubmit = async (event: FormSubmitEvent<Schema>) => {
  const { success }=   await userStore.registerUser(event.data);

  if (success) {
    toast.add({
      title: t('auth.register.success.title'),
      description: t('auth.register.success.description'),
    });

    navigateTo('/login');
  }
};
</script>

<template>
  <UForm
    :schema
    :state="form"
    class="space-y-5"
    @submit="onSubmit"
  >
    <UFormGroup
      :label="$t('auth.register.labels.name')"
      name="name"
    >
      <UInput
        v-model="form.name"
        :placeholder="$t('auth.register.placeholders.name')"
        icon="i-heroicons-user"
      />
    </UFormGroup>

    <UFormGroup
      :label="$t('auth.register.labels.email')"
      name="email"
    >
      <UInput
        v-model="form.email"
        :placeholder="$t('auth.register.placeholders.email')"
        icon="i-heroicons-envelope"
      />
    </UFormGroup>

    <UFormGroup
      :label="$t('auth.register.labels.username')"
      eager-validation
      name="username"
    >
      <UInput
        v-model="form.username"
        :placeholder="$t('auth.register.placeholders.username')"
        icon="i-heroicons-user-circle"
      />
    </UFormGroup>

    <UFormGroup
      :label="$t('auth.register.labels.password')"
      name="password"
    >
      <UInput
        v-model="form.password"
        icon="i-heroicons-lock-closed"
        :placeholder="$t('auth.register.placeholders.password')"
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


    <UFormGroup
      :label="$t('auth.register.labels.confirm_password')"
      name="confirm_password"
    >
      <UInput
        v-model="form.confirm_password"
        :placeholder="$t('auth.register.placeholders.confirm_password')"
        icon="i-heroicons-lock-closed"
        type="password"
      />
    </UFormGroup>

    <UButton
      type="submit"
      block
      :label="$t('auth.register.action_button')"
    />
  </UForm>
</template>

