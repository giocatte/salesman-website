<template>
    <div id="Footer">
        <div id="Contacts" class="bg-iron-op bg-opacity-50 p-4 flex flex-col gap-y-4 flex-nowrap items-center text-gr">
            <p class="mt-3 text-center text-[2rem] font-black font-nunito leading-7">ANDREA TOGNON</p>
            <p class="text-center text-lg font-semibold font-nunito">Agente Rivenditore Autorizzato<br />Per il
                Nord-Est: Padova & Venezia</p>
            <p class="mt-3 text-center text-[2rem] font-black font-nunito leading-7">Telefono</p>
            <div class="w-fit rounded-full [border-bottom:_3px_inset_#989898] drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
                <button
                    class="w-[21ch] flex items-center justify-around font-bold font-nunito text-lg px-4 py-1 rounded-full hover:bg-blue-600 transition">
                    <Icon name="ion:call" size="20" class="inline-block"></Icon> (+39) 348 300 3229
                </button>
            </div>
            <div
                class="w-fit mt-2 rounded-full [border-bottom:_3px_inset_#989898] drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
                <button
                    class="w-[21ch] flex items-center justify-around font-bold font-nunito text-lg px-4 py-1 rounded-full hover:bg-blue-600 transition">
                    <Icon name="ion:mail" size="20" class="inline-block"></Icon> a.tognon@yahoo.it
                </button>
            </div>
        </div>
        <div id="CompanyInfo" class="bg-[#D4D4D4] pb-5 font-nunito text-gr text-lg">
            <div id="footerdivider" class="bg-BlueToRed w-full h-1"></div>
            <div class="flex flex-row flex-wrap justify-center gap-3">
                <p class="flex items-center pt-2">
                    <Icon name="meteor-icons:copyright" size="16" class="inline-block"></Icon> 2025 Andrea Tognon -
                    Tutti i
                    diritti
                    riservati
                </p>
                <p class="w-fit inline-block mr-2">Privacy Policy</p>
                <p class="w-fit inline-block ml-2">Cookie Policy</p>
                <p>Made by <a href="https://www.ethoswebstudio.it" target="_blank"
                        class="underline">ethoswebstudio.it</a></p>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>