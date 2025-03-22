<template>
    <div id="Overview_Component" v-if="products && products.length > 0" class="flex flex-col gap-y-2 px-2 mb-8">
        <!-- Tabs -->
        <div class="flex items-end gap-1 overflow-x-auto no-scrollbar min-h-11">
            <div class="p-1 mt-2 w-fit rounded-full" :class="{ 'bg-BlueToRed': activeTab === p.Name }"
                v-for="p in products" :key="p.Id" 
                @click="setActiveTab(p.Name)">
                <button class="px-2 py-1 h-fit -m-[1px] text-black transition-all duration-150 rounded-full" 
                    :class="activeTab === p.Name ? 'btnBlueRed': null">
                    {{ p.component.BtnText }}
                </button>
            </div>
        </div>

        <!-- Product Content -->
        <div v-for="p in products" :key="p.Id" 
            v-show="p.Name === activeTab" 
            class="flex flex-col gap-y-4 py-1 pt-0 bg-white rounded-xl">
            
            <!-- Image -->
            <div class="relative self-center w-full max-w-[400px] rounded-[1.25rem] bg-no-repeat bg-bottom bg-cover"
                :style="{ backgroundImage: `url(${p.component.ImgUrl})`, aspectRatio: '1 / 1' }">
            </div>

            <!-- Title -->
            <p class="text-3xl font-semibold" v-html="p.component.Title"></p>

            <!-- Description -->
            <p class="text-base text-justify desc pr-2" v-html="p.component.Description"></p>

            <!-- Button -->
            <NuxtLink :to="`/Servizi/${p.component.BtnText}`" id="ChiSono"
                class="p-1 w-fit rounded-full bg-BlueToRed">
                <button
                    class="btnBlueRed">
                    SCOPRI DI PIÙ
                </button>
            </NuxtLink>
        </div>
    </div>
</template>

<style scoped>
.desc b {
    font-weight: 600;
}
.btnBlueRed {
    @apply px-2 py-1 font-semibold;
}
.btnBlueRed:hover {
    @apply bg-none text-black font-semibold px-2 py-1;
}
</style>

<script setup>
import { ref, onMounted, watch } from 'vue';

// Define the props
const props = defineProps({
    products: {
        type: Array,
        required: true
    }
});

// Reactive state
const activeTab = ref(null);

// Watch per impostare il primo tab automaticamente
watch(() => props.products, (newProducts) => {
    if (newProducts && newProducts.length > 0) {
        activeTab.value = newProducts[0].Name; // Imposta il primo tab
    }
}, { immediate: true });

// Function to change active tab
const setActiveTab = (name) => {
    activeTab.value = name;
};
</script>
