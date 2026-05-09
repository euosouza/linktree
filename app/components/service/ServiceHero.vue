<template>
  <section class="relative py-16 md:py-24 overflow-hidden bg-burgundy-50">
    <div class="absolute inset-0 mesh-bg opacity-30 pointer-events-none"></div>
    
    <div class="main-container mx-auto px-6 md:px-12 relative z-10">
      <div class="flex flex-col items-center text-center max-w-4xl mx-auto">
        <div v-animate-on-scroll class="inline-flex items-center gap-2 text-teal-700 font-label-md bg-teal-500/10 px-4 py-1.5 rounded-full border border-teal-500/30 mb-8">
          <Icon :name="service.icon" size="18" />
          Serviço Especializado
        </div>
        
        <h1 v-animate-on-scroll="'100ms'" class="text-4xl md:text-6xl font-bold font-headline-lg text-tertiary mb-6 leading-tight">
          {{ service.name }}
        </h1>
        
        <p v-animate-on-scroll="'200ms'" class="text-lg md:text-xl text-on-tertiary-fixed-variant leading-relaxed mb-10">
          {{ service.longDescription }}
        </p>
        
        <div v-animate-on-scroll="'300ms'" class="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a class="group flex items-center justify-center gap-3 bg-burgundy-700 text-white py-4 px-10 rounded-lg font-button text-button shadow-md hover:bg-burgundy-800 hover:shadow-xl hover:shadow-burgundy-800/20 hover:-translate-y-1 transition-all duration-300"
             :href="`https://wa.me/5531999581716?text=Olá%20Dra.%20Kelly!%20Gostaria%20de%20saber%20mais%20sobre%20${service.name}`"
             target="_blank" rel="noopener noreferrer">
            <Icon name="ph:whatsapp-logo-fill" size="24" class="group-hover:rotate-12 transition-transform" />
            Agendar Agora
          </a>
          
          <NuxtLink to="/#servicos" class="flex items-center justify-center gap-2 text-tertiary font-label-md px-10 py-4 border-2 border-tertiary/30 rounded-lg hover:bg-white transition-all">
            Ver outros serviços
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps({
  service: {
    type: Object,
    required: true
  }
})
</script>
