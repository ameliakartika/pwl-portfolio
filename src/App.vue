<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

</script>

<template>
  <div class="container">
    <Navbar />
    <div class="wrapper">
      <RouterView />
    </div>
    <Footer></Footer>
  </div>
</template>
