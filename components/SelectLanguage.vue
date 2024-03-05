<script setup lang="ts">
  import { useI18n } from "vue-i18n";

  // sugeriria botar Locale em outro arquivo, e ele ser plural. Mas aqui tá de boas
  interface Locale {
    label: string;
    value: string;
  }

  const {
    availableLocales,
    locale,
    t
  } = useI18n();

  const formattedLocales = computed<Locale[]>(() => {
  return availableLocales.map((locale: string) => ({
    label: t(`shared.locales.${locale}`),
    value: locale,
  }));
});
</script>

<template>
  <USelect
    v-model="locale"
    size="xs"
    color="gray"
    variant="none"
    :options="formattedLocales"
    option-attribute="label"
  />
</template>
