<template>
    <div id="sfondoNav" class="absolute top-0 left-0 w-full h-[4.5rem] z-[1] bg-iron contrast-75"></div>
    <div id="Navbar" class="py-3 px-5 w-full flex justify-between items-center z-30 sticky top-0 left-0"
        :class="!closeAnimation ? 'backdrop-blur-sm' : 'bg-white'">
        <NuxtLink @click="menuOpen === true ? handleOptMenuSelected($event) : ''" to="/">
            <img :src="LogoMobile" alt="LogoMobile">
        </NuxtLink>
        <MenuBurgerAnimated @menu-trigger="handleMenuTrigger" id="menuBurger" class=""></MenuBurgerAnimated>
        <div v-show="menuOpen === true" id="Menu"
            class="w-full h-[93svh] fixed overflow-hidden top-[8svh] left-0 z-20 backdrop-blur-md">
            <div class="w-full h-fit bg-white flex flex-col flex-nowrap justify-start items-start px-4 pt-6 pb-8 animate__animated animate__faster"
                :class="closeAnimation ? 'animate__slideInDown' : 'animate__slideOutUp'">
                <div class="w-full border-b-2 border-red-500" @click="showMacchinari = !showMacchinari">
                    <div class="flex items-center gap-x-4 font-nunito text-gr py-1 font-bold h-fit">
                        <h1 class="text-[3.5rem]">Macchinari
                        </h1>
                        <h1 class="text-[2.5rem]">+</h1>
                    </div>
                    <div v-show="showMacchinari" id="MacchinariMenu" class="max-h-fit h-72 overflow-y-hidden">
                        <NuxtLink to="/Macchinari/Panetterie" @click="handleOptMenuSelected" class="w-full">
                            <p
                                class="font-nunito text-[#6E6E6E] text-[2.5rem] py-1 font-medium h-fit animate__animated animate__slideInLeft">
                                Panetterie</p>
                        </NuxtLink>
                        <NuxtLink to="/Macchinari/Pasticcerie" @click="handleOptMenuSelected" class="w-full">
                            <p
                                class="font-nunito text-[#6E6E6E] text-[2.5rem] py-1 font-medium h-fit animate__animated animate__slideInLeft">
                                Pasticcerie</p>
                        </NuxtLink>
                        <NuxtLink to="/Macchinari/Pizzerie" @click="handleOptMenuSelected" class="w-full">
                            <p
                                class="font-nunito text-[#6E6E6E] text-[2.5rem] py-1 font-medium h-fit animate__animated animate__slideInLeft">
                                Pizzerie</p>
                        </NuxtLink>
                        <NuxtLink to="/Macchinari/Gelaterie" @click="handleOptMenuSelected" class="w-full">
                            <p
                                class="font-nunito text-[#6E6E6E] text-[2.5rem] py-1 font-medium h-fit mb-2 animate__animated animate__slideInLeft">
                                Gelaterie</p>
                        </NuxtLink>
                    </div>
                </div>
                <NuxtLink @click="handleOptMenuSelected" class="w-full" to="/#ChiSono">
                    <p class="font-nunito text-gr text-[3.5rem] py-1 font-bold h-fit border-b-2 border-blue-300">Chi
                        sono</p>
                </NuxtLink>
                <NuxtLink @click="handleOptMenuSelected" class="w-full" to="/#Footer">
                    <p class="font-nunito text-gr text-[3.5rem] py-1 font-bold h-fit border-b-2 border-green-400">
                        Contatti</p>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import LogoMobile from '@/assets/img/LogoMobileCircle.png';

const showMacchinari = ref(false);

const closeAnimation = ref(false);
const menuOpen = ref(false);
const handleMenuTrigger = (event: Event) => {
    // console.log("handleMenuTrigger", event);
    if (menuOpen.value === true) {
        document.body.classList.contains('overflow-y-hidden') ? document.body.classList.remove('overflow-y-hidden') : null;
        closeAnimation.value = !closeAnimation.value;
        setTimeout(() => { menuOpen.value = false; }, 450);
    } else {
        document.body.classList.add('overflow-y-hidden');
        menuOpen.value = !menuOpen.value;
        closeAnimation.value = !closeAnimation.value;
    }
};

const handleOptMenuSelected = (event: Event) => {
    const menuBurger = document.getElementById('menuBurger');
    menuBurger ? menuBurger.click() : null;
};


</script>

<style scoped>
#MacchinariMenu {
    --MachMenu: 125ms;
    /* animation-duration: var(--MachMenu); */
    animation: heightInc var(--MachMenu) linear;

    a p {
        animation-duration: 250ms;
        animation-delay: var(--MachMenu);
    }
}

#MacchinariMenu a:nth-last-child(3) p {
    animation-delay: calc(var(--MachMenu) + 40ms);
}

#MacchinariMenu a:nth-last-child(2) p {
    animation-delay: calc(var(--MachMenu) + 80ms);

}

#MacchinariMenu a:last-child p {
    animation-delay: calc(var(--MachMenu) + 120ms);

}

@keyframes heightInc {
    0% {
        @apply h-0;
    }

    100% {
        @apply h-full;
    }
}
</style>
