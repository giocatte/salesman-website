<template>
    <div id="Service" v-if="currentProduct !== undefined">
        <img :src="currentProduct.pages.ImgUrl" alt="" class="relative top-0 left-0 w-full bg-white aspect-[5/4]">
        <div class="w-full px-3 py-5 bg-white text-gr flex flex-col gap-2">
            <p class="title" v-html="currentProduct.pages.Title"></p>
            <p class="subTitle" v-html="currentProduct.pages.SubTitle"></p>
            <p class="desc" v-html="currentProduct.pages.Intro"></p>
        </div>
        <div class="w-full px-3 py-5 bg-white text-gr flex flex-col gap-2">
            <p class="title" v-html="currentProduct.pages.Title_2"></p>
            <p class="desc" v-html="currentProduct.pages.Desc"></p>
            <ul class="desc list-disc px-5">
                <li v-for="l in currentProduct.pages.list" :key="l" v-html="l"></li>
            </ul>
        </div>
        <ProductShowCarousel :product="currentProduct" />
        <div class="bg-white pt-8 text-gr font-nunito flex flex-col flex-nowrap gap-y-3 items-center">
            <p class="text-2xl font-bold">Potrebbe interessarti anche:</p>
            <div class="w-full pb-4 px-6 flex justify-between">
                <NuxtLink to="/Servizi/Attrezzature" class="p-1 w-[47%] rounded-full bg-BlueToRed">
                    <button class="w-full btnBlueRed">
                        Attrezzature
                    </button>
                </NuxtLink>
                <NuxtLink to="/Servizi/Panifici" class="p-1 w-[47%] rounded-full bg-BlueToRed">
                    <button class="w-full btnBlueRed">
                        Panifici
                    </button>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ProductShowCarousel } from '#components';
const router = useRouter();

const { data } = await useFetch("/api/ServicesAPI");
const currentRoute = router.currentRoute.value.path.split("/")[2];
var currentProduct = data.value.products.filter(product => product.Name === currentRoute);
currentProduct = JSON.parse(JSON.stringify(currentProduct[0]));


</script>

<style scoped>
p.title {
    @apply font-nunito font-bold text-[2rem]
}

p.subTitle {
    @apply font-nunito font-semibold text-2xl
}

.desc {
    @apply font-nunito text-lg
}
</style>