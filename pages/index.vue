<template>
  <div>
    <!-- SPINNER ------------------------------------------------------>
    <div v-show="!isReady" class="w-full h-[calc(100vh_-_8rem)] flex items-center justify-center bg-white">
      <div class="w-1/2">
        <UProgress animation="carousel" />
      </div>
    </div>

    <!-- HOME --------------------------------------------------------->
    <div id="Home" v-show="isReady" class="w-full relative bg-white text-black">
      <!-- ------------------ MOBILE LANDING -------------------------->
      <div v-if="isMobile" id="landing" class="w-full relative flex">
        <!-- sfondo immagini -->
        <div id="imgsBCK" class="absolute inset-0 flex">
          <img src="assets/img/Polin_FornoPane.png" alt="Polin Forno per Pane" loading="lazy" draggable="false"
            class="w-1/2 h-full brightness-75 object-cover" />
          <img src="assets/img/Abbattitore_Polin.jpg" alt="Polin Abbattitore" loading="lazy" draggable="false"
            class="w-1/2 h-full brightness-75 object-cover" />
        </div>

        <!-- ellisse overlay -->
        <div id="Ellipse" class="absolute inset-0 py-24 bg-ellipse z-10" />

        <!-- testi -->
        <div id="NomeCognome" class="w-full z-20 py-14 px-2.5 flex flex-col gap-y-8
                   items-center font-nunito text-center text-white">
          <p class="text-[4rem] font-bold leading-none">
            ANDREA<br />TOGNON
          </p>
          <p class="text-[2rem] font-extrabold max-w-[20ch]">
            Agente Rivenditore di zona Autorizzato
          </p>
          <h1 class="text-lg leading-8 drop-shadow-xl max-w-[30ch]">
            Vendita macchinari e attrezzatura per:<br />
            panifici, pasticcerie, pizzerie, gelaterie e ristorazione.
          </h1>
        </div>
      </div>

      <!-- ------------- DESKTOP + TABLET LANDSCAPE ------------------->
      <div v-else id="HomeDesktop">
        <div id="landingDesktop" class="relative grid grid-cols-2 w-full bg-iron text-gr font-nunito">
          <!-- blocco testi -->
          <div id="NomeCognomeDesktop" class="py-24
                     px-6 lg:px-Tablet xl:pl-44 xl:pr-0
                     flex flex-col gap-y-7">
            <p class="font-bold leading-[1.14]
                       text-[4.5rem] lg:text-[5rem] xl:text-[6.25rem]">
              ANDREA<br />TOGNON
            </p>

            <p class="lg:h2-Tablet xl:h2-Desktop">
              Agente rivenditore di zona Autorizzato
            </p>

            <h1 class="lg:h3-Tablet xl:h3-Desktop">
              Vendita macchinari e attrezzature per:<br />
              panifici, pasticcerie, pizzerie, gelaterie e ristoranti
            </h1>
          </div>

          <!-- immagine -->
          <div id="imgBCKDesktop" class="col-start-2 flex items-center justify-start
                     py-10 pr-12 lg:pr-Tablet xl:pr-24">
            <img src="/img/DESKTOP/IMMAGINI_INIZIALI_DESKTOP/HOME.png" alt="Immagine di sfondo" loading="lazy"
              draggable="false" class="drop-shadow-[0_36px_50px_rgba(0,0,0,0.25)]" />
          </div>
        </div>
      </div>

      <!-- PANORAMICA SERVIZI ----------------------------------------->
      <ProductOverview :products="products.products" />

      <!-- CHI SONO -------------------------------------------------------------->
      <div id="ChiSono_" class="relative w-full font-nunito bg-iron-op
                px-4 lg:px-Tablet xl:px-Desktop
                py-[1.875rem] lg:py-Tablet xl:pt-Desktop xl:pb-20
                flex flex-col gap-6
                lg:grid lg:grid-cols-2 lg:gap-x-8">
        <!-- Colonna 1 ---------------------------------------------------------->
        <div class="flex flex-col gap-2">
          <p class="text-[2rem] font-extrabold lg:h1-Tablet xl:h1-Desktop">
            Chi sono
          </p>

          <p class="text-lg lg:h3-Tablet xl:h3-Desktop">
            Da oltre <b>30&nbsp;anni</b> mi occupo della <b>vendita</b> e
            dell'<b>assistenza tecnica</b> di
            <b>macchinari professionali</b> per il settore della ristorazione,
            della panificazione, della pasticceria e della gelateria.<br />
            Tratto sia <b>attrezzature nuove</b> che
            <b>usate revisionate</b>, selezionate con cura per garantire sempre
            la massima <b>qualità</b> e <b>affidabilità</b> nel tempo.
          </p>
        </div>

        <!-- Colonna 2 ---------------------------------------------------------->
        <div class="flex flex-col gap-2">
          <p class="text-[2rem] font-extrabold lg:h1-Tablet xl:h1-Desktop">
            Assistenza tecnica e consulenza
          </p>

          <p class="text-lg lg:h3-Tablet xl:h3-Desktop">
            Offro <b>assistenza tecnica, fornitura di pezzi di ricambio</b> e
            <b>manutenzione periodica</b> sui <b>macchinari</b> che
            commercializzo.<br />
            Grazie alla collaborazione con
            <b>tecnici specializzati</b>, potrai contare su un servizio
            <b>professionale</b> e <b>tempestivo</b>.<br />
            Fornisco inoltre <b>consulenza personalizzata</b> per scegliere la
            soluzione più adatta al tuo <b>volume di produzione</b> e agli
            <b>spazi</b> della tua attività.
          </p>
        </div>
      </div>

      <!-- SOLO IL MEGLIO (LOGHI) ------------------------------------->
      <div v-if="loghi" id="OnlyTheBest" class="relative py-8 lg:py-Tablet xl:py-Desktop">
        <p class="text-[2rem] text-center font-extrabold font-nunito text-gr
                   lg:h1-Tablet xl:h1-Desktop">
          SOLO IL MEGLIO
        </p>

        <UCarousel id="CaroselloLoghi" ref="carouseLoghiRef" class="py-8" v-slot="{ item }" :items="loghi" :ui="{
          item: 'basis-1/3 lg:basis-[15.625rem]',
          container: 'items-center gap-x-5 lg:gap-x-[6rem] xl:gap-x-[9.688rem]'
        }">
          <a :href="item.url" target="_blank"><img :src="item.imgUrl" alt="carousel logo" loading="lazy"
              draggable="false" class="aspect-auto w-full h-auto min-h-12 max-h-16" /></a>

        </UCarousel>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProductOverview from '../components/Product/Overview.vue'
import 'animate.css'

useSeoMeta({
  title:
    'Macchinari per panifici, pasticcerie, pizzerie, gelaterie e ristoranti',
  ogTitle:
    'Macchinari per panifici, pasticcerie, pizzerie, gelaterie e ristoranti',
  description:
    'Da 30 anni fornisco macchine professionali nuovi e usati per panifici, pasticcerie, pizzerie, gelaterie e ristoranti, con assistenza tecnica.',
  ogDescription:
    'Da 30 anni fornisco macchine professionali nuovi e usati per panifici, pasticcerie, pizzerie, gelaterie e ristoranti, con assistenza tecnica.',
  ogImage: '/img/DESKTOP/IMMAGINI_INIZIALI_DESKTOP/HOME.png'
})

/* ---------- device ---------- */
const { isMobile, isDesktop } = useDeviceWidth()

/* ---------- ready ---------- */
const isReady = ref(false)

/* ---------- prodotti ---------- */
const { data } = await useFetch('/api/ServicesAPI')
const products = JSON.parse(JSON.stringify(data.value))

/* ---------- loghi ---------- */
import loghiData from '~/assets/data/LoghiPaths.json'
const loghi = loghiData.Loghi

function shuffle<T>(array: T[]): T[] {
  const newArray = [...array]
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
      ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
  }
  return newArray
}

const carouseLoghiRef = ref()
const loghi2 = shuffle(loghi)

onMounted(() => {
  isReady.value = true
  setInterval(() => {
    if (!carouseLoghiRef.value) return
    if (carouseLoghiRef.value.page === carouseLoghiRef.value.pages) {
      return carouseLoghiRef.value.select(0)
    }
    carouseLoghiRef.value.next()
  }, 3500)
})
</script>

<style scoped>
/* animazioni logo: invariato */
.logo-anim {
  animation: slider linear 22s infinite;
}

.logo-anim-del {
  animation: slider-del linear 30s infinite;
}

.logo-anim-rev {
  animation: slider-rev linear 25s infinite;
}

.logo-anim-rev-del {
  animation: slider-rev-del linear 32s infinite;
}

@keyframes slider {
  0% {
    transform: translateX(-100vw);
  }

  100% {
    transform: translateX(100vw);
  }
}

@keyframes slider-del {
  0% {
    transform: translateX(-120vw);
  }

  20% {
    transform: translateX(-80vw);
  }

  100% {
    transform: translateX(100vw);
  }
}

@keyframes slider-rev {
  0% {
    transform: translateX(100vw);
  }

  100% {
    transform: translateX(-100vw);
  }
}

@keyframes slider-rev-del {
  0% {
    transform: translateX(120vw);
  }

  20% {
    transform: translateX(80vw);
  }

  100% {
    transform: translateX(-100vw);
  }
}
</style>