<script setup lang="ts">
import { ref } from 'vue';

const modelPerfomanceItems = ref([
  {
    text: 'Akurasi',
    value: '87.46%',
    icon: 'gg:performance',
  },
  {
    text: 'Precision',
    value: '83.18%',
    icon: 'icon-park-twotone:performance',
  },
  {
    text: 'Recall',
    value: '87.46%',
    icon: 'akar-icons:arrow-cycle',
  },
  {
    text: 'F1-Score',
    value: '84.45%',
    icon: 'material-symbols-light:readiness-score-outline',
  },
]);
</script>

<template>
  <VList>
    <div v-for="(item, index) in modelPerfomanceItems" :key="index">
      <VListItem :prepend-icon="item.icon">
        <p class="text-gray-800 text-sm font-bold">{{ item.text }}</p>
        <template #append>
          <p class="text-gray-800">{{ item.value }}</p>
        </template>
      </VListItem>
      <VListItemDivider />
    </div>
  </VList>
</template>
