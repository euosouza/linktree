<script setup>
const { services } = useServices()
const { categories } = useFAQ()
const route = useRoute()

const openMenuId = ref(null)
const isMobileMenuOpen = ref(false)

const props = defineProps({
  navItems: {
    type: Array,
    required: true
  },
  activeSection: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['setActive'])

const isItemActive = (itemId) => {
  const isHome = route.path === '/' || route.path === '/linktree' || route.path === '/linktree/'
  
  // Specific logic for pages
  if (itemId === 'servicos' && route.path.startsWith('/servicos')) return true
  if (itemId === 'faq' && route.path.startsWith('/faq')) return true
  
  // If we are on a sub-page, only the above matching should be active
  if (!isHome) return false

  // If we are on home, use the scroll-spy state
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

const handleNavClick = (item) => {
  if (item.id === 'servicos' || item.id === 'faq') {
    openMenuId.value = openMenuId.value === item.id ? null : item.id
    return
  }
  emit('setActive', item.id)
  closeMobileMenu()
}

</script>


<template>
  <header class="bg-white sticky top-0 z-50 shadow-sm w-full border-b border-tertiary-container/10">
    <div class="main-container w-full mx-auto py-4 md:py-6 flex justify-between items-center px-6 md:px-12">
      <NuxtLink to="/" class="flex items-center gap-2" @click="closeMobileMenu">
        <Icon name="ph:paw-print-fill" size="32" class="text-burgundy-800" />
      </NuxtLink>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex gap-8 items-center">
        <div v-for="item in navItems" :key="item.id" class="relative group">
          
          <!-- Caso: Dropdown (Serviços ou FAQ) -->
          <div v-if="item.id === 'servicos' || item.id === 'faq'" 
               class="flex items-center gap-1 cursor-pointer py-2"
               @mouseenter="openMenuId = item.id"
               @mouseleave="openMenuId = null">
            
            <NuxtLink 
               :to="item.path"
               @click="$emit('setActive', item.id); openMenuId = null"
               :class="isItemActive(item.id) ? 'text-burgundy-800 font-bold' : 'text-tertiary'" 
               class="hover:text-burgundy-800 transition-all font-label-md">
              {{ item.label }}
            </NuxtLink>
            <Icon name="ph:caret-down-bold" size="14" class="text-tertiary/50 transition-transform" :class="{'rotate-180 text-burgundy-800': openMenuId === item.id}" />
            
            <!-- Menu Dropdown -->
            <div 
              class="absolute top-full pt-4 transition-all duration-300 z-50"
              :class="[
                openMenuId === item.id ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2',
                item.id === 'faq' ? 'right-0' : 'left-1/2 -translate-x-1/2'
              ]"
            >
              <div class="bg-white border border-tertiary-container/10 shadow-2xl rounded-2xl p-4 min-w-[280px] grid grid-cols-1 gap-1">
                <!-- Conteúdo do Menu de Serviços -->
                <template v-if="item.id === 'servicos'">
                  <NuxtLink 
                    v-for="service in services" 
                    :key="service.slug"
                    :to="`/servicos/${service.slug}`"
                    @click="openMenuId = null"
                    class="flex items-center gap-3 p-3 rounded-xl hover:bg-burgundy-50 transition-colors group/item"
                  >
                    <div class="w-10 h-10 bg-teal-100 flex items-center justify-center rounded-lg group-hover/item:scale-110 transition-transform">
                      <Icon :name="service.icon" size="20" class="text-teal-800" />
                    </div>
                    <div>
                      <p class="text-sm font-bold text-tertiary">{{ service.name }}</p>
                      <p class="text-[10px] text-on-tertiary-fixed-variant leading-tight">Ver detalhes</p>
                    </div>
                  </NuxtLink>
                </template>

                <!-- Conteúdo do Menu de FAQ -->
                <template v-else-if="item.id === 'faq'">
                  <NuxtLink 
                    to="/faq"
                    @click="openMenuId = null"
                    class="flex items-center gap-3 p-3 rounded-xl bg-burgundy-50/50 hover:bg-burgundy-50 transition-colors mb-2"
                  >
                    <div class="w-10 h-10 bg-burgundy-800 flex items-center justify-center rounded-lg">
                      <Icon name="ph:question-bold" size="20" class="text-white" />
                    </div>
                    <div>
                      <p class="text-sm font-bold text-tertiary">Central de Ajuda</p>
                      <p class="text-[10px] text-burgundy-800 font-bold uppercase tracking-widest">Ver tudo</p>
                    </div>
                  </NuxtLink>

                  <div class="h-px bg-tertiary-container/10 my-1 mx-2"></div>

                  <NuxtLink 
                    v-for="cat in categories" 
                    :key="cat.id"
                    :to="`/faq?category=${cat.id}`"
                    @click="openMenuId = null"
                    class="flex items-center gap-3 p-3 rounded-xl hover:bg-on-tertiary-container/5 transition-colors group/item"
                  >
                    <div class="w-10 h-10 bg-on-tertiary-container/5 flex items-center justify-center rounded-lg group-hover/item:bg-white transition-colors shadow-sm">
                      <Icon :name="cat.icon" size="18" class="text-tertiary/60" />
                    </div>
                    <p class="text-sm font-medium text-tertiary">{{ cat.label }}</p>
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
             class="hover:text-burgundy-800 transition-all font-label-md py-2">
            {{ item.label }}
          </NuxtLink>
        </div>
      </nav>

      <!-- Hamburger Button (Mobile) -->
      <button 
        class="md:hidden flex items-center justify-center w-11 h-11 rounded-xl bg-burgundy-800 text-white transition-all active:scale-95 shadow-md"
        @click="toggleMobileMenu"
        aria-label="Menu"
      >
        <Icon :name="isMobileMenuOpen ? 'ph:x-bold' : 'ph:list-bold'" size="28" />
      </button>
    </div>

    <!-- Mobile Menu Overlay -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 translate-x-full"
      enter-to-class="opacity-100 translate-x-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-x-0"
      leave-to-class="opacity-0 translate-x-full"
    >
      <div v-if="isMobileMenuOpen" class="md:hidden fixed inset-0 top-[73px] bg-white z-[60] overflow-y-auto">
        <div class="p-6 space-y-4">
          <div v-for="item in navItems" :key="item.id" class="border-b border-tertiary-container/5 last:border-0 pb-4 last:pb-0">
            <!-- Link principal mobile -->
            <div class="flex items-center justify-between py-2 cursor-pointer" @click="handleNavClick(item)">
              <span 
                :class="isItemActive(item.id) ? 'text-burgundy-800 font-bold' : 'text-tertiary'" 
                class="text-xl font-bold flex-1"
              >
                {{ item.label }}
              </span>
              
              <div 
                v-if="item.id === 'servicos' || item.id === 'faq'"
                class="w-10 h-10 flex items-center justify-center rounded-lg bg-on-tertiary-container/5 text-tertiary"
              >
                <Icon 
                  :name="openMenuId === item.id ? 'ph:minus-bold' : 'ph:plus-bold'" 
                  size="20" 
                />
              </div>
            </div>

            <!-- Sub-menu mobile para Serviços -->
            <div v-if="item.id === 'servicos' && openMenuId === 'servicos'" class="mt-4 grid grid-cols-1 gap-3 pl-4">
              <NuxtLink 
                v-for="service in services" 
                :key="service.slug"
                :to="`/servicos/${service.slug}`"
                @click="closeMobileMenu"
                class="flex items-center gap-3 p-3 rounded-xl bg-on-tertiary-container/5"
              >
                <div class="w-8 h-8 bg-white flex items-center justify-center rounded-lg shadow-sm">
                  <Icon :name="service.icon" size="16" class="text-teal-800" />
                </div>
                <span class="text-sm font-bold text-tertiary">{{ service.name }}</span>
              </NuxtLink>
            </div>

            <!-- Sub-menu mobile para FAQ -->
            <div v-if="item.id === 'faq' && openMenuId === 'faq'" class="mt-4 grid grid-cols-1 gap-3 pl-4">
              <NuxtLink 
                to="/faq"
                @click="closeMobileMenu"
                class="flex items-center gap-3 p-3 rounded-xl bg-burgundy-50"
              >
                <div class="w-8 h-8 bg-burgundy-800 flex items-center justify-center rounded-lg shadow-sm">
                  <Icon name="ph:question-bold" size="16" class="text-white" />
                </div>
                <span class="text-sm font-bold text-burgundy-900">Central de Ajuda</span>
              </NuxtLink>
              
              <NuxtLink 
                v-for="cat in categories" 
                :key="cat.id"
                :to="`/faq?category=${cat.id}`"
                @click="closeMobileMenu"
                class="flex items-center gap-3 p-3 rounded-xl bg-on-tertiary-container/5"
              >
                <div class="w-8 h-8 bg-white flex items-center justify-center rounded-lg shadow-sm">
                  <Icon :name="cat.icon" size="16" class="text-tertiary/60" />
                </div>
                <span class="text-sm font-medium text-tertiary">{{ cat.label }}</span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>




