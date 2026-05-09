<template>
  <section class="py-16 md:py-32 bg-slate-50 relative overflow-hidden border-t border-slate-200">
    
    <!-- Subtle Background Decors -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div class="absolute -right-[10%] top-[20%] w-[30rem] h-[30rem] bg-teal-500/5 rounded-full blur-[100px]"></div>
    </div>

    <div class="main-container mx-auto px-6 md:px-12 relative z-10">
      
      <div class="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 md:mb-16 gap-6">
        <div v-animate-on-scroll>
          <div class="inline-flex items-center gap-2 text-burgundy-800 font-bold bg-burgundy-100/50 px-4 py-2 rounded-full mb-6 backdrop-blur-sm border border-burgundy-200/50">
            <Icon name="ph:squares-four-bold" size="18" aria-hidden="true" />
            <span class="text-xs sm:text-sm uppercase tracking-wider">Explore mais</span>
          </div>
          
          <h2 class="text-4xl md:text-5xl lg:text-6xl font-black font-headline-lg text-tertiary leading-tight">
            Outros <span class="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-teal-500">Serviços</span>
          </h2>
        </div>
        
        <NuxtLink v-animate-on-scroll="'100ms'" to="/#servicos" class="inline-flex items-center gap-2 bg-white border border-slate-200 px-6 py-3 rounded-full text-sm font-bold text-tertiary hover:bg-burgundy-800 hover:text-white hover:border-burgundy-800 transition-colors duration-300 group shadow-sm shrink-0">
          Ver todos os serviços
          <Icon name="ph:arrow-right-bold" class="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
        </NuxtLink>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        <NuxtLink 
          v-for="(service, index) in relatedServices" 
          :key="service.slug" 
          :to="`/servicos/${service.slug}`"
          v-animate-on-scroll="`${(index % 3) * 150}ms`"
          class="group bg-white p-8 md:p-10 rounded-3xl md:rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-teal-100 transition-all duration-500 relative overflow-hidden flex flex-col h-full"
        >
          <!-- Hover Glow -->
          <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal-50/50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true"></div>

          <div class="relative z-10 flex flex-col h-full">
            <div class="w-16 h-16 bg-slate-50 border border-slate-100 shadow-sm flex items-center justify-center rounded-2xl mb-8 group-hover:bg-teal-600 group-hover:border-teal-600 transition-colors duration-300">
              <Icon :name="service.icon" size="32" class="text-teal-600 group-hover:text-white transition-colors duration-300" aria-hidden="true" />
            </div>
            
            <h3 class="text-2xl font-bold text-tertiary mb-4 group-hover:text-teal-800 transition-colors duration-300">{{ service.name }}</h3>
            
            <p class="text-base text-on-tertiary-fixed-variant line-clamp-2 mb-8 leading-relaxed flex-1">
              {{ service.shortDescription }}
            </p>
            
            <div class="flex items-center gap-2 font-bold text-teal-700 text-sm tracking-wide mt-auto group-hover:text-burgundy-800 transition-colors duration-300 uppercase">
              Saiba mais
              <Icon name="ph:arrow-right-bold" class="group-hover:translate-x-2 transition-transform duration-300" aria-hidden="true" />
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { services } = useServices()
const props = defineProps<{
  currentSlug: string
}>()

const relatedServices = computed(() => {
  return services.filter(s => s.slug !== props.currentSlug).slice(0, 3)
})
</script>
