<script setup lang="ts">
import type { FormSubmitEvent } from '#ui/types';
import { z } from 'zod';
import { useI18n } from 'vue-i18n';

import { useUserStore } from '~/stores/user';

const userStore = useUserStore();
const { t } = useI18n();

const remember = ref<boolean>(false);
const show_password = ref<boolean>(false);
const tabs_item = [{ label: 'Email' }, { label: 'Username' }];
const selected_tab = ref<number>(0);
const request_pending = ref<boolean>(false);

const schema = z.object({
  email: z.string()
    .email({  message: t('auth.login.validations.email') })
    .refine(data => selected_tab.value === 0 ? !!data.length : true),
  username: z.string()
    .refine(data => selected_tab.value === 1 ? data.length >= 3 : true),
  password: z.string().min(1, { message: t('auth.login.validations.password.required')}),
});

type Schema = z.output<typeof schema>
const form = reactive<Schema>({
  email: '',
  username:  '',
  password: '',
});

const getEyeIcon = computed<string>(() => show_password.value
  ? 'i-heroicons-eye-20-solid'
  : 'i-heroicons-eye-slash-20-solid');

const toggleShowPassword = () => show_password.value = !show_password.value;
const onSubmit = async ({ data }: FormSubmitEvent<Schema>) => {
  request_pending.value = true;
  const { success } =  await userStore.userLogin(data);
  request_pending.value = false;

  if (success) {
    await navigateTo('/');
  }
};
</script>

<template>
  <div>
    <UTabs
      :items="tabs_item"
      class="mb-6"
      @change="selected_tab = $event"
    />

    <UForm
      :state="form"
      :schema
      class="flex flex-col gap-4"
      @submit="onSubmit"
    >
      <UFormGroup
        v-if="selected_tab === 0"
        :label="$t('auth.login.labels.email')"
        name="email"
      >
        <UInput v-model="form.email" />
      </UFormGroup>

      <UFormGroup
        v-else
        :label="$t('auth.login.labels.username')"
        name="username"
      >
        <UInput v-model="form.username" />
      </UFormGroup>

      <UFormGroup
        :label="$t('auth.login.labels.password')"
        name="password"
      >
        <UInput
          v-model="form.password"
          :type="show_password ? 'text' : 'password'"
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
        class=" w-full mt-5 flex justify-center"
        :label="$t('auth.login.sign_in')"
        :loading="request_pending"
      />
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

