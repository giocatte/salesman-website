<template>
  <div id="Service" v-if="currentProduct !== undefined && isReady">

    <!-- MOBILE -->
    <div v-if="!isDesktop">
      <img :src="currentProduct.pages.ImgUrl" alt="" class="relative top-0 left-0 w-full bg-white aspect-[5/4]" />
      <div class="w-full px-3 py-5 bg-white text-gr flex flex-col gap-2">
        <p class="title" v-html="currentProduct.pages.Title"></p>
        <p class="subTitle" v-html="currentProduct.pages.SubTitle"></p>
        <p class="desc" v-html="currentProduct.pages.Intro"></p>
      </div>
      <div class="w-full px-3 py-5 bg-white text-gr flex flex-col gap-2">
        <p class="title" v-html="currentProduct.pages.Title_2"></p>
        <p class="desc" v-html="currentProduct.pages.Desc"></p>
        <ul class="desc list-disc px-5">
          <li v-for="l in currentProduct.pages.list" :key="l" v-html="l"></li>
        </ul>
      </div>
      <ProductShowCarousel :product="currentProduct" />
      <div class="bg-white pt-8 text-gr font-nunito flex flex-col flex-nowrap gap-y-3 items-center">
        <p class="text-2xl font-bold">Potrebbe interessarti anche:</p>
        <div class="w-full pb-4 px-6 flex justify-between">
          <NuxtLink to="/Servizi/Attrezzature" class="p-1 w-[47%] rounded-full bg-BlueToRed">
            <button class="w-full btnBlueRed">Attrezzature</button>
          </NuxtLink>
          <NuxtLink to="/Servizi/Progettazione" class="p-1 w-[47%] rounded-full bg-BlueToRed">
            <button class="w-full btnBlueRed">Progettazione</button>
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- DESKTOP -->
    <div v-else>
      <!-- BLOCCO 1: Testo + immagine -->
      <div class="w-full bg-iron flex flex-row items-center md:px-[11.25rem] px-4 py-Desktop gap-[1.25rem]">
        <!-- Colonna sinistra -->
        <div class="w-1/2 text-gr font-nunito flex flex-col gap-3">
          <p class="text-3xl lg:h1-Desktop font-bold" v-html="currentProduct.pages.Title"></p>
          <p class="text-xl lg:h2-Desktop font-semibold" v-html="currentProduct.pages.SubTitle"></p>
          <p class="text-lg lg:h3-Desktop" v-html="currentProduct.pages.Intro"></p>
        </div>

        <!-- Colonna destra: immagine -->
        <div class="w-1/2">
          <img :src="currentProduct.pages.ImgUrlDesktop" alt="Macchinari per panifici"
            class="w-full h-auto object-contain" />
        </div>
      </div>

      <!-- BLOCCO 2: Testo + lista -->
      <div class="w-full md:px-[11.25rem] px-4 py-Desktop bg-white text-gr font-nunito flex flex-col gap-4">
        <p class="text-3xl font-bold lg:h1-Desktop" v-html="currentProduct.pages.Title_2"></p>
        <p class="text-lg lg:h3-Desktop" v-html="currentProduct.pages.Desc"></p>
        <ul class="list-disc px-5 text-lg lg:h3-Desktop">
          <li v-for="item in currentProduct.pages.list" :key="item" v-html="item"></li>
        </ul>
      </div>

      <!-- BLOCCO 3: Carosello -->
      <ProductShowCarousel :product="currentProduct" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { ProductShowCarousel } from '#components'

useSeoMeta({
  title: 'Forni Giorik e macchinari per ristoranti | Andrea Tognon',
  ogTitle: 'Forni Giorik e macchinari per ristoranti | Andrea Tognon',
  description: 'Forni professionali, cucine modulari e friggitrici Giorik per ristoranti, hotel e mense. Vendita, consulenza e assistenza in Veneto e Nord‑Est.',
  ogDescription: 'Forni professionali, cucine modulari e friggitrici Giorik per ristoranti, hotel e mense. Vendita, consulenza e assistenza in Veneto e Nord‑Est.',
  ogImage: 'public/img/IMG_INIZIALI_MOBILE/IMG_MOB_RISTORAZIONE.png',
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
p.title {
  @apply font-nunito font-bold text-[2rem];
}

p.subTitle {
  @apply font-nunito font-semibold text-2xl;
}

.desc {
  @apply font-nunito text-lg;
}
</style>