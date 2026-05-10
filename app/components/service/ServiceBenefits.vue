<template>
  <section v-if="benefits && benefits.length > 0" class="py-8 md:py-32 bg-white relative" aria-labelledby="benefits-title">
    
    <!-- Premium Background Decors (Asymmetrical Orbs) -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div class="absolute -right-[10%] top-[15%] w-[30rem] h-[30rem] bg-burgundy-500/5 rounded-full blur-[120px]"></div>
      <div class="absolute -left-[10%] bottom-[5%] w-[25rem] h-[25rem] bg-teal-500/5 rounded-full blur-[120px]"></div>
    </div>

    <div class="main-container mx-auto px-6 md:px-12 relative z-10">
      
      <!-- Section Header (Standardized Pattern) -->
      <div v-animate-on-scroll class="text-center max-w-4xl mx-auto mb-16 md:mb-24 flex flex-col items-center">
        <!-- Premium Badge -->
        <div class="inline-flex items-center gap-2 text-teal-800 font-bold bg-teal-50/50 px-4 py-2 rounded-full mb-8 backdrop-blur-sm border border-teal-100 shadow-sm">
          <Icon name="ph:sparkle-fill" size="18" aria-hidden="true" class="text-teal-600" />
          <span class="text-xs sm:text-sm uppercase tracking-widest font-black">Diferenciais Elite</span>
        </div>

        <h2 id="benefits-title" class="text-3xl md:text-5xl lg:text-6xl font-black font-headline-lg text-slate-900 mb-8 leading-tight tracking-tight">
          A Excelência Veterinária no <span class="text-teal-600">Conforto do Lar</span>
        </h2>
        
        <p class="text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed">
          Unimos a alta tecnologia diagnóstica com o carinho e a tranquilidade que apenas o ambiente familiar pode proporcionar.
        </p>
      </div>

      <!-- Asymmetrical Layout (Lg: 7/12 - 5/12) -->
      <div class="flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        <!-- Left Side: Benefits Cards Grid (7/12) -->
        <div class="lg:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 relative">
          <div 
            v-for="(benefit, index) in benefits" 
            :key="index"
            v-animate-on-scroll="`${index * 150}ms`"
            :class="[
              'group bg-white p-5 md:p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-teal-100 transition-all duration-500 relative overflow-hidden flex flex-col h-full',
              index === 0 && benefits.length === 3 ? 'sm:col-span-2' : ''
            ]"
          >
            <!-- Hover Background Accent -->
            <div class="absolute top-0 right-0 w-32 h-32 bg-teal-50/50 rounded-full blur-3xl -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div class="relative z-10 flex-1">
              <!-- Icon Cell (Premium Pattern) -->
              <div class="w-10 h-10 md:w-12 md:h-12 bg-slate-50 border border-slate-100 shadow-inner rounded-xl flex items-center justify-center mb-4 text-teal-600 group-hover:bg-teal-600 group-hover:text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                <Icon :name="benefit.icon" size="20" class="md:hidden" aria-hidden="true" />
                <Icon :name="benefit.icon" size="24" class="hidden md:block" aria-hidden="true" />
              </div>
  
              <!-- Content -->
              <h3 class="text-xl font-bold text-slate-900 mb-2 group-hover:text-teal-700 transition-colors duration-300">
                {{ benefit.title }}
              </h3>
              <p class="text-slate-600 leading-relaxed text-sm md:text-base">
                {{ benefit.description }}
              </p>
            </div>

            <!-- Footer Indicator (Subtle Premium Touch) -->
            <div class="mt-6 pt-3 border-t border-slate-50 flex items-center justify-between text-slate-400 group-hover:text-teal-500 transition-colors duration-300">
              <span class="text-[8px] font-black uppercase tracking-widest">Diferencial Elite</span>
              <Icon name="ph:arrow-right-bold" size="10" class="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
            </div>
          </div>
        </div>

        <!-- Right Side: Sticky Trust Card (5/12) -->
        <div class="lg:w-5/12 w-full ">
          <div class="lg:sticky lg:top-32">
            <div v-animate-on-scroll="'300ms'" class="relative group perspective-1000">
              <!-- Decorative Shadow Card -->
              <div class="absolute inset-0 bg-teal-600/5 rounded-[3rem] rotate-3 scale-[1.03] group-hover:rotate-6 transition-transform duration-700" aria-hidden="true"></div>
              
              <!-- Main Premium Card -->
              <div class="relative bg-white p-6 md:p-8 rounded-[2rem] border border-slate-100 shadow-xl overflow-hidden backdrop-blur-sm bg-white/90">
                <!-- Top Decoration -->
                <div class="absolute top-0 right-0 p-5 md:p-6 opacity-10 group-hover:scale-110 transition-transform duration-700">
                  <Icon name="ph:shield-heart-fill" size="48" class="md:hidden text-teal-600" />
                  <Icon name="ph:shield-heart-fill" size="64" class="hidden md:block text-teal-600" />
                </div>
  
                <div class="relative z-10">
                  <div class="w-12 h-12 md:w-14 md:h-14 bg-teal-50 rounded-xl flex items-center justify-center mb-5 md:mb-6 border border-teal-100 shadow-inner group-hover:scale-110 transition-transform duration-500">
                    <Icon name="ph:star-fill" size="24" class="md:hidden text-teal-600" />
                    <Icon name="ph:star-fill" size="28" class="hidden md:block text-teal-600" />
                  </div>
  
                  <h3 class="text-xl md:text-2xl font-black text-slate-900 mb-4 md:mb-5 leading-tight">
                    Cuidado que vai além.
                  </h3>
                  
                  <p class="text-base md:text-lg text-slate-500 italic leading-relaxed mb-6 md:mb-8 border-l-4 border-teal-500/20 pl-4 md:pl-6">
                    "O estresse de uma clínica pode mascarar sintomas e traumatizar o pet. Em casa, o diagnóstico é mais preciso e o tratamento muito mais acolhedor."
                  </p>
  
                  <!-- Expert Signature -->
                  <div class="flex items-center gap-4 pt-8 border-t border-slate-100 border-dashed mt-auto">
                    <div class="w-12 h-12 bg-burgundy-100 rounded-full flex items-center justify-center font-black text-burgundy-800 shadow-sm">
                      KF
                    </div>
                    <div>
                      <p class="font-bold text-slate-900">Dra. Kelly Fortes</p>
                      <p class="text-sm font-bold text-teal-600 uppercase tracking-widest">Atendimento Humanizado</p>
                    </div>
                  </div>
                </div>
  
                <!-- Hover Glow -->
                <div class="absolute -bottom-16 -right-16 w-32 h-32 bg-teal-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </section>
</template>

<script setup lang="ts">
import type { ServiceBenefit } from '~/composables/useServices'

defineProps<{
  benefits: ServiceBenefit[]
}>()
</script>

<style scoped>
.perspective-1000 {
  perspective: 1000px;
}
</style>
