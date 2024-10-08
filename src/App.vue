<script setup lang="ts">
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
</script>
<template>
  <div class="container h-screen mx-auto px-20 py-6 bg-gray-25">
    <Navbar />
    <RouterView />
    <Footer />
  </div>
</template>
