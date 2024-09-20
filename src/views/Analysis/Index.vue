<script setup lang="ts">
import { ref } from 'vue';
import type { VDataTableHeader } from '@morpheme/table';
import { useForm } from 'vee-validate';
import { object, string } from 'yup';
import { useSentimentStore } from '@/stores/sentiment';
import { watchEffect } from 'vue';
import ChartLabel from '@/components/ChartLabel.vue';

interface ISentiment {
  review: string;
  sentiment: string;
}

const headers = ref<VDataTableHeader[]>([
  {
    value: 'index',
    text: 'No',
  },
  {
    value: 'review',
    text: 'Ulasan',
  },
  {
    value: 'sentiment',
    text: 'Sentimen',
  },
]);

const schema = object({
  review: string().required().label('Ulasan'),
});

const { handleSubmit, resetForm, errors, values } = useForm({
  validationSchema: schema,
});

const sentimentStore = useSentimentStore();
const alertMessage = ref<String>('');
const isShowAlert = ref<Boolean>(false);
const isOpen = ref<Boolean>(false);
const isDetailOpen = ref<Boolean>(false);
const sentimentDistribution = ref({} as Record<string, number>);

const onSubmit = handleSubmit(async (formValues) => {
  const reviewList = formValues.review
    .split(';')
    .map((r: string) => r.trim())
    .filter((r: string) => r);

  for (const reviewText of reviewList) {
    await sentimentStore.fetchSentiment(reviewText);

    if (sentimentStore.sentiment && !sentimentStore.error) {
      const newReview: ISentiment = {
        review: reviewText,
        sentiment: sentimentStore.sentiment,
      };
      sentimentStore.reviews.push(newReview);
    } else if (sentimentStore.error) {
      alertMessage.value = sentimentStore.error;
      isShowAlert.value = true;
      return;
    }
  }

  if (!sentimentStore.error) {
    alertMessage.value = 'Analisis sentimen berhasil dilakukan!';
  }

  isShowAlert.value = true;
  resetForm();
});

const handleResetTable = () => {
  sentimentStore.reviews = [];
  isOpen.value = false;
};

const calculateSentimentDistribution = (
  data: ISentiment[]
): Record<string, number> => {
  return data.reduce((acc, item) => {
    if (acc[item.sentiment]) {
      acc[item.sentiment]++;
    } else {
      acc[item.sentiment] = 1;
    }
    return acc;
  }, {} as Record<string, number>);
};

watchEffect(() => {
  sentimentDistribution.value = calculateSentimentDistribution(
    sentimentStore.reviews
  );
});
</script>
<template>
  <div class="py-9">
    <div class="flex items-start gap-x-12">
      <div class="w-1/2">
        <div class="flex items-end justify-between mb-6">
          <h1 class="text-3xl font-bold text-gray-800">
            Daftar Sentimen Ulasan
          </h1>
          <div class="flex items-center">
            <VModal hide-x-button v-model="isDetailOpen">
              <template #activator="{open}">
                <VIcon
                  @click="open"
                  name="hugeicons:information-circle"
                  class="cursor-pointer"
                />
              </template>
              <template #header>
                <p class="text-gray-800 text-xl font-bold">
                  Distribusi Sentimen
                </p>
              </template>
              <template #footer="{close}">
                <VBtn size="sm" no-ring color="error" @click="close"
                  >Close</VBtn
                >
              </template>
              <ChartLabel
                :negatif="sentimentDistribution.negatif"
                :positif="sentimentDistribution.positif"
                :netral="sentimentDistribution.netral"
              />
              <VList>
                <VListItem hide-prepend>
                  <p class="text-gray-800 text-sm font-bold">Positif :</p>
                  <template #append>
                    <p class="text-gray-800 text-sm">
                      {{ sentimentDistribution.positif || 0 }}
                    </p>
                  </template>
                </VListItem>
                <VListItem hide-prepend>
                  <p class="text-gray-800 text-sm font-bold">Negatif :</p>
                  <template #append>
                    <p class="text-gray-800 text-sm">
                      {{ sentimentDistribution.negatif || 0 }}
                    </p>
                  </template>
                </VListItem>
                <VListItem hide-prepend>
                  <p class="text-gray-800 text-sm font-bold">Netral :</p>
                  <template #append>
                    <p class="text-gray-800 text-sm">
                      {{ sentimentDistribution.netral || 0 }}
                    </p>
                  </template>
                </VListItem>
              </VList>
            </VModal>
            <VModal hide-x-button v-model="isOpen">
              <template #activator="{open}">
                <VBtn @click="open" size="sm" text color="error">Reset</VBtn>
              </template>
              <template #footer="{close}">
                <VBtn color="error" size="sm" no-ring @click="handleResetTable"
                  >Reset</VBtn
                >
                <VBtn size="sm" no-ring @click="close">Close</VBtn>
              </template>
              Anda yakin untuk menghapus daftar sentimen ulasan?
            </VModal>
          </div>
        </div>
        <div class="grid">
          <VDataTable
            hide-footer
            :items="sentimentStore.reviews"
            :headers="headers"
            items-per-page="100"
          />
        </div>
        <p class="text-sm text-gray-500 mt-3">
          Catatan: Daftar ulasan hanya akan tersedia selama sesi ini.
        </p>
      </div>
      <div class="w-1/2">
        <h1 class="text-3xl font-bold text-gray-800 mb-4">
          Analisis Sentimen
        </h1>
        <VToast
          v-model="isShowAlert"
          :color="sentimentStore.error ? 'error' : 'success'"
          placement="bottom-end"
          :timeout="3000"
        >
          {{ alertMessage }}
        </VToast>
        <form @submit.prevent="onSubmit">
          <VTextarea
            label="Ulasan"
            name="review"
            class="!border-0"
            rows="5"
            required
            label-class="label-required"
            v-model="values.review"
            placeholder="Masukkan ulasan Anda di sini"
          />
          <p class="text-sm text-gray-500 mt-3">
            Catatan: Gunakan tanda titik koma (;) untuk pisahkan beberapa
            ulasan.
          </p>
          <div class="w-full flex justify-end mt-4">
            <VBtn type="submit" size="sm" soft color="primary">
              Submit
            </VBtn>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
