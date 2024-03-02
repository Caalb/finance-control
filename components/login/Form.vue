<template>
  <UForm :state="form">
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
