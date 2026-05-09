<template>
  <section class="py-20 px-6">
    <div class="main-container mx-auto">
      <div v-animate-on-scroll class="relative rounded-[3rem] overflow-hidden bg-burgundy-800 p-8 md:p-20 text-center text-white">
        <!-- Decoration -->
        <div class="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
        <div class="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-32 -mb-32"></div>
        
        <div class="relative z-10 max-w-3xl mx-auto">
          <Icon name="ph:calendar-check-fill" size="64" class="mb-8 text-burgundy-200" />
          <h2 class="text-3xl md:text-5xl font-bold font-headline-lg mb-6 leading-tight">Pronto para dar o melhor cuidado ao seu pet?</h2>
          <p class="text-burgundy-100/80 text-lg md:text-xl mb-12">
            Agende hoje mesmo {{ serviceName.toLowerCase() }} no conforto do seu lar. Atendimento humanizado, profissional e sem estresse.
          </p>
          
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a class="group flex items-center justify-center gap-3 bg-white text-burgundy-800 py-5 px-12 rounded-2xl font-bold text-lg shadow-xl hover:bg-burgundy-50 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
               :href="`https://wa.me/5531999581716?text=Olá%20Dra.%20Kelly!%20Gostaria%20de%20agendar%20${serviceName}%20para%20meu%20pet`"
               target="_blank" rel="noopener noreferrer">
              <Icon name="ph:whatsapp-logo-fill" size="28" />
              Agendar via WhatsApp
            </a>
            
            <p class="text-sm font-medium text-burgundy-200">
              <Icon name="ph:clock" class="inline mr-1" /> Disponível esta semana
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps({
  serviceName: {
    type: String,
    required: true
  }
})
</script>
