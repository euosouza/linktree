<template>
  <section class="py-16 bg-white">
    <div class="main-container mx-auto px-6 md:px-12">
      <div class="text-center mb-16">
        <h2 v-animate-on-scroll class="text-3xl font-bold font-headline-lg text-tertiary mb-4">Como Funciona</h2>
        <p v-animate-on-scroll="'100ms'" class="text-on-tertiary-fixed-variant">O passo a passo do nosso atendimento domiciliar.</p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
        <!-- Connecting Line (Desktop) -->
        <div class="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-burgundy-800/10 -z-10"></div>
        
        <div v-for="(step, index) in steps" :key="index" v-animate-on-scroll="`${index * 100}ms`" class="flex flex-col items-center text-center">
          <div class="w-24 h-24 rounded-full bg-white border-4 border-burgundy-50 shadow-lg flex items-center justify-center text-3xl font-bold text-burgundy-800 mb-6 group-hover:scale-110 transition-transform">
            {{ index + 1 }}
          </div>
          <h3 class="text-xl font-bold text-tertiary mb-3">{{ step.title }}</h3>
          <p class="text-sm text-on-tertiary-fixed-variant leading-relaxed">{{ step.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  steps: {
    type: Array,
    required: true
  }
})
</script>
