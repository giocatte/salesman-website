<template>
    <div id="Overview_Component" v-if="products && products.length > 0 && isMobile"
        class="w-full flex flex-col gap-y-2 px-4 mb-8">
        <p class="mt-2 p-2 text-[2.5rem] font-nunito font-semibold">Servizi</p>
        <!-- Tabs -->
        <div
            class="overflow-x-scroll flex items-end gap-x-1 min-h-10 h-fit snap-x snap-proximity scroll-smooth transition-all duration-150">
            <div class="p-1 mb-2 w-fit rounded-full transition-all duration-150"
                :class="{ 'bg-BlueToRed': activeTab === p.Name }" v-for="p in products" :key="p.Id"
                @click="setActiveTab(p)">
                <button class="px-2 py-1 h-fit -m-[1px] text-black rounded-full"
                    :class="activeTab === p.Name ? 'btnBlueRed-ez p-1 snap-center snap-always' : null">
                    {{ p.component.BtnText }}
                </button>
            </div>
        </div>

        <!-- Product Content -->
        <div v-for="p in products" :key="p.Id" v-show="p.Name === activeTab"
            class="flex flex-col gap-y-4 py-1 pt-0 bg-white rounded-xl animate__animated animate__fadeIn">

            <!-- Image -->
            <div class="relative self-center w-full max-w-[400px] rounded-[1.25rem] bg-no-repeat bg-center bg-cover"
                :style="{ backgroundImage: `url(${p.component.ImgUrl})`, aspectRatio: '372 / 250' }">
            </div>

            <!-- Title -->
            <p class="text-3xl font-semibold" v-html="p.component.Title"></p>

            <!-- Description -->
            <p class="text-base text-justify desc pr-2 min-h-40" v-html="p.component.Description"></p>

            <!-- Button -->
            <NuxtLink :to="`/Servizi/${p.component.BtnText}`" id="ChiSono" class="p-1 w-fit rounded-full bg-BlueToRed">
                <button class="btnBlueRed w-fit">
                    SCOPRI DI PIÙ
                </button>
            </NuxtLink>
        </div>
    </div>
    <div v-else-if="products && products.length > 0 && isDesktop">
        <div class="relative w-full h-fit py-14 px-44 flex content-center">
            <div class="relative w-7/12 h-fit flex flex-col gap-y-5" v-if="comp && compPrev && compNext">
                <p class="font-nunito font-semibold h1-Desktop">Servizi</p>
                <div class="overflow-x-auto flex items-center gap-x-4 min-h-10 h-fit">
                    <div class="py-1 w-fit rounded-full transition-all duration-150"
                        :class="{ 'bg-BlueToRed px-1': activeTab === p.Name }" v-for="p in products" :key="p.Id"
                        @click="setActiveTab(p)">
                        <button
                            class="w-fit bg-[#fff] rounded-full px-2 py-[1px] h-fit -m-[1px] text-black text-xl font-bold"
                            :class="activeTab === p.Name ? 'snap-center snap-always' : ''">
                            {{ p.component.BtnText }}
                        </button>
                    </div>
                </div>
                <p class="font-nunito font-semibold h2-Desktop text-gr" v-html="desktopTitle"></p>
                <p class="font-nunito font-semibold h3-Desktop text-gr" v-html="comp.Description"></p>
                <!-- Button -->
                <NuxtLink :to="`/Servizi/${comp.BtnText}`" id="ChiSono"
                    class="p-1 w-fit rounded-2xl transition-all duration-150 bg-BlueToRed">
                    <button class="px-2 py-1 h-fit -m-[1px] text-black bg-white rounded-xl font-bold text-2xl">
                        SCOPRI DI PIÙ
                    </button>
                </NuxtLink>
            </div>
            <div class="w-5/12 relative flex justify-center">
                <img :src="compPrev.ImgUrl" alt=""
                    class="h-[23.8rem] w-[23.8rem] absolute top-10 left-0 z-0 blur-sm rounded-3xl animate__animated animate__faster" />
                <img :src="comp.ImgUrl" alt="" id="compImg"
                    class="h-[29.75rem] w-[29.5rem] relative left-5 z-10 rounded-3xl animate__animated animate__faster"
                    :class="closeAnimation ? 'animate__flipOutY' : 'animate__flipInY'" />
                <img :src="compNext.ImgUrl" alt=""
                    class="h-[23.8rem] w-[23.8rem] absolute top-10 right-0 z-0 blur-sm rounded-3xl animate__animated animate__faster" />
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.desc b {
    font-weight: 600;
}
</style>

<script setup>
import { ref, onMounted, watch } from 'vue';

const { width, isMobile, isDesktop } = useDeviceWidth()

// Define the props
const props = defineProps({
    products: {
        type: Array,
        required: true
    }
});

// Reactive state
const activeTab = ref(1);
const comp = ref(null);
const compPrev = ref(null);
const compNext = ref(null);
const desktopTitle = ref(null);
const closeAnimation = ref(false); // Animation state for the component

onMounted(() => {
    // Set the initial active tab based on the first product
    if (props.products && props.products.length > 0) {
        activeTab.value = props.products[0].Name; // Imposta il primo tab
        comp.value = props.products[0].component; // Imposta il primo componente
        desktopTitle.value = props.products[0].component.Title; // Imposta il titolo desktop
        desktopTitle.value = desktopTitle.value.replace(/<[^>]+>/g, ' '); // Rimuovi i tag HTML
        compPrev.value = props.products[6].component; // Imposta il primo componente per desktop
        compNext.value = props.products[6].component; // Imposta il primo componente per desktop
    }
});

// Watch per impostare il primo tab automaticamente
watch(() => props.products, (newProducts) => {
    if (newProducts && newProducts.length > 0) {
        activeTab.value = newProducts[0].Name; // Imposta il primo tab
    }
}, { immediate: true });

// Function to change active tab
const setActiveTab = (p) => {
    closeAnimation.value = true; // Imposta l'animazione di chiusura
    setTimeout(() => {
        closeAnimation.value = false; // Ripristina l'animazione di apertura
        activeTab.value = p.Name;
        comp.value = p.component;
        desktopTitle.value = p.component.Title; // Imposta il titolo desktop
        desktopTitle.value = desktopTitle.value.replace(/<[^>]+>/g, ' '); // Rimuovi i tag HTML
        if (p.Id == 1) {
            compPrev.value = props.products[6].component;
            compNext.value = props.products[1].component;
        } else if (p.Id == 7) {
            desktopTitle.value = "Arredamenti per Laboratori e Cucine <br/>Vendita e Progettazione su Misura";
            compPrev.value = props.products[5].component;
            compNext.value = props.products[0].component;
        } else {
            compPrev.value = props.products[p.Id - 2].component;
            compNext.value = props.products[p.Id].component;
        }
    }, 75);
};
</script>
script