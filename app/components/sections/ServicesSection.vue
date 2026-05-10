<script setup lang="ts">
const { services } = useServices()
</script>

<template>
  <section 
    class="py-12 md:py-24 relative bg-slate-50 md:scroll-mt-20" 
    id="servicos"
    aria-labelledby="services-title"
  >
    <!-- Subtle Background Decors -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div class="absolute -right-[10%] top-[15%] w-[30rem] h-[30rem] bg-teal-500/5 rounded-full blur-[120px]"></div>
      <div class="absolute -left-[10%] bottom-[5%] w-[25rem] h-[25rem] bg-burgundy-500/5 rounded-full blur-[120px]"></div>
    </div>

    <div class="main-container mx-auto px-6 md:px-12 relative z-10">
      
      <!-- Section Header -->
      <div v-animate-on-scroll class="text-center max-w-4xl mx-auto mb-16 md:mb-24 flex flex-col items-center">
        <!-- Premium Badge -->
        <div class="inline-flex items-center gap-2 text-teal-800 font-bold bg-teal-50 px-4 py-2 rounded-full mb-8 backdrop-blur-sm border border-teal-100">
          <Icon name="ph:first-aid-fill" size="18" aria-hidden="true" />
          <span class="text-xs sm:text-sm uppercase tracking-widest">O que oferecemos</span>
        </div>

        <h2 id="services-title" class="text-3xl md:text-5xl font-bold font-headline-lg text-tertiary mb-10 leading-tight">
          Nossos Serviços <span class="text-teal-700">Especializados</span>
        </h2>
        
        <p class="text-lg md:text-xl text-on-tertiary-fixed-variant leading-relaxed max-w-2xl">
          Soluções completas e preventivas para manter a saúde do seu animal de estimação sempre em dia, com o conforto do atendimento domiciliar.
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <NuxtLink 
          v-for="(service, index) in services" 
          :key="service.slug"
          :to="`/servicos/${service.slug}`"
          v-animate-on-scroll="`${index * 50}ms`" 
          class="group bg-white p-6 sm:p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden flex flex-col h-full"
        >
          <!-- Hover Glow -->
          <div class="absolute top-0 right-0 w-32 h-32 bg-teal-50/50 rounded-full blur-3xl -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true"></div>

          <!-- Icon Cell -->
          <div class="w-14 h-14 md:w-20 md:h-20 bg-teal-50 border border-teal-100 rounded-2xl md:rounded-3xl flex items-center justify-center mb-6 md:mb-8 shadow-sm shrink-0 group-hover:bg-teal-700 group-hover:text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
            <Icon :name="service.icon" class="text-teal-700 text-2xl md:text-4xl group-hover:text-white transition-colors duration-500" />
          </div>

          <!-- Content -->
          <div class="flex flex-col flex-1">
            <h3 class="text-lg md:text-2xl font-bold text-tertiary mb-3 md:mb-4 group-hover:text-teal-700 transition-colors duration-300">
              {{ service.name }}
            </h3>
            <p class="text-sm md:text-base text-on-tertiary-fixed-variant leading-relaxed line-clamp-3">
              {{ service.shortDescription }}
            </p>
            
            <!-- Card Footer Decor -->
            <div class="mt-8 pt-6 border-t border-slate-50 flex items-center justify-between text-teal-200 group-hover:text-teal-600 transition-colors duration-300">
              <span class="text-sm font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all duration-500">
                Ver detalhes
              </span>
              <Icon name="ph:arrow-right-bold" class="text-xl transform group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>


