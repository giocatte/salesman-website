<template>
    <div>
        <div v-show="!isReady" class="w-full h-[calc(100vh_-_8rem)] flex items-center justify-center bg-white">
            <div class="w-1/2">
                <UProgress animation="carousel" />
            </div>
        </div>
        <div id="Home" v-show="isReady" class="w-full relative bg-white text-black">
            <div v-if="isMobile" id="landing" class="w-full h-fit relative flex z-0">
                <div id="imgsBCK" class="absolute w-full h-full flex flex-row flex-nowrap">
                    <img src="assets/img/Polin_FornoPane.png" alt="Polin Forno per Pane" loading="lazy" draggable="false"
                        class="w-1/2 h-full brightness-75">
                    <img src="assets/img/Abbattitore_Polin.jpg" alt="Polin Abbattitore" loading="lazy" draggable="false"
                        class="w-1/2 h-full brightness-75">
                </div>
                <div id="Ellipse" class="absolute w-full h-full py-24 self-start z-10 bg-ellipse">
                </div>
                <div id="NomeCognome"
                    class="w-full h-fit self-start py-14 px-[.625rem] z-20 flex flex-col gap-y-8 items-center font-nunito text-center text-white">
                    <p class="text-[4rem] font-bold h-fit">ANDREA<br>TOGNON</p>
                    <p class="text-[2rem] font-extrabold tracking-normal max-w-[20ch]">Agente Rivenditore di zona
                        Autorizzato</p>
                    <p class="text-lg tracking-wide drop-shadow-xl leading-8 max-w-[30ch]">
                        Vendita macchinari e attrezzatura per:<br />
                        panifici, pasticcerie, pizzerie, gelaterie e ristorazione.</p>
                </div>
            </div>
            <div v-else-if="isDesktop" id="HomeDesktop">
                <div id="landingDesktop" class="relative grid grid-cols-2 w-full bg-iron text-gr font-nunito">
                    <div id="NomeCognomeDesktop" class="py-24 pl-44 flex flex-col gap-y-7">
                        <p class="font-bold text-[6.25rem] leading-[7.144rem]">ANDREA<br />TOGNON</p>
                        <p class="h2-Desktop">Agente rivenditore di zona Autorizzato</p>
                        <p class="h3-Desktop">Vendita macchinari e attrezzature per:<br />panifici, pasticcerie,
                            pizzerie,
                            gelaterie e ristoranti
                        </p>
                    </div>
                    <div id="imgBCKDesktop" class="col-start-2 flex items-center justify-start py-10 pr-24">
                        <img src="/img/DESKTOP/IMMAGINI_INIZIALI_DESKTOP/HOME.png" alt="Immagine di sfondo"
                            loading="lazy" draggable="false" class="drop-shadow-[0_36px_50px_rgba(0,0,0,0.25)]" />
                    </div>
                </div>
            </div>
            <ProductOverview :products="products.products" />
            <div id="ChiSono_"
                class="relative w-full font-nunito bg-iron-op px-4 py-[1.875rem] flex gap-2 lg:px-Desktop lg:pt-[3.75rem] lg:pb-20 lg:grid lg:grid-cols-2 lg:grid-rows-[fit,fit] lg:gap-x-12 lg:gap-y-7 flex-col flex-nowrap">
                <p class="text-[2rem] font-extrabold lg:h1-Desktop lg:row-start-1 lg:col-start-1">Chi sono</p>
                <p class="text-lg lg:h3-Desktop lg:row-start-2 lg:col-start-1">Da oltre <b>30 anni</b> mi occupo della
                    <b>vendita</b> e dell’<b>assistenza tecnica</b> di <b>macchinari professionali</b>
                    per il settore della ristorazione, della panificazione, della pasticceria e della gelateria.<br />
                    Tratto sia <b>attrezzature nuove</b> che <b>usate revisionate</b>, selezionate con cura per
                    garantire sempre la massima <b>qualità</b> e <b>affidabilità</b> nel tempo.
                </p>
                <p class="mt-3 text-[2rem] font-extrabold lg:mt-0 lg:h1-Desktop lg:row-start-1 lg:col-start-2">
                    Assistenza
                    tecnica e consulenza</p>
                <p class="text-lg lg:h3-Desktop lg:row-start-2 lg:col-start-2">Offro <b>assistenza tecnica, fornitura di
                        pezzi di ricambio</b> e
                    <b>manutenzione
                        periodica</b>
                    sui <b>macchinari</b> che commercializzo.<br />Grazie alla collaborazione con <b>tecnici
                        specializzati</b>, potrai contare su un
                    servizio <b>professionale</b> e <b>tempestivo</b>.<br />Fornisco inoltre <b>consulenza
                        personalizzata</b> per scegliere
                    la soluzione più adatta al tuo <b>volume di produzione</b> e agli <b>spazi</b> della tua attività.
                </p>
            </div>
            <div v-if="loghi" id="OnlyTheBest" class="relative py-8 lg:py-Desktop">
                <p class="text-[2rem] text-center font-extrabold font-nunito text-gr lg:h1-Desktop">SOLO IL MEGLIO</p>
                <UCarousel id="CaroselloLoghi" ref="carouseLoghiRef" class="py-8" v-slot="{ item }" :items="loghi"
                    :ui="{ item: 'basis-1/3 lg:basis-[15.625rem]', container: 'items-center gap-x-5 lg:gap-x-[9.688rem]' }">
                    <img :src="item.imgUrl" alt="carousel logo" loading="lazy" draggable="false"
                        class="aspect-[auto] w-full h-auto min-h-12 max-h-16" />
                </UCarousel>
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">
import ProductOverview from '../components/Product/Overview.vue';
import 'animate.css';

useSeoMeta({
    title: 'Macchinari per panifici, pasticcerie, pizzerie, gelaterie e ristoranti',
    ogTitle: 'Macchinari per panifici, pasticcerie, pizzerie, gelaterie e ristoranti',
    description: 'Da 30 anni fornisco macchinari professionali nuovi e usati per panifici, pasticcerie, pizzerie, gelaterie e ristoranti, con assistenza tecnica.',
    ogDescription: 'Da 30 anni fornisco macchinari professionali nuovi e usati per panifici, pasticcerie, pizzerie, gelaterie e ristoranti, con assistenza tecnica.',
    ogImage: '/img/DESKTOP/IMMAGINI_INIZIALI_DESKTOP/HOME.png',
})

const { width, isMobile, isDesktop } = useDeviceWidth()
// Rilevamento se siamo pronti a mostrare la vista corretta
const isReady = ref(false)

const { data } = await useFetch("/api/ServicesAPI");
const products = JSON.parse(JSON.stringify(data.value));


import loghiData from '~/assets/data/LoghiPaths.json';
// Estraggo l'array dei loghi
const loghi = loghiData.Loghi;

// Funzione per mischiare un array
function shuffle<T>(array: T[]): T[] {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// Creo una versione randomizzata dei loghi
const loghi2 = shuffle(loghi);
// const { data: loghi } = await useFetch('/api/getLoghi');
const carouseLoghiRef = ref();

onMounted(() => {
    isReady.value = true
    setInterval(() => {
        if (!carouseLoghiRef.value) return;

        if (carouseLoghiRef.value.page === carouseLoghiRef.value.pages) {
            return carouseLoghiRef.value.select(0);
        }

        carouseLoghiRef.value.next()
    }, 3500)
})

</script>

<style scoped>
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