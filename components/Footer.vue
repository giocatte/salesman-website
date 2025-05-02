<template>
  <div id="Footer" class="bg-white">
    <!-- ---------------- CONTATTI ---------------- -->
    <div id="Contatti" class="bg-iron-op bg-opacity-50
             py-7           lg:py-Tablet  xl:py-Desktop
             px-6           lg:px-Tablet xl:px-Desktop
             flex flex-col gap-y-5 items-center text-gr
             lg:flex-row lg:justify-between">
      <!-- logo – solo desktop / tablet landscape -->
      <img v-show="isDesktop" :src="Logo" alt="Logo" loading="lazy" draggable="false" class="w-[6rem] aspect-square" />

      <!-- nome + qualifica -->
      <div id="AndreaTognon" class="mt-2 lg:mt-0">
        <p class="text-center font-black font-nunito leading-7
                 text-xl          <!-- mobile -->
                 lg:h2-Tablet     <!-- tablet landscape -->
                 xl:h2-Desktop">
          ANDREA&nbsp;TOGNON
        </p>

        <!-- qualifica – mobile -->
        <p v-show="isMobile" class="mt-1 text-center text-base font-semibold font-nunito">
          Agente Rivenditore Autorizzato<br />
          per Padova, Venezia e il Nord-Est
        </p>

        <!-- qualifica – tablet & desktop -->
        <p v-show="isDesktop" class="mt-1 text-center font-semibold font-nunito
                 lg:button-Tablet xl:button-Desktop
                 min-w-[27ch]">
          Agente Rivenditore autorizzato<br />
          per il Nord-Est, Padova e Venezia
        </p>
      </div>

      <!-- telefono -->
      <div id="Telefono">
        <p class="text-center font-black font-nunito leading-7
                 text-xl lg:h2-Tablet xl:h2-Desktop">
          Telefono
        </p>

        <div class="w-fit mt-1 rounded-full
                 [border-bottom:_3px_inset_#989898] hover:border-b-0
                 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
          <a href="tel:3483003229">
            <button class="w-full max-w-[21ch] flex items-center justify-around font-bold font-nunito
                     text-base px-4 py-1 rounded-full
                     hover:bg-red-500 hover:text-white hover:mb-[3px]
                     lg:button-Tablet xl:button-Desktop">
              <Icon name="ion:call" size="20" class="inline-block" />
              (+39) 348 300 3229
            </button>
          </a>
        </div>
      </div>

      <!-- e-mail -->
      <div id="Email">
        <p class="text-center font-black font-nunito leading-7
                 text-xl lg:h2-Tablet xl:h2-Desktop">
          E-mail
        </p>

        <div class="w-fit mt-1 rounded-full
                 [border-bottom:_3px_inset_#989898] hover:border-b-0
                 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
          <a href="mailto:a.tognon@yahoo.it">
            <button class="w-full max-w-[21ch] flex items-center justify-around font-bold font-nunito
                     text-base px-4 py-1 rounded-full
                     hover:bg-blue-500 hover:text-white hover:mb-[3px]
                     lg:button-Tablet xl:button-Desktop">
              <Icon name="ion:mail" size="20" class="inline-block" />
              a.tognon@yahoo.it
            </button>
          </a>
        </div>
      </div>
    </div>

    <!-- ------ DIVIDER tra CONTATTI e COMPANY INFO ------ -->
    <div id="footerdivider" class="bg-BlueToRed w-full h-1"></div>

    <!-- --------------- COMPANY INFO --------------- -->
    <div id="CompanyInfo" class="bg-[#D4D4D4] pb-5 font-nunito text-gr
             text-sm md:text-base xl:text-lg
             flex flex-col items-center text-center gap-3 p-4
             lg:flex-row lg:flex-wrap lg:justify-center">
      <div class="flex flex-col items-center gap-2 lg:flex-row">
        <div class="flex items-center gap-1">
          <Icon name="meteor-icons:copyright" size="16" class="inline-block" />
          <p>
            2025&nbsp;Andrea&nbsp;Tognon&nbsp;- P.IVA&nbsp;02703360285<br class="lg:hidden" />
            Via&nbsp;S.&nbsp;Bellino,&nbsp;4&nbsp;-&nbsp;35020&nbsp;Albignasego&nbsp;(PD)
          </p>
        </div>

        <a href="https://www.iubenda.com/privacy-policy/31101428" target="_blank" class="w-fit inline-block mx-2">| Privacy&nbsp;Policy |</a>

        <p>
          Made by
          <a class="underline" target="_blank" href="https://www.ethoswebstudio.it">
            ethoswebstudio.it
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Logo from '~/assets/img/LOGO_AT.png'
const { isMobile, isDesktop } = useDeviceWidth()
</script>

<style scoped lang="scss">
/* nessuna modifica necessaria per ora */
</style>