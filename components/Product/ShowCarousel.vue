<template>
    <div id="ShowCarousel_Component" v-if="shows && shows.length > 0" class="flex justify-center px-3 py-5 bg-white">
        <div
            class="w-[95%] aspect-[6/7] bg-RedToBlue p-1 rounded-2xl flex flex-wrap flex-col items-end gap-1 overflow-x-auto no-scrollbar">
            <div class="relative w-full h-full bg-[#D9D9D9] rounded-xl">
                <div class="relative w-full h-full flex justify-center items-center flex-col">
                    <p class="text-center text-xl">SOLO IL MEGLIO PER LA TUA IMPRESA</p>
                    <img :src="shows[0].ImgUrl" class="w-2/3 aspect-[6/7] drop-shadow-lg" alt="carousel image">
                    <p class="text-center text-xl">{{ shows[0].Brand }}</p>
                    <p class="text-center text-xl">{{ shows[0].Model }}</p>
                    <p class="text-center text-xl">{{ shows[0].Description }}</p>
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
const router = useRouter();

const { data } = await useFetch("/api/ProducType");
const currentRoute = router.currentRoute.value.path.split("/")[2];
var currentProduct = data.value.products.filter(product => product.Name === currentRoute);
// console.log("currentProduct:", JSON.parse(JSON.stringify(currentProduct[0].component.show)));
const shows = JSON.parse(JSON.stringify(currentProduct[0].component.show));


</script>
