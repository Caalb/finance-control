<script setup lang=ts>
import { Line as LineChartGenerator } from 'vue-chartjs'
import type {
  ChartData,
  ChartOptions
 } from 'chart.js';


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

const props = defineProps<{
  data?: ChartData
  optionsChico?: ChartOptions
}>()

const charData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
      data: [65, 59, 80, 81, 56, 55, 40]
    },

    {
      label: 'My Second dataset',
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1,
      data: [28, 48, 40, 19, 86, 27, 90]
    }
  ]
}

const options = {
  responsive: true,
  maintainAspectRatio: false
}

</script>

<template>
  <div class="h-[400px]">
    <h1>
      Graph
    </h1>
  
    <LineChartGenerator
      :data="charData"
      :options="options"
    />
  </div>
</template>