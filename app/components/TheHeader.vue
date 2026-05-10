<script setup lang="ts">
const { services } = useServices()
const { categories } = useFAQ()
const route = useRoute()

const openMenuId = ref<string | null>(null)
const isMobileMenuOpen = ref(false)

import type { NavItem } from '~/composables/useNavigation'

const props = defineProps<{
  navItems: NavItem[]
  activeSection: string
}>()

const emit = defineEmits(['setActive'])

const isItemActive = (itemId: string) => {
  const isHome = route.path === '/' || route.path === '/linktree' || route.path === '/linktree/'
  
  if (itemId === 'servicos' && route.path.startsWith('/servicos')) return true
  if (itemId === 'faq' && route.path.startsWith('/faq')) return true
  
  if (!isHome) return false
  return props.activeSection === itemId
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  if (isMobileMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
  openMenuId.value = null
  document.body.style.overflow = ''
}

const handleNavClick = (item: NavItem) => {
  if (item.id === 'servicos' || item.id === 'faq') {
    openMenuId.value = openMenuId.value === item.id ? null : item.id
    return
  }
  emit('setActive', item.id)
  closeMobileMenu()
}
</script>

<template>
  <header class="bg-white/90 backdrop-blur-md sticky top-0 z-[100] w-full border-b border-slate-100 transition-all duration-500">
    <div class="main-container w-full mx-auto py-4 md:py-5 flex justify-between items-center px-6 md:px-12 relative z-[101]">
      
      <!-- Brand Area -->
      <NuxtLink to="/" class="flex items-center gap-3 group" @click="closeMobileMenu" aria-label="Dra. Kelly Fortes - Início">
        <div class="w-10 h-10 md:w-12 md:h-12 bg-burgundy-50 rounded-xl flex items-center justify-center group-hover:bg-burgundy-600 transition-all duration-500 shadow-sm group-hover:shadow-burgundy-200 text-burgundy-800 group-hover:text-white">
          <Icon name="ph:paw-print-fill" class="transition-colors duration-500 text-2xl md:text-3xl" />
        </div>
        <div class="flex flex-col">
          <span class="text-lg md:text-xl font-bold font-headline-md text-tertiary leading-none group-hover:text-burgundy-800 transition-colors">Dra. Kelly Fortes</span>
          <span class="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold mt-1">Veterinária Domiciliar</span>
        </div>
      </NuxtLink>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex gap-10 items-center">
        <div v-for="item in navItems" :key="item.id" class="relative group">
          
          <!-- Case: Dropdown (Serviços ou FAQ) -->
          <div v-if="item.id === 'servicos' || item.id === 'faq'" 
               class="flex items-center gap-1.5 cursor-pointer py-2"
               @mouseenter="openMenuId = item.id"
               @mouseleave="openMenuId = null">
            
            <NuxtLink 
               :to="item.path"
               @click="$emit('setActive', item.id); openMenuId = null"
               :class="isItemActive(item.id) ? 'text-burgundy-800 font-bold' : 'text-tertiary'" 
               class="hover:text-burgundy-800 transition-all font-semibold text-sm tracking-wide flex items-center gap-2"
            >
              {{ item.label }}
            </NuxtLink>
            <Icon name="ph:caret-down-bold" size="12" class="text-slate-300 transition-transform duration-300" :class="{'rotate-180 text-burgundy-800': openMenuId === item.id}" />
            
            <!-- Menu Dropdown Premium -->
            <div 
              class="absolute top-full pt-6 transition-all duration-300 z-50"
              :class="[
                openMenuId === item.id ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-4',
                item.id === 'faq' ? 'right-0' : 'left-1/2 -translate-x-1/2'
              ]"
            >
              <div class="bg-white border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-[2rem] p-4 min-w-[280px] grid grid-cols-1 gap-1">
                <!-- Dropdown Header -->
                <div class="px-4 py-2 mb-1">
                   <p class="text-[10px] uppercase tracking-widest text-slate-400 font-bold">{{ item.id === 'servicos' ? 'Serviços' : 'Dúvidas' }}</p>
                </div>

                <!-- Conteúdo do Menu de Serviços -->
                <template v-if="item.id === 'servicos'">
                  <NuxtLink 
                    v-for="service in services" 
                    :key="service.slug"
                    :to="`/servicos/${service.slug}`"
                    @click="openMenuId = null"
                    class="flex items-center gap-3 p-3 rounded-2xl hover:bg-slate-50 transition-all duration-300 group/item border border-transparent hover:border-slate-100"
                  >
                    <div class="w-10 h-10 bg-teal-50 flex items-center justify-center rounded-xl group-hover/item:bg-teal-700 group-hover/item:text-white transition-all duration-300 shrink-0">
                      <Icon :name="service.icon" size="20" class="text-teal-700 group-hover/item:text-white transition-colors" />
                    </div>
                    <div class="flex flex-col min-w-0">
                      <p class="text-sm font-bold text-tertiary group-hover/item:text-teal-700 transition-colors leading-tight">{{ service.name }}</p>
                      <p class="text-[10px] text-slate-400 mt-0.5 line-clamp-1 leading-tight">{{ service.shortDescription }}</p>
                    </div>
                  </NuxtLink>
                </template>

                <!-- Conteúdo do Menu de FAQ -->
                <template v-else-if="item.id === 'faq'">
                  <NuxtLink 
                    to="/faq"
                    @click="openMenuId = null"
                    class="flex items-center gap-3 p-3 rounded-2xl bg-burgundy-50/50 hover:bg-burgundy-50 transition-all border border-burgundy-100/50 mb-1"
                  >
                    <div class="w-10 h-10 bg-burgundy-800 flex items-center justify-center rounded-xl shrink-0">
                      <Icon name="ph:question-duotone" size="20" class="text-white" />
                    </div>
                    <div class="flex flex-col">
                      <p class="text-sm font-bold text-tertiary leading-tight">Central de dúvidas</p>
                      <p class="text-[10px] text-burgundy-800 font-bold uppercase tracking-widest mt-0.5">Ver tudo</p>
                    </div>
                  </NuxtLink>

                  <div class="h-px bg-slate-100 my-1 mx-4"></div>

                  <NuxtLink 
                    v-for="cat in categories" 
                    :key="cat.id"
                    :to="`/faq?category=${cat.id}`"
                    @click="openMenuId = null"
                    class="flex items-center gap-3 p-3 rounded-2xl hover:bg-slate-50 transition-all group/item border border-transparent hover:border-slate-100"
                  >
                    <div class="w-9 h-9 bg-slate-50 flex items-center justify-center rounded-lg group-hover/item:bg-white group-hover/item:shadow-sm transition-all shrink-0">
                      <Icon :name="cat.icon" size="18" class="text-slate-400 group-hover/item:text-teal-600" />
                    </div>
                    <div class="flex flex-col min-w-0">
                      <p class="text-sm font-semibold text-tertiary group-hover/item:text-teal-700 leading-tight">{{ cat.label }}</p>
                      <p class="text-[10px] text-slate-400 mt-0.5 line-clamp-1 leading-tight">{{ cat.description }}</p>
                    </div>
                  </NuxtLink>
                </template>
              </div>
            </div>
          </div>

          <!-- Caso: Link Padrão -->
          <NuxtLink v-else
             :to="item.path"
             @click="$emit('setActive', item.id)"
             :class="isItemActive(item.id) ? 'text-burgundy-800 font-bold' : 'text-tertiary'" 
             class="hover:text-burgundy-800 transition-all font-semibold text-sm tracking-wide py-2 relative flex items-center"
          >
            {{ item.label }}
          </NuxtLink>
        </div>
      </nav>

      <!-- Hamburger Button (Mobile) -->
      <button 
        class="md:hidden flex items-center justify-center w-11 h-11 rounded-xl bg-slate-50 text-slate-500 border border-slate-100 transition-all active:scale-90 z-[110] relative"
        @click="toggleMobileMenu"
        aria-label="Abrir Menu"
      >
        <Icon name="ph:list-bold" size="24" />
      </button>
    </div>

    <!-- Mobile Menu Overlay (Teleported to Body for stability) -->
    <Teleport to="body">
      <Transition
        enter-active-class="transition-all duration-500 ease-in-out"
        enter-from-class="opacity-0 translate-y-[-20px]"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-400 ease-in-out"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 translate-y-[-20px]"
      >
        <div v-if="isMobileMenuOpen" class="md:hidden fixed inset-0 bg-white z-[999] flex flex-col">
          
          <!-- Mobile Header (Logo + Close) -->
          <div class="flex justify-between items-center px-6 py-4 border-b border-slate-50 mt-4">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 bg-burgundy-50 rounded-xl flex items-center justify-center text-burgundy-800">
                <Icon name="ph:paw-print-fill" size="24" />
              </div>
              <span class="text-xl font-bold font-headline-md text-tertiary">Dra. Kelly Fortes</span>
            </div>
            <button 
              @click="closeMobileMenu"
              class="w-12 h-12 flex items-center justify-center rounded-2xl bg-burgundy-50 text-burgundy-800 active:scale-95 transition-all"
            >
              <Icon name="ph:x-bold" size="28" />
            </button>
          </div>

          <!-- Scrollable Content -->
          <div class="flex-1 overflow-y-auto px-8 py-6">
            <nav class="flex flex-col gap-4">
              <div v-for="item in navItems" :key="item.id" class="flex flex-col border-b border-slate-50 last:border-0 pb-4 last:pb-0">
                <div class="flex items-center justify-between py-2 group">
                  <NuxtLink 
                    :to="item.path"
                    @click="closeMobileMenu"
                    :class="isItemActive(item.id) ? 'text-burgundy-800' : 'text-tertiary'" 
                    class="text-3xl font-bold flex-1 active:translate-x-2 transition-transform duration-300"
                  >
                    {{ item.label }}
                  </NuxtLink>
                  
                  <button 
                    v-if="item.id === 'servicos' || item.id === 'faq'"
                    @click="openMenuId = openMenuId === item.id ? null : item.id"
                    class="w-10 h-10 flex items-center justify-center rounded-xl transition-all duration-300 bg-slate-50 text-slate-400 border border-slate-100"
                    :class="{'rotate-180 bg-slate-100 text-tertiary': openMenuId === item.id}"
                  >
                    <Icon name="ph:caret-down-bold" size="20" />
                  </button>
                </div>

                <!-- Sub-menu mobile animado -->
                <div v-if="item.id === 'servicos' && openMenuId === 'servicos'" class="mt-4 grid grid-cols-1 gap-3">
                  <NuxtLink 
                    v-for="service in services" 
                    :key="service.slug"
                    :to="`/servicos/${service.slug}`"
                    @click="closeMobileMenu"
                    class="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 active:bg-teal-50 transition-all"
                  >
                    <div class="w-10 h-10 bg-white flex items-center justify-center rounded-xl shadow-sm shrink-0">
                      <Icon :name="service.icon" size="20" class="text-teal-700" />
                    </div>
                    <div class="flex flex-col">
                      <span class="text-base font-bold text-tertiary leading-tight">{{ service.name }}</span>
                      <span class="text-[11px] text-slate-400 mt-1 line-clamp-1">{{ service.shortDescription }}</span>
                    </div>
                  </NuxtLink>
                </div>

                <div v-if="item.id === 'faq' && openMenuId === 'faq'" class="mt-4 grid grid-cols-1 gap-3">
                  <NuxtLink 
                    to="/faq"
                    @click="closeMobileMenu"
                    class="flex items-center gap-4 p-4 rounded-2xl bg-burgundy-50/50 border border-burgundy-100"
                  >
                    <div class="w-10 h-10 bg-burgundy-800 flex items-center justify-center rounded-xl shrink-0">
                      <Icon name="ph:question-fill" size="20" class="text-white" />
                    </div>
                    <div class="flex flex-col">
                      <span class="text-base font-bold text-burgundy-900 leading-tight">Central de dúvidas</span>
                      <span class="text-[10px] text-burgundy-700 font-bold uppercase tracking-widest mt-1">Dúvidas Frequentes</span>
                    </div>
                  </NuxtLink>
                  
                  <NuxtLink 
                    v-for="cat in categories" 
                    :key="cat.id"
                    :to="`/faq?category=${cat.id}`"
                    @click="closeMobileMenu"
                    class="flex items-center gap-4 p-4 rounded-2xl bg-slate-50"
                  >
                    <div class="w-10 h-10 bg-white flex items-center justify-center rounded-xl shadow-sm shrink-0">
                      <Icon :name="cat.icon" size="20" class="text-slate-400" />
                    </div>
                    <div class="flex flex-col">
                      <span class="text-base font-semibold text-tertiary leading-tight">{{ cat.label }}</span>
                      <span class="text-[11px] text-slate-400 mt-1 line-clamp-1">{{ cat.description }}</span>
                    </div>
                  </NuxtLink>
                </div>
              </div>
            </nav>
          </div>

          <!-- Mobile Menu Footer -->
          <div class="p-8 bg-slate-50/50 border-t border-slate-100 flex flex-col gap-6">
             <p class="text-xs uppercase tracking-widest text-slate-400 font-bold">Entre em contato agora</p>
             <div class="flex gap-4">
                <a 
                  href="https://wa.me/5531999581716" 
                  target="_blank"
                  class="flex-1 bg-teal-700 text-white h-16 rounded-2xl flex items-center justify-center gap-3 font-bold shadow-lg shadow-teal-100 active:scale-95 transition-all"
                >
                  <Icon name="ph:whatsapp-logo-fill" size="24" />
                  WhatsApp
                </a>
                <a 
                  href="https://instagram.com/kellyfortes.vet" 
                  target="_blank"
                  class="w-16 h-16 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-burgundy-800 shadow-sm active:scale-95 transition-all"
                >
                  <Icon name="ph:instagram-logo-fill" size="28" />
                </a>
             </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </header>
</template>

<style scoped>
/* Additional micro-interactions if needed */
</style>




