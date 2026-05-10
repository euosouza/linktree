<script setup lang="ts">
const config = useRuntimeConfig()
const baseURL = config.app.baseURL
</script>

<template>
  <section id="home" class="relative py-12 md:py-24 bg-white overflow-hidden md:scroll-mt-20" aria-labelledby="hero-title">
    <!-- Background Decors -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div class="absolute -right-[10%] top-[10%] w-[30rem] h-[30rem] bg-burgundy-500/5 rounded-full blur-[120px]"></div>
      <div class="absolute -left-[10%] bottom-[10%] w-[25rem] h-[25rem] bg-teal-500/5 rounded-full blur-[120px]"></div>
    </div>

    <div class="main-container mx-auto px-6 md:px-12 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        <!-- Content Column -->
        <div class="lg:col-span-7 flex flex-col items-center md:items-start text-center md:text-left space-y-6 md:space-y-10">
          
          <!-- Mobile Profile Image (Premium Style) -->
          <div v-animate-on-scroll="'100ms'" class="md:hidden relative group">
            <div class="absolute inset-0 bg-burgundy-600/5 rounded-full rotate-6 scale-105 group-hover:rotate-12 transition-transform duration-500"></div>
            <div class="relative w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-xl z-10">
              <NuxtImg 
                alt="Foto de perfil da Dra. Kelly Fortes" 
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                src="/avatar.jpeg" 
                width="160" 
                height="160" 
                format="webp"
                fetchpriority="high"
              />
            </div>
          </div>
 
          <!-- Badge -->
          <div v-animate-on-scroll="'200ms'" class="inline-flex items-center gap-2 text-teal-800 font-bold bg-teal-50 px-5 py-2.5 rounded-full backdrop-blur-sm border border-teal-100 shadow-sm">
            <Icon name="ph:seal-check-fill" size="18" class="text-teal-600" aria-hidden="true" />
            <span class="text-xs sm:text-sm uppercase tracking-widest">Cuidado Veterinário Domiciliar</span>
          </div>
          
          <!-- Title -->
          <h1 id="hero-title" v-animate-on-scroll="'300ms'" class="font-bold text-3xl md:text-5xl lg:text-7xl font-headline-lg text-tertiary leading-[1.15] md:leading-[1.1]">
            A Dra. Kelly Fortes <span class="text-burgundy-700">vai até a sua Casa</span>
          </h1>
          
          <!-- Description -->
          <p v-animate-on-scroll="'400ms'" class="text-lg md:text-xl text-on-tertiary-fixed-variant leading-relaxed max-w-2xl">
            Ofereço atendimento veterinário profissional no conforto e segurança do seu lar, garantindo uma experiência livre de estresse para o seu pet e total praticidade para você.
          </p>
 
          <!-- CTAs -->
          <div v-animate-on-scroll="'500ms'" class="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4">
            <!-- CTA Button — WhatsApp -->
            <a class="group flex items-center justify-center gap-3 bg-burgundy-700 text-white py-4 px-10 rounded-2xl font-bold shadow-lg hover:bg-burgundy-800 hover:shadow-2xl hover:shadow-burgundy-800/20 hover:-translate-y-1 active:scale-95 transition-all duration-300"
               href="https://wa.me/5531999581716?text=Olá%2C%20Dra.%20Kelly!%20Gostaria%20de%20agendar%20um%20atendimento%20domiciliar%20para%20o%20meu%20pet%20"
               target="_blank" rel="noopener noreferrer">
              <Icon name="ph:whatsapp-logo-fill" size="24" class="transition-transform duration-300 group-hover:rotate-12" />
              Agendar Atendimento
            </a>
            <!-- Social Button — Instagram -->
            <a class="group flex items-center justify-center gap-2 text-tertiary font-bold px-8 py-4 border-2 border-slate-200 rounded-2xl hover:bg-slate-50 hover:border-tertiary/20 transition-all duration-300"
               href="https://instagram.com/kellyfortes.vet"
               target="_blank" rel="noopener noreferrer">  
               <Icon name="ph:instagram-logo" size="24" class="group-hover:scale-110 transition-transform" />
              Ver no Instagram
            </a>
          </div>

          <!-- Mobile CRMV Badge -->
          <div v-animate-on-scroll="'600ms'" class="md:hidden flex items-center gap-4 bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-slate-100 mt-8">
            <div class="w-12 h-12 bg-teal-50 flex items-center justify-center rounded-xl shrink-0 border border-teal-100">
              <Icon name="ph:first-aid-fill" size="24" class="text-teal-700" />
            </div>
            <div class="text-left">
              <p class="font-bold text-tertiary">CRMV 26979</p>
              <p class="text-xs text-on-tertiary-fixed-variant">Registro Profissional Ativo</p>
            </div>
          </div>
        </div>
        
        <!-- Desktop Image Column (Premium Shadow Card) -->
        <div v-animate-on-scroll="'700ms'" class="lg:col-span-5 relative hidden md:block">
          <div class="relative w-full max-w-lg mx-auto group">
            <!-- Decorative Shadow Card -->
            <div class="absolute inset-0 bg-burgundy-600/5 rounded-[4rem] rotate-3 scale-105 group-hover:rotate-6 transition-transform duration-700"></div>
            
            <!-- Main Image Card -->
            <div class="relative w-full aspect-[4/5] rounded-[4rem] overflow-hidden border-8 border-white shadow-2xl z-10">
              <NuxtImg 
                alt="Dra. Kelly Fortes realizando um atendimento veterinário carinhoso" 
                class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                src="/avatar.jpeg" 
                width="600" 
                height="750" 
                format="webp"
                fetchpriority="high"
              />
            </div>

            <!-- Floating CRMV Badge (Desktop) -->
            <div class="absolute -bottom-8 -left-8 bg-white/90 backdrop-blur-md p-6 rounded-[2rem] shadow-2xl border border-slate-100 z-20 group/badge hover:-translate-y-2 transition-all duration-500">
              <div class="flex items-center gap-5">
                <div class="w-16 h-16 bg-teal-50 flex items-center justify-center rounded-2xl shrink-0 border border-teal-100 shadow-sm group-hover/badge:bg-teal-700 group-hover/badge:text-white transition-all duration-500">
                  <Icon name="ph:first-aid-fill" class="text-teal-700 group-hover/badge:text-white text-3xl transition-colors" />
                </div>
                <div>
                  <p class="font-bold text-xl text-tertiary">CRMV 26979</p>
                  <p class="text-sm text-on-tertiary-fixed-variant font-medium">Registro Ativo MG</p>
                </div>
              </div>
            </div>

            <!-- Floating Experience Badge (Desktop) -->
            <div class="absolute top-12 -right-8 bg-burgundy-700 p-5 rounded-[1.5rem] shadow-2xl z-20 hover:scale-105 transition-transform duration-500">
              <div class="flex flex-col items-center text-white">
                <span class="text-2xl font-bold leading-none">10+</span>
                <span class="text-[10px] uppercase tracking-tighter font-medium mt-1 opacity-80">Anos de Exp.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Custom animations if needed, though Tailwind classes cover most */
</style>

