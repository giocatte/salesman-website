<template>
    <div
      id="ShowCarousel_Component"
      v-if="carouselData"
      class="px-3 py-4 lg:px-0 lg:py-0 bg-white"
    >
      <!-- CONTENITORE PRINCIPALE -->
      <div
        class="relative w-full aspect-[8/9.1] bg-RedToBlue p-1 rounded-2xl
               flex flex-col z-0
               lg:bg-none lg:aspect-[5/2] lg:rounded-none lg:p-0"
      >
        <!-- ---------- HEADER ---------- -->
        <div
          v-if="sortedCarouselData[0].Brand"
          class="w-full bg-[#f4f4f4] rounded-t-xl text-gr font-nunito text-center
                 lg:bg-white lg:rounded-t-none"
        >
          <p v-show="isMobile" class="text-xl font-extrabold mt-5">
            SOLO IL MEGLIO PER LA TUA<br />IMPRESA
          </p>
          <p v-show="isDesktop" class="lg:h1-Tablet xl:h1-Desktop py-[1.875rem]">
            Solo il meglio per la tua impresa
          </p>
        </div>
  
        <div
          v-else
          class="w-full bg-[#f4f4f4] rounded-t-xl text-gr font-nunito text-center
                 lg:bg-white lg:rounded-t-none"
        >
          <p v-show="isDesktop" class="lg:h1-Tablet xl:h1-Desktop pt-10">
            LE REALIZZAZIONI
          </p>
        </div>
  
        <!-- ---------- MOBILE – prodotti con Brand ---------- -->
        <UCarousel
          v-if="isMobile && sortedCarouselData[0].Brand"
          id="CaroselloProdotti"
          class="rounded-b-xl overflow-hidden bg-[#f4f4f4]"
          v-slot="{ item }"
          :items="sortedCarouselData"
          indicators
          :ui="{
            item: 'basis-full',
            indicators: {
              wrapper: 'gap-2 bottom-2',
              base: 'w-2 h-2 [aspect-ratio:_1/1]',
              active: 'bg-BlueToRed',
              inactive: 'bg-gray-800 dark:bg-gray-800'
            }
          }"
        >
          <div
            class="w-full h-full aspect-[8/9.1] bg-[#f4f4f4] p-4 flex flex-col items-center text-gr font-nunito"
          >
            <div
              :style="{ backgroundImage: `url(${item.ImgUrl})` }"
              class="h-full w-full drop-shadow-lg bg-cover bg-center rounded-md"
            />
            <p class="text-center text-xl font-extrabold">{{ item.Brand }}</p>
            <p class="text-center text-sm font-bold">{{ item.Model }}</p>
            <p class="text-center text-[13px] font-normal pb-2">{{ item.Description }}</p>
          </div>
        </UCarousel>
  
        <!-- ---------- MOBILE – realizzazioni (solo immagini) ---------- -->
        <UCarousel
          v-else-if="isMobile && !sortedCarouselData[0].Brand"
          id="CaroselloProdotti"
          class="rounded-xl overflow-hidden bg-[#f4f4f4]"
          v-slot="{ item }"
          :items="currentCarouselData"
          indicators
          :ui="{
            item: 'basis-full',
            indicators: {
              wrapper: 'gap-2 bottom-2',
              base: 'w-2 h-2 [aspect-ratio:_1/1]',
              active: 'bg-BlueToRed',
              inactive: 'bg-gray-800 dark:bg-gray-800'
            }
          }"
        >
          <div class="w-full h-full aspect-[8/9.1] bg-[#f4f4f4] flex items-center">
            <div
              :style="{ backgroundImage: `url(${item.ImgUrl})` }"
              class="h-full w-full drop-shadow-lg bg-cover bg-center"
            />
          </div>
        </UCarousel>
  
        <!-- ---------- DESKTOP & TABLET landscape – con Brand ---------- -->
        <UCarousel
          v-else-if="isDesktop && sortedCarouselData[0].Brand"
          id="CaroselloProdotti_Desktop"
          v-slot="{ item }"
          :items="sortedCarouselData"
          arrows
          indicators
          class="relative overflow-hidden w-full h-fit
                 px-4 lg:px-Tablet xl:px-Desktop
                 lg:pt-[2.5rem] xl:pt-[3.75rem]
                 lg:pb-[4rem]  xl:pb-[6.25rem]"
          :ui="{
            item: 'basis-1/3',
            indicators: {
              wrapper: 'gap-2 bottom-[2rem] lg:bottom-[2.5rem] xl:bottom-[3rem]',
              base: 'w-4 h-4 xl:w-6 xl:h-6 [aspect-ratio:_1/1]',
              active: 'bg-[url(@/assets/img/LOGO_AT.png)] bg-cover',
              inactive: 'bg-gray-100 dark:bg-gray-800'
            }
          }"
          :prev-button="{
            color: 'gray',
            icon: 'i-heroicons-arrow-left-20-solid',
            class: 'start-[1.5rem] lg:start-[2rem] xl:start-[5rem]'
          }"
          :next-button="{
            color: 'gray',
            icon: 'i-heroicons-arrow-right-20-solid',
            class: 'end-[1.5rem] lg:end-[2rem] xl:end-[5rem]'
          }"
        >
          <div class="text-center text-gr font-nunito flex flex-col gap-2">
            <img
              :src="item.ImgUrl"
              :alt="item.Model"
              loading="lazy"
              draggable="false"
              class="mx-auto
                     max-h-[18rem] lg:max-h-[24rem] xl:max-h-[29.75rem]
                     w-auto object-contain rounded-3xl"
            />
            <p class="text-xl font-extrabold">{{ item.Brand }}</p>
            <p class="text-sm font-bold">{{ item.Model }}</p>
            <p class="text-[13px] font-normal pb-2">{{ item.Description }}</p>
          </div>
        </UCarousel>
  
        <!-- ---------- DESKTOP & TABLET landscape – realizzazioni ---------- -->
        <UCarousel
          v-else
          id="CaroselloProdotti_Desktop"
          v-slot="{ item }"
          :items="sortedCarouselData"
          arrows
          indicators
          class="w-full h-fit
                 px-4 lg:px-Tablet xl:px-Desktop
                 lg:pt-[2.5rem] xl:pt-[3.75rem]
                 lg:pb-[4rem]  xl:pb-[6.25rem]"
          :ui="{
            item: 'h-fit basis-full justify-center',
            indicators: {
              wrapper: 'gap-3 bottom-[2rem] lg:bottom-[2.5rem] xl:bottom-[3rem]',
              base: 'w-4 h-4 xl:w-6 xl:h-6 [aspect-ratio:_1/1]',
              active: 'bg-[url(@/assets/img/LOGO_AT.png)] bg-cover',
              inactive: 'bg-gray-100 dark:bg-gray-800'
            }
          }"
          :prev-button="{
            color: 'gray',
            icon: 'i-heroicons-arrow-left-20-solid',
            class: 'start-[1.5rem] lg:start-[2rem] xl:start-[5rem]'
          }"
          :next-button="{
            color: 'gray',
            icon: 'i-heroicons-arrow-right-20-solid',
            class: 'end-[1.5rem] lg:end-[2rem] xl:end-[5rem]'
          }"
        >
          <div class="text-center text-gr font-nunito flex flex-col justify-center">
            <img
              :src="item.ImgUrl"
              alt="Realizzazione"
              loading="lazy"
              draggable="false"
              class="mx-auto
                     max-h-[24rem] lg:max-h-[32rem] xl:max-h-[50rem]
                     w-auto object-contain rounded-3xl"
            />
          </div>
        </UCarousel>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, computed } from 'vue'
  
  /* ---------- device width ---------- */
  const { isMobile, isDesktop } = useDeviceWidth()
  
  /* ---------- props ---------- */
  defineProps<{ product: object }>()
  
  /* ---------- dati carosello ---------- */
  import carouselData from '~/assets/data/CarouselData.json'
  const router              = useRouter()
  const currentRoute        = router.currentRoute.value.path.split('/')[2]
  const currentCarouselData =
    carouselData[currentRoute as keyof typeof carouselData]
  
  const sortedCarouselData = computed(() =>
    [...currentCarouselData].sort((a, b) => a.orderId - b.orderId)
  )
  
  const prodPrev = ref(sortedCarouselData.value[0])
  const prod     = ref(sortedCarouselData.value[0])
  const prodNext = ref(sortedCarouselData.value[0])
  
  onMounted(() => {
    if (sortedCarouselData.value.length) {
      prodPrev.value = sortedCarouselData.value.at(-1)!
      prod.value     = sortedCarouselData.value[0]
      prodNext.value = sortedCarouselData.value[1]
    }
  })
  </script>
  
  <style scoped>
  .desc b {
    font-weight: 600;
  }
  </style>