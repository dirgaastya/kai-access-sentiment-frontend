<script setup lang="ts">
import { ref } from 'vue';
import type { VDataTableHeader } from '@morpheme/table';
import { useForm } from 'vee-validate';
import { object, string } from 'yup';
import { useSentimentStore } from '@/stores/sentiment';

interface ISentiment {
  review: string;
  sentiment: string;
}

// Headers untuk VDataTable
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

// Skema validasi
const schema = object({
  review: string().required().label('Ulasan'),
});

const { handleSubmit, resetForm, errors, values } = useForm({
  validationSchema: schema,
});

const reviews = ref<ISentiment[]>([]);
const sentimentStore = useSentimentStore();
const alertMessage = ref<String>('');
const isShowAlert = ref<Boolean>(false);
const isOpen = ref<Boolean>(false);

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
      reviews.value.push(newReview);
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
  reviews.value = [];
  isOpen.value = false;
};
</script>
<template>
  <div class="py-9">
    <div class="flex items-start gap-x-12">
      <div class="w-1/2">
        <div class="flex items-end justify-between mb-6">
          <h1 class="text-3xl font-bold text-gray-800">
            Daftar Sentimen Ulasan
          </h1>
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
        <VDataTable
          hide-footer
          :items="reviews"
          :headers="headers"
          items-per-page="100"
        />
        <p class="text-sm text-gray-500 mt-3">
          Catatan: Daftar ulasan hanya akan tersedia selama sesi ini.
        </p>
      </div>
      <div class="w-1/2">
        <h1 class="text-3xl font-bold text-gray-800 mb-4">
          Analisis Sentimen
        </h1>
        <VAlert
          v-model="isShowAlert"
          dismissable
          :color="sentimentStore.error ? 'error' : 'success'"
        >
          {{ alertMessage }}
        </VAlert>
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
