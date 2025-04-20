<template>
    <div id="Footer" class="bg-white">
        <div id="Contatti"
            class="bg-iron-op bg-opacity-50 py-7 px-12 flex flex-col gap-y-5 flex-nowrap items-center text-gr lg:px-Desktop lg:flex-row lg:justify-between">
            <img v-show="isDesktop" :src="Logo" alt="Logo" class="w-[7.5rem] aspect-square">
            <div id="AndreaTognon" class="mt-2 lg:mt-0">
                <p class="text-center text-[2rem] font-black font-nunito leading-7 lg:h2-Desktop">ANDREA TOGNON</p>
                <p v-show="isMobile" class="mt-1 text-center text-lg font-semibold font-nunito">Agente
                    Rivenditore Autorizzato<br />per Padova, Venezia e il Nord Est</p>
                <p v-show="isDesktop" class="mt-1 text-center font-semibold font-nunito button-Desktop min-w-[27ch]">Agente Rivenditore autorizzato <br/>per il Nord-Est, Padova e Venezia</p>
            </div>
            <div id="Telefono">
                <p class="text-center text-[2rem] font-black font-nunito leading-7 lg:h2-Desktop">Telefono</p>
                <div
                    class="w-fit mt-1 rounded-full [border-bottom:_3px_inset_#989898] hover:border-b-0 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
                    <a href="tel:3483003229">
                        <button
                            class="w-[21ch] flex items-center justify-around font-bold font-nunito text-lg px-4 py-1 rounded-full hover:bg-red-500  hover:text-white hover:mb-[3px] lg:button-Desktop">
                            <Icon name="ion:call" size="20" class="inline-block"></Icon> (+39) 348 300 3229
                        </button></a>
                </div>
            </div>
            <div id="Email">
                <p class="text-center text-[2rem] font-black font-nunito leading-7 lg:h2-Desktop">E-mail</p>
                <div
                    class="w-fit mt-1 rounded-full [border-bottom:_3px_inset_#989898] hover:border-b-0 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
                    <a href="mailto:a.tognon@yahoo.it">
                        <button class="w-[21ch] flex items-center justify-around font-bold font-nunito text-lg px-4 py-1 rounded-full hover:bg-blue-500 hover:text-white hover:mb-[3px] lg:button-Desktop">
                        <Icon name="ion:mail" size="20" class="inline-block"></Icon> a.tognon@yahoo.it
                        </button>
                    </a>
                </div>
            </div>
        </div>
        <div id="CompanyInfo" class="bg-[#D4D4D4] pb-5 font-nunito text-gr text-lg lg:text-2xl lg:pb-0">
            <div id="footerdivider" class="bg-BlueToRed w-full h-1"></div>
            <div class="flex flex-row flex-wrap justify-center gap-3 lg:items-center lg:py-[.625rem]">
                <div class="flex items-start pt-2 lg:pt-0">
                    <Icon name="meteor-icons:copyright" size="16" class="mt-[6px] inline-block">
                    </Icon>
                    <p v-show="isMobile">2025 Andrea Tognon - P.IVA 02703360285 <br />
                        Via S. Bellino, 4 - 35020 Albignasego (PD)
                    </p>
                    <p v-show="isDesktop">2025 Andrea Tognon | P.IVA 02703360285 | Via S. Bellino, 4 - 35020 Albignasego (PD)</p>
                </div>
                <p class="w-fit inline-block mr-2 lg:mr-0">| Privacy Policy |</p>
                <p>Made by <a class="underline" target="_blank" href="https://www.ethoswebstudio.it">ethoswebstudio.it</a></p>
            </div>
        </div>
    </div>
</template>

<script setup>
import Logo from '~/assets/img/LOGO_AT.png';

const { width, isMobile, isDesktop } = useDeviceWidth()

</script>

<style lang="scss" scoped></style>