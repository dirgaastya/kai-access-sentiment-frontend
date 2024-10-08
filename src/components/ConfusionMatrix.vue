<script setup lang="ts">
import { reactive } from 'vue';
const confusionMatrix = reactive({
  negatif: { negatif: 3153, netral: 0, positif: 41 },
  netral: { negatif: 178, netral: 0, positif: 6 },
  positif: { negatif: 259, netral: 0, positif: 264 },
});
</script>

<template>
  <div class="flex justify-center items-center mb-2">
    <span class="mr-2"></span>
    <span class="text-gray-800 font-semibold text-sm">Predicted</span>
  </div>

  <div class="flex">
    <div class="-ms-4 flex flex-col justify-center">
      <span class="text-gray-800 font-semibold -rotate-90 transform text-sm"
        >True</span
      >
    </div>

    <table
      class="border border-gray-300 divide-y divide-gray-200 rounded overflow-hidden shadow"
    >
      <thead class="bg-gray-50">
        <tr>
          <th
            class="px-3 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          ></th>
          <th
            class="px-3 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Negatif
          </th>
          <th
            class="px-3 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Netral
          </th>
          <th
            class="px-3 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Positif
          </th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
        <tr>
          <td
            class="px-3 py-2 whitespace-nowrap text-sm font-medium text-gray-900"
          >
            Negatif
          </td>
          <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-500">
            {{ confusionMatrix.negatif.negatif }}
          </td>
          <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-500">
            {{ confusionMatrix.negatif.netral }}
          </td>
          <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-500">
            {{ confusionMatrix.negatif.positif }}
          </td>
        </tr>
        <tr>
          <td
            class="px-3 py-2 whitespace-nowrap text-sm font-medium text-gray-900"
          >
            Netral
          </td>
          <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-500">
            {{ confusionMatrix.netral.negatif }}
          </td>
          <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-500">
            {{ confusionMatrix.netral.netral }}
          </td>
          <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-500">
            {{ confusionMatrix.netral.positif }}
          </td>
        </tr>
        <tr>
          <td
            class="px-3 py-2 whitespace-nowrap text-sm font-medium text-gray-900"
          >
            Positif
          </td>
          <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-500">
            {{ confusionMatrix.positif.negatif }}
          </td>
          <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-500">
            {{ confusionMatrix.positif.netral }}
          </td>
          <td class="px-3 py-2 whitespace-nowrap text-sm text-gray-500">
            {{ confusionMatrix.positif.positif }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
