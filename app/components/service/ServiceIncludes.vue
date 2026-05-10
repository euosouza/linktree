<template>
  <section v-if="includes && includes.length > 0" class="py-8 md:py-32 pb-20  relative bg-white" aria-labelledby="includes-title">
    
    <!-- Premium Background Decors (Asymmetrical Orbs) -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div class="absolute -right-[10%] top-[10%] w-[35rem] h-[35rem] bg-burgundy-500/5 rounded-full blur-[120px]"></div>
      <div class="absolute -left-[10%] bottom-[10%] w-[30rem] h-[30rem] bg-teal-500/5 rounded-full blur-[120px]"></div>
    </div>

    <div class="main-container mx-auto px-6 md:px-12 relative z-10">
      <div class="flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        <!-- Left Column: Visual Composition (5/12) -->
        <div class="lg:w-5/12 w-full">
          <div class="lg:sticky lg:top-32">
            <div v-animate-on-scroll="'300ms'" class="relative group perspective-1000">
              
              <!-- Premium Visual Card -->
              <div class="relative h-auto lg:aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 transition-transform duration-700 group-hover:scale-[1.01]">
                
                <!-- Background Image or Stylized Composition (Always Absolute) -->
                <div class="absolute inset-0 bg-gradient-to-br from-burgundy-900 via-burgundy-800 to-slate-900">
                  <!-- Decorative Patterns -->
                  <div class="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-burgundy-500/20 rounded-full blur-3xl animate-pulse" aria-hidden="true"></div>
                  <div class="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl" aria-hidden="true"></div>
                </div>

                <!-- Card Content Overlay (Relative on mobile to push height, Absolute on LG for aspect ratio) -->
                <div class="relative lg:absolute lg:inset-0 flex flex-col items-center justify-center p-10 sm:p-12 lg:p-8 text-center text-white z-10">
                  <div class="relative mb-6 sm:mb-10">
                    <!-- Glass Orb for Icon -->
                    <div class="w-24 h-24 sm:w-32 md:w-40 bg-white/5 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/10 shadow-[inset_0_0_20px_rgba(255,255,255,0.1)] group-hover:scale-110 group-hover:rotate-12 transition-all duration-700">
                      <Icon :name="icon" size="48" class="sm:hidden" aria-hidden="true" />
                      <Icon :name="icon" size="80" class="hidden sm:block" aria-hidden="true" />
                    </div>
                    <!-- Small Floating Accent -->
                    <div class="absolute -top-1 -right-1 w-8 h-8 sm:w-10 sm:h-10 bg-teal-500 rounded-full flex items-center justify-center border-2 sm:border-4 border-burgundy-800 shadow-lg animate-bounce-slow">
                      <Icon name="ph:seal-check-fill" size="16" class="sm:hidden text-white" />
                      <Icon name="ph:seal-check-fill" size="20" class="hidden sm:block text-white" />
                    </div>
                  </div>

                  <h3 class="text-xl sm:text-2xl md:text-3xl font-black mb-3 sm:mb-4 font-headline-lg tracking-tight">Atendimento <br/>Premium DNA</h3>
                  <p class="text-white/70 text-xs sm:text-sm md:text-base max-w-[280px] font-medium leading-relaxed mb-12 lg:mb-0">
                    Cada detalhe foi pensado para garantir uma experiência livre de estresse e clinicamente superior.
                  </p>
                </div>

                <!-- Bottom Glass Bar -->
                <div class="absolute bottom-0 inset-x-0 bg-white/5 backdrop-blur-md border-t border-white/10 p-4 sm:p-6 flex justify-around z-20">
                  <div class="flex flex-col items-center">
                    <p class="text-[8px] sm:text-[10px] uppercase tracking-widest text-white/40 font-bold mb-0.5 sm:mb-1">Qualidade</p>
                    <p class="text-sm sm:text-lg font-black text-white">Hospitalar</p>
                  </div>
                  <div class="w-px h-6 sm:h-8 bg-white/10 self-center"></div>
                  <div class="flex flex-col items-center">
                    <p class="text-[8px] sm:text-[10px] uppercase tracking-widest text-white/40 font-bold mb-0.5 sm:mb-1">Foco</p>
                    <p class="text-sm sm:text-lg font-black text-white">Personalizado</p>
                  </div>
                </div>
              </div>

              <!-- Floating Info Badge 1: Duration -->
              <div class="absolute -bottom-16 -left-4 md:-bottom-20 md:-left-12 bg-white p-3 md:p-5 rounded-xl md:rounded-2xl shadow-2xl border border-slate-100 z-20 group-hover:-translate-y-2 transition-transform duration-500 animate-float scale-75 sm:scale-100 origin-top-left">
                <div class="flex items-center gap-3 md:gap-4">
                  <div class="w-10 h-10 md:w-12 md:h-12 bg-burgundy-50 flex items-center justify-center rounded-lg md:rounded-xl shrink-0 text-burgundy-600 shadow-inner">
                    <Icon name="ph:clock-duotone" size="24" class="md:hidden" aria-hidden="true" />
                    <Icon name="ph:clock-duotone" size="28" class="hidden md:block" aria-hidden="true" />
                  </div>
                  <div>
                    <p class="text-[8px] md:text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-0.5">Duração Média</p>
                    <p class="text-lg md:text-xl font-black text-slate-800 leading-none">{{ duration }}</p>
                  </div>
                </div>
              </div>

              <!-- Floating Info Badge 2: Digital Care -->
              <div class="absolute top-1/2 -right-8 md:-right-12 -translate-y-1/2 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-2xl border border-slate-100 z-20 group-hover:translate-x-2 transition-transform duration-500 hidden sm:block">
                <div class="flex flex-col items-center gap-2">
                  <div class="w-10 h-10 bg-teal-50 flex items-center justify-center rounded-lg text-teal-600">
                    <Icon name="ph:file-text-duotone" size="24" />
                  </div>
                  <p class="text-[9px] font-black uppercase tracking-widest text-slate-500 text-center">Receita <br/>Digital</p>
                </div>
              </div>

            </div>
          </div>
        </div>
        
        <!-- Right Column: Content (7/12) -->
        <div class="lg:w-7/12 w-full mt-12 md:mt-0">
          <div v-animate-on-scroll>
            <!-- Premium Badge -->
            <div class="inline-flex items-center gap-2 text-burgundy-800 font-bold bg-burgundy-50 px-4 py-2 rounded-full mb-8 backdrop-blur-sm border border-burgundy-100 shadow-sm">
              <Icon name="ph:check-circle-fill" size="18" aria-hidden="true" class="text-burgundy-600" />
              <span class="text-xs sm:text-sm uppercase tracking-widest font-black">Check-up Completo</span>
            </div>

            <h2 id="includes-title" class="text-3xl md:text-5xl lg:text-6xl font-black font-headline-lg text-slate-900 mb-8 leading-tight tracking-tight">
              O que faz parte da <br/>
              <span class="text-burgundy-700">Experiência VIP</span>
            </h2>
            
            <p class="text-lg md:text-xl text-slate-600 mb-12 leading-relaxed max-w-2xl">
              Garantimos um atendimento transparente e detalhado, onde cada etapa é planejada para o máximo bem-estar do seu pet.
            </p>
            
            <!-- Features List -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              <div 
                v-for="(item, index) in includes" 
                :key="index" 
                v-animate-on-scroll="`${index * 100}ms`"
                class="group flex items-center gap-4 bg-slate-50/50 p-4 rounded-2xl border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-burgundy-900/5 hover:border-burgundy-100 transition-all duration-500"
              >
                <div class="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm border border-slate-100 group-hover:bg-burgundy-600 group-hover:text-white transition-all duration-500 shrink-0 group-hover:scale-110 group-hover:rotate-3">
                  <Icon name="ph:check-bold" size="18" class="text-burgundy-600 group-hover:text-white transition-colors" aria-hidden="true" />
                </div>
                <span class="font-bold text-slate-800 text-base md:text-lg group-hover:text-burgundy-900 transition-colors">{{ item }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  includes: string[]
  icon: string
  duration: string
}>()
</script>

<style scoped>
.perspective-1000 {
  perspective: 1000px;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.animate-float {
  animation: float 5s ease-in-out infinite;
}

@keyframes bounce-slow {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}

.animate-bounce-slow {
  animation: bounce-slow 3s ease-in-out infinite;
}
</style>
