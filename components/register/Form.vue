<script setup lang="ts">
import { z } from 'zod';
import { useI18n } from 'vue-i18n';
import type { FormSubmitEvent } from '#ui/types';

const { t } = useI18n();

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
  console.log(event);
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
      required
    >
      <UInput
        v-model="form.name"
        :placeholder="$t('auth.register.placeholders.name')"
        icon="i-heroicons-user"
      />
    </UFormGroup>

    <UFormGroup
      :label="$t('auth.register.labels.email')"
      required
    >
      <UInput
        v-model="form.email"
        :placeholder="$t('auth.register.placeholders.email')"
        icon="i-heroicons-envelope"
      />
    </UFormGroup>

    <UFormGroup
      :label="$t('auth.register.labels.username')"
      required
      eager-validation
    >
      <UInput
        v-model="form.username"
        :placeholder="$t('auth.register.placeholders.username')"
        icon="i-heroicons-user-circle"
      />
    </UFormGroup>

    <UFormGroup
      :label="$t('auth.register.labels.password')"
      required
    >
      <UInput
        v-model="form.password"
        :placeholder="$t('auth.register.placeholders.password')"
        icon="i-heroicons-lock-closed"
        type="password"
      />
    </UFormGroup>


    <UFormGroup
      :label="$t('auth.register.labels.confirm_password')"
      required
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
      :label="$t('auth.register.action_button')"
    />
  </Uform>
</template>

