<template>
  <div>
    <UForm
      :state="form"
      class="flex flex-col gap-4"
    >
      <UFormGroup
        label="Email"
        name="email"
      >
        <UInput
          v-model="form.email"
        />
      </UFormGroup>

      <UFormGroup
        label="Password"
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

    <div class="flex justify-between mt-3">
      <UCheckbox
        v-model="showPassword"
        label="Remember"
      />

      <UButton variant="link">
        Forgot Password?
      </UButton>
    </div>


    <UButton
      type="submit"
      color="primary"
      class="block w-full mt-5"
    >
      Sign In
    </UButton>

    <UDivider
      class="mt-5"
      label="or continue with"
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

  const showPassword = ref(false);
  const form = ref({
    email: "",
    password: "",
  });

  const getEyeIcon = computed(() => {
    return showPassword.value
      ? "i-heroicons-eye-20-solid"
      : "i-heroicons-eye-slash-20-solid"
  });

  const toggleShowPassword = () => showPassword.value = !showPassword.value;

</script>
