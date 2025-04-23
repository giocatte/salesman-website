<template>
    <!-- Barra di sfondo dietro la navbar ------------------------------------>
    <div
      id="sfondoNav"
      class="absolute top-0 left-0 w-full
             h-[4.125rem]            <!-- mobile -->
             lg:h-28                 <!-- tablet landscape -->
             xl:h-32                 <!-- desktop -->
             z-[1] bg-iron lg:bg-none lg:bg-white
             contrast-75 lg:contrast-100"
    />
  
        <!-- NAVBAR --------------------------------------------------------------->
        <div
        id="Navbar"
        class="sticky top-0 left-0 z-30 flex justify-between items-center
                py-3 px-5                  <!-- mobile -->
                lg:pl-[6rem] lg:pr-[6rem]       <!-- tablet landscape: 1.5 rem a sin., 6 rem a destra -->
                xl:px-Desktop              <!-- desktop: 11.25 rem simmetrico -->
                h-[4.125rem]               <!-- mobile -->
                lg:h-28                    <!-- tablet landscape -->
                xl:h-32"                   
        >
      <!-- Logo -------------------------------------------------------------->
      <NuxtLink
        to="/"
        @click="menuOpen ? handleOptMenuSelected($event) : ''"
      >
        <img
          :src="Logo"
          alt="Logo"
          loading="lazy"
          draggable="false"
          class="w-[3.125rem] lg:w-[4.5rem] xl:w-[6.25rem] aspect-square"
        />
      </NuxtLink>
  
      <!-- ------------------ MOBILE BURGER --------------------------------->
      <MenuBurgerAnimated
        v-if="isMobile"
        id="menuBurger"
        @menu-trigger="handleMenuTrigger"
      />
  
      <!-- ------------------ MOBILE MENU ----------------------------------->
      <div
        v-if="menuOpen && isMobile"
        id="Menu"
        class="fixed top-[4.125rem] left-0 w-full min-h-lvh h-lvh z-20
               overflow-hidden bg-[#00000059]"
        @click.self="closeMenu"
      >
        <div
          class="w-full bg-white flex flex-col items-start
                 px-4 pt-6 pb-8 animate__animated animate__faster"
          :class="closeAnimation ? 'animate__slideInDown'
                                 : 'animate__slideOutUp'"
        >
          <!-- SERVIZI accordion ----------------------------------------->
          <div
            class="w-full border-b border-[#D8D8D8]"
            @click="showServizi = !showServizi"
          >
            <div
              class="flex items-center gap-4 font-nunito text-gr py-1 font-bold
                     text-[3.5rem] leading-none cursor-pointer"
            >
              <p>SERVIZI</p>
              <Icon
                v-show="!showServizi"
                name="ion:plus-round"
                size="30"
                class="animate__animated animate__fadeIn animate__faster"
              />
              <Icon
                v-show="showServizi"
                name="ion:minus-round"
                size="30"
                class="animate__animated animate__fadeIn"
              />
            </div>
  
            <!-- v-show lascia in DOM per l’animazione -->
            <div v-show="showServizi" id="ServiziMenu" class="max-h-fit overflow-y-hidden">
              <template
                v-for="link in serviziLinks"
                :key="link.to"
              >
                <NuxtLink
                  :to="link.to"
                  @click="handleOptMenuSelected"
                  class="block w-fit font-nunito text-[#6E6E6E] text-2xl py-1
                         font-medium cursor-pointer animate__animated animate__fadeInDown"
                  active-class="activeNav"
                >
                  {{ link.label }}
                </NuxtLink>
              </template>
            </div>
          </div>
  
          <!-- Altre voci -------------------------------------------------->
          <NuxtLink
            to="/#ChiSono"
            @click="handleOptMenuSelected"
            class="block w-full font-nunito text-gr font-bold
                   text-[3.5rem] py-1 border-b border-[#D8D8D8]"
          >
            CHI SONO
          </NuxtLink>
          <NuxtLink
            to="/#Contatti"
            @click="handleOptMenuSelected"
            class="block w-full font-nunito text-gr font-bold
                   text-[3.5rem] py-1 border-b border-[#D8D8D8]"
          >
            CONTATTI
          </NuxtLink>
        </div>
      </div>
  
      <!-- ------------------ DESKTOP / TABLET LANDSCAPE MENU --------------->    
      <div v-else-if="isDesktop" id="MenuDesktop">
        <div
          class="flex gap-x-8 lg:gap-x-6 xl:gap-x-10 items-center
                 font-nunito font-extrabold cursor-pointer
                 text-lg lg:text-xl xl:text-2xl text-black leading-[2rem]"
        >
          <!-- SERVIZI popover ----------------------------------------->
          <UPopover
            :ui="{
              rounded: 'rounded-2xl',
              base: 'bg-RedToBlue p-1',
              overlay: { background: 'bg-blue-300 dark:bg-blue-300' }
            }"
          >
            <p>SERVIZI</p>
            <template #panel="{ close }">
              <div
                class="w-[20rem] lg:w-[24rem] xl:w-[30rem]
                       p-8 lg:p-10 xl:p-12
                       bg-[#f4f4f4] rounded-xl
                       text-gr font-semibold
                       lg:h2-Tablet xl:h2-Desktop cursor-default flex flex-col gap-2"
              >
                <template
                  v-for="link in serviziLinks"
                  :key="link.to"
                >
                  <NuxtLink
                    :to="link.to"
                    @click="close"
                    class="w-full cursor-pointer"
                    active-class="activeService"
                  >
                    {{ link.label }}
                  </NuxtLink>
                </template>
              </div>
            </template>
          </UPopover>
  
          <!-- Link statici ---------------------------------------------->
          <NuxtLink to="/#ChiSono">
            CHI&nbsp;SONO
          </NuxtLink>
          <NuxtLink to="/#Contatti">
            CONTATTI
          </NuxtLink>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import Logo from '~/assets/img/LOGO_AT.png'
  
  /* ------------------------- utilità device ---------------------------- */
  const { isMobile, isDesktop } = useDeviceWidth()
  
  /* ------------------------- link servizi ------------------------------ */
  const serviziLinks = [
    { to: '/Servizi/Panifici',      label: 'Panifici'      },
    { to: '/Servizi/Pasticcerie',   label: 'Pasticcerie'   },
    { to: '/Servizi/Pizzerie',      label: 'Pizzerie'      },
    { to: '/Servizi/Gelaterie',     label: 'Gelaterie'     },
    { to: '/Servizi/Ristorazione',  label: 'Ristorazione'  },
    { to: '/Servizi/Attrezzature',  label: 'Attrezzature'  },
    { to: '/Servizi/Progettazione', label: 'Progettazione' }
  ]
  
  /* ------------------------- stato menu mobile ------------------------ */
  const showServizi      = ref(false)
  const closeAnimation   = ref(false)
  const menuOpen         = ref(false)
  
  /* ------------------------- handler burger --------------------------- */
  const handleMenuTrigger = () => {
    if (menuOpen.value) {
      document.body.classList.remove('overflow-y-hidden')
      closeAnimation.value = true
      setTimeout(() => { menuOpen.value = false }, 450)
    } else {
      document.body.classList.add('overflow-y-hidden')
      menuOpen.value       = true
      closeAnimation.value = false
    }
  }
  
  const handleOptMenuSelected = () => {
    const burger = document.getElementById('menuBurger')
    burger?.click()
  }
  
  const closeMenu = () => handleOptMenuSelected()
  
  /* ------------------------- blur su scroll --------------------------- */
  onMounted(() => {
    const Navbar = document.getElementById('Navbar')
    const Servizi = document.getElementById('ServiziMenu')
    if (Navbar && Servizi) {
      window.addEventListener('scroll', () => {
        if (window.scrollY < Servizi.offsetTop) {
          Navbar.classList.remove('backdrop-blur-sm')
        } else {
          Navbar.classList.add('backdrop-blur-sm')
        }
      })
    }
  })
  </script>
  
  <style scoped lang="scss">
  .activeNav      { @apply text-black font-semibold; }
  .activeService  { @apply text-black font-extrabold; }
  
  /* Animazione accordion mobile --------------------------------------- */
  #ServiziMenu {
    --MachMenu: 125ms;
    animation: heightInc var(--MachMenu) linear;
  }
  
  @keyframes heightInc {
    from { @apply h-0; }
    to   { @apply h-96; }
  }
  </style>