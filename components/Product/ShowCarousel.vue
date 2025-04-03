<template>
    <div id="ShowCarousel_Component" v-if="shows && shows.length > 0" class="px-3 py-4 bg-white">
        <div v-if="currentCarouselData[0].hasOwnProperty('Brand')"
            class="relative w-full aspect-[8/9.1] bg-RedToBlue p-1 rounded-2xl flex flex-col felx-nowrap z-0">
            <div class="w-full h-fit bg-none bg-[#f4f4f4] rounded-t-xl">
                <p class="text-gr font-nunito text-center text-xl font-extrabold mt-5" v-html="impresaText">
                </p>
            </div>
            <UCarousel id="CaroselloProdotti" class="rounded-b-xl overflow-hidden bg-[#f4f4f4]" v-slot="{ item }"
                :items="currentCarouselData" indicators :ui="{
                    item: 'basis-full',
                    indicators: {
                        wrapper: 'gap-2 bottom-2',
                        base: 'w-2 h-2 [aspect-ratio:_1/1]',
                        active: 'bg-BlueToRed',
                        inactive: 'bg-gray-100 dark:bg-gray-800'
                    }
                }">
                <div
                    class="w-full h-full aspect-[8/9.1] bg-[#f4f4f4] p-4 flex flex-col flex-nowrap items-center text-gr font-nunito">
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
        <div v-else class="relative w-full aspect-[8/9.1] bg-RedToBlue p-1 rounded-2xl flex flex-col felx-nowrap z-0">
            <UCarousel id="CaroselloProdotti" class="rounded-xl overflow-hidden bg-[#f4f4f4]" v-slot="{ item }"
                :items="currentCarouselData" indicators :ui="{
                    item: 'basis-full',
                    indicators: {
                        wrapper: 'gap-2 bottom-2',
                        base: 'w-2 h-2 [aspect-ratio:_1/1]',
                        active: 'bg-BlueToRed',
                        inactive: 'bg-gray-100 dark:bg-gray-800'
                    }
                }">
                <div
                    class="w-full h-full aspect-[8/9.1] bg-[#f4f4f4] flex items-center">
                    <div :style="{ backgroundImage: 'url(' + item.ImgUrl + ')' }"
                        class="h-full w-full block drop-shadow-lg bg-cover bg-no-repeat bg-center"
                        alt="carousel image">
                    </div>
                </div>
            </UCarousel>
        </div>
    </div>
</template>


<style scoped>
.desc b {
    font-weight: 600;
}
</style>

<script setup lang="ts">

const props = defineProps({
    product: Object
});

const shows = JSON.parse(JSON.stringify(props?.product?.component.show));
const impresaText = "SOLO IL MEGLIO PER LA TUA</br> IMPRESA";

const router = useRouter();
import carouselData from '~/assets/data/CarouselData.json';
const currentRoute = router.currentRoute.value.path.split("/")[2];
const currentCarouselData = carouselData[currentRoute as keyof typeof carouselData];
</script>
