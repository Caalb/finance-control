<script setup lang=ts>
import { Line } from 'vue-chartjs'
import type { ChartData, Point, ChartOptions } from 'chart.js'

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement
} from 'chart.js'

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement
)

const props = defineProps<{ data: ChartData<"line", (number | Point | null)[], unknown> }>()
const options: ChartOptions<'line'> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    tooltip: {
      enabled: true,
      intersect: false,
      mode: 'nearest',
      callbacks: {
        label: (context) => {
          const label = context.dataset.label || '';
          const value = context.parsed.y;
          return `${label}: $ ${value}`;
        }
      }
    }
  },
  elements: {
    point: {
      radius: 0
    }
  }
}
</script>

<template>
  <div class="h-[400px]">
    <h1>
      Graph
    </h1>

    <Line
      :data="props.data"
      :options="options"
    />
  </div>
</template>
