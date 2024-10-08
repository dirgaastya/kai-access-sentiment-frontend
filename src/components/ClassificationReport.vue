<script setup lang="ts">
import { ref } from 'vue';

const rows = ref([
  {
    class: 'negatif',
    precision: '0.88',
    recall: '0.99',
    f1_score: '0.93',
    support: '3194',
  },
  {
    class: 'netral',
    precision: '0.00',
    recall: '0.00',
    f1_score: '0.00',
    support: '184',
  },
  {
    class: 'positif',
    precision: '0.85',
    recall: '0.50',
    f1_score: '0.63',
    support: '523',
  },
]);

const accuracy = ref('0.88');
const macro_avg = ref({
  precision: '0.58',
  recall: '0.50',
  f1_score: '0.52',
  support: '3901',
});
const weighted_avg = ref({
  precision: '0.83',
  recall: '0.88',
  f1_score: '0.85',
  support: '3901',
});
</script>

<template>
  <table
    class="min-w-full bg-white border border-gray-200 !rounded-lg shadow-sm overflow-hidden"
  >
    <thead>
      <tr class="rounded-t-md border-b bg-gray-50 text-left">
        <th class="px-6 py-3 font-semibold text-gray-700">Class</th>
        <th class="px-6 py-3 font-semibold text-gray-700">Precision</th>
        <th class="px-6 py-3 font-semibold text-gray-700">Recall</th>
        <th class="px-6 py-3 font-semibold text-gray-700">F1-Score</th>
        <th class="px-6 py-3 font-semibold text-gray-700">Support</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, index) in rows" :key="index" class="border-b">
        <td class="px-6 py-4">{{ row.class }}</td>
        <td class="px-6 py-4 text-center">{{ row.precision }}</td>
        <td class="px-6 py-4 text-center">{{ row.recall }}</td>
        <td class="px-6 py-4 text-center">{{ row.f1_score }}</td>
        <td class="px-6 py-4 text-center">{{ row.support }}</td>
      </tr>
      <tr class="border-b bg-gray-50 font-semibold">
        <td class="px-6 py-4">Accuracy</td>
        <td colspan="4" class="px-6 py-4 text-center">{{ accuracy }}</td>
      </tr>
      <tr class="border-b">
        <td class="px-6 py-4">Macro avg</td>
        <td class="px-6 py-4 text-center">{{ macro_avg.precision }}</td>
        <td class="px-6 py-4 text-center">{{ macro_avg.recall }}</td>
        <td class="px-6 py-4 text-center">{{ macro_avg.f1_score }}</td>
        <td class="px-6 py-4 text-center">{{ macro_avg.support }}</td>
      </tr>
      <tr class="border-b bg-gray-50 font-semibold">
        <td class="px-6 py-4">Weighted avg</td>
        <td class="px-6 py-4 text-center">{{ weighted_avg.precision }}</td>
        <td class="px-6 py-4 text-center">{{ weighted_avg.recall }}</td>
        <td class="px-6 py-4 text-center">{{ weighted_avg.f1_score }}</td>
        <td class="px-6 py-4 text-center">{{ weighted_avg.support }}</td>
      </tr>
    </tbody>
  </table>
</template>
