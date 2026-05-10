<template>
  <section v-if="steps && steps.length" class="py-12 md:py-32 bg-white relative overflow-hidden" aria-labelledby="steps-title">
    
    <!-- Premium Background Decors (Asymmetrical Orbs) -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div class="absolute -right-[10%] top-[10%] w-[40rem] h-[40rem] bg-teal-500/5 rounded-full blur-[150px]"></div>
      <div class="absolute -left-[10%] bottom-[10%] w-[35rem] h-[35rem] bg-burgundy-500/5 rounded-full blur-[150px]"></div>
    </div>

    <div class="main-container mx-auto px-6 md:px-12 relative z-10">
      
      <!-- Section Header (Standardized Pattern) -->
      <div v-animate-on-scroll class="text-center max-w-4xl mx-auto mb-16 md:mb-24 flex flex-col items-center">
        <!-- Premium Badge -->
        <div class="inline-flex items-center gap-2 text-teal-800 font-bold bg-teal-50 px-4 py-2 rounded-full mb-8 backdrop-blur-sm border border-teal-100 shadow-sm">
          <Icon name="ph:path-fill" size="18" aria-hidden="true" class="text-teal-600" />
          <span class="text-xs sm:text-sm uppercase tracking-widest font-black">Jornada do Cuidado</span>
        </div>

        <h2 id="steps-title" class="text-3xl md:text-5xl lg:text-6xl font-black font-headline-lg text-slate-900 mb-8 leading-tight tracking-tight">
          Como funciona o nosso <span class="text-teal-600">Atendimento</span>
        </h2>
        
        <p class="text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed">
          Um processo transparente e acolhedor. Arraste para o lado e acompanhe cada etapa da nossa jornada especializada.
        </p>
      </div>
      
      <!-- Horizontal Snap Deck Experience -->
      <div class="relative -mx-6 md:-mx-12 lg:-mx-20">
        
        <!-- Horizontal Scroll Container -->
        <div class="flex overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory gap-6 md:gap-10 px-6 md:px-12 lg:px-20 pb-16 pt-4">
          <div 
            v-for="(step, index) in steps" 
            :key="index" 
            v-animate-on-scroll="`${index * 100}ms`"
            class="snap-center shrink-0 w-[85%] sm:w-[60%] lg:w-[32%] group"
          >
            <div class="h-full bg-white p-8 md:p-12 rounded-[3rem] md:rounded-[4rem] border border-slate-100 shadow-xl group-hover:shadow-2xl hover:-translate-y-2 transition-all duration-700 relative overflow-hidden flex flex-col min-h-[400px] md:min-h-[480px]">
              
              <!-- Artistic Background Number (Massive & Subtle) -->
              <div class="absolute -top-10 -right-10 text-[10rem] md:text-[14rem] font-black text-slate-50/80 group-hover:text-teal-50 transition-colors duration-700 pointer-events-none select-none italic">
                {{ index + 1 }}
              </div>

              <div class="relative z-10 mt-auto">
                <!-- Premium Icon Container -->
                <div class="w-14 h-14 md:w-16 md:h-16 rounded-2xl md:rounded-[1.5rem] bg-teal-50 border border-teal-100 flex items-center justify-center mb-8 shadow-sm group-hover:bg-teal-600 group-hover:text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 text-teal-600">
                  <Icon :name="getStepIcon(index)" size="28" aria-hidden="true" />
                </div>

                <!-- Step Indicator Pill -->
                <div class="inline-flex items-center gap-2 mb-4">
                  <span class="w-2 h-2 rounded-full bg-teal-500"></span>
                  <span class="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-teal-600 transition-colors">Etapa {{ index + 1 }}</span>
                </div>

                <h3 class="text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight group-hover:text-teal-700 transition-colors duration-300">
                  {{ step.title }}
                </h3>
                <p class="text-base md:text-lg text-slate-500 leading-relaxed">
                  {{ step.description }}
                </p>
              </div>

              <!-- Decorative Shadow Accent -->
              <div class="absolute -bottom-10 -left-10 w-40 h-40 bg-teal-500/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>
          </div>
        </div>

        <!-- Navigation Hint (Desktop only) -->
        <div v-animate-on-scroll="'500ms'" class="hidden lg:flex absolute bottom-0 left-1/2 -translate-x-1/2 items-center gap-6 text-slate-300 font-bold uppercase tracking-[0.2em] text-[10px]">
          <div class="w-16 h-px bg-gradient-to-r from-transparent to-slate-200"></div>
          Arraste para navegar
          <div class="w-16 h-px bg-gradient-to-l from-transparent to-slate-200"></div>
        </div>
      </div>
      
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  steps: {
    title: string
    description: string
  }[]
}>()

/**
 * Returns a contextual icon for each step
 */
const getStepIcon = (index: number): string => {
  const icons = [
    'ph:calendar-check-fill',
    'ph:house-line-fill',
    'ph:stethoscope-fill',
    'ph:heart-break-fill',
    'ph:first-aid-kit-fill',
    'ph:check-circle-fill'
  ]
  return icons[index % icons.length] || 'ph:info-fill'
}
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
