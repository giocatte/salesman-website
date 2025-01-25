<template>
  <div class="w-full overflow-x-hidden bg-gray-600 p-2 text-white">
    <div id="header" class="w-full flex items-center">
      <div id="NomeCognome" class="w-2/3">
        <p class="text-[2rem] bg-green-400">Andrea</p>
        <p class="text-[2rem] bg-blue-400">Cognome</p>
        <p class="text-lg bg-yellow-400">Agente di commercio con 20 anni di solida esperienza alle spalle. Da oltre 25
          anni il mio motto è sempre lo stesso:<br><b>Vincere, e Vinceremo!</b></p>
      </div>
      <div class="w-1/3">
        <img src="~/assets/img/Belfort.png" class="rounded-sm bg-blue-300" alt="Jordan Belfort, WoWStreet">
        <img src="~/assets/img/Belfort.png" class="rounded-sm bg-violet-400" alt="Jordan Belfort, WoWStreet">
      </div>
    </div>
    <div id="Services" class="">
      <p class="mt-2 p-2 text-center text-[2rem]">Servizi</p>
      <div class="relative w-full flex overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar">
        <div v-for="i in 5"
          class="w-[35vw] h-32 mr-1 border-x-2 border-black bg-yellow-600 flex flex-none items-center justify-center snap-start">
          <p class="w-fit">Servizio {{ i }}</p>
        </div>
      </div>
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
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4085.2428198879093!2d11.872918877273097!3d45.403100871073164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477eda5228bb01e7%3A0xd50c0995897f55cb!2sVia%20Umberto%20I%2C%204%2C%2035123%20Padova%20PD!5e1!3m2!1sen!2sit!4v1737821001448!5m2!1sen!2sit"
          allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
          class="w-full h-[35vh] aspect-square"></iframe>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
const items = [
  'https://picsum.photos/600/800?random=1',
  'https://picsum.photos/600/800?random=2',
  'https://picsum.photos/600/800?random=3',
  'https://picsum.photos/600/800?random=4',
  'https://picsum.photos/600/800?random=5',
  'https://picsum.photos/600/800?random=6'
]
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
