<template>
    <div id="ServiceComponent" class="flex flex-col gap-y-2 p-6">
        <!-- Tabs -->
        <div class="flex items-end gap-2 border-b border-gray-300 overflow-x-auto no-scrollbar min-h-14">
            <button v-for="s in services" :key="s.Title" @click="setActiveTab(s.Title)"
                class="mx-2 my-1 h-fit px-1 text-gray-600 transition-all duration-150 rounded-lg" :class="{
                    'bg-white text-red-500 font-semibold border-2 border-black': activeTab === s.Title, 'hover:bg-white': activeTab !== s.Title
                }">
                {{ s.BtnText }}
            </button>
        </div>

        <!-- Service Content -->
        <div v-for="s in services" :key="s.Title" v-show="s.Title === activeTab"
            class="flex flex-col gap-y-4 p-6 pt-0 bg-white rounded-xl">
            <!-- Image -->
            <div class="relative self-center w-full max-w-[400px] rounded-[1.25rem] bg-no-repeat bg-bottom bg-cover"
                :style="{ backgroundImage: `url(${s.ImgUrl})`, aspectRatio: '1 / 1' }"></div>

            <!-- Title -->
            <p class="text-3xl font-semibold" v-html="s.Title"></p>

            <!-- Description -->
            <p class="text-base text-justify desc" v-html="s.Description"></p>

            <!-- Button -->
            <button class="text-black w-[65%] self-center mt-2 px-4 py-2 border-2 border-black shadow-lg rounded-lg hover:bg-blue-600 transition">SCOPRI DI PIU'</button>
        </div>
    </div>
</template>

<style>
.desc b{
    font-weight: 600;
}
</style>

<script setup>
import { ref, onMounted } from 'vue';

// Define the props
const props = defineProps({
    services: {
        type: Array,
        required: true
    }
});

// Set the default active tab
const activeTab = ref(null);

// Ensure the first tab is selected on mount
onMounted(() => {
    if (props.services.length > 0) {
        activeTab.value = props.services[0].Title;
    }
});

// Function to change active tab
const setActiveTab = (title) => {
    activeTab.value = title;
};
</script>
