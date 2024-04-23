<script setup lang="ts">
import 'v-calendar/dist/style.css';
import { format } from 'date-fns';
import { useI18n } from 'vue-i18n';

import {
  dateToUnixTimestamp,
  unixTimestampToDate
} from '~/helpers/date';

definePageMeta({
  title: 'Home',
  middleware: ['auth']
});

useHead({ title: 'Login Page | Home' });

const { $http } = useNuxtApp();
const { t } = useI18n();

const crypto = ref<string>('');
const maxDate = new Date().setDate(new Date().getDate() - 1);
const date = ref<Date>(new Date(maxDate));
const priceHistory = ref([]);
const loading = ref<boolean>(false);
const fetchHistoryLoading = ref<boolean>(false);


const fetchHistory = async () => {
  try {
    fetchHistoryLoading.value = true;
    const { data: { price_history: history } } = await $http.mobula.getCryptoPriceHistory({
      crypto: crypto.value,
      from: dateToUnixTimestamp(date.value),
    });

    return priceHistory.value = history;
  } catch (error) {
    console.error(error);
  } finally {
    fetchHistoryLoading.value = false;
  }
};

const searchCryptocurrencies = async (search: string) => {
  loading.value = true;
  const { data, error } = await $http.mobula.searchCryptocurrencies(search);
  loading.value = false;
  if (error) {
    return [];
  }

  return data.map((crypto: any) => crypto.name);
};

const formatToChartData = computed(() => {
  const labels: string[] = [];
  const datasets = {
    label: crypto.value,
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgba(255, 99, 132, 1)',
    borderWidth: 1,
    data: [],
  };

  priceHistory.value.map(asset => {
    const date = unixTimestampToDate(asset[0]);

    labels.push(format(date, 'd MMM, yyy'));
    datasets.data.push(asset[1]);
  });

  return {
    labels,
    datasets: [datasets]
  };
});
</script>

<template>
  <div class="w-full my-3">
    <div class="flex gap-2">
      <USelectMenu
        v-model="crypto"
        :loading="loading"
        :searchable="searchCryptocurrencies"
        :searchable-placeholder="t('shared.index.select.searchable_placeholder')"
        class="w-full lg:w-48"
        option-attribute="name"
        :placeholder="t('shared.index.select.placeholder')"
        trailing
        @change="fetchHistory"
      />

      <UPopover :popper="{ placement: 'bottom-start' }">
        <UButton
          icon="i-heroicons-calendar-days-20-solid"
          :label="format(date, 'd MMM, yyy')"
        />

        <template #panel="{ close }">
          <DatePicker
            v-model="date"
            :max-date="maxDate"
            @close="close"
            @update:model-value="fetchHistory"
          />
        </template>
      </UPopover>
    </div>

    <HomeLineGraph
      :data="formatToChartData"
      class="mt-5"
    />
  </div>
</template>
