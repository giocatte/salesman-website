<template>
    <div id="Home" class="w-full relative bg-white text-black">
        <div id="landing" class="w-full h-fit relative flex z-0">
            <div id="imgsBCK" class="absolute w-full h-full flex flex-row flex-nowrap">
                <img src="assets/img/Polin_FornoPane.png" alt="" class="w-1/2 h-full brightness-75">
                <img src="assets/img/Abbattitore_Polin.jpg" alt="" class="w-1/2 h-full brightness-75">
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
                    Panifici, pasticcerie, pizzerie, gelaterie e ristorazione.</p>
            </div>
        </div>
        <div id="Services" class="w-full">
            <p class="mt-2 p-2 text-[2.5rem] font-nunito font-semibold">Servizi:</p>
            <ProductOverview :products="products.products" />
        </div>
        <div id="ChiSono_"
            class="font-nunito relative w-full bg-iron-op px-4 py-[1.875rem] flex gap-2 row flex-col flex-nowrap">
            <p class="text-[2rem] font-extrabold">Chi sono</p>
            <p class="text-lg">Da oltre <b>30 anni</b> mi occupo di <b>vendita</b> e <b>assistenza tecnica</b> di
                macchinari <b>nuovi</b> e
                <b>usati</b>, garantendo <b>qualità</b> e
                <b>affidabilità</b>.<br />Collaboro con i <b>migliori marchi</b> del settore per offrire
                <b>soluzioni</b> su
                <b>misura</b> per
                le tue
                esigenze.
            </p>
            <p class="mt-3 text-[2rem] font-extrabold">Assistenza tecnica e consulenza dedicata</p>
            <p class="text-lg">Offro <b>assistenza tecnica, fornitura di pezzi di ricambio</b> e <b>manutenzione
                    periodica</b>
                sui <b>macchinari</b> che commercializzo.<br />Grazie alla collaborazione con <b>tecnici
                    specializzati</b>, potrai contare su un
                servizio <b>professionale</b> e <b>tempestivo</b>.<br />Fornisco inoltre <b>consulenza
                    personalizzata</b> per scegliere
                la soluzione più adatta al tuo <b>volume di produzione</b> e agli <b>spazi</b> della tua attività.
            </p>
        </div>
        <div id="OnlyTheBest" class="relative py-8">
            <p class="text-[2rem] text-center font-extrabold font-nunito text-gr">SOLO IL MEGLIO</p>
            <UCarousel v-if="loghi" id="CaroselloLoghi" ref="carouseLoghiRef" class="py-8" v-slot="{ item }"
                :items="loghi" :ui="{ item: 'basis-1/3', container: 'items-center gap-x-5' }">
                <img :src="item" alt="carousel logo" class="w-full aspect-[auto] h-auto max-h-20" draggable="false" />
            </UCarousel>
            <p v-else>loghi didn't loaded correctly, sorry</p>
        </div>
    </div>
</template>


<script setup lang="ts">
import ProductOverview from '../components/Product/Overview.vue';
import 'animate.css';

const { data } = await useFetch("/api/ServicesAPI");
const products = JSON.parse(JSON.stringify(data.value));


const { data: loghi } = await useFetch('/api/getLoghi');
const carouseLoghiRef = ref();

onMounted(() => {
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