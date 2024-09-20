<script setup lang="ts">
import ChartLabel from '@/components/ChartLabel.vue';
import ClassificationReport from '@/components/ClassificationReport.vue';
import ConfusionMatrix from '@/components/ConfusionMatrix.vue';
import DatasetTable from '@/components/DatasetTable.vue';
import ModelPerformance from '@/components/ModelPerformance.vue';
import WordCloud from '@/components/WordCloud.vue';
</script>

<template>
  <div class="py-3">
    <div class="container mx-auto px-4">
      <section>
        <h1 class="text-3xl font-bold text-gray-800 my-6">
          Evaluasi Model
        </h1>
        <div class="grid grid-cols-3 gap-x-3">
          <VCard title="Performa Model" shadow="xl">
            <ModelPerformance />
          </VCard>
          <VCard title="Distribusi Data" shadow="xl" body-class="!pt-8">
            <ChartLabel :negatif="16317" :positif="2704" :netral="979" />
            <template #footer>
              <VListItem hide-prepend>
                <p class="text-gray-800 text-sm font-bold">Jumlah data :</p>
                <template #append>
                  <p class="text-gray-800 text-sm">20.000</p>
                </template>
              </VListItem>
            </template>
          </VCard>
          <VCard title="Confusion Matrix" shadow="xl" body-class="!pt-8">
            <ConfusionMatrix />
          </VCard>
        </div>
      </section>
      <section class="my-12">
        <h1 class="text-3xl font-bold text-gray-800 mb-6">
          Classification Report
        </h1>
        <ClassificationReport />
      </section>
      <section class="my-12">
        <h1 class="text-3xl font-bold text-gray-800 mb-6">
          Dataset Yang Digunakan
        </h1>
        <DatasetTable />
      </section>
      <section>
        <h1 class="text-3xl font-bold text-gray-800 mb-6">
          WordCloud
        </h1>
        <WordCloud />
      </section>
    </div>
  </div>
</template>
