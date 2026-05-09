<template>
  <section class="py-16 md:py-24 bg-gradient-to-br from-burgundy-900 to-burgundy-800 text-white relative overflow-hidden" aria-labelledby="animals-title">
    
    <!-- Subtle Background Decors -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div class="absolute -right-[10%] -top-[50%] w-[40rem] h-[40rem] bg-teal-500/10 rounded-full blur-[100px]"></div>
      <div class="absolute -left-[10%] -bottom-[50%] w-[40rem] h-[40rem] bg-burgundy-500/20 rounded-full blur-[100px]"></div>
    </div>

    <div class="main-container mx-auto px-6 md:px-12 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
      
      <!-- Text Content -->
      <div v-animate-on-scroll class="lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start">
        <!-- Badge -->
        <div class="inline-flex items-center gap-2 text-white font-bold bg-white/10 px-4 py-2 rounded-full mb-6 backdrop-blur-sm border border-white/20">
          <Icon name="ph:paw-print-fill" size="18" aria-hidden="true" />
          <span class="text-xs sm:text-sm uppercase tracking-wider">Espécies Atendidas</span>
        </div>

        <h2 id="animals-title" class="text-4xl md:text-5xl lg:text-6xl font-black font-headline-lg mb-6 leading-tight">
          Para quais <span class="text-teal-400">animais?</span>
        </h2>
        
        <p class="text-lg md:text-xl text-burgundy-100/90 leading-relaxed max-w-lg mx-auto lg:mx-0">
          Atendemos diversas espécies com o mesmo nível de excelência, carinho e respeito que elas merecem.
        </p>
      </div>
      
      <!-- Animals List -->
      <div class="lg:w-1/2 flex flex-wrap justify-center lg:justify-end gap-4">
        <div 
          v-for="(animal, index) in animals" 
          :key="animal" 
          v-animate-on-scroll="`${index * 100}ms`" 
          class="group bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/30 hover:bg-white/15 px-6 py-3 rounded-full flex items-center gap-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-default"
        >
          <Icon name="ph:paw-print-fill" size="20" class="text-teal-400 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
          <span class="font-bold tracking-wide text-base md:text-lg">{{ animal }}</span>
        </div>
      </div>
      
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  animals: string[]
}>()
</script>
