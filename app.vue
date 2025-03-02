<template>
  <div class="w-full relative overflow-x-hidden bg-white text-black">
    <div id="sfondoNav" class="absolute top-0 left-0 w-full h-[4.5rem] bg-sfondo-iron z-0"></div>
    <div id="Navbar" class="mb-2 pt-3 pb-1 px-8 w-full flex justify-between items-center z-10 relative">
      <img :src="LogoMobile" alt="LogoMobile">
      <MenuBurgerAnimated></MenuBurgerAnimated>
    </div>
    <div id="landing" class="w-full relative flex z-0">
      <div id="imgsBCK" class="w-full flex flex-row flex-nowrap relative">
        <img src="assets/img/Polin_FornoPane.png" alt="" class="w-1/2 h-[80svh] brightness-75">
        <img src="assets/img/Abbattitore_Polin.jpg" alt="" class="w-1/2 h-[80svh] brightness-75">
      </div>
      <div id="Ellipse" class="absolute w-full h-full py-24 self-start z-10"
        style="background: radial-gradient(ellipse at center, rgba(0,0,0,0.35) 53%, rgba(0,0,0,0) 80%);">
      </div>
      <div id="NomeCognome"
        class="absolute w-full h-full self-start py-24 z-20 flex flex-col gap-8 items-center text-center text-white">
        <p class="text-[4rem] font-inter font-bold">ANDREA<br>TOGNON</p>
        <p class="text-2xl font-nunito font-semibold tracking-normal">Agente rivenditore di
          zona<br>Autorizzato</p>
        <p class="text-2xl font-light tracking-wide drop-shadow-xl font-nunito leading-8 max-w-[16ch]">Vendita
          attrezzatura per negozi, ristoranti
          laboratori, panifici, pizzerie e gelaterie</p>
      </div>
    </div>
    <div id="Services" class="w-full">
      <p class="mt-2 p-2 text-[2.5rem] font-nunito font-semibold">Macchine per:</p>
      <ServiceComponent :services="services" />
    </div>
    <div id="ChiSono" class="font-nunito relative w-full bg-sfondo-iron p-4 flex gap-2 row flex-col flex-nowrap">
      <p class="mt-2 pt-2 text-[2.5rem] font-bold">CHI SONO</p>
      <p class="text-lg">Da oltre <b>30 anni</b> mi occupo di <b>vendita</b> e <b>assistenza</b> tecnica di
        <b>macchinari</b> nuovi e
        usati, garantendo <b>qualità</b> e
        <b>affidabilità</b>.<br />Collaboro con i <b>migliori marchi</b> del settore per offrire soluzioni su misura per
        le tue
        esigenze.
      </p>
      <p class="font-semibold text-[2rem]">Assistenza tecnica e consulenza dedicata</p>
      <p class="text-lg">Offro <b>assistenza tecnica</b>, fornitura di pezzi di ricambio e manutenzione periodica sui
        macchinari che
        commercializzo.<br />Grazie alla <b>collaborazione con tecnici</b> specializzati, potrai contare su un
        <b>servizio
          professionale</b> e <b>tempestivo</b>.<br />Fornisco inoltre consulenza personalizzata per scegliere la
        soluzione più adatta al
        tuo volume di produzione e agli spazi della tua attività.
      </p>
      <div class="p-1 mt-2 w-fit rounded-full bg-BlueToRed">
        <button
          class="text-black w-fit font-bold bg-white text-base px-2 py-1 rounded-full hover:bg-blue-600 transition">CONTATTAMI</button>
      </div>
      <!-- <UCarousel v-slot="{ item }" :items="items" arrows>
        <img :src="item" width="225" draggable="false" class="rounded-sm mr-1 aspect-[3/4]">
      </UCarousel> -->
    </div>
    <div id="OnlyTheBest">
      <p class="text-[2.5rem] text-center font-semibold font-inter py-6 text-gr">SOLO IL MEGLIO</p>
      <div class="h-72 bg-red-200" id="loghi"></div>
    </div>
    <Footer></Footer>
  </div>
</template>


<script setup lang="ts">
import LogoMobile from '@/assets/img/LogoMobile.png';
import ServiceComponent from './components/ServiceComponent.vue';
import Footer from './components/Footer.vue';

const items = [
  'https://picsum.photos/600/800?random=1',
  'https://picsum.photos/600/800?random=2',
  'https://picsum.photos/600/800?random=3',
  'https://picsum.photos/600/800?random=4',
  'https://picsum.photos/600/800?random=5',
  'https://picsum.photos/600/800?random=6'
];
const services = [
  { BtnText: 'Panetterie', Title: 'Macchine per Panetterie</br>Vendita e Assistenza', Description: 'Vendo <b>macchinari</b> e <b>strumenti</b> progettati per ottimizzare ogni fase della <b>panificazione</b>, dal dosaggio degli ingredienti alla cottura perfetta. Con le <b>migliori attrezzature</b> potrai sperimentare nuove ricette, migliorare la qualità del pane e garantire un prodotto fragrante e irresistibile, giorno dopo giorno.', ImgUrl: '/img/PizzaInOven.jpg' },
  { BtnText: 'Pasticcerie', Title: 'Macchine per Pasticcerie</br>Vendita e Assistenza', Description: 'Precisione e creatività si incontrano con le attrezzature giuste. Dagli abbattitori ai forni ventilati, passando per sfogliatrici e planetarie, ogni strumento è pensato per aiutarti a realizzare dolci impeccabili, dalla più soffice crema al più raffinato impasto.', ImgUrl: '/img/PizzaInOven.jpg' },
  { BtnText: 'Pizzerie', Title: 'Macchine per Pizzerie<br>Vendita e Assistenza', Description: 'Attrezzature professionali per una pizza sempre perfetta. Dai forni di ultima generazione agli impastatrici, offro strumenti che garantiscono prestazioni elevate, uniformità di cottura e la massima qualità per ogni impasto. Ideali per chi vuole innovare senza rinunciare alla tradizione.', ImgUrl: '/img/PizzaInOven.jpg' },
  { BtnText: 'Gelaterie', Title: 'Macchine per Gelaterie</br>Vendita e Assistenza', Description: 'Scopri le attrezzature ideali per una produzione artigianale di alta qualità. Dai mantecatori ai banchi espositivi, ogni strumento è pensato per offrirti massima efficienza e libertà creativa. Con macchinari professionali, puoi trasformare ogni ingrediente in gelati e sorbetti unici, capaci di conquistare ogni cliente al primo assaggio.', ImgUrl: '/img/PizzaInOven.jpg' }
];
</script>

<style scoped>
/* Hide scrollbar for Chrome, Safari and Opera */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.no-scrollbar {
  -ms-overflow-style: none;
  /* IE and Edge */
  scrollbar-width: none;
  /* Firefox */
}

.bg-sfondo-iron {
  background: conic-gradient(#ededed 0%,
      #adadad 17%,
      #dbdbdb 35%,
      #e7e7e7 43%,
      #bdbdbd 50%,
      #ebebeb 58%,
      #e2e2e2 68%,
      #adadad 80%,
      #b9b9b9 90%,
      #e2e2e2 100%);
}

.bg-BlueToRed {
  background: linear-gradient(336deg,
      #FF0000 0%,
      #FF5700 22%,
      #FF884A 50%,
      #35C0FF 51%,
      #007BFF 82%,
      #001AFF 100%);
}

.text-gr {
  @apply text-[#3A3939];
}
</style>
