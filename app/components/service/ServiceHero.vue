<template>
  <section 
    class="relative pt-20 pb-24 md:pt-24 md:pb-32 overflow-hidden bg-slate-50"
    aria-labelledby="hero-title"
  >
    <!-- Sophisticated Background Elements -->
    <div class="absolute inset-0 mesh-bg opacity-[0.15] pointer-events-none mix-blend-multiply" aria-hidden="true"></div>
    
    <!-- Dynamic Orbs -->
    <div class="absolute top-[-10%] right-[-5%] w-[50rem] h-[50rem] bg-gradient-to-b from-teal-200/40 to-transparent blur-[100px] rounded-full pointer-events-none animate-pulse" style="animation-duration: 8s;" aria-hidden="true"></div>
    <div class="absolute bottom-[-10%] left-[-10%] w-[60rem] h-[60rem] bg-gradient-to-tr from-burgundy-300/30 via-burgundy-100/10 to-transparent blur-[120px] rounded-full pointer-events-none" aria-hidden="true"></div>
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/60 via-white/10 to-transparent pointer-events-none" aria-hidden="true"></div>
    
    <div class="main-container mx-auto px-6 md:px-12 relative z-10">
      
      <!-- Breadcrumbs -->
      <div class="mb-8 md:mb-12 flex justify-start w-full">
        <Breadcrumbs :items="breadcrumbItems" />
      </div>

      <div class="flex flex-col items-center text-center max-w-5xl mx-auto">
        <!-- Premium Badge -->
        <div v-animate-on-scroll class="inline-flex items-center gap-2.5 text-teal-800 font-bold text-xs sm:text-sm uppercase tracking-widest bg-white/80 px-6 py-2.5 rounded-full border border-teal-200/50 mb-10 backdrop-blur-md shadow-[0_4px_20px_-4px_rgba(20,184,166,0.15)]">
          <span class="relative flex h-3 w-3" aria-hidden="true">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-3 w-3 bg-teal-500"></span>
          </span>
          <span class="flex items-center gap-2">
            <Icon :name="service.icon" size="18" class="text-teal-600" aria-hidden="true" />
            Serviço Especializado de Excelência
          </span>
        </div>
        
        <!-- Headline -->
        <h1 id="hero-title" v-animate-on-scroll="'100ms'" class="text-5xl sm:text-6xl md:text-8xl font-black font-headline-lg text-slate-900 mb-8 leading-[1.05] tracking-tight break-words hyphens-auto">
          {{ service.name }}
          <span class="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-burgundy-800 to-burgundy-500">
            em Domicílio
          </span>
        </h1>
        
        <!-- Description -->
        <p v-animate-on-scroll="'200ms'" class="text-lg sm:text-xl md:text-2xl text-slate-600 leading-relaxed mb-14 max-w-3xl font-medium">
          {{ service.longDescription }}
        </p>
        
        <!-- Call to Actions -->
        <div v-animate-on-scroll="'300ms'" class="flex flex-col sm:flex-row gap-5 w-full sm:w-auto items-center justify-center">
          <a class="group relative flex items-center justify-center gap-3 bg-gradient-to-r from-burgundy-800 to-burgundy-700 text-white py-5 px-10 rounded-2xl font-bold text-lg sm:text-xl shadow-[0_8px_30px_-4px_rgba(153,27,27,0.3)] hover:shadow-[0_12px_40px_-4px_rgba(153,27,27,0.4)] hover:-translate-y-1.5 focus:outline-none focus:ring-4 focus:ring-burgundy-500/50 transition-all duration-300 w-full sm:w-auto overflow-hidden"
             :href="`https://wa.me/5531999581716?text=Olá%20Dra.%20Kelly!%20Gostaria%20de%20agendar%20${service.name}%20para%20meu%20pet`"
             target="_blank" rel="noopener noreferrer"
             :aria-label="`Agendar serviço de ${service.name} agora pelo WhatsApp`">
            <div class="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" aria-hidden="true"></div>
            <Icon name="ph:whatsapp-logo-fill" size="28" class="group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
            <span class="relative z-10">Agendar Agora</span>
          </a>
          
          <NuxtLink to="/#servicos" 
            class="group flex items-center justify-center gap-3 text-slate-700 font-bold text-lg sm:text-xl px-10 py-5 bg-white/70 border border-slate-200/80 rounded-2xl shadow-sm hover:bg-white hover:border-slate-300 hover:shadow-md hover:-translate-y-1.5 focus:outline-none focus:ring-4 focus:ring-teal-500/30 transition-all duration-300 w-full sm:w-auto backdrop-blur-md"
            aria-label="Ver outros serviços oferecidos"
          >
            <span>Ver outros serviços</span>
            <Icon name="ph:arrow-right-bold" size="20" class="text-slate-400 group-hover:text-slate-700 group-hover:translate-x-1.5 transition-all" aria-hidden="true" />
          </NuxtLink>
        </div>

        <!-- Value Propositions -->
        <div v-animate-on-scroll="'100ms'" class="mt-16 md:mt-24 pt-10 border-t border-slate-200/50 flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 w-full max-w-4xl relative">
          <!-- Decorative blurred background behind benefits -->
          <div class="absolute inset-0 bg-white/40 blur-2xl rounded-full -z-10" aria-hidden="true"></div>
          
          <!-- Card 1 -->
          <div class="flex items-center gap-4 bg-white/60 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/80 shadow-sm hover:bg-white hover:-translate-y-1 hover:shadow-md hover:border-teal-200 transition-all duration-300 group w-full sm:w-auto justify-start sm:justify-center">
            <div class="flex items-center justify-center shrink-0 w-12 h-12 rounded-full bg-teal-50 text-teal-600 group-hover:bg-teal-500 group-hover:text-white transition-colors duration-300 shadow-sm border border-teal-100 group-hover:border-teal-500" aria-hidden="true">
              <Icon name="ph:house-line-duotone" size="24" />
            </div>
            <div class="flex flex-col text-left">
              <span class="text-slate-800 font-bold text-base leading-tight mb-0.5">Conforto do Lar</span>
              <span class="text-slate-500 text-xs font-medium">Sem estresse ou viagem</span>
            </div>
          </div>
          
          <!-- Card 2 -->
          <div class="flex items-center gap-4 bg-white/60 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/80 shadow-sm hover:bg-white hover:-translate-y-1 hover:shadow-md hover:border-teal-200 transition-all duration-300 group w-full sm:w-auto justify-start sm:justify-center">
            <div class="flex items-center justify-center shrink-0 w-12 h-12 rounded-full bg-teal-50 text-teal-600 group-hover:bg-teal-500 group-hover:text-white transition-colors duration-300 shadow-sm border border-teal-100 group-hover:border-teal-500" aria-hidden="true">
              <Icon name="ph:shield-check-duotone" size="24" />
            </div>
            <div class="flex flex-col text-left">
              <span class="text-slate-800 font-bold text-base leading-tight mb-0.5">100% Seguro</span>
              <span class="text-slate-500 text-xs font-medium">Equipamentos certificados</span>
            </div>
          </div>
          
          <!-- Card 3 -->
          <div class="flex items-center gap-4 bg-white/60 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/80 shadow-sm hover:bg-white hover:-translate-y-1 hover:shadow-md hover:border-teal-200 transition-all duration-300 group w-full sm:w-auto justify-start sm:justify-center">
            <div class="flex items-center justify-center shrink-0 w-12 h-12 rounded-full bg-teal-50 text-teal-600 group-hover:bg-teal-500 group-hover:text-white transition-colors duration-300 shadow-sm border border-teal-100 group-hover:border-teal-500" aria-hidden="true">
              <Icon name="ph:heartbeat-duotone" size="24" />
            </div>
            <div class="flex flex-col text-left">
              <span class="text-slate-800 font-bold text-base leading-tight mb-0.5">Humanizado</span>
              <span class="text-slate-500 text-xs font-medium">Amor e paciência com o pet</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import Breadcrumbs from '../../../libs/ui/components/breadcrumbs/Breadcrumbs.vue'
import type { Service } from '~/composables/useServices'

const props = defineProps<{
  service: Service
}>()

const breadcrumbItems = computed(() => [
  { name: 'Início', item: '/' },
  { name: 'Serviços', item: '/#servicos' },
  { name: props.service.name, item: `/servicos/${props.service.slug}` }
])
</script>
