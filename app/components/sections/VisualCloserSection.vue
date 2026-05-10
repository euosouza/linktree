<script setup lang="ts">
const config = useRuntimeConfig()
const baseURL = config.app.baseURL
</script>

<template>
  <section 
    class="py-12 md:py-24 bg-white relative overflow-hidden"
    aria-labelledby="closer-title"
  >
    <div class="main-container mx-auto px-6 md:px-12">
      <!-- Premium Callout Card -->
      <div 
        v-animate-on-scroll 
        class="relative rounded-[3rem] md:rounded-[4rem] bg-burgundy-900 overflow-hidden shadow-2xl border border-burgundy-800 group"
      >
        <!-- Internal Background Decors -->
        <div class="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div class="absolute -right-20 -top-20 w-[30rem] h-[30rem] bg-teal-500/10 rounded-full blur-[100px] group-hover:bg-teal-500/15 transition-colors duration-700"></div>
          <div class="absolute -left-20 -bottom-20 w-[25rem] h-[25rem] bg-burgundy-400/10 rounded-full blur-[100px] group-hover:bg-burgundy-400/15 transition-colors duration-700"></div>
        </div>

        <div class="relative z-10 p-8 md:p-16 lg:p-20">
          <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            <!-- Content Column -->
            <div class="lg:w-3/5 flex flex-col items-center lg:items-start text-center lg:text-left">
              <!-- Badge -->
              <div class="inline-flex items-center gap-2 text-teal-400 font-bold bg-teal-400/10 px-4 py-2 rounded-full mb-8 backdrop-blur-sm border border-teal-400/20">
                <Icon name="ph:heart-fill" size="18" aria-hidden="true" />
                <span class="text-xs sm:text-sm uppercase tracking-widest">Cuidado que Aproxima</span>
              </div>

              <h2 id="closer-title" class="text-3xl md:text-5xl lg:text-6xl font-bold font-headline-lg text-white mb-8 leading-[1.15]">
                Saúde e bem-estar no <span class="text-teal-400">território do seu pet</span>
              </h2>

              <p class="text-lg md:text-xl text-burgundy-100/80 leading-relaxed mb-10 max-w-2xl">
                Cada visita é uma oportunidade de proporcionar uma vida mais longa, saudável e feliz para o seu melhor amigo. Vamos transformar o cuidado veterinário em um momento de carinho?
              </p>

              <!-- CTA Button -->
              <a 
                class="group/btn flex items-center justify-center gap-3 bg-white text-burgundy-900 py-4 px-10 rounded-2xl font-bold shadow-xl hover:bg-teal-50 hover:shadow-teal-400/20 hover:-translate-y-1 active:scale-95 transition-all duration-300"
                href="https://wa.me/5531999581716?text=Olá%2C%20Dra.%20Kelly!%20Gostaria%20de%20agendar%20um%20atendimento%20domiciliar%20"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Icon name="ph:whatsapp-logo-fill" size="24" class="text-burgundy-700 transition-transform duration-300 group-hover/btn:rotate-12" />
                Agendar Agora
              </a>
            </div>

            <!-- Image Column -->
            <div class="lg:w-2/5 relative">
              <div class="relative rounded-[2.5rem] overflow-hidden border-4 border-white/10 shadow-2xl group/img">
                <NuxtImg 
                  alt="Atendimento veterinário humanizado" 
                  class="w-full h-full object-cover aspect-square transition-transform duration-1000 group-hover/img:scale-110" 
                  src="/banner_2.jpeg" 
                  loading="lazy" 
                  decoding="async"
                  format="webp"
                />
                <!-- Gradient Overlay -->
                <div class="absolute inset-0 bg-gradient-to-t from-burgundy-900/40 via-transparent to-transparent"></div>
                
                <!-- Floating Info Badge on Image -->
                <div class="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl text-white hidden sm:block transform translate-y-2 opacity-0 group-hover/img:translate-y-0 group-hover/img:opacity-100 transition-all duration-500">
                  <p class="text-xs font-bold uppercase tracking-widest text-teal-400 mb-1">Diferencial</p>
                  <p class="text-sm font-medium">Equipamentos modernos em domicílio</p>
                </div>
              </div>
              
              <!-- Decorative element behind image -->
              <div class="absolute -z-10 -bottom-6 -right-6 w-full h-full bg-teal-400/10 rounded-[2.5rem] rotate-3 scale-95 group-hover:rotate-6 transition-transform duration-700"></div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Custom animations handled via Tailwind and v-animate-on-scroll */
</style>
