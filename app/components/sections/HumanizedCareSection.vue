<script setup lang="ts">
const config = useRuntimeConfig()
const baseURL = config.app.baseURL
</script>

<template>
  <section 
    class="py-12 md:py-24 bg-burgundy-50/40 relative overflow-hidden"
    aria-labelledby="care-title"
  >
    <!-- Background Decors -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div class="absolute -right-[10%] top-[10%] w-[30rem] h-[30rem] bg-teal-500/5 rounded-full blur-[120px]"></div>
      <div class="absolute -left-[10%] bottom-[10%] w-[25rem] h-[25rem] bg-burgundy-500/5 rounded-full blur-[120px]"></div>
    </div>

    <div class="main-container mx-auto px-6 md:px-12 relative z-10">
      
      <!-- Section Header -->
      <div v-animate-on-scroll class="text-center max-w-4xl mx-auto mb-12 md:mb-20 flex flex-col items-center">
        <!-- Badge -->
        <div class="inline-flex items-center gap-2 text-burgundy-800 font-bold bg-burgundy-50 px-4 py-2 rounded-full mb-8 backdrop-blur-sm border border-burgundy-100">
          <Icon name="ph:heart-fill" size="18" aria-hidden="true" />
          <span class="text-xs sm:text-sm uppercase tracking-widest">Cuidado Humanizado</span>
        </div>

        <h2 id="care-title" class="text-3xl md:text-5xl font-bold font-headline-lg text-tertiary mb-6 leading-tight">
          Atendimento que <span class="text-teal-700">respeita o tempo</span> do seu pet
        </h2>
        
        <p class="text-lg md:text-xl text-on-tertiary-fixed-variant leading-relaxed max-w-2xl">
          Nossa missão é transformar o cuidado veterinário em um momento de carinho, eliminando gatilhos de estresse.
        </p>
      </div>

      <!-- Bento Grid -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[minmax(200px,auto)]">
        
        <!-- Card 1: Território Seguro (Image + Glassmorphism) -->
        <div 
          v-animate-on-scroll="'100ms'" 
          class="md:col-span-8 relative group rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 min-h-[350px]"
        >
          <NuxtImg 
            alt="Pet calmo em ambiente domiciliar" 
            class="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
            src="/banner_1.jpeg" 
            loading="lazy" 
            format="webp"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
          
          <div class="absolute bottom-0 left-0 p-8 md:p-12 w-full">
            <div class="bg-white/10 backdrop-blur-md border border-white/20 p-6 md:p-8 rounded-[2rem] text-white max-w-xl">
              <h3 class="text-2xl md:text-3xl font-bold mb-4">Território Seguro</h3>
              <p class="text-sm md:text-lg text-white/90 leading-relaxed">
                Ao realizar as consultas no ambiente onde o animal se sente seguro, eliminamos o medo do transporte e da clínica.
              </p>
            </div>
          </div>
        </div>

        <!-- Card 2: Sem Estresse (Icon Card Teal) -->
        <div 
          v-animate-on-scroll="'200ms'" 
          class="md:col-span-4 bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col group relative overflow-hidden"
        >
          <div class="absolute top-0 right-0 w-32 h-32 bg-teal-50/50 rounded-full blur-3xl -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div class="w-14 h-14 bg-teal-50 border border-teal-100 rounded-2xl flex items-center justify-center mb-8 shadow-sm shrink-0 group-hover:bg-teal-700 group-hover:text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
            <Icon name="ph:car-bold" size="28" class="text-teal-700 group-hover:text-white transition-colors" />
          </div>
          
          <h3 class="text-xl font-bold text-tertiary mb-4 group-hover:text-teal-700 transition-colors">Sem Estresse de Transporte</h3>
          <p class="text-on-tertiary-fixed-variant leading-relaxed text-sm md:text-base">
            Esqueça o trânsito e o estresse da caixa de transporte. A Dra. Kelly vai até você.
          </p>
        </div>

        <!-- Card 3: Foco Total (Icon Card Burgundy) -->
        <div 
          v-animate-on-scroll="'100ms'" 
          class="md:col-span-4 bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col group relative overflow-hidden"
        >
          <div class="absolute top-0 right-0 w-32 h-32 bg-burgundy-50/50 rounded-full blur-3xl -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <div class="w-14 h-14 bg-burgundy-50 border border-burgundy-100 rounded-2xl flex items-center justify-center mb-8 shadow-sm shrink-0 group-hover:bg-burgundy-700 group-hover:text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
            <Icon name="ph:target-bold" size="28" class="text-burgundy-700 group-hover:text-white transition-colors" />
          </div>
          
          <h3 class="text-xl font-bold text-tertiary mb-4 group-hover:text-burgundy-700 transition-colors">Foco 100% no Animal</h3>
          <p class="text-on-tertiary-fixed-variant leading-relaxed text-sm md:text-base">
            Sem interrupções e sem pressa. Toda a atenção é dedicada exclusivamente ao seu pet.
          </p>
        </div>

        <!-- Card 4: Vínculo de Confiança (Wide Image + Text) -->
        <div 
          v-animate-on-scroll="'200ms'" 
          class="md:col-span-8 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col lg:flex-row overflow-hidden group"
        >
          <div class="lg:w-1/2 relative h-48 lg:h-auto overflow-hidden">
            <NuxtImg 
              alt="Dra. Kelly Fortes atendendo pet" 
              class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
              src="/banner_2.jpeg" 
              loading="lazy" 
              format="webp"
            />
            <div class="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
          </div>
          
          <div class="lg:w-1/2 p-8 md:p-10 flex flex-col justify-center">
            <div class="flex items-center gap-4 mb-6">
               <div class="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center">
                 <Icon name="ph:clock-bold" size="20" class="text-teal-700" />
               </div>
               <span class="text-sm font-bold text-teal-800 uppercase tracking-widest">Atendimento Dedicado</span>
            </div>
            
            <h3 class="text-2xl font-bold text-tertiary mb-4 group-hover:text-teal-700 transition-colors">Vínculo e Confiança</h3>
            <p class="text-on-tertiary-fixed-variant leading-relaxed text-sm md:text-base">
              Acreditamos que um ambiente familiar ajuda o pet a relaxar, permitindo um diagnóstico muito mais preciso e um tratamento mais eficaz.
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
/* Bento Grid custom aspect ratios if needed */
</style>
