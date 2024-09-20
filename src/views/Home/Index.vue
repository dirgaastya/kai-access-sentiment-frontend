<script setup lang="ts"></script>

<template>
  <div class="py-20">
    <div class="container mx-auto px-4">
      <div class="flex flex-col lg:flex-row items-center">
        <div class="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
          <h1 class="text-4xl font-bold text-gray-800 mb-4">
            Selamat Datang di Aplikasi Sentimen Ulasan KAI Access
          </h1>
          <p class="text-gray-500 mb-6">
            Temukan wawasan mendalam dari ulasan pengguna aplikasi KAI Access
            dengan analisis sentimen kami. Aplikasi ini membantu Anda memahami
            opini dan pengalaman pelanggan untuk peningkatan layanan yang lebih
            baik.
          </p>
          <div class="flex items-center gap-x-3">
            <RouterLink to="/sentiment-analysis">
              <VBtn prefix-icon="streamline:code-analysis" color="primary"
                >Mulai Analisis</VBtn
              >
            </RouterLink>
            <RouterLink to="/model-evaluation">
              <VBtn prefix-icon="carbon:model" color="secondary"
                >Hasil Evaluasi Model</VBtn
              >
            </RouterLink>
          </div>
        </div>

        <div class="lg:w-1/2 flex justify-end">
          <img
            src="../../assets/hero.jpg"
            alt="Sentimen Ulasan KAI Access"
            class="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  </div>
</template>
