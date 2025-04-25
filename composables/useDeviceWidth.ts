import { ref, computed, onMounted, onUnmounted } from 'vue'

export const useDeviceWidth = () => {
  const width  = ref(0)
  const height = ref(0)

  const updateSize = () => {
    width.value  = window.innerWidth
    height.value = window.innerHeight
  }

  onMounted(() => {
    updateSize()
    window.addEventListener('resize', updateSize)
    setTimeout(updateSize, 100)      // fix iniziale per iPad
  })

  onUnmounted(() => {
    window.removeEventListener('resize', updateSize)
  })

  // --------------------------
  //  Nuove computed reattive
  // --------------------------
  const isLandscape = computed(() => width.value > height.value)

  const isMobileDevice =
    typeof window !== 'undefined' &&
    /Mobi|Android/i.test(navigator.userAgent)

  const isTabletWidth  = computed(
    () => width.value >= 768 && width.value < 1366
  )

  return {
    width,
    height,
    isLandscape,

    /* MOBILE  → sempre < 768 o qualsiasi tablet in verticale */
    isMobile : computed(
      () => width.value < 768 || (isTabletWidth.value && !isLandscape.value)
    ),

    /* TABLET  → 768 – 1365 e in orizzontale */
    isTabletLandscape : computed(
      () => isTabletWidth.value && isLandscape.value
    ),

    /* DESKTOP → vero desktop  oppure  tablet in orizzontale ≥ 1024 px */
    isDesktop : computed(
      () =>
        (!isMobileDevice && width.value >= 1024) ||   // laptop / desktop
        (isTabletWidth.value && isLandscape.value)    // tablet landscape
    ),
  }
}