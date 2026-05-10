<script setup lang="ts">
const { services } = useServices()

import type { NavItem } from '~/composables/useNavigation'

defineProps<{
  navItems: NavItem[]
}>()

defineEmits(['setActive'])
</script>

<template>
  <footer class="bg-slate-50 text-tertiary pt-20 pb-12 relative overflow-hidden border-t border-slate-200/50">
    <!-- Background Decors -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div class="absolute -right-[10%] top-[20%] w-[30rem] h-[30rem] bg-burgundy-500/5 rounded-full blur-[120px]"></div>
      <div class="absolute -left-[10%] bottom-[10%] w-[25rem] h-[25rem] bg-teal-500/5 rounded-full blur-[120px]"></div>
    </div>

    <div class="main-container mx-auto px-6 md:px-12 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-20">
        
        <!-- Brand Column -->
        <div v-animate-on-scroll class="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left">
          <span class="text-3xl md:text-4xl font-bold font-headline-md text-tertiary mb-6 leading-tight block">
            Dra. Kelly <span class="text-burgundy-700">Fortes</span>
          </span>
          <p class="text-on-tertiary-fixed-variant text-base md:text-lg max-w-sm mb-10 leading-relaxed">
            Oferecendo excelência médica veterinária onde seu pet se sente mais seguro: em casa.
          </p>
          
          <!-- Social Links -->
          <div class="flex gap-4">
            <a 
              v-for="(social, index) in [
                { icon: 'ph:instagram-logo-fill', url: 'https://instagram.com/kellyfortes.vet', label: 'Instagram' },
                { icon: 'ph:facebook-logo-fill', url: '#', label: 'Facebook' },
                { icon: 'ph:whatsapp-logo-fill', url: 'https://wa.me/5531999581716', label: 'WhatsApp' }
              ]"
              :key="index"
              class="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-teal-50 hover:border-teal-200 hover:text-teal-700 hover:-translate-y-1 shadow-sm transition-all duration-300 group"
              :href="social.url"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="social.label"
            >
              <Icon :name="social.icon" size="24" class="transition-transform group-hover:scale-110" />
            </a>
          </div>
        </div>

        <!-- Links Grid -->
        <div class="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-8">
          
          <!-- Navigation -->
          <div v-animate-on-scroll="'100ms'" class="flex flex-col items-center sm:items-start">
            <h3 class="font-bold text-tertiary uppercase tracking-widest text-xs md:text-sm mb-8 border-b border-burgundy-100 pb-2 inline-block">Navegação</h3>
            <nav class="flex flex-col items-center sm:items-start gap-4">
              <NuxtLink 
                v-for="item in navItems" 
                :key="item.id"
                class="text-on-tertiary-fixed-variant hover:text-teal-700 transition-colors text-base font-medium" 
                :to="item.path"
                @click="$emit('setActive', item.id)"
              >
                {{ item.label }}
              </NuxtLink>
            </nav>
          </div>

          <!-- Services -->
          <div v-animate-on-scroll="'200ms'" class="flex flex-col items-center sm:items-start">
            <h3 class="font-bold text-tertiary uppercase tracking-widest text-xs md:text-sm mb-8 border-b border-teal-100 pb-2 inline-block">Serviços</h3>
            <nav class="flex flex-col items-center sm:items-start gap-4">
              <NuxtLink 
                v-for="service in services" 
                :key="service.slug"
                class="text-on-tertiary-fixed-variant hover:text-burgundy-700 transition-colors text-base font-medium" 
                :to="`/servicos/${service.slug}`"
              >
                {{ service.name }}
              </NuxtLink>
            </nav>
          </div>

          <!-- Contacts -->
          <div v-animate-on-scroll="'300ms'" class="flex flex-col items-center sm:items-start">
            <h3 class="font-bold text-tertiary uppercase tracking-widest text-xs md:text-sm mb-8 border-b border-slate-200 pb-2 inline-block">Contatos</h3>
            <div class="flex flex-col items-center sm:items-start gap-4">
              
              <!-- Email -->
              <div class="flex items-center gap-3 group/item">
                <Icon name="ph:envelope-simple-fill" size="18" class="text-slate-400 group-hover/item:text-tertiary transition-colors" />
                <a href="mailto:kellysfortes@gmail.com" class="text-on-tertiary-fixed-variant text-sm md:text-base hover:text-tertiary transition-colors">
                  kellysfortes@gmail.com
                </a>
              </div>

              <!-- WhatsApp -->
              <div class="flex items-center gap-4 group/item">
                <Icon name="ph:whatsapp-logo-fill" size="18" class="text-slate-400 group-hover/item:text-tertiary transition-colors" />
                <a href="https://wa.me/5531999581716" target="_blank" class="text-on-tertiary-fixed-variant text-sm md:text-base hover:text-tertiary transition-colors">
                  (31) 99958-1716
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        <p class="text-xs md:text-sm text-slate-500 font-medium">
          © 2024 Dra. Kelly Fortes — CRMV 26979. Todos os direitos reservados.
        </p>
        <div class="flex items-center gap-2 text-xs text-slate-400">
          <span>Feito com</span>
          <Icon name="ph:heart-fill" class="text-burgundy-400" />
          <span>para todos os pets</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* Mobile adjustments for sticky headers if any */
</style>

