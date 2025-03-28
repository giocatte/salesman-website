<template>
    <div id="ShowCarousel_Component" v-if="shows && shows.length > 0" class="px-3 py-4 bg-white">
        <div class="relative w-full aspect-[8/9.1] bg-RedToBlue p-1 rounded-2xl flex flex-col felx-nowrap z-0">
            <div class="w-full h-fit bg-none bg-[#f4f4f4] rounded-t-xl">
                <p class="text-gr font-nunito text-center text-xl font-extrabold mt-4" v-html="impresaText">
                </p>
            </div>
            <UCarousel v-slot="{ item }" :items="shows" indicators :ui="{ item: 'basis-full' }"
                class="CaroselloProdotti rounded-b-xl overflow-hidden w-full h-full bg-white">
                <div
                    class="w-full h-full aspect-[8/9.1] bg-[#f4f4f4] px-4 py-6 flex flex-col flex-nowrap items-center text-gr font-nunito">
                    <div :style="{ backgroundImage: 'url(' + item.ImgUrl + ')' }"
                        class="h-full w-full block drop-shadow-lg bg-contain bg-no-repeat bg-center"
                        alt="carousel image">
                    </div>
                    <p class="text-center text-xl font-extrabold">{{ item.Brand }}</p>
                    <p class="text-center text-sm font-bold">{{ item.Model }}</p>
                    <p class="text-center text-[13px] font-normal pb-2">{{ item.Description }}</p>
                </div>
            </UCarousel>
        </div>
    </div>
</template>


<style scoped>
.desc b {
    font-weight: 600;
}

div.CaroselloProdotti {
    --color-primary-400: 251 135 82;
}
</style>

<script setup lang="ts">

const props = defineProps({
    product: Object
});

console.log("product:", props?.product?.component.show);
const shows = JSON.parse(JSON.stringify(props?.product?.component.show));
const impresaText = "SOLO IL MEGLIO PER LA TUA</br> IMPRESA";
console.log("shows:", shows);

</script>
