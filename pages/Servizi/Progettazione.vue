<template>
  <div id="Service" v-if="currentProduct !== undefined && isReady">
    <!-- MOBILE -->
    <div v-if="!isDesktop">
      <img :src="currentProduct.pages.ImgUrl" :alt="currentProduct.pages.Title" loading="lazy" draggable="false"
        class="relative top-0 left-0 w-full bg-white aspect-[5/4]" />

      <div class="w-full px-3 py-5 bg-white text-gr flex flex-col gap-2">
        <h1 class="title" v-html="currentProduct.pages.Title"></h1>
        <p class="subTitle" v-html="currentProduct.pages.SubTitle"></p>
        <p class="desc" v-html="currentProduct.pages.Intro"></p>
      </div>



      <ProductShowCarousel :product="currentProduct" />

      <div class="bg-white pt-8 text-gr font-nunito flex flex-col gap-y-3 items-center">
        <p class="text-2xl font-bold">Potrebbe interessarti anche:</p>
        <div class="w-full pb-4 px-6 flex justify-between">
          <NuxtLink to="/Servizi/Ristorazione" class="p-1 w-[47%] rounded-full bg-BlueToRed">
            <button class="w-full btnBlueRed">Ristorazione</button>
          </NuxtLink>

          <NuxtLink to="/Servizi/Progettazione" class="p-1 w-[47%] rounded-full bg-BlueToRed">
            <button class="w-full btnBlueRed">Progettazione</button>
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- DESKTOP (+ TABLET LANDSCAPE) -->
    <div v-else>
      <!-- BLOCCO 1 -->
      <div class="w-full bg-iron flex flex-row items-center
               px-4 lg:px-Tablet xl:px-Desktop
               lg:py-Tablet xl:py-Desktop gap-[1.25rem]">

        <!-- Colonna sinistra -->
        <div class="w-1/2 text-gr font-nunito flex flex-col gap-3">
          <h1 class="text-3xl lg:h1-Tablet xl:h1-Desktop font-bold" v-html="currentProduct.pages.Title"></h1>
          <p class="text-xl lg:h2-Tablet xl:h2-Desktop font-semibold" v-html="currentProduct.pages.SubTitle"></p>
          <p class="text-lg lg:h3-Tablet xl:h3-Desktop" v-html="currentProduct.pages.Intro"></p>
        </div>

        <!-- Colonna destra -->
        <div class="w-1/2">
          <img :src="currentProduct.pages.ImgUrlDesktop" :alt="currentProduct.pages.Title" loading="lazy"
            draggable="false" class="w-full h-auto object-contain" />
        </div>
      </div>

      <!-- BLOCCO 3 -->
      <ProductShowCarousel :product="currentProduct" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { ProductShowCarousel } from '#components'

useSeoMeta({
  title: 'Progettazione laboratori e arredi su misura a Padova e Venezia',
  ogTitle: 'Progettazione  laboratori e arredi su misura a Padova e Venezia',
  description: 'Progetto laboratori e cucine professionali su misura: layout ottimizzato, arredi ergonomici e materiali resistenti. Consulenza in Veneto e Nord‑Est.',
  ogDescription: 'Progetto laboratori e cucine professionali su misura: layout ottimizzato, arredi ergonomici e materiali resistenti. Consulenza in Veneto e Nord‑Est.',
  ogImage: '/img/IMG_INIZIALI_MOBILE/IMG_MOB_PANIFICI.png',
})

const router = useRouter()
const { isDesktop } = useDeviceWidth()

// Rilevamento se siamo pronti a mostrare la vista corretta
const isReady = ref(false)

onMounted(() => {
  isReady.value = true
})

// Fetch dei dati
const { data } = await useFetch("/api/ServicesAPI")
const currentRoute = router.currentRoute.value.path.split("/")[2]
let currentProduct = data.value.products.find(product => product.Name === currentRoute)
</script>

<style scoped>
h1.title {
  @apply font-nunito font-bold text-[2rem];
}

p.subTitle {
  @apply font-nunito font-semibold text-2xl;
}

.desc {
  @apply font-nunito text-lg;
}
</style>