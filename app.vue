<template>
  <div class="w-full relative overflow-x-hidden bg-white p-2 text-black">
    <div id="sfondoNav" class="absolute -top-5 left-[-10%] w-[120%] h-24 bg-sfondo-gradiente blur-2xl z-0"></div>
    <div id="Navbar" class="mb-2 py-1 px-5 w-full flex justify-between items-center z-10 relative">
      <img :src="LogoMobile" alt="LogoMobile">
      <MenuBurgerAnimated></MenuBurgerAnimated>
    </div>
    <div id="landing" class="w-svw relative -left-2 flex z-0">
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
    <div id="Services" class="">
      <p class="mt-2 p-2 text-center text-[2.5rem] font-nunito font-semibold">MACCHINE PER</p>
      <ServiceComponent :services="services" />
    </div>
    <div id="ChiSono" class="w-svw relative -left-2 flex">
      <p class="text-4xl font-bold font-inter">CHI SONO</p>
      <!-- <div class="relative self-center w-full max-w-[400px] rounded-[1.25rem] bg-no-repeat bg-bottom bg-cover bg-[url('/img/PizzaInOven.jpg']" style="aspect-ratio: 1/1;"></div> -->
    </div>
    <div id="Clients">
      <p class="mt-2 p-2 text-center text-[2rem]">Clienti</p>
      <UCarousel v-slot="{ item }" :items="items" arrows>
        <img :src="item" width="225" draggable="false" class="rounded-sm mr-1 aspect-[3/4]">
      </UCarousel>
    </div>
    <div id="Contacts">
      <p class="mt-2 p-2 text-center text-[2rem]">Contatti</p>
      <div class="flex justify-evenly mb-1">
        <a href="tel:+393881242054">(+39) 347 123 4567</a>
        <a href="mailto:mail@gmail.com">mail@gmail.com</a>
        <a href="https://linkedin.com" target="_blank">
          <Icon name="ion:logo-linkedin" size="20" class="inline-block"></Icon>
        </a>
        <a href="https://instagram.com" target="_blank">
          <Icon name="ion:logo-instagram" size="20" class="inline-block"></Icon>
        </a>
        <a href="https://facebook.com" target="_blank">
          <Icon name="ion:logo-facebook" size="20" class="inline-block"></Icon>
        </a>
      </div>
      <div class="flex justify-evenly mb-1">
        <a href="https://maps.app.goo.gl/cMm6u8qLbdGnEASX9" target="_blank" class="m-0 p-0">Via Umberto I n.4, Padova
          (PD) 35000</a>
      </div>
      <!-- <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4085.2428198879093!2d11.872918877273097!3d45.403100871073164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477eda5228bb01e7%3A0xd50c0995897f55cb!2sVia%20Umberto%20I%2C%204%2C%2035123%20Padova%20PD!5e1!3m2!1sen!2sit!4v1737821001448!5m2!1sen!2sit"
          allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
          class="w-full h-[35vh] aspect-square"></iframe>
      </div> -->
    </div>
  </div>
</template>


<script setup lang="ts">
import LogoMobile from '@/assets/img/LogoMobile.png';
import ServiceComponent from './components/ServiceComponent.vue';

const items = [
  'https://picsum.photos/600/800?random=1',
  'https://picsum.photos/600/800?random=2',
  'https://picsum.photos/600/800?random=3',
  'https://picsum.photos/600/800?random=4',
  'https://picsum.photos/600/800?random=5',
  'https://picsum.photos/600/800?random=6'
];
const services = [
  { BtnText: 'Panificazione', Title: 'Panificazione', Description: 'Pane fresco e prodotti da forno.', ImgUrl: '/img/PizzaInOven.jpg' },
  { BtnText: 'Pizzeria', Title: 'Macchine per Pizzerie<br>Vendita e Assistenza', Description: 'Offriamo strumenti che ti consentono di creare un ambiente di lavoro <b>dinamico</b>, ideale per sperimentare <b>nuove creazioni</b> culinarie, esplorare <b>varietà di impasti</b> e soddisfare anche i palati più raffinati.', ImgUrl: '/img/PizzaInOven.jpg' },
  { BtnText: 'Ristorazione', Title: 'Ristorazione', Description: 'Cucina e piatti tradizionali.', ImgUrl: '/img/PizzaInOven.jpg' },
  { BtnText: 'Gelateria', Title: 'Gelateria', Description: 'Gelati artigianali di alta qualità.', ImgUrl: '/img/PizzaInOven.jpg' },
  { BtnText: 'Vendita Usato', Title: 'Vendita usato', Description: 'Attrezzature usate per la ristorazione.', ImgUrl: '/img/PizzaInOven.jpg' }
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
</style>
