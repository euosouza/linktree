<template>
  <section class="py-16 md:py-32 bg-slate-50 relative overflow-hidden" aria-labelledby="steps-title">
    
    <!-- Subtle Background Decors -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div class="absolute top-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      <div class="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] bg-teal-500/5 rounded-full blur-[120px]"></div>
    </div>

    <div class="main-container mx-auto px-6 md:px-12 relative z-10">
      
      <!-- Section Header -->
      <div v-animate-on-scroll class="text-center max-w-3xl mx-auto mb-20 flex flex-col items-center">
        <!-- Premium Badge -->
        <div class="inline-flex items-center gap-2 text-burgundy-800 font-bold bg-burgundy-100/50 px-4 py-2 rounded-full mb-8 backdrop-blur-sm border border-burgundy-200/50">
          <Icon name="ph:path-bold" size="18" aria-hidden="true" />
          Passo a Passo
        </div>

        <h2 id="steps-title" class="text-4xl md:text-5xl lg:text-6xl font-black font-headline-lg text-tertiary mb-8 leading-tight">
          Como funciona o
          <span class="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-burgundy-700 to-burgundy-500">atendimento</span>
        </h2>
        
        <p class="text-lg text-on-tertiary-fixed-variant leading-relaxed">
          O processo do nosso atendimento domiciliar é simples, transparente e desenhado inteiramente para o seu conforto e o do seu pet.
        </p>
      </div>
      
      <!-- Steps Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative mt-12">
        
        <!-- Connecting Line (Desktop only) -->
        <div class="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-transparent via-teal-200 to-transparent -z-10" aria-hidden="true"></div>
        
        <div 
          v-for="(step, index) in steps" 
          :key="index" 
          v-animate-on-scroll="`${index * 150}ms`" 
          class="group flex flex-col items-center text-center relative"
        >
          <!-- Step Number Bubble -->
          <div class="relative mb-8">
            <!-- Glow behind bubble on hover -->
            <div class="absolute inset-0 bg-teal-400 blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-full" aria-hidden="true"></div>
            
            <div class="w-20 h-20 rounded-full bg-white border border-slate-100 shadow-xl shadow-slate-200/50 flex items-center justify-center text-3xl font-black text-teal-700 group-hover:-translate-y-2 group-hover:bg-gradient-to-br group-hover:from-teal-700 group-hover:to-teal-900 group-hover:text-white group-hover:shadow-2xl group-hover:shadow-teal-900/20 group-hover:border-transparent transition-all duration-500 relative z-10">
              {{ index + 1 }}
            </div>
          </div>
          
          <!-- Step Text -->
          <h3 class="text-xl md:text-2xl font-bold text-tertiary mb-4 leading-tight group-hover:text-teal-800 transition-colors duration-300">{{ step.title }}</h3>
          <p class="text-base text-on-tertiary-fixed-variant leading-relaxed group-hover:text-slate-600 transition-colors duration-300 px-2 sm:px-4 lg:px-0">
            {{ step.description }}
          </p>
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
</script>
