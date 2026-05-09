<template>
  <section v-if="testimonials && testimonials.length > 0" class="py-16 md:py-32 bg-white relative overflow-hidden" aria-labelledby="testimonials-title">
    
    <!-- Subtle Background Decors -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div class="absolute -right-[10%] top-[20%] w-[40rem] h-[40rem] bg-burgundy-500/5 rounded-full blur-[100px]"></div>
      <div class="absolute -left-[10%] bottom-[10%] w-[30rem] h-[30rem] bg-teal-500/5 rounded-full blur-[100px]"></div>
    </div>

    <div class="main-container mx-auto px-6 md:px-12 relative z-10">
      
      <!-- Section Header -->
      <div v-animate-on-scroll class="flex flex-col md:flex-row items-center md:items-end justify-between mb-16 gap-8 text-center md:text-left">
        <div class="max-w-2xl flex flex-col items-center md:items-start">
          <!-- Premium Badge -->
          <div class="inline-flex items-center gap-2 text-burgundy-800 font-bold bg-burgundy-100/50 px-4 py-2 rounded-full mb-6 backdrop-blur-sm border border-burgundy-200/50">
            <Icon name="ph:star-fill" size="18" aria-hidden="true" />
            <span class="text-xs sm:text-sm uppercase tracking-wider">Depoimentos Reais</span>
          </div>

          <h2 id="testimonials-title" class="text-4xl md:text-5xl lg:text-6xl font-black font-headline-lg text-tertiary leading-tight">
            O que dizem sobre <span class="text-transparent bg-clip-text bg-gradient-to-r from-burgundy-700 to-burgundy-500">este serviço</span>
          </h2>
        </div>
        
        <!-- Trust Indicator -->
        <div class="inline-flex items-center gap-3 bg-slate-50 border border-slate-100 px-5 py-3 rounded-2xl shadow-sm text-sm font-bold text-slate-500 shrink-0">
          <Icon name="ph:seal-check-fill" size="24" class="text-teal-600" aria-hidden="true" />
          Avaliações verificadas
        </div>
      </div>

      <!-- Testimonials Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="(t, index) in testimonials" 
          :key="index"
          v-animate-on-scroll="`${(index % 3) * 150}ms`"
          class="group bg-white p-8 md:p-10 rounded-3xl md:rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 flex flex-col justify-between relative overflow-hidden"
        >
          <!-- Hover internal gradient -->
          <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-burgundy-50/50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true"></div>

          <div class="relative z-10">
            <div class="flex gap-1 mb-6">
              <Icon v-for="i in t.rating" :key="i" name="ph:star-fill" class="text-yellow-400 text-lg" aria-hidden="true" />
            </div>
            <p class="text-lg text-tertiary italic leading-relaxed mb-8">
              "{{ t.text }}"
            </p>
          </div>
          
          <div class="flex items-center gap-4 mt-auto relative z-10">
            <div class="w-12 h-12 md:w-14 md:h-14 bg-burgundy-50 rounded-2xl flex items-center justify-center font-bold text-burgundy-700 text-lg md:text-xl border border-burgundy-100 group-hover:bg-burgundy-700 group-hover:text-white transition-colors duration-300">
              {{ t.author.charAt(0) }}
            </div>
            <div>
              <p class="font-bold text-base text-tertiary group-hover:text-burgundy-800 transition-colors duration-300">{{ t.author }}</p>
              <p class="text-sm text-on-tertiary-fixed-variant">Tutor(a) de {{ t.petName }}</p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </section>
</template>

<script setup lang="ts">
import type { ServiceTestimonial } from '~/composables/useServices'

defineProps<{
  testimonials: ServiceTestimonial[]
}>()
</script>
