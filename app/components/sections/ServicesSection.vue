<script setup lang="ts">
const { services } = useServices()
</script>

<template>
  <section class="bg-on-tertiary-container/5 md:scroll-mt-20" id="servicos">
    <div class="py-16 md:py-20 px-6 pt-8 md:main-container md:mx-auto md:px-8 lg:px-12 space-y-4 md:space-y-0">
      <div v-animate-on-scroll class="md:max-w-4xl mx-auto mb-12 flex flex-col items-center">
        <div class="inline-flex items-center gap-2 text-teal-700 font-label-md bg-teal-500/10 px-4 py-1.5 rounded-full border border-teal-500/30 mb-8">
          <Icon name="ph:first-aid" size="18" />
          O que oferecemos
        </div>
        <h2 class="text-headline-md md:text-4xl font-headline-md md:font-headline-lg text-tertiary mb-3 md:mb-6 text-center">
          Nossos Serviços Especializados
        </h2>
        <p class="text-sm md:text-lg text-on-tertiary-fixed-variant text-center">
          Soluções completas e preventivas para manter a saúde do seu animal de estimação sempre em dia, sem que ele precise enfrentar o medo de uma clínica tradicional.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-8 mt-4 md:mt-0">
        <NuxtLink 
          v-for="(service, index) in services" 
          :key="service.slug"
          :to="`/servicos/${service.slug}`"
          v-animate-on-scroll="`${index * 100}ms`" 
          class="group bg-white p-5 md:p-12 rounded-xl md:rounded-[2.5rem] border border-tertiary-container/20 shadow-[0px_4px_20px_rgba(106,0,57,0.05)] md:shadow-sm md:hover:shadow-xl md:hover:-translate-y-2 transition-all duration-300 flex md:flex-col items-start gap-4 md:gap-0"
        >
          <div class="w-12 h-12 md:w-20 md:h-20 bg-teal-100 flex items-center justify-center rounded-lg md:rounded-[1.5rem] shrink-0 md:mb-8 group-hover:scale-110 transition-transform">
            <Icon :name="service.icon" class="text-teal-800 text-2xl md:text-4xl" />
          </div>
          <div class="flex-1">
            <h3 class="font-headline-md text-body-lg font-semibold md:text-2xl text-tertiary md:mb-4">{{ service.name }}</h3>
            <p class="text-on-tertiary-fixed-variant text-sm md:text-body-md mt-1 md:mt-0 leading-relaxed md:leading-relaxed line-clamp-2 md:line-clamp-none">{{ service.shortDescription }}</p>
            
            <div class="mt-4 md:mt-6 flex items-center gap-2 text-burgundy-800 font-bold text-sm md:opacity-0 md:group-hover:opacity-100 transition-all transform md:translate-x-[-10px] md:group-hover:translate-x-0">
              Ver detalhes <Icon name="ph:arrow-right-bold" />
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>


