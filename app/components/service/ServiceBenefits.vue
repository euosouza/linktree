<template>
  <section v-if="benefits && benefits.length > 0" class="py-16 md:py-32 bg-white relative overflow-hidden" aria-labelledby="benefits-title">
    
    <!-- Subtle Background Decors -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div class="absolute -top-24 -right-24 w-96 h-96 bg-burgundy-500/5 rounded-full blur-[100px]"></div>
      <div class="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-teal-500/5 rounded-full blur-[80px]"></div>
    </div>

    <div class="main-container mx-auto px-6 md:px-12 relative z-10">
      
      <!-- Section Header -->
      <div v-animate-on-scroll class="text-center max-w-3xl mx-auto mb-20 flex flex-col items-center">
        <!-- Premium Badge -->
        <div class="inline-flex items-center gap-2 text-burgundy-800 font-bold bg-burgundy-50 px-4 py-2 rounded-full mb-8 backdrop-blur-sm border border-burgundy-100 shadow-sm">
          <Icon name="ph:star-fill" size="18" aria-hidden="true" />
          Diferenciais Exclusivos
        </div>

        <h2 id="benefits-title" class="text-4xl md:text-5xl lg:text-6xl font-black font-headline-lg text-tertiary mb-8 leading-tight">
          Por que escolher este <span class="text-transparent bg-clip-text bg-gradient-to-r from-burgundy-700 to-burgundy-500">serviço em casa?</span>
        </h2>
        
        <p class="text-lg text-on-tertiary-fixed-variant leading-relaxed">
          Oferecemos vantagens exclusivas que garantem o bem-estar do seu pet e a máxima comodidade e tranquilidade para você.
        </p>
      </div>

      <!-- Benefits Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
        <div 
          v-for="(benefit, index) in benefits" 
          :key="index"
          v-animate-on-scroll="`${(index % 3) * 150}ms`"
          class="group bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-teal-900/5 hover:-translate-y-2 hover:border-teal-100 transition-all duration-500 flex flex-col items-start relative overflow-hidden"
        >
          <!-- Hover Background Effect -->
          <div class="absolute inset-0 bg-gradient-to-br from-teal-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true"></div>

          <!-- Icon Container -->
          <div class="relative z-10 w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-8 shadow-sm border border-slate-100 group-hover:bg-teal-600 group-hover:text-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:border-teal-500">
            <Icon :name="benefit.icon" size="32" class="text-teal-700 group-hover:text-white transition-colors duration-300" aria-hidden="true" />
          </div>

          <!-- Text Content -->
          <div class="relative z-10 text-left">
            <h3 class="text-xl md:text-2xl font-bold text-tertiary mb-4 leading-tight group-hover:text-teal-900 transition-colors duration-300">{{ benefit.title }}</h3>
            <p class="text-on-tertiary-fixed-variant leading-relaxed text-base group-hover:text-slate-600 transition-colors duration-300">
              {{ benefit.description }}
            </p>
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
