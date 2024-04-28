<script setup>
import { useUserStore } from '~/stores/user';

const userStore = useUserStore();
const toast = useToast();

const handleLogout = async () => {
  const { success} =await userStore.userLogout();

  if(success) {
    toast.add({
      title: 'Logout',
      description: 'You have been logged out',
    });

    await navigateTo('/login');
  }
};
</script>

<template>
  <div class="py-10 px-2 flex bg-zinc-800 rounded-r-md">
    <UTooltip
      text="Logout"
      class="self-end"
      :popper="{ arrow: true, placement: 'top' }"
    >
      <UButton
        icon="i-heroicons-arrow-left-end-on-rectangle"
        color="primary"
        square
        variant="solid"
        @click="handleLogout"
      />
    </UTooltip>
  </div>
</template>
