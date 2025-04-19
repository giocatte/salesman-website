import { ref, computed, onMounted, onUnmounted } from 'vue'

export const useDeviceWidth = () => {
  const width = ref(0)

  // Funzione per aggiornare la larghezza quando la finestra cambia
  const updateWidth = () => {
    width.value = window.innerWidth
  }

  onMounted(() => {
    updateWidth()

    window.addEventListener('resize', updateWidth)

    // ⚠️ Forza un secondo aggiornamento subito dopo il mount
    // Utile per dispositivi mobili come iPad in orizzontale
    setTimeout(() => {
      updateWidth()
    }, 100)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', updateWidth)
  })

  // Verifica se siamo nel client prima di accedere a navigator
  const isMobileDevice = typeof window !== 'undefined' && /Mobi|Android/i.test(navigator.userAgent)

  return {
    width,

    // Mobile: qualsiasi larghezza sotto i 1024px
    isMobile: computed(() => width.value < 1024),

    // Tablet: tra 768px e 1023px (inclusivo)
    isTablet: computed(() => width.value >= 768 && width.value < 1024),

    // Desktop: da 1024px in su E non su un browser mobile
    isDesktop: computed(() => width.value >= 1024 && !isMobileDevice)
  }
}