<template>
  <NavBar></NavBar>
  <NuxtPage/>
  <Footer></Footer>
</template>

<script setup lang="ts">
import NavBar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
</script>

<style scoped>
.btnBlueRed {
  @apply text-black w-fit font-bold bg-white text-base px-2 py-1 rounded-full hover:bg-RedToBlue hover:blur-[1px] hover:text-white hover:font-semibold active:bg-transparent active:blur-0 active:[background-image:_none];
}
</style>
