<template>
  <section class="py-16 md:py-32 relative" aria-labelledby="includes-title">
    <div class="main-container mx-auto px-6 md:px-12 relative z-10">
      <div class="flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        <!-- Left Column: Content -->
        <div class="lg:w-1/2 w-full flex flex-col justify-center">
          <div v-animate-on-scroll>
            <!-- Badge -->
            <div class="inline-flex items-center gap-2 text-burgundy-800 font-bold bg-burgundy-100/50 px-4 py-2 rounded-full mb-8 backdrop-blur-sm border border-burgundy-200/50">
              <Icon name="ph:list-checks-bold" size="18" aria-hidden="true" />
              Incluso no Serviço
            </div>

            <h2 id="includes-title" class="text-4xl md:text-6xl font-bold font-headline-lg text-tertiary mb-12 leading-tight">
              O que está
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-burgundy-700 to-burgundy-500">incluído</span>.
            </h2>
            
            <p class="text-lg text-on-tertiary-fixed-variant mb-12 leading-relaxed">
              Garantimos um atendimento veterinário domiciliar completo, transparente e de excelência. Confira tudo o que faz parte deste serviço especializado:
            </p>
            
            <ul class="flex flex-col gap-5 mt-4">
              <li v-for="(item, index) in includes" :key="index" class="group flex items-center gap-4">
                <div class="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm border border-burgundy-100 group-hover:bg-burgundy-800 group-hover:text-white transition-all duration-500 shrink-0 group-hover:scale-110 group-hover:rotate-3">
                  <Icon name="ph:check-bold" size="20" class="text-burgundy-800 group-hover:text-white transition-colors" aria-hidden="true" />
                </div>
                <h4 class="font-bold text-tertiary text-lg sm:text-xl group-hover:text-burgundy-800 transition-colors">{{ item }}</h4>
              </li>
            </ul>
          </div>
        </div>
        
        <!-- Right Column: Visual/Sticky -->
        <div class="lg:w-1/2 w-full">
          <div class="lg:sticky lg:top-32">
            <div v-animate-on-scroll="'200ms'" class="relative">
              
              <!-- Premium Visual Card Container -->
              <div class="relative aspect-square lg:aspect-[4/3] group mt-8 lg:mt-0 perspective-1000">
                
                <!-- Decorative Glow Behind Card -->
                <div class="absolute -inset-2 bg-gradient-to-r from-burgundy-500 to-burgundy-500 rounded-[3.5rem] blur-2xl opacity-20 group-hover:opacity-40 transition duration-1000" aria-hidden="true"></div>

                <!-- Inner Layout (with overflow-hidden for backgrounds) -->
                <div class="absolute inset-0 bg-burgundy-800 text-white rounded-[3rem] overflow-hidden shadow-2xl border border-white/10 flex flex-col items-center justify-center transition-transform duration-700 group-hover:scale-[1.02]">
                  <!-- Decorative background inside card -->
                  <div class="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-burgundy-500/10 rounded-full blur-3xl transition-all duration-700 group-hover:bg-burgundy-500/20" aria-hidden="true"></div>
                  <div class="absolute bottom-0 left-0 -mb-16 -ml-16 w-64 h-64 bg-burgundy-500/10 rounded-full blur-3xl transition-all duration-700 group-hover:bg-burgundy-500/20" aria-hidden="true"></div>

                  <div class="relative z-10 w-32 h-32 md:w-40 md:h-40 bg-white/5 backdrop-blur-md rounded-full flex items-center justify-center shadow-inner border border-white/10 mb-8 group-hover:scale-110 transition-all duration-500">
                    <Icon :name="icon" size="80" class="text-white/40 group-hover:text-burgundy-400 transition-colors duration-500 drop-shadow-md" aria-hidden="true" />
                  </div>

                  <div class="relative z-10 text-center px-6">
                     <h3 class="text-2xl font-bold text-white mb-2 font-headline-lg tracking-wide">Atendimento Premium</h3>
                     <p class="text-tertiary-fixed-dim text-sm md:text-base max-w-[250px] mx-auto font-medium">Foco total no conforto e bem-estar do seu pet</p>
                  </div>
                </div>

                <!-- Floating Info Badge -->
                <div class="absolute -bottom-6 -right-2 md:-right-6 md:-bottom-8 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] border border-slate-100 z-20 transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)]">
                  <div class="flex items-center gap-4">
                    <div class="w-12 h-12 bg-burgundy-50 flex items-center justify-center rounded-xl shrink-0 text-burgundy-600">
                      <Icon name="ph:clock-duotone" size="28" aria-hidden="true" />
                    </div>
                    <div>
                      <p class="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Duração Estimada</p>
                      <p class="text-xl font-black text-tertiary">{{ duration }}</p>
                    </div>
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
defineProps<{
  includes: string[]
  icon: string
  duration: string
}>()
</script>
