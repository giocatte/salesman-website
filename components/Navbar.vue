<template>
    <div id="sfondoNav" class="absolute top-0 left-0 w-full h-[4.5rem] z-[1] bg-iron contrast-75"></div>
    <div id="Navbar" class="py-3 px-5 w-full h-[4.5rem] flex justify-between items-center z-30 sticky top-0 left-0">
        <NuxtLink @click="menuOpen === true ? handleOptMenuSelected($event) : ''" to="/">
            <img :src="LogoMobile" alt="LogoMobile" class="w-[3.125rem] aspect-square">
        </NuxtLink>
        <MenuBurgerAnimated @menu-trigger="handleMenuTrigger" id="menuBurger" class=""></MenuBurgerAnimated>
        <div v-show="menuOpen === true" id="Menu"
            class="w-full min-h-dvh h-full fixed overflow-hidden top-[8svh] left-0 z-20 bg-[#00000059]">
            <div class="w-full h-fit bg-white flex flex-col flex-nowrap justify-start items-start px-4 pt-6 pb-8 animate__animated animate__faster"
                :class="closeAnimation ? 'animate__slideInDown' : 'animate__slideOutUp'">
                <div class="w-full border-b-2 border-red-500" @click="showServizi = !showServizi">
                    <div class="flex items-center gap-x-4 font-nunito text-gr py-1 font-bold h-fit">
                        <h1 class="text-[3.5rem]">Servizi
                        </h1>
                        <h1 class="text-[2.5rem]">+</h1>
                    </div>
                    <div v-show="showServizi" id="ServiziMenu" class="max-h-fit h-fit overflow-y-hidden">
                        <NuxtLink to="/Servizi/Panetterie" @click="handleOptMenuSelected"
                            class="block w-full font-nunito text-[#6E6E6E] text-[2.5rem] py-1 font-medium h-fit animate__animated animate__slideInLeft"
                            active-class="activeNav">
                            Panetterie
                        </NuxtLink>
                        <NuxtLink to="/Servizi/Pasticcerie" @click="handleOptMenuSelected"
                            class="block w-full font-nunito text-[#6E6E6E] text-[2.5rem] py-1 font-medium h-fit animate__animated animate__slideInLeft"
                            active-class="activeNav">
                            Pasticcerie
                        </NuxtLink>
                        <NuxtLink to="/Servizi/Pizzerie" @click="handleOptMenuSelected"
                            class="block w-full font-nunito text-[#6E6E6E] text-[2.5rem] py-1 font-medium h-fit animate__animated animate__slideInLeft"
                            active-class="activeNav">
                            Pizzerie
                        </NuxtLink>
                        <NuxtLink to="/Servizi/Gelaterie" @click="handleOptMenuSelected"
                            class="block w-full font-nunito text-[#6E6E6E] text-[2.5rem] py-1 font-medium h-fit animate__animated animate__slideInLeft"
                            active-class="activeNav">
                            Gelaterie
                        </NuxtLink>
                        <NuxtLink to="/Servizi/Attrezzature" @click="handleOptMenuSelected"
                            class="block w-full font-nunito text-[#6E6E6E] text-[2.5rem] py-1 font-medium h-fit animate__animated animate__slideInLeft"
                            active-class="activeNav">
                            Attrezzature
                        </NuxtLink>
                        <NuxtLink to="/Servizi/Arredamento" @click="handleOptMenuSelected"
                            class="block w-full font-nunito text-[#6E6E6E] text-[2.5rem] py-1 font-medium h-fit animate__animated animate__slideInLeft"
                            active-class="activeNav">
                            Arredamento
                        </NuxtLink>
                    </div>
                </div>
                <NuxtLink @click="handleOptMenuSelected" to="/#ChiSono"
                    class="block w-full font-nunito text-gr text-[3.5rem] py-1 font-bold h-fit border-b-2 border-blue-300">
                    Chi sono
                </NuxtLink>
                <NuxtLink @click="handleOptMenuSelected" to="/#Contatti"
                    class="block w-full font-nunito text-gr text-[3.5rem] py-1 font-bold h-fit border-b-2 border-blue-300">
                    Contatti
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import LogoMobile from '@/public/img/LOGHI/LOGO_AT_min.png';

const showServizi = ref(false);

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
    const Navbar = document.getElementById('Navbar');
    const Home = document.getElementById('Home');
    if (Navbar && closeAnimation.value === true) {
        Navbar.classList.remove('bg-backdrop-blur-sm');
        Navbar.classList.add('bg-white');
        Home?.classList.add('blur-sm');
    } else if (Navbar && closeAnimation.value === false) {
        Navbar.classList.remove('bg-white');
        Navbar.classList.add('backdrop-blur-sm');
        Home?.classList.remove('blur-sm');
    }
};

const handleOptMenuSelected = (event: Event) => {
    const menuBurger = document.getElementById('menuBurger');
    menuBurger ? menuBurger.click() : null;
};

onMounted(() => {
    const Navbar = document.getElementById('Navbar');
    const Servizi = document.getElementById('ServiziMenu');
    if (Navbar) {
        window.addEventListener('scroll', () => {
            if (Servizi && window.scrollY < Servizi.offsetTop) {
                Navbar.classList.remove('backdrop-blur-sm');
            } else {
                Navbar.classList.add('backdrop-blur-sm');
            }
        });
    }
});
</script>

<style lang="scss" scoped>
.activeNav {
    @apply text-black font-semibold
}

#ServiziMenu {
    --MachMenu: 125ms;
    /* animation-duration: var(--MachMenu); */
    animation: heightInc var(--MachMenu) linear;

    a p {
        animation-duration: 250ms;
        animation-delay: var(--MachMenu);
    }
}

#ServiziMenu a:nth-last-child(3) p {
    animation-delay: calc(var(--MachMenu) + 40ms);
}

#ServiziMenu a:nth-last-child(2) p {
    animation-delay: calc(var(--MachMenu) + 80ms);

}

#ServiziMenu a:last-child p {
    animation-delay: calc(var(--MachMenu) + 120ms);

}

@keyframes heightInc {
    0% {
        @apply h-0;
    }

    100% {
        @apply h-96;
    }
}
</style>
