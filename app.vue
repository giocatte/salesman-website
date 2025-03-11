<template>
  <div class="w-full relative bg-white text-black">
    <div id="sfondoNav" class="absolute top-0 left-0 w-full h-[4.5rem] -z-0"
      :class="menuOpen ? 'bg-white' : 'bg-iron-op'"></div>
    <div id="Navbar" class="py-3 px-5 w-full flex justify-between items-center z-30 sticky top-0 left-0"
      :class="menuOpen ? 'bg-white' : 'backdrop-blur-sm'">
      <a @click="menuOpen === true ? handleOptMenuSelected($event) : ''" href="#landing"><img :src="LogoMobile"
          alt="LogoMobile" class=""></a>
      <MenuBurgerAnimated @menu-trigger="handleMenuTrigger" id="menuBurger" class=""></MenuBurgerAnimated>
    </div>
    <div v-show="menuOpen === true"
      class="w-full h-[93svh] fixed overflow-hidden top-[8svh] left-0 z-20 bg-gray-600 animate__animated animate__faster"
      :class="closeAnimation ? 'animate__slideInDown' : 'animate__slideOutUp'">
      <div class="w-full h-full bg-white flex flex-col flex-nowrap justify-start items-start px-4 pt-6">
        <div class="w-full border-b-2 border-red-500" @click="showMacchinari = !showMacchinari">
          <div class="flex items-center gap-x-4 font-nunito text-gr py-1 font-bold h-fit">
            <h1 class="text-[3.5rem]">Macchinari
            </h1>
            <h1 class="text-[2.5rem]">+</h1>
          </div>
          <div v-show="showMacchinari" id="MacchinariMenu"
            class="animate__animated animate__faster animate__fadeInLeft">
            <a @click="handleOptMenuSelected" class="w-full" href="#Panetterie">
              <h1 class="font-nunito text-[#6E6E6E] text-[2.5rem] py-1 font-medium h-fit">Panetterie
              </h1>
            </a>
            <a @click="handleOptMenuSelected" class="w-full" href="#Pasticcerie">
              <h1 class="font-nunito text-[#6E6E6E] text-[2.5rem] py-1 font-medium h-fit">Pasticcerie
              </h1>
            </a>
            <a @click="handleOptMenuSelected" class="w-full" href="#Pizzerie">
              <h1 class="font-nunito text-[#6E6E6E] text-[2.5rem] py-1 font-medium h-fit">Pizzerie</h1>
            </a>
            <a @click="handleOptMenuSelected" class="w-full" href="#Gelaterie">
              <h1 class="font-nunito text-[#6E6E6E] text-[2.5rem] py-1 mb-2 font-medium h-fit">Gelaterie
              </h1>
            </a>
          </div>
        </div>
        <a @click="handleOptMenuSelected" class="w-full" href="#ChiSono">
          <h1 class="font-nunito text-gr text-[3.5rem] py-1 font-bold h-fit border-b-2 border-blue-300">Chi sono</h1>
        </a>
        <a @click="handleOptMenuSelected" class="w-full" href="#Footer">
          <h1 class="font-nunito text-gr text-[3.5rem] py-1 font-bold h-fit border-b-2 border-green-400">Contatti</h1>
        </a>
      </div>
    </div>
    <div id="landing" class="w-full relative flex z-0">
      <div id="imgsBCK" class="w-full flex flex-row flex-nowrap relative">
        <img src="assets/img/Polin_FornoPane.png" alt="" class="w-1/2 h-[80svh] brightness-75">
        <img src="assets/img/Abbattitore_Polin.jpg" alt="" class="w-1/2 h-[80svh] brightness-75">
      </div>
      <div id="Ellipse" class="absolute w-full h-full py-24 self-start z-10 bg-ellipse">
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
    <div id="ChiSono" class="font-nunito relative w-full bg-iron-op p-4 flex gap-2 row flex-col flex-nowrap">
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
    </div>
    <div id="OnlyTheBest" class="relative">
      <p class="text-[2.5rem] text-center font-semibold font-inter py-6 text-gr">SOLO IL MEGLIO</p>
      <div class="relative grid grid-cols-6 grid-rows-3">
        <div id="loghi" class="h-24 col-start-1 col-span-5 flex items-center overflow-hidden">
          <p v-for="n in 3" class="text-red-400 logo-anim p-2 m-2 font-bold">LOGO {{ n }}</p>
        </div>
        <div id="loghi" class="h-24 col-start-2 col-span-5 flex items-center overflow-hidden">
          <p v-for="n in 3" class="text-blue-400 logo-anim-rev p-2 m-2 font-bold">LOGO {{ n + 3 }}</p>
        </div>
        <div id="loghi" class="h-24 col-start-1 col-span-5 flex items-center overflow-hidden">
          <p v-for="n in 3" class="text-red-400 logo-anim-delay p-2 m-2 font-bold">LOGO {{ n + 6 }}</p>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>


<script setup lang="ts">
import LogoMobile from '@/assets/img/LogoMobileCircle.png';
import ServiceComponent from './components/ServiceComponent.vue';
import Footer from './components/Footer.vue';
import 'animate.css';

const menuBurger = ref(null); // Ref for MenuBurger component
const closeAnimation = ref(false);
const menuOpen = ref(false);
const showMacchinari = ref(false);
const handleMenuTrigger = (event: Event) => {
  // console.log("handleMenuTrigger", event);
  if (menuOpen.value === true) {
    document.body.classList.contains('overflow-y-hidden') ? document.body.classList.remove('overflow-y-hidden') : null;
    closeAnimation.value = !closeAnimation.value;
    setTimeout(() => { menuOpen.value = false; }, 450);
  } else {
    document.body.classList.add('overflow-y-hidden');
    menuOpen.value = !menuOpen.value;
    closeAnimation.value = !closeAnimation.value;
  }
};

const handleOptMenuSelected = (event: Event) => {
  const menuBurger = document.getElementById('menuBurger');
  menuBurger ? menuBurger.click() : null;
};

const services = [
  { BtnText: 'Panetterie', Title: 'Macchine per Panetterie</br>Vendita e Assistenza', Description: 'Vendo <b>macchinari</b> e <b>strumenti</b> progettati per ottimizzare ogni fase della <b>panificazione</b>, dal dosaggio degli ingredienti alla cottura perfetta. Con le <b>migliori attrezzature</b> potrai sperimentare nuove ricette, migliorare la qualità del pane e garantire un prodotto fragrante e irresistibile, giorno dopo giorno.', ImgUrl: '/img/PizzaInOven.jpg' },
  { BtnText: 'Pasticcerie', Title: 'Macchine per Pasticcerie</br>Vendita e Assistenza', Description: 'Precisione e creatività si incontrano con le attrezzature giuste. Dagli abbattitori ai forni ventilati, passando per sfogliatrici e planetarie, ogni strumento è pensato per aiutarti a realizzare dolci impeccabili, dalla più soffice crema al più raffinato impasto.', ImgUrl: '/img/PizzaInOven.jpg' },
  { BtnText: 'Pizzerie', Title: 'Macchine per Pizzerie<br>Vendita e Assistenza', Description: 'Attrezzature professionali per una pizza sempre perfetta. Dai forni di ultima generazione agli impastatrici, offro strumenti che garantiscono prestazioni elevate, uniformità di cottura e la massima qualità per ogni impasto. Ideali per chi vuole innovare senza rinunciare alla tradizione.', ImgUrl: '/img/PizzaInOven.jpg' },
  { BtnText: 'Gelaterie', Title: 'Macchine per Gelaterie</br>Vendita e Assistenza', Description: 'Scopri le attrezzature ideali per una produzione artigianale di alta qualità. Dai mantecatori ai banchi espositivi, ogni strumento è pensato per offrirti massima efficienza e libertà creativa. Con macchinari professionali, puoi trasformare ogni ingrediente in gelati e sorbetti unici, capaci di conquistare ogni cliente al primo assaggio.', ImgUrl: '/img/PizzaInOven.jpg' }
];

</script>

<style scoped>
.logo-anim {
  animation: slider linear 8s infinite;

}

.logo-anim-delay {
  animation: slider linear 9s infinite 1.5s;
}

.logo-anim-rev {
  animation: slider-rev linear 8.5s infinite .75s;
}

#MacchinariMenu {
  animation-duration: 125ms;
}

@keyframes slider {
  0% {
    transform: translateX(-80vw);
  }

  100% {
    transform: translateX(80vw);
  }

}

@keyframes slider-rev {
  0% {
    transform: translateX(80vw);
  }

  100% {
    transform: translateX(-80vw);
  }

}
</style>
