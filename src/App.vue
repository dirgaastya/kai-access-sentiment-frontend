<script setup lang="ts">
import Navbar from '@/components/Navbar.vue';
</script>
<template>
  <div class="container h-screen mx-auto px-20 py-6 bg-gray-25">
    <Navbar />
    <RouterView />
  </div>
</template>
