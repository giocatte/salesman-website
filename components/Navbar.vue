<template>
    <div id="sfondoNav" class="absolute top-0 left-0 w-full h-[4.125rem] xl:h-32 z-[1] bg-iron xl:bg-none xl:bg-white contrast-75 xl:contrast-100"></div>
    <div id="Navbar"
        class="py-3 px-5 xl:px-Desktop w-full h-[4.125rem] xl:h-32 flex justify-between items-center z-30 sticky top-0 left-0">
        <NuxtLink @click="menuOpen === true ? handleOptMenuSelected($event) : ''" to="/">
            <img :src="Logo" alt="Logo" class="w-[3.125rem] xl:w-[6.25rem] aspect-square">
        </NuxtLink>
        <MenuBurgerAnimated v-if="isMobile" @menu-trigger="handleMenuTrigger" id="menuBurger">
        </MenuBurgerAnimated>
        <div v-else-if="isDesktop">

        </div>
        <div v-if="menuOpen === true && isMobile" id="Menu"
            class="w-full min-h-lvh h-lvh fixed overflow-hidden top-[4.125rem] left-0 z-20 bg-[#00000059]"
            @click.self="closeMenu">
            <div class="w-full h-fit bg-white flex flex-col flex-nowrap justify-start items-start px-4 pt-6 pb-8 animate__animated animate__faster"
                :class="closeAnimation ? 'animate__slideInDown' : 'animate__slideOutUp'">
                <div class="w-full border-b-[1px] border-[#D8D8D8]" @click="showServizi = !showServizi">
                    <div
                        class="flex items-center gap-x-4 font-nunito text-gr py-1 font-bold w-full h-fit cursor-pointer">
                        <p class="text-[3.5rem]">Servizi</p>
                        <Icon v-show="showServizi == false" name="ion:plus-round" size="30"
                            class="animate__animated animate__fadeIn animate__faster"></Icon>
                        <Icon v-show="showServizi == true" name="ion:minus-round" size="30"
                            class="animate__animated animate__fadeIn"></Icon>
                    </div>
                    <div v-show="showServizi" id="ServiziMenu" class="max-h-fit h-fit overflow-y-hidden">
                        <NuxtLink to="/Servizi/Panifici" @click="handleOptMenuSelected"
                            class="block w-fit font-nunito text-[#6E6E6E] text-2xl py-1 font-medium h-fit cursor-pointer animate__animated animate__fadeInDown"
                            active-class="activeNav">
                            Panifici
                        </NuxtLink>
                        <NuxtLink to="/Servizi/Pasticcerie" @click="handleOptMenuSelected"
                            class="block w-fit font-nunito text-[#6E6E6E] text-2xl py-1 font-medium h-fit cursor-pointer animate__animated animate__fadeInDown"
                            active-class="activeNav">
                            Pasticcerie
                        </NuxtLink>
                        <NuxtLink to="/Servizi/Pizzerie" @click="handleOptMenuSelected"
                            class="block w-fit font-nunito text-[#6E6E6E] text-2xl py-1 font-medium h-fit cursor-pointer animate__animated animate__fadeInDown"
                            active-class="activeNav">
                            Pizzerie
                        </NuxtLink>
                        <NuxtLink to="/Servizi/Gelaterie" @click="handleOptMenuSelected"
                            class="block w-fit font-nunito text-[#6E6E6E] text-2xl py-1 font-medium h-fit cursor-pointer animate__animated animate__fadeInDown"
                            active-class="activeNav">
                            Gelaterie
                        </NuxtLink>
                        <NuxtLink to="/Servizi/Ristorazione" @click="handleOptMenuSelected"
                            class="block w-fit font-nunito text-[#6E6E6E] text-2xl py-1 font-medium h-fit cursor-pointer animate__animated animate__fadeInDown"
                            active-class="activeNav">
                            Ristorazione
                        </NuxtLink>
                        <NuxtLink to="/Servizi/Attrezzature" @click="handleOptMenuSelected"
                            class="block w-fit font-nunito text-[#6E6E6E] text-2xl py-1 font-medium h-fit cursor-pointer animate__animated animate__fadeInDown"
                            active-class="activeNav">
                            Attrezzature
                        </NuxtLink>
                        <NuxtLink to="/Servizi/Progettazione" @click="handleOptMenuSelected"
                            class="block w-fit font-nunito text-[#6E6E6E] text-2xl py-1 font-medium h-fit cursor-pointer animate__animated animate__fadeInDown"
                            active-class="activeNav">
                            Progettazione
                        </NuxtLink>
                    </div>
                </div>
                <NuxtLink @click="handleOptMenuSelected" to="/#ChiSono"
                    class="block w-full font-nunito text-gr text-[3.5rem] py-1 font-bold h-fit border-b-[1px] border-[#D8D8D8]">
                    Chi sono
                </NuxtLink>
                <NuxtLink @click="handleOptMenuSelected" to="/#Contatti"
                    class="block w-full font-nunito text-gr text-[3.5rem] py-1 font-bold h-fit border-b-[1px] border-[#D8D8D8]">
                    Contatti
                </NuxtLink>
            </div>
        </div>
        <div v-else-if="isDesktop" id="MenuDesktop">
            <div
                class="flex gap-x-10 items-center text-black text-2xl leading-[2rem] font-nunito font-extrabold cursor-pointer">
                <UPopover :ui="{
                    rounded: 'rounded-2xl',
                    base: 'bg-RedToBlue p-1',
                    overlay: {
                        background: 'bg-blue-300 dark:bg-blue-300'
                    }
                }">
                    <p>SERVIZI</p>
                    <template #panel>
                        <div
                            class="size-[30rem] p-12 bg-none bg-[#f4f4f4] rounded-xl flex flex-col felx-nowrap gap-y-2 h2-Desktop text-gr font-semibold cursor-default">
                            <NuxtLink to="/Servizi/Panifici" class="w-full cursor-pointer" active-class="activeService">
                                Panifici
                            </NuxtLink>
                            <NuxtLink to="/Servizi/Pasticcerie" class="w-full cursor-pointer" active-class="activeService">
                                Pasticcerie
                            </NuxtLink>
                            <NuxtLink to="/Servizi/Pizzerie" class="w-full cursor-pointer" active-class="activeService">
                                Pizzerie
                            </NuxtLink>
                            <NuxtLink to="/Servizi/Gelaterie" class="w-full cursor-pointer" active-class="activeService">
                                Gelaterie
                            </NuxtLink>
                            <NuxtLink to="/Servizi/Ristorazione" class="w-full cursor-pointer" active-class="activeService">
                                Ristorazione
                            </NuxtLink>
                            <NuxtLink to="/Servizi/Attrezzature" class="w-full cursor-pointer" active-class="activeService">
                                Attrezzature
                            </NuxtLink>
                            <NuxtLink to="/Servizi/Progettazione" class="w-full cursor-pointer" active-class="activeService">
                                Progettazione
                            </NuxtLink>
                        </div>
                    </template>
                </UPopover>
                <NuxtLink to="/#ChiSono">
                    CHI SONO
                </NuxtLink>
                <NuxtLink to="/#Contatti">
                    CONTATTI
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Logo from '~/assets/img/LOGO_AT.png';

const { width, isMobile, isDesktop } = useDeviceWidth()
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
    const Service = document.getElementById('Service');
    if (Navbar && closeAnimation.value === true) {
        Navbar.classList.remove('bg-backdrop-blur-sm');
        Navbar.classList.add('bg-white');
        Home ? Home.classList.add('blur-sm') : Service?.classList.add('blur-sm');
    } else if (Navbar && closeAnimation.value === false) {
        Navbar.classList.remove('bg-white');
        Navbar.classList.add('backdrop-blur-sm');
        Home ? Home.classList.remove('blur-sm') : Service?.classList.remove('blur-sm');
    }
};

const handleOptMenuSelected = (event: Event) => {
    const menuBurger = document.getElementById('menuBurger');
    menuBurger ? menuBurger.click() : null;
};

const closeMenu = () => {
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

.activeService {
    @apply text-black font-extrabold
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
