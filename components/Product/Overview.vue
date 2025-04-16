<template>
    <div id="Overview_Component" v-if="products && products.length > 0 && isMobile"
        class="w-full flex flex-col gap-y-2 px-4 mb-8">
        <p class="mt-2 p-2 text-[2.5rem] font-nunito font-semibold">Servizi</p>
        <!-- Tabs -->
        <div
            class="overflow-x-scroll flex items-end gap-x-1 min-h-10 h-fit snap-x snap-proximity scroll-smooth transition-all duration-150">
            <div class="p-1 mb-2 w-fit rounded-full transition-all duration-150"
                :class="{ 'bg-BlueToRed': activeTab === p.Name }" v-for="p in products" :key="p.Id"
                @click="setActiveTab(p.Name)">
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
        <div class="relative w-full h-fit py-14 px-44 flex flex-row flex-wrap content-center justify-start">
            <div v-if="comp" class="relative w-7/12 h-fit flex flex-col gap-y-5">
                <p class="font-nunito font-semibold h1-Desktop">Servizi</p>
                <div
                    class="overflow-x-auto flex items-center gap-x-4 min-h-10 h-fit">
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
                <p class="font-nunito font-semibold h2-Desktop text-gr" v-html="comp.Title"></p>
                <p class="font-nunito font-semibold h3-Desktop text-gr" v-html="comp.Description"></p>
                <!-- Button -->
                <NuxtLink :to="`/Servizi/${comp.BtnText}`" id="ChiSono"
                    class="p-1 w-fit rounded-2xl transition-all duration-150 bg-BlueToRed">
                    <button class="px-2 py-1 h-fit -m-[1px] text-black bg-white rounded-xl font-bold text-2xl">
                        SCOPRI DI PIÙ
                    </button>
                </NuxtLink>
            </div>
            <div class="w-4/12 rounded-2xl bg-yellow-400">
                <img :src="comp.ImgUrl" alt="" class="w-full h-full rounded-xl" />
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
import { ref, watch } from 'vue';

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

onMounted(() => {
    // Set the initial active tab based on the first product
    if (props.products && props.products.length > 0) {
        activeTab.value = props.products[0].Name; // Imposta il primo tab
        comp.value = props.products[0].component; // Imposta il primo componente
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
    activeTab.value = p.Name;
    comp.value = p.component;
};
</script>
script