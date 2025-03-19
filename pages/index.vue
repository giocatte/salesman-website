<template>
    <div class="w-full relative bg-white text-black">
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
            <ProductOverview :products="products.products" />
        </div>
        <div id="ChiSono_" class="font-nunito relative w-full bg-iron-op pt-0 p-4 flex gap-2 row flex-col flex-nowrap">
            <p class="mt-6 pt-2 text-[2.5rem] font-bold">CHI SONO</p>
            <p class="text-lg">Da oltre <b>30 anni</b> mi occupo di <b>vendita</b> e <b>assistenza</b> tecnica di
                <b>macchinari</b> nuovi e
                usati, garantendo <b>qualità</b> e
                <b>affidabilità</b>.<br />Collaboro con i <b>migliori marchi</b> del settore per offrire soluzioni su
                misura per
                le tue
                esigenze.
            </p>
            <p class="font-semibold text-[2rem]">Assistenza tecnica e consulenza dedicata</p>
            <p class="text-lg">Offro <b>assistenza tecnica</b>, fornitura di pezzi di ricambio e manutenzione periodica
                sui
                macchinari che
                commercializzo.<br />Grazie alla <b>collaborazione con tecnici</b> specializzati, potrai contare su un
                <b>servizio
                    professionale</b> e <b>tempestivo</b>.<br />Fornisco inoltre consulenza personalizzata per scegliere
                la
                soluzione più adatta al
                tuo volume di produzione e agli spazi della tua attività.
            </p>
            <div class="p-1 mt-2 w-fit rounded-full bg-BlueToRed">
                <button class="btnBlueRed">
                    CONTATTAMI
                </button>
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
    </div>
</template>


<script setup lang="ts">
import ProductOverview from '../components/Product/Overview.vue';
import 'animate.css';

const { data } = await useFetch("/api/ProducType");
const products = JSON.parse(JSON.stringify(data.value));

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