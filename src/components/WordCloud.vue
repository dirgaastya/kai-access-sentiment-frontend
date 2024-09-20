<script setup lang="ts">
import {
  POSITIF_CONSTANT,
  NEGATIF_CONSTANT,
  NETRAL_CONSTANT,
} from '@/data/wordcloud_constants';
</script>
<template>
  <div class="grid grid-cols-3 gap-x-6">
    <VCard title="Distribusi Kata Positif">
      <table
        class="border border-gray-300 divide-y divide-gray-200 rounded overflow-hidden shadow"
      >
        <thead class="bg-gray-50">
          <tr>
            <th
              class="px-3 py-1 text-left text-xs text-gray-500 uppercase tracking-wider"
            >
              Kata
            </th>
            <th
              class="px-3 py-1 text-left text-xs text-gray-500 uppercase tracking-wider"
            >
              Jumlah
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr
            v-for="data in POSITIF_CONSTANT.sort((a, b) => b[1] - a[1]).slice(
              0,
              5
            )"
          >
            <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
              {{ data[0] }}
            </td>
            <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-500">
              {{ data[1] }}
            </td>
          </tr>
        </tbody>
      </table>
    </VCard>
    <VCard title="Distribusi Kata Negatif">
      <table
        class="border border-gray-300 divide-y divide-gray-200 rounded overflow-hidden shadow"
      >
        <thead class="bg-gray-50">
          <tr>
            <th
              class="px-3 py-1 text-left text-xs text-gray-500 uppercase tracking-wider"
            >
              Kata
            </th>
            <th
              class="px-3 py-1 text-left text-xs text-gray-500 uppercase tracking-wider"
            >
              Jumlah
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr
            v-for="data in NEGATIF_CONSTANT.sort((a, b) => b[1] - a[1]).slice(
              0,
              5
            )"
          >
            <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
              {{ data[0] }}
            </td>
            <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-500">
              {{ data[1] }}
            </td>
          </tr>
        </tbody>
      </table>
    </VCard>
    <VCard title="Distribusi Kata Netral">
      <table
        class="border border-gray-300 divide-y divide-gray-200 rounded overflow-hidden shadow"
      >
        <thead class="bg-gray-50">
          <tr>
            <th
              class="px-3 py-1 text-left text-xs text-gray-500 uppercase tracking-wider"
            >
              Kata
            </th>
            <th
              class="px-3 py-1 text-left text-xs text-gray-500 uppercase tracking-wider"
            >
              Jumlah
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr
            v-for="data in NETRAL_CONSTANT.sort((a, b) => b[1] - a[1]).slice(
              0,
              5
            )"
          >
            <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
              {{ data[0] }}
            </td>
            <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-500">
              {{ data[1] }}
            </td>
          </tr>
        </tbody>
      </table>
    </VCard>
  </div>
  <section class="mt-10">
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-xl font-bold text-gray-800 mb-6">
          Word Cloud Sentimen Positif
        </h1>
        <img src="@/assets/wordcloud-positif.png" alt="word-cloud-positif" />
      </div>
      <div>
        <h1 class="text-xl font-bold text-gray-800 mb-6">
          Word Cloud Sentimen Negatif
        </h1>
        <img src="@/assets/wordcloud-negatif.png" alt="word-cloud-negatif" />
      </div>
      <div>
        <h1 class="text-xl font-bold text-gray-800 mb-6">
          Word Cloud Sentimen Netral
        </h1>
        <img src="@/assets/wordcloud-netral.png" alt="word-cloud-netral" />
      </div>
    </div>
  </section>
</template>
