<script setup lang="ts">
import 'v-calendar/dist/style.css';

definePageMeta({
  title: 'Home',
  middleware: ['auth']
});

useHead({ title: 'Login Page | Home' });

const { $http } = useNuxtApp();

const response = ref(null);

onMounted(() => {
  $http.api.getTransactions().then((res) => {
    response.value = res;
  });
});

</script>

<template>
  <div class="w-full my-3">
    <div class="flex gap-2">
      {{ response }}
    </div>
  </div>
</template>
