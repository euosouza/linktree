<script setup>
const config = useRuntimeConfig()
const baseURL = config.app.baseURL
</script>

<template>
  <section class="bg-burgundy-800">
    <div class="md:main-container mx-auto px-6 md:px-0 py-16 md:py-20 md:px-8 lg:px-12 mt-0">
      <div v-animate-on-scroll class="md:max-w-[90%] mx-auto rounded-xl md:rounded-[3rem] overflow-hidden shadow-lg md:shadow-2xl flex flex-col lg:flex-row bg-white group">
        <div  class="lg:w-1/2 relative md:min-h-[400px] overflow-hidden">
          <img alt="Dra. Kelly Fortes atendendo um cachorro no sofá de casa, ambiente tranquilo e sem estresse" class="w-full h-48 md:absolute md:inset-0 md:h-full object-cover transition-transform duration-1000 group-hover:scale-110" :src="`${baseURL}banner_1.jpeg`" loading="lazy" decoding="async">
          <div class="hidden md:block absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        </div>
        <div class="lg:w-1/2 p-5 md:p-12 lg:p-14 flex flex-col justify-center space-y-6 md:space-y-8 ">
          <h2 v-animate-on-scroll="'100ms'" class="text-headline-md md:text-4xl font-headline-md md:font-headline-lg text-tertiary leading-tight">Atendimento que respeita o tempo do seu pet</h2>
          <p v-animate-on-scroll="'200ms'" class="text-body-md md:text-lg text-on-tertiary-fixed-variant leading-relaxed">
            Nossa missão é transformar o cuidado veterinário em um momento de carinho. Ao realizar as consultas no território do animal, eliminamos os gatilhos de estresse, permitindo diagnósticos mais precisos e tratamentos mais eficazes.
          </p>
          <div v-animate-on-scroll="'250ms'" class="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-6 mt-4 md:mt-0">
            <div class="flex items-start gap-3">
              <Icon name="ph:check-circle" class="text-teal-500 p-1 rounded-full shadow-sm" size="24" />
              <span class="text-tertiary font-medium text-sm md:text-base">Sem estresse de transporte</span>
            </div>
            <div class="flex items-start gap-3">
              <Icon name="ph:check-circle" class="text-teal-500 p-1 rounded-full shadow-sm" size="24" />
              <span class="text-tertiary font-medium text-sm md:text-base">Horários flexíveis</span>
            </div>
            <div class="flex items-start gap-3">
              <Icon name="ph:check-circle" class="text-teal-500 p-1 rounded-full shadow-sm" size="24" />
              <span class="text-tertiary font-medium text-sm md:text-base">Ambiente familiar</span>
            </div>
            <div class="flex items-start gap-3">
              <Icon name="ph:check-circle" class="text-teal-500 p-1 rounded-full shadow-sm" size="24" />
              <span class="text-tertiary font-medium text-sm md:text-base">Foco 100% no seu animal</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
