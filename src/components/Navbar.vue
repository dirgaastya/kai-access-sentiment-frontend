<script setup lang="ts"></script>

<template>
  <div
    class="w-full flex items-center justify-between border border-gray-100 bg-white rounded-lg py-3 px-6"
  >
    <img src="../assets/logo.png" alt="logo" width="64" />
    <div class="flex items-center space-x-3">
      <RouterLink to="/" class="text-gray-800">Home</RouterLink>
      <RouterLink to="/model-evaluation" class="text-gray-800"
        >Model Evaluation</RouterLink
      >
      <RouterLink to="/sentiment-analysis" class="text-gray-800"
        >Sentiment Analysis</RouterLink
      >
    </div>
  </div>
</template>
