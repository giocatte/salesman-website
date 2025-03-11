<template>
    <div id="ServiceComponent" class="flex flex-col gap-y-2 px-2 mb-8">
        <!-- Tabs -->
        <div class="flex items-end gap-1 overflow-x-auto no-scrollbar min-h-11">
            <div class="w-fit m-1 px-[1px] pb-1 bg-BlueToRed rounded-full" v-for="s in services" :key="s.Title"
                @click="setActiveTab(s.Title)">
                <button class="h-fit -m-[1px] p-2 text-black transition-all duration-150 rounded-full" :class="{
                    'bg-white font-bold': activeTab === s.Title, 'hover:bg-white bg-white': activeTab !== s.Title
                }">
                    {{ s.BtnText }}
                </button>
            </div>
        </div>

        <!-- Service Content -->
        <div v-for="s in services" :key="s.Title" v-show="s.Title === activeTab"
            class="flex flex-col gap-y-4 py-1 pt-0 bg-white rounded-xl">
            <!-- Image -->
            <div class="relative self-center w-full max-w-[400px] rounded-[1.25rem] bg-no-repeat bg-bottom bg-cover"
                :style="{ backgroundImage: `url(${s.ImgUrl})`, aspectRatio: '1 / 1' }"></div>

            <!-- Title -->
            <p class="text-3xl font-semibold" v-html="s.Title"></p>

            <!-- Description -->
            <p class="text-base text-justify desc pr-2" v-html="s.Description"></p>

            <!-- Button -->
            <div class="p-1 w-fit rounded-full bg-BlueToRed">
                <button
                    class="text-black w-fit font-bold bg-white text-base px-2 py-1 rounded-full hover:bg-blue-600 transition">SCOPRI
                    DI PIU'</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.desc b {
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
