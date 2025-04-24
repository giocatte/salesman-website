<template>
    <!-- -------------------- MOBILE ----------------------------------- -->
    <div
      v-if="products?.length && isMobile"
      id="Overview_Component"
      class="w-full flex flex-col gap-y-2 px-4 mb-8"
    >
      <p class="mt-2 p-2 text-[2.5rem] font-nunito font-semibold">Servizi</p>
  
      <!-- Tab bar -->
      <div
        class="overflow-x-scroll flex items-end gap-x-1 min-h-10 snap-x snap-proximity"
      >
        <div
          v-for="p in products"
          :key="p.Id"
          class="p-1 mb-2 rounded-full transition-all"
          :class="{ 'bg-BlueToRed': activeTab === p.Name }"
          @click="setActiveTab(p)"
        >
          <button
            class="px-2 py-1 rounded-full text-black"
            :class="activeTab === p.Name ? 'btnBlueRed-ez snap-center' : ''"
          >
            {{ p.component.BtnText }}
          </button>
        </div>
      </div>
  
      <!-- Contenuto prodotto -->
      <div
        v-for="p in products"
        :key="p.Id"
        v-show="p.Name === activeTab"
        class="flex flex-col gap-y-4 bg-white rounded-xl animate__animated animate__fadeIn"
      >
        <!-- Immagine -->
        <div
          class="relative self-center w-full max-w-[400px] rounded-[1.25rem] bg-cover bg-center"
          :style="{ backgroundImage: `url(${p.component.ImgUrl})`, aspectRatio: '372/250' }"
        />
  
        <p class="text-3xl font-semibold" v-html="p.component.Title" />
        <p class="text-base text-justify desc pr-2 min-h-40" v-html="p.component.Description" />
  
        <NuxtLink :to="`/Servizi/${p.component.BtnText}`" class="p-1 w-fit rounded-full bg-BlueToRed">
          <button class="btnBlueRed">SCOPRI DI PIÙ</button>
        </NuxtLink>
      </div>
    </div>
  
    <!-- ---------- DESKTOP & TABLET LANDSCAPE -------------------------- -->
    <div v-else-if="products?.length && isDesktop">
      <div
        class="relative w-full h-fit
               py-14 lg:py-Tablet xl:py-Desktop
               px-4 lg:px-Tablet xl:px-Desktop
               flex content-center"
      >
        <!-- COLONNA TESTO -------------------------------------------- -->
        <div
          v-if="comp && compPrev && compNext"
          class="relative w-full lg:w-7/12 flex flex-col gap-y-5"
        >
          <!-- Titolo sezione -->
          <p class="font-nunito font-semibold lg:h1-Tablet xl:h1-Desktop">
            Servizi
          </p>
  
          <!-- Tab bar -->
          <div class="overflow-x-auto flex items-center gap-x-4">
            <div
              v-for="p in products"
              :key="p.Id"
              class="py-1 rounded-full transition-all"
              :class="{ 'bg-BlueToRed px-1': activeTab === p.Name }"
              @click="setActiveTab(p)"
            >
              <button
                class="bg-white rounded-full px-2 py-[1px] text-black font-bold
                       text-lg lg:text-xl xl:text-2xl"
              >
                {{ p.component.BtnText }}
              </button>
            </div>
          </div>
  
          <!-- Titolo prodotto -->
          <p
            class="font-nunito font-semibold
                   lg:h2-Tablet xl:h2-Desktop text-gr"
            v-html="desktopTitle"
          />
  
          <!-- Descrizione -->
          <p
            class="font-nunito font-semibold
                   lg:h3-Tablet xl:h3-Desktop text-gr"
            v-html="comp.Description"
          />
  
          <!-- Bottone -->
          <NuxtLink
            :to="`/Servizi/${comp.BtnText}`"
            class="p-1 w-fit rounded-2xl bg-BlueToRed transition-all"
          >
            <button
              class="bg-white rounded-xl font-bold
                     text-xl lg:text-2xl px-2 py-1"
            >
              SCOPRI DI PIÙ
            </button>
          </NuxtLink>
        </div>
  
        <!-- COLONNA IMMAGINI ----------------------------------------- -->
        <div class="hidden lg:flex lg:w-5/12 relative justify-center">
          <img
            :src="compPrev.ImgUrl"
            class="absolute top-10 left-6 lg:left-6 xl:left-10 z-0 blur-sm rounded-3xl
                   h-[18rem] w-[18rem] lg:h-[23.8rem] lg:w-[23.8rem]"
          />
          <img
            :src="comp.ImgUrl"
            id="compImg"
            :class="[
              'relative z-10 rounded-3xl animate__animated',
              closeAnimation ? 'animate__flipOutY' : 'animate__flipInY'
            ]"
            class="left-2 lg:left-4 xl:left-5
                   h-[22rem] w-[22rem] lg:h-[29.5rem] lg:w-[29.5rem]"
          />
          <img
            :src="compNext.ImgUrl"
            class="absolute top-10 right-0 z-0 blur-sm rounded-3xl
                   h-[18rem] w-[18rem] lg:h-[23.8rem] lg:w-[23.8rem]"
          />
        </div>
      </div>
    </div>
  </template>
  
  <style scoped lang="scss">
  .desc b {
    font-weight: 600;
  }
  </style>
  
  <script setup lang="ts">
  import { ref, onMounted, watch } from 'vue'
  
  /* ---------- device ---------- */
  const { isMobile, isDesktop } = useDeviceWidth()
  
  /* ---------- props ---------- */
  const props = defineProps<{ products: any[] }>()
  
  /* ---------- reactive ---------- */
  const activeTab = ref(1)
  const comp = ref<any>(null)
  const compPrev = ref<any>(null)
  const compNext = ref<any>(null)
  const desktopTitle = ref('')
  const closeAnimation = ref(false)
  
  /* ---------- mount ---------- */
  onMounted(() => {
    if (props.products?.length) {
      activeTab.value = props.products[0].Name
      comp.value = props.products[0].component
      compPrev.value = props.products[6].component
      compNext.value = props.products[6].component
      desktopTitle.value = stripHtml(props.products[0].component.Title)
    }
  })
  
  /* ---------- watch products ---------- */
  watch(
    () => props.products,
    newProducts => {
      if (newProducts?.length) activeTab.value = newProducts[0].Name
    },
    { immediate: true }
  )
  
  /* ---------- helpers ---------- */
  function stripHtml(html: string) {
    return html.replace(/<[^>]+>/g, ' ')
  }
  
  function setActiveTab(p: any) {
    closeAnimation.value = true
    setTimeout(() => {
      closeAnimation.value = false
      activeTab.value = p.Name
      comp.value = p.component
      desktopTitle.value = stripHtml(p.component.Title)
  
      if (p.Id === 1) {
        compPrev.value = props.products[6].component
        compNext.value = props.products[1].component
      } else if (p.Id === 7) {
        compPrev.value = props.products[5].component
        compNext.value = props.products[0].component
      } else {
        compPrev.value = props.products[p.Id - 2].component
        compNext.value = props.products[p.Id].component
      }
    }, 75)
  }
  </script>