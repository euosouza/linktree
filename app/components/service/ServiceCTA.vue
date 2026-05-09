<template>
  <section class="py-16 md:py-32 bg-slate-50 relative overflow-hidden">
    <!-- Subtle Background Decors -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div class="absolute top-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
    </div>

    <div class="main-container mx-auto px-6 md:px-12 relative z-10">
      <div v-animate-on-scroll class="group relative rounded-[3rem] overflow-hidden bg-gradient-to-br from-burgundy-800 to-burgundy-950 p-8 md:p-20 lg:p-24 text-center text-white shadow-2xl shadow-burgundy-900/30 border border-burgundy-700/50">
        
        <!-- Decoration -->
        <div class="absolute -top-40 -right-40 w-96 h-96 bg-teal-500/20 rounded-full blur-[100px] group-hover:bg-teal-500/30 transition-colors duration-700" aria-hidden="true"></div>
        <div class="absolute -bottom-40 -left-40 w-96 h-96 bg-burgundy-500/30 rounded-full blur-[100px] group-hover:bg-burgundy-400/40 transition-colors duration-700" aria-hidden="true"></div>
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)] pointer-events-none" aria-hidden="true"></div>
        
        <div class="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          
          <div class="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 bg-white/10 border border-white/20 shadow-inner rounded-3xl mb-10 backdrop-blur-md group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
            <Icon name="ph:calendar-check-fill" size="48" class="text-teal-400 drop-shadow-md group-hover:text-teal-300 transition-colors duration-500" aria-hidden="true" />
          </div>
          
          <h2 class="text-4xl md:text-5xl lg:text-6xl font-black font-headline-lg mb-8 leading-tight">
            {{ ctaTitle || `Pronto para dar o melhor cuidado ao seu pet?` }}
          </h2>
          
          <p class="text-burgundy-100/90 text-lg md:text-xl lg:text-2xl mb-12 leading-relaxed max-w-3xl mx-auto">
            {{ ctaDescription || `Agende hoje mesmo ${serviceName.toLowerCase()} no conforto do seu lar. Atendimento humanizado, profissional e sem estresse.` }}
          </p>
          
          <div class="flex flex-col items-center gap-6 w-full sm:w-auto">
            <a class="relative flex items-center justify-center gap-4 bg-white text-burgundy-900 py-5 px-10 md:px-14 rounded-full font-bold text-lg md:text-xl shadow-xl hover:shadow-2xl hover:bg-slate-50 hover:-translate-y-1 ring-4 ring-white/20 hover:ring-white/40 transition-all duration-300 w-full sm:w-auto"
               :href="`https://wa.me/5531999581716?text=Olá%20Dra.%20Kelly!%20Gostaria%20de%20agendar%20${serviceName}%20para%20meu%20pet`"
               target="_blank" rel="noopener noreferrer">
              <Icon name="ph:whatsapp-logo-fill" size="32" class="text-teal-600" aria-hidden="true" />
              Falar com a Dra. Kelly
            </a>
            
            <div class="flex flex-wrap justify-center gap-6 text-burgundy-200 font-medium text-sm md:text-base mt-4">
              <span class="flex items-center gap-2">
                <Icon name="ph:clock-bold" size="20" aria-hidden="true" /> 
                Resposta rápida
              </span>
              <span class="flex items-center gap-2">
                <Icon name="ph:check-circle-bold" size="20" aria-hidden="true" /> 
                Horários flexíveis
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  serviceName: string
  ctaTitle?: string
  ctaDescription?: string
}>()
</script>
