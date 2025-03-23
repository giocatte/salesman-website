<template>
    <div id="ShowCarousel_Component" v-if="shows && shows.length > 0" class="px-3 py-4 bg-white">
        <div class="relative w-full aspect-[8/9.1] bg-RedToBlue p-1 rounded-2xl flex flex-col felx-nowrap z-0">
            <div class="w-full h-fit bg-none bg-[#f4f4f4] rounded-t-xl">
                <p class="text-gr font-nunito text-center text-xl font-extrabold mt-4" v-html="impresaText">
                </p>
            </div>
            <div class="relative w-full h-full bg-none bg-[#f4f4f4] rounded-b-xl overflow-y-auto no-scrollbar z-10">
                <div v-for="s in shows" class="w-full h-full last:rounded-b-xl">
                    <div class="w-full h-full px-4 flex flex-col flex-nowrap items-center text-gr font-nunito">
                        <div :style="{ backgroundImage: 'url(' + s.ImgUrl + ')' }"
                            class="h-full w-full block drop-shadow-lg bg-cover bg-center" alt="carousel image">
                        </div>
                        <p class="text-center text-xl font-extrabold">{{ s.Brand }}</p>
                        <p class="text-center text-sm font-bold">{{ s.Model }}</p>
                        <p class="text-center text-[13px] font-normal pb-2">{{ s.Description }}</p>
                    </div>
                </div>
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
import { defineProps } from 'vue';

const props = defineProps({
    product: Object
});

console.log("product:", props.product.component.show);
const shows = JSON.parse(JSON.stringify(props.product.component.show));
const impresaText = "SOLO IL MEGLIO PER LA TUA</br> IMPRESA";
// console.log("shows:", shows);
</script>
