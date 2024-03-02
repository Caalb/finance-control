<template>
  <div>
    <UForm
      :state="form"
      class="flex flex-col gap-4"
    >
      <UFormGroup
        :label="$t('auth.login.labels.email')"
        name="email"
      >
        <UInput
          v-model="form.email"
        />
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
    </UForm>

    <div class="flex justify-between mt-3 items-center">
      <UCheckbox
        v-model="showPassword"
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
      {{ $t('auth.login.submit') }}
    </UButton>

    <UDivider
      class="mt-5"
      :label="$t('auth.login.or_continue_with')"
    />

    <div class="flex justify-center gap-3 mt-5">
      <UButton
        color="primary"
        variant="outline"
      >
        Google
      </UButton>

      <UButton
        color="primary"
        variant="outline"
      >
        Facebook
      </UButton>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from "vue";

  interface Form {
    email: string;
    password: string;
  }

  const showPassword = ref<boolean>(false);
  const form = ref<Form>({
    email: "",
    password: "",
  });

  const getEyeIcon = computed<string>(() => {
    return showPassword.value
      ? "i-heroicons-eye-20-solid"
      : "i-heroicons-eye-slash-20-solid"
  });

  const toggleShowPassword = () => showPassword.value = !showPassword.value;
</script>
