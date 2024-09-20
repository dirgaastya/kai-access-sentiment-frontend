<script setup lang="ts">
import { ref } from 'vue';
import { Bar } from 'vue-chartjs';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js';

const props = withDefaults(
  defineProps<{
    negatif: number;
    positif: number;
    netral: number;
  }>(),
  {
    negatif: 0,
    positif: 0,
    netral: 0,
  }
);

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);
const chartData = ref({
  labels: ['Distribusi Sentimen'],
  datasets: [
    {
      label: 'Sentimen Positif',
      data: [props.positif],
      backgroundColor: ['#FF6384'],
      borderColor: ['#FF6384'],
      borderWidth: 1,
    },
    {
      label: 'Sentimen Negatif',
      data: [props.negatif],
      backgroundColor: ['#36A2EB'],
      borderColor: ['#36A2EB'],
      borderWidth: 1,
    },
    {
      label: 'Sentimen Netral',
      data: [props.netral],
      backgroundColor: ['#FFCE56'],
      borderColor: ['#FFCE56'],
      borderWidth: 1,
    },
  ],
});

const chartOptions = ref({
  responsive: true,
});
</script>

<template>
  <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
</template>
