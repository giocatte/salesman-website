<template>
    <div id="ShowCarousel_Component" v-if="shows && shows.length > 0" class="px-3 py-4 bg-white">
        <div class="w-full aspect-[8/9.1] bg-RedToBlue p-1 rounded-2xl flex flex-col felx-nowrap">
            <div class="bg-none rounded-t-xl">
                <div class="bg-white rounded-t-xl">
                    <p class="w-full h-fit bg-[rgba(217,217,217,30%)] text-gr font-nunito text-center text-xl font-extrabold pt-4"
                        v-html="impresaText">
                    </p>
                </div>
            </div>
            <div class="relative w-full h-full bg-none rounded-b-xl overflow-y-auto no-scrollbar">
                <div v-for="s in shows" class="w-full h-full bg-white last:rounded-b-xl">
                    <div
                        class="w-full h-full bg-[rgba(217,217,217,30%)] px-4 flex flex-col flex-nowrap items-center text-gr font-nunito">
                        <div :style="{ backgroundImage: 'url(' + s.ImgUrl + ')' }"
                            class="h-full w-full block drop-shadow-lg bg-cover bg-center" alt="carousel image">
                        </div>
                        <p class="text-center text-xl font-extrabold">{{ s.Brand }}</p>
                        <p class="text-center text-sm font-bold">{{ s.Model }}</p>
                        <p class="text-center text-[13px] font-normal pb-2">{{ s.Description }}</p>
                    </div>
                    <!-- <Icon name="ion:ios-arrow-forward" class="text-7xl absolute top-[calc(50%_-_2.25rem)] right-0 text-black"></Icon> -->
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

const impresaText = "SOLO IL MEGLIO PER LA TUA</br> IMPRESA"

</script>
