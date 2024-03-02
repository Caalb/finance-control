<template>
  <USelect
    v-model="locale"
    :options="formattedLocales"
    option-attribute="label"
  />
</template>

<script setup lang="ts">
  import { useI18n } from "vue-i18n";

  const {
    availableLocales,
    locale,
    t
  } = useI18n();

  const formattedLocales = availableLocales.map((locale) => ({
    label: t(`locales.${locale}`),
    value: locale,
  }));
</script>
