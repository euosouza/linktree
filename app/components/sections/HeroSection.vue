<script setup lang="ts">
const config = useRuntimeConfig()
const baseURL = config.app.baseURL
</script>

<template>
  <section id="home" class="md:scroll-mt-20">
    <div class="py-16 md:py-20 px-6 relative md:overflow-hidden flex flex-col md:flex-row md:items-center"> 
      <div class="absolute inset-0 mesh-bg opacity-50 pointer-events-none hidden md:block"></div>
      <div class="md:main-container md:mx-auto md:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-12 items-center w-full">
        
        <div class="lg:col-span-7 flex flex-col items-center md:items-start text-center md:text-left z-10 space-y-4 md:space-y-8">
          
          <!-- Mobile Profile Image -->
          <div v-animate-on-scroll="'100ms'" class="md:hidden relative w-32 h-32 rounded-full overflow-hidden border-4 border-tertiary-container/20 shadow-sm">
            <img alt="Foto de perfil da Dra. Kelly Fortes" class="w-full h-full object-cover" :src="`${baseURL}avatar.jpeg`" width="128" height="128" fetchpriority="high">
          </div>
 
          <!-- Mobile CRMV Badge -->
          <div v-animate-on-scroll="'200ms'" class="md:hidden inline-flex items-center gap-3 bg-white px-4 py-2.5 rounded-xl shadow-md border border-tertiary-container/20 hover:scale-105 transition-transform">
            <div class="w-9 h-9 bg-teal-50 flex items-center justify-center rounded-lg shrink-0">
              <Icon name="ph:first-aid" size="20" class="text-teal-800" />
            </div>
            <div class="text-left">
              <p class="font-bold text-sm text-tertiary">CRMV 26979</p>
              <p class="text-[11px] text-on-tertiary-fixed-variant font-medium">Registro Profissional Ativo</p>
            </div>
          </div>
 
          <div v-animate-on-scroll="'300ms'" class="inline-flex items-center gap-2 text-teal-700 font-label-md bg-teal-500/10 px-4 py-1.5 md:px-5 md:py-2.5 rounded-full border border-teal-500/30">
            <Icon name="ph:seal-check-fill" size="18" />
            Cuidado Veterinário Domiciliar
          </div>
          
          <h1 v-animate-on-scroll="'400ms'" class="font-bold text-2xl md:text-5xl lg:text-7xl font-headline-lg text-on-background md:leading-[1.1]">
            A Dra. Kelly Fortes <span class="md:text-burgundy-800">vai até a sua Casa</span>
          </h1>
          
          <p v-animate-on-scroll="'500ms'" class="text-sm md:text-body-lg font-body-lg text-on-tertiary-fixed-variant leading-snug md:leading-normal md:max-w-[550px] mt-2 md:mt-0">
            Ofereço atendimento veterinário profissional no conforto e segurança do seu lar, garantindo uma experiência livre de estresse para o seu pet e total praticidade para você.
          </p>
 
          <div v-animate-on-scroll="'600ms'" class="flex flex-col sm:flex-row gap-3 w-full sm:w-auto mt-2">
            <!-- CTA Button — WhatsApp -->
            <a class="group flex items-center justify-center gap-3 bg-burgundy-700 text-white py-4 px-8 rounded-lg font-button text-button shadow-md hover:bg-burgundy-800 hover:shadow-xl hover:shadow-burgundy-800/20 hover:-translate-y-1 active:scale-95 active:shadow-md transition-all duration-300"
               href="https://wa.me/5531999581716?text=Olá%2C%20Dra.%20Kelly!%20Gostaria%20de%20agendar%20um%20atendimento%20domiciliar%20para%20o%20meu%20pet%20"
               target="_blank" rel="noopener noreferrer">
              <Icon name="ph:whatsapp-logo-fill" size="24" class="transition-transform duration-300 group-hover:rotate-12" />
              Agendar Atendimento
            </a>
            <!-- Social Button — Instagram -->
            <a class="flex items-center justify-center gap-2 text-tertiary font-label-md px-8 py-4 border-2 border-tertiary/30 rounded-lg hover:bg-tertiary/5 hover:border-tertiary transition-all"
               href="https://instagram.com/kellyfortes.vet"
               target="_blank" rel="noopener noreferrer">  
               <Icon name="ph:instagram-logo" size="24" />
              Acompanha no Instagram
            </a>
          </div>
        </div>
        
        <!-- Desktop Asymmetrical Image -->
        <div v-animate-on-scroll="'700ms'" class="lg:col-span-5 relative hidden md:block">
          <div class="relative w-full aspect-square md:max-w-md mx-auto">
            <div class="absolute inset-0 bg-burgundy-800/10 rounded-[30% 70% 70% 30% / 30% 30% 70% 70%] animate-[pulse_8s_infinite]"></div>
            <div class="relative w-full h-full rounded-[30% 70% 70% 30% / 30% 30% 70% 70%] overflow-hidden border-8 border-white shadow-2xl z-10">
              <img alt="Dra. Kelly Fortes realizando um atendimento veterinário carinhoso" class="w-full h-full object-cover transition-transform duration-700 hover:scale-105" :src="`${baseURL}avatar.jpeg`" width="600" height="600" fetchpriority="high">
            </div>
            <div class="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl border border-tertiary-container/20 z-20 hover:scale-105 transition-transform animate-float">
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 md:w-20 md:h-20 bg-teal-100 flex items-center justify-center rounded-lg md:rounded-[1.5rem] shrink-0 group-hover:scale-110 transition-transform">
                  <Icon name="ph:first-aid" class="text-teal-800 text-2xl md:text-4xl" />
                </div>
                <div>
                  <p class="font-bold text-base">CRMV 26979</p>
                  <p class="text-xs text-on-tertiary-fixed-variant font-medium">Registro Profissional Ativo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
