<script setup lang="ts">
import { ref } from 'vue';
import data from '@/data/data.json';
import type { VDataTableHeader } from '@morpheme/table';
const headers = ref<VDataTableHeader[]>([
  {
    value: 'index',
    text: 'No',
    width: 10,
  },
  {
    value: 'content',
    text: 'Ulasan',
    tdClass: '!w-5/6',
    width: 80,
  },
  {
    value: 'label',
    text: 'Sentimen',
    width: 10,
  },
]);
</script>
<template>
  <VDataTable :items="data" :headers="headers" items-per-page="10">
    <template #item.content="{item}">
      <div class="whitespace-pre-wrap">{{ item.content }}</div>
    </template>
    <template #item.label="{item}">
      <VBadge
        rounded="lg"
        small
        :color="
          item.label === 'positif'
            ? 'success'
            : item.label === 'netral'
            ? 'info'
            : 'error'
        "
      >
        <span class="capitalize">{{ item.label }}</span>
      </VBadge>
    </template>
  </VDataTable>
</template>
