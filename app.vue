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
</style>
<!--<template>
  <div :style="wrapperStyle">
    <NavBar />
    <NuxtPage />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import NavBar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

// Stato per il wrapper
const wrapperStyle = ref({})

// Funzione per determinare se è un tablet in orizzontale
const isTabletLandscape = () => {
  const width = window.innerWidth
  const height = window.innerHeight
  const isTouchDevice = navigator.maxTouchPoints > 1
  const isLandscape = width > height
  const minTabletWidth = 768
  const maxTabletWidth = 1200
  return isTouchDevice && isLandscape && width >= minTabletWidth && width <= maxTabletWidth
}

// Funzione per calcolare uno zoom dinamico
const calculateScale = (width) => {
  if (width >= 1100) return 0.65
  if (width >= 950) return 0.75
  if (width >= 820) return 0.85
  return 1 // Nessuno zoom sotto gli 820px
}

const updateWrapperStyle = () => {
  const width = window.innerWidth
  if (isTabletLandscape()) {
    const scale = calculateScale(width)
    wrapperStyle.value = {
      transform: `scale(${scale})`,
      transformOrigin: 'top left',
      width: `${100 / scale}%`,
      minHeight: '100vh',
      overflow: 'hidden'
    }
  } else {
    wrapperStyle.value = {}
  }
}

onMounted(() => {
  updateWrapperStyle()
  window.addEventListener('resize', updateWrapperStyle)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateWrapperStyle)
})
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow-x: hidden;
}
</style>
-->