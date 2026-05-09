<script setup lang="ts">
const { services } = useServices()

import type { NavItem } from '~/composables/useNavigation'

defineProps<{
  navItems: NavItem[]
}>()

defineEmits(['setActive'])
</script>

<template>
  <footer class="bg-white border-t border-tertiary-container/10 pt-12 pb-20 md:pb-12">
    <div class="md:main-container md:mx-auto md:px-8 lg:px-12 px-6">
      <!-- Área Superior -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-10">
        <!-- Marca + Social -->
        <div v-animate-on-scroll class="md:col-span-1 flex flex-col items-center md:items-start text-center md:text-left space-y-4">
          <span class="text-2xl md:text-3xl font-bold font-headline-md text-burgundy-800 leading-tight">Dra. Kelly Fortes</span>
          <p class="text-on-tertiary-fixed-variant text-sm max-w-xs">Oferecendo excelência médica veterinária onde seu pet se sente mais seguro: em casa.</p>
          <div class="flex gap-4">
            <a class="text-burgundy-800 hover:scale-110 transition-transform " href="https://instagram.com/kellyfortes.vet" target="_blank" rel="noopener noreferrer" aria-label="Siga-nos no Instagram">
              <Icon name="ph:instagram-logo" size="24" />
            </a> 
          </div>
        </div>

        <!-- Links Úteis -->
        <div v-animate-on-scroll="'100ms'" class="flex flex-col items-center md:items-start text-center md:text-left space-y-4 md:space-y-6">
          <h3 class="font-bold text-tertiary uppercase tracking-wider text-xs md:text-sm">Navegação</h3>
          <nav class="flex flex-col items-center md:items-start gap-2 md:gap-3 text-sm">
            <NuxtLink v-for="item in navItems" 
              :key="item.id"
              class="text-on-tertiary-fixed-variant hover:text-burgundy-800 transition-colors" 
              :to="item.path"
              @click="$emit('setActive', item.id)">
              {{ item.label }}
            </NuxtLink>
          </nav>
        </div>

        <!-- Serviços -->
        <div v-animate-on-scroll="'200ms'" class="flex flex-col items-center md:items-start text-center md:text-left space-y-4 md:space-y-6">
          <h3 class="font-bold text-tertiary uppercase tracking-wider text-xs md:text-sm">Serviços</h3>
          <nav class="flex flex-col items-center md:items-start gap-2 md:gap-3 text-sm">
            <NuxtLink v-for="service in services" 
              :key="service.slug"
              class="text-on-tertiary-fixed-variant hover:text-burgundy-800 transition-colors" 
              :to="`/servicos/${service.slug}`">
              {{ service.name }}
            </NuxtLink>
          </nav>
        </div>

        <!-- Contatos -->
        <div v-animate-on-scroll="'300ms'" class="flex flex-col items-center md:items-start text-center md:text-left space-y-4 md:space-y-6">
          <h3 class="font-bold text-tertiary uppercase tracking-wider text-xs md:text-sm">Contatos</h3>
          <div class="flex flex-col items-center md:items-start gap-3">
            <div class="flex items-center gap-2">
              <Icon name="ph:envelope-simple" size="18" class="text-burgundy-800" />
              <a href="mailto:kellysfortes@gmail.com" class="text-on-tertiary-fixed-variant text-sm hover:text-burgundy-800 transition-colors">
                kellysfortes@gmail.com
              </a>
            </div>
            <div class="flex items-center gap-2">
              <Icon name="ph:whatsapp-logo" size="18" class="text-burgundy-800" />
              <a href="https://wa.me/5531999581716" target="_blank" class="text-on-tertiary-fixed-variant text-sm hover:text-burgundy-800 transition-colors">
                (31) 99958-1716
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Rodapé Bottom -->

    <div class="pt-6 border-t border-tertiary-container/10 text-center mb-4 md:mb-0">
      <p class="text-xs md:text-sm text-on-tertiary-fixed-variant px-6">
        © 2024 Dra. Kelly Fortes — CRMV 26979. Todos os direitos reservados.
      </p>
    </div>
  </footer>
</template>

