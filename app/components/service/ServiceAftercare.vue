<template>
  <section class="py-16 md:py-32 bg-slate-50 relative overflow-hidden" aria-labelledby="aftercare-title">
    
    <!-- Subtle Background Decors -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div class="absolute -right-20 -bottom-20 w-96 h-96 bg-teal-500/5 rounded-full blur-[100px]"></div>
    </div>

    <div class="main-container mx-auto px-6 md:px-12 relative z-10">
      
      <div v-animate-on-scroll class="group relative bg-white rounded-[3rem] p-8 md:p-16 flex flex-col lg:flex-row gap-12 lg:gap-16 items-center shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] overflow-hidden border border-teal-100/50">
        
        <!-- Hover Glow inside card -->
        <div class="absolute inset-0 bg-gradient-to-r from-teal-50/0 via-teal-50/50 to-teal-50/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" aria-hidden="true"></div>
        <div class="absolute -left-20 -top-20 w-64 h-64 bg-teal-100/50 rounded-full blur-[80px] group-hover:bg-teal-200/40 transition-colors duration-700" aria-hidden="true"></div>
        
        <!-- Icon Container -->
        <div class="relative z-10 w-24 h-24 md:w-32 md:h-32 bg-teal-50 rounded-3xl flex items-center justify-center shrink-0 shadow-sm border border-teal-100 group-hover:bg-teal-600 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
          <Icon name="ph:heartbeat-fill" size="64" class="text-teal-600 group-hover:text-white transition-colors duration-500" aria-hidden="true" />
        </div>
        
        <!-- Content -->
        <div class="relative z-10 flex-1">
          <div class="inline-flex items-center gap-2 text-teal-800 font-bold bg-teal-100/50 px-4 py-2 rounded-full mb-6 backdrop-blur-sm border border-teal-200/50">
            <Icon name="ph:info-bold" size="18" aria-hidden="true" />
            <span class="text-xs sm:text-sm uppercase tracking-wider">Orientações</span>
          </div>

          <h2 id="aftercare-title" class="text-3xl md:text-4xl lg:text-5xl font-black font-headline-lg text-tertiary mb-4 leading-tight">
            Cuidados <span class="text-teal-700">Pós-Procedimento</span>
          </h2>
          
          <p class="text-on-tertiary-fixed-variant text-lg leading-relaxed mb-8 max-w-2xl">
            O bem-estar do seu pet continua após a nossa visita. Para uma recuperação tranquila ou manutenção da saúde, siga estas orientações:
          </p>
          
          <div class="relative bg-teal-50/50 p-6 md:p-8 rounded-2xl md:rounded-[2rem] border border-teal-100 text-teal-900 font-medium italic shadow-sm group-hover:bg-white transition-colors duration-500">
            <Icon name="ph:quotes-fill" size="32" class="absolute -top-4 -left-2 text-teal-200" aria-hidden="true" />
            <p class="relative z-10 leading-relaxed text-base md:text-lg">
              "{{ aftercare }}"
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  aftercare: string
}>()
</script>
