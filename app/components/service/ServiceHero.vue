<template>
  <section 
    class="relative w-full overflow-x-hidden bg-white pt-8 pb-12 md:pb-22"
    aria-labelledby="hero-title"
  >
    <!-- Background Decor (Asymmetrical) -->
    <div class="absolute inset-0 overflow-x-hidden pointer-events-none select-none" aria-hidden="true">
      <!-- Huge subtle text background -->
      <div class="absolute top-20 -right-20 text-[20rem] font-black text-slate-50 select-none leading-none opacity-50 hidden lg:block">
        PET
      </div>
      <!-- Standard Orbs -->
      <div class="absolute right-0 top-[10%] w-[40rem] h-[40rem] bg-burgundy-500/5 rounded-full blur-[120px] translate-x-1/2"></div>
      <div class="absolute left-0 bottom-[10%] w-[35rem] h-[35rem] bg-teal-500/5 rounded-full blur-[120px] -translate-x-1/2"></div>
    </div>

    <div class="main-container mx-auto px-6 md:px-12 relative z-10">
      <!-- Breadcrumbs at Top Left -->
      <div class="mb-12 md:mb-12">
        <Breadcrumbs :items="breadcrumbItems" />
      </div>

      <div class="grid lg:grid-cols-12 gap-12 lg:gap-20">
        <!-- Left Column: Content (7/12) -->
        <div class="lg:col-span-7 flex flex-col items-start text-left py-12 md:py-20">
          <!-- Premium Badge -->
          <div v-animate-on-scroll class="inline-flex items-center gap-2.5 text-burgundy-800 font-bold bg-burgundy-50 px-5 py-2.5 rounded-full mb-8 backdrop-blur-sm border border-burgundy-100 shadow-sm">
            <span class="relative flex h-2 w-2" aria-hidden="true">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-burgundy-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-burgundy-600"></span>
            </span>
            <span class="text-xs sm:text-sm uppercase tracking-widest">Serviço Premium em Domicílio</span>
          </div>

          <!-- Headline -->
          <h1 id="hero-title" v-animate-on-scroll="'100ms'" class="text-3xl md:text-5xl lg:text-7xl font-black font-headline-lg text-slate-900 mb-8 leading-[1.15] md:leading-[1.1] tracking-tight">
            {{ service.name }}
            <span class="text-teal-600">
              Especializado
            </span>
          </h1>

          <!-- Description -->
          <p v-animate-on-scroll="'200ms'" class="text-lg md:text-xl text-slate-600 leading-relaxed mb-12 max-w-2xl font-medium">
            {{ service.longDescription }}
          </p>

          <!-- CTAs -->
          <div v-animate-on-scroll="'300ms'" class="flex flex-col sm:flex-row gap-5 w-full sm:w-auto items-center">
            <a class="group relative flex items-center justify-center gap-3 bg-burgundy-800 text-white py-5 px-10 rounded-2xl font-bold text-lg shadow-[0_20px_40px_-15px_rgba(153,27,27,0.3)] hover:shadow-[0_25px_50px_-12px_rgba(153,27,27,0.4)] hover:bg-burgundy-700 hover:-translate-y-1.5 transition-all duration-500 w-full sm:w-auto overflow-hidden"
               :href="`https://wa.me/5531999581716?text=Olá%20Dra.%20Kelly!%20Gostaria%20de%20agendar%20${service.name}%20para%20meu%20pet`"
               target="_blank" rel="noopener noreferrer"
               :aria-label="`Agendar serviço de ${service.name} agora pelo WhatsApp`"
            >
              <div class="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" aria-hidden="true"></div>
              <Icon name="ph:whatsapp-logo-fill" size="28" class="group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300" />
              <span class="relative z-10">Agendar Agora</span>
            </a>
            
            <NuxtLink to="/#servicos" 
              class="group flex items-center justify-center gap-3 text-slate-700 font-bold text-lg px-10 py-5 bg-white border-2 border-slate-100 rounded-2xl hover:bg-slate-50 hover:border-teal-200 hover:-translate-y-1.5 transition-all duration-300 w-full sm:w-auto"
              aria-label="Ver outros serviços oferecidos"
            >
              <span>Ver Catálogo</span>
              <Icon name="ph:arrow-right-bold" size="20" class="text-slate-300 group-hover:text-teal-600 group-hover:translate-x-2 transition-all" />
            </NuxtLink>
          </div>
        </div>

        <!-- Right Column: Visual Composition (5/12) -->
        <div class="lg:col-span-5 relative mt-12 lg:mt-0">
          <!-- 1. Envoltório do fixo (Sticky Scroll 11.5) -->
          <div class="lg:sticky lg:top-32 h-fit">
            <!-- 2. Envoltório da animação -->
            <div v-animate-on-scroll="'400ms'" class="relative group perspective-1000 max-w-full">
              <!-- Decorative Glow Behind Card -->
              <div class="absolute -inset-2 bg-gradient-to-r from-teal-500/10 to-burgundy-500/10 rounded-[3.5rem] blur-2xl opacity-50 group-hover:opacity-80 transition duration-1000" aria-hidden="true"></div>
              
              <!-- Main Card (Compact Version) -->
              <div class="bg-white rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] p-6 sm:p-8 md:p-10 overflow-hidden relative shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] border border-slate-100 transition-transform duration-700 hover:scale-[1.01]">
                
                <!-- Secondary Excellence Icon (Top Right) -->
                <div class="absolute top-6 right-6 sm:top-8 sm:right-8 z-20" v-animate-on-scroll="'500ms'">
                  <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-teal-50/80 backdrop-blur-sm flex items-center justify-center border border-teal-100 shadow-sm group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    <Icon name="ph:seal-check-fill" size="20" class="text-teal-600 sm:w-[24px] sm:h-[24px]" />
                  </div>
                </div>

                <!-- Secondary Excellence Icon (Top Right) -->
                <div class="absolute top-6 right-6 sm:top-8 sm:right-8 z-20" v-animate-on-scroll="'500ms'">
                  <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-teal-50/80 backdrop-blur-sm flex items-center justify-center border border-teal-100 shadow-sm group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 animate-float">
                    <Icon name="ph:seal-check-fill" size="20" class="text-teal-600 sm:w-[24px] sm:h-[24px]" />
                  </div>
                </div>

                <!-- Background Patterns -->
                <div class="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl" aria-hidden="true"></div>
                <div class="absolute bottom-0 left-0 -mb-16 -ml-16 w-64 h-64 bg-burgundy-500/5 rounded-full blur-3xl" aria-hidden="true"></div>

                <div class="relative z-10">
                  <div class="inline-flex items-center gap-2 bg-slate-50 rounded-full px-3 py-1.5 mb-4 border border-slate-100 backdrop-blur-sm max-w-full">
                    <span class="relative flex h-2 w-2 shrink-0" aria-hidden="true">
                      <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                      <span class="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                    </span>
                    <span class="text-[10px] font-bold tracking-wide uppercase text-teal-700 truncate">Atendimento ativo hoje</span>
                  </div>
                  
                  <h3 class="text-2xl sm:text-3xl font-black mb-3 font-headline-lg leading-tight text-slate-900">Agendamento <br/>Simplificado</h3>
                  <p class="text-slate-500 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 max-w-md">
                    Tudo resolvido pelo WhatsApp. Sem burocracia e com todo o carinho.
                  </p>

                  <!-- Service DNA / Highlights (Compact List) -->
                  <div class="flex flex-col space-y-3 relative">
                    <!-- Connection Line -->
                    <div class="absolute left-6 top-6 bottom-6 w-px bg-slate-100 -z-10" aria-hidden="true"></div>

                    <!-- Highlight 1 -->
                    <div v-animate-on-scroll="'100ms'" class="group/item flex items-center gap-4 bg-slate-50/50 p-3 sm:p-4 rounded-2xl border border-slate-100 hover:bg-white hover:shadow-lg hover:border-teal-200 transition-all duration-300">
                      <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white flex items-center justify-center shadow-sm border border-slate-100 group-hover/item:bg-teal-600 group-hover/item:text-white transition-all duration-300 shrink-0">
                        <Icon name="ph:house-line-fill" size="20" class="text-teal-600 group-hover/item:text-white transition-colors duration-300" />
                      </div>
                      <div class="text-left min-w-0">
                        <p class="text-xs sm:text-sm font-black text-slate-800 leading-tight truncate">Atendimento no Lar</p>
                        <p class="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-widest truncate">Conforto total para o pet</p>
                      </div>
                    </div>

                    <!-- Highlight 2 -->
                    <div v-animate-on-scroll="'200ms'" class="group/item flex items-center gap-4 bg-slate-50/50 p-3 sm:p-4 rounded-2xl border border-slate-100 hover:bg-white hover:shadow-lg hover:border-burgundy-200 transition-all duration-300">
                      <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white flex items-center justify-center shadow-sm border border-slate-100 group-hover/item:bg-burgundy-600 group-hover/item:text-white transition-all duration-300 shrink-0">
                        <Icon name="ph:heart-fill" size="20" class="text-burgundy-600 group-hover/item:text-white transition-colors duration-300" />
                      </div>
                      <div class="text-left min-w-0">
                        <p class="text-xs sm:text-sm font-black text-slate-800 leading-tight truncate">Cuidado Humanizado</p>
                        <p class="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-widest truncate">Amor em cada procedimento</p>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Stats Overlay (Compact) -->
                <div class="mt-6 sm:mt-8 pt-6 border-t border-slate-100 grid grid-cols-2 gap-6 relative z-10">
                  <div v-animate-on-scroll="'100ms'" class="flex flex-col">
                    <p class="text-xl sm:text-2xl font-black text-slate-900 mb-0.5 leading-none">98%</p>
                    <p class="text-[9px] sm:text-[10px] text-teal-600 uppercase tracking-widest font-bold">Satisfação</p>
                  </div>
                  <div v-animate-on-scroll="'150ms'" class="flex flex-col">
                    <p class="text-xl sm:text-2xl font-black text-slate-900 mb-0.5 leading-none">1.2k</p>
                    <p class="text-[9px] sm:text-[10px] text-burgundy-600 uppercase tracking-widest font-bold">Pets</p>
                  </div>
                </div>
              </div>
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

<style scoped>
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.animate-float {
  animation: float 4s ease-in-out infinite;
}
</style>
