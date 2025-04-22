<template>
    <div id="ShowCarousel_Component" v-if="carouselData" class="px-3 py-4 lg:px-0 lg:py-0 bg-white">
        <div
            class="relative w-full aspect-[8/9.1] bg-RedToBlue p-1 rounded-2xl flex flex-col flex-nowrap z-0 lg:bg-none lg:aspect-[5/2] lg:rounded-none lg:p-0">
            <div v-if="sortedCarouselData[0].hasOwnProperty('Brand')"
                class="w-full h-fit bg-none bg-[#f4f4f4] rounded-t-xl text-gr font-nunito text-center  lg:bg-white lg:rounded-t-none">
                <p v-show="isMobile" class="text-xl font-extrabold mt-5">SOLO IL MEGLIO PER LA TUA</br> IMPRESA</p>
                <p v-show="isDesktop" class="h1-Desktop py-[1.875rem]">Solo il meglio per la tua impresa</p>
            </div>
            <div v-else
                class="w-full h-fit bg-none bg-[#f4f4f4] rounded-t-xl text-gr font-nunito text-center  lg:bg-white lg:rounded-t-none">
                <p v-show="isDesktop" class="h1-Desktop pt-10">LE REALIZZAZIONI</p>
            </div>
            <UCarousel v-if="isMobile && sortedCarouselData[0].hasOwnProperty('Brand')" id="CaroselloProdotti"
                class="rounded-b-xl overflow-hidden bg-[#f4f4f4]" v-slot="{ item }" :items="sortedCarouselData"
                indicators :ui="{
                    item: 'basis-full',
                    indicators: {
                        wrapper: 'gap-2 bottom-2',
                        base: 'w-2 h-2 [aspect-ratio:_1/1]',
                        active: 'bg-BlueToRed',
                        inactive: 'bg-gray-800 dark:bg-gray-800'
                    }
                }">
                <div
                    class="w-full h-full aspect-[8/9.1] bg-[#f4f4f4] p-4 flex flex-col flex-nowrap items-center text-gr font-nunito">
                    <div :style="{ backgroundImage: 'url(' + item.ImgUrl + ')' }"
                        class="h-full w-full block drop-shadow-lg bg-cover rounded-md bg-no-repeat bg-center"
                        alt="carousel image">
                    </div>
                    <p class="text-center text-xl font-extrabold">{{ item.Brand }}</p>
                    <p class="text-center text-sm font-bold">{{ item.Model }}</p>
                    <p class="text-center text-[13px] font-normal pb-2">{{ item.Description }}</p>
                </div>
            </UCarousel>
            <UCarousel v-else-if="isMobile && !sortedCarouselData[0].hasOwnProperty('Brand')" id="CaroselloProdotti"
                class="rounded-xl overflow-hidden bg-[#f4f4f4]" v-slot="{ item }" :items="currentCarouselData"
                indicators :ui="{
                    item: 'basis-full',
                    indicators: {
                        wrapper: 'gap-2 bottom-2',
                        base: 'w-2 h-2 [aspect-ratio:_1/1]',
                        active: 'bg-BlueToRed',
                        inactive: 'bg-gray-800 dark:bg-gray-800'
                    }
                }">
                <div class="w-full h-full aspect-[8/9.1] bg-[#f4f4f4] flex items-center">
                    <div :style="{ backgroundImage: 'url(' + item.ImgUrl + ')' }"
                        class="h-full w-full block drop-shadow-lg bg-cover bg-no-repeat bg-center" alt="carousel image">
                    </div>
                </div>
            </UCarousel>
            <UCarousel v-else-if="isDesktop && sortedCarouselData[0].hasOwnProperty('Brand')"
                id="CaroselloProdotti_Desktop" v-slot="{ item }" :items="sortedCarouselData" arrows indicators
                class="relative overflow-hidden w-full h-fit px-Desktop pt-[3.75rem] pb-[6.25rem] " :ui="{
                    item: 'basis-1/3',
                    indicators: {
                        wrapper: 'gap-2 bottom-[3rem]',
                        base: 'w-6 h-6 [aspect-ratio:_1/1]',
                        active: 'bg-[url(@/assets/img/LOGO_AT.png)] bg-cover',
                        inactive: 'bg-gray-100 dark:bg-gray-800'
                    },
                }" :prev-button="{
                    color: 'gray',
                    icon: 'i-heroicons-arrow-left-20-solid',
                    class: 'start-[5rem]'
                }" :next-button="{
                    color: 'gray',
                    icon: 'i-heroicons-arrow-right-20-solid',
                    class: 'end-[5rem]'
                }">
                <div class="text-center text-gr font-nunito flex flex-col gap-2">
                    <img :src="item.ImgUrl" :alt="item.Model" loading="lazy" draggable="false" class="h-[29.75rem] w-[29.75rem] relative left-5 rounded-3xl" />
                    <p class="text-xl font-extrabold"> {{ item.Brand }}</p>
                    <p class="text-sm font-bold">{{ item.Model }}</p>
                    <p class="text-[13px] font-normal pb-2">{{ item.Description }}</p>
                </div>
            </UCarousel>
            <UCarousel v-else-if="isDesktop && !sortedCarouselData[0].hasOwnProperty('Brand')"
                id="CaroselloProdotti_Desktop" v-slot="{ item }" :items="sortedCarouselData" arrows indicators
                class="px-Desktop pt-[3.75rem] pb-[6.25rem] " :ui="{
                    item: 'h-fit basis-full justify-center',
                    indicators: {
                        wrapper: 'gap-3 bottom-[3rem]',
                        base: 'w-6 h-6 [aspect-ratio:_1/1]',
                        active: 'bg-[url(@/assets/img/LOGO_AT.png)] bg-cover',
                        inactive: 'bg-gray-100 dark:bg-gray-800'
                    },
                }" :prev-button="{
                    color: 'gray',
                    icon: 'i-heroicons-arrow-left-20-solid',
                    class: 'start-[5rem]'
                }" :next-button="{
                    color: 'gray',
                    icon: 'i-heroicons-arrow-right-20-solid',
                    class: 'end-[5rem]'
                }">
                <div class="h-fit text-center text-gr font-nunito flex flex-col justify-center">
                    <img :src="item.ImgUrl" alt="Realizzazione image" loading="lazy" draggable="false" class="w-full h-[50rem] rounded-3xl" />
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
const { width, isMobile, isDesktop } = useDeviceWidth()

const props = defineProps({
    product: Object
});

const router = useRouter();
import carouselData from '~/assets/data/CarouselData.json';
const currentRoute = router.currentRoute.value.path.split("/")[2];
const currentCarouselData = carouselData[currentRoute as keyof typeof carouselData];

const sortedCarouselData = computed(() => {
    return [...currentCarouselData].sort((a, b) => a.orderId - b.orderId);
});
// console.log(sortedCarouselData.value);
const prodPrev = ref(sortedCarouselData.value[0]);
const prod = ref(sortedCarouselData.value[0]);
const prodNext = ref(sortedCarouselData.value[0]);

onMounted(() => {
    // Set the initial active tab based on the first product
    if (sortedCarouselData.value && sortedCarouselData.value.length > 0) {
        prodPrev.value = sortedCarouselData.value[sortedCarouselData.value.length - 1];
        prod.value = sortedCarouselData.value[0];
        prodNext.value = sortedCarouselData.value[1];
        // console.log(JSON.parse(JSON.stringify(prodPrev.value)).Brand, JSON.parse(JSON.stringify(prod.value)), JSON.parse(JSON.stringify(prodNext.value)));
    }
});

</script>
