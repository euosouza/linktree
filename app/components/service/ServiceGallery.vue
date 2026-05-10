<template>
  <section v-if="gallery && gallery.length" class="py-12 md:py-32 bg-white relative overflow-hidden" aria-labelledby="gallery-title">
    
    <!-- Premium Background Decors (Asymmetrical Orbs) -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div class="absolute -right-[10%] top-[20%] w-[35rem] h-[35rem] bg-burgundy-500/5 rounded-full blur-[120px]"></div>
      <div class="absolute -left-[10%] bottom-[10%] w-[30rem] h-[30rem] bg-teal-500/5 rounded-full blur-[120px]"></div>
    </div>

    <div class="main-container mx-auto px-6 md:px-12 relative z-10">
      
      <!-- Section Header (Standardized Pattern) -->
      <div v-animate-on-scroll class="text-center max-w-4xl mx-auto mb-16 md:mb-24 flex flex-col items-center">
        <!-- Premium Badge -->
        <div class="inline-flex items-center gap-2 text-burgundy-800 font-bold bg-burgundy-50 px-4 py-2 rounded-full mb-8 backdrop-blur-sm border border-burgundy-100 shadow-sm">
          <Icon name="ph:camera-plus-fill" size="18" aria-hidden="true" class="text-burgundy-600" />
          <span class="text-xs sm:text-sm uppercase tracking-widest font-black">Galeria Exclusiva</span>
        </div>

        <h2 id="gallery-title" class="text-3xl md:text-5xl lg:text-6xl font-black font-headline-lg text-slate-900 mb-8 leading-tight tracking-tight">
          Momentos de <span class="text-burgundy-600">Cuidado</span> e Carinho
        </h2>
        
        <p class="text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed">
          Registros reais que capturam a essência do nosso atendimento: tranquilidade para o seu pet e segurança para você no conforto do seu lar.
        </p>
      </div>
      
      <!-- Gallery Container: Carousel on Mobile / Bento Grid on Desktop -->
      <div class="relative -mx-6 md:-mx-12 lg:mx-0">
        <div class="flex overflow-x-auto no-scrollbar snap-x snap-mandatory lg:grid lg:grid-cols-4 gap-4 md:gap-6 lg:auto-rows-[280px] px-6 md:px-12 lg:px-0 pb-8 lg:pb-0">
          <div 
            v-for="(img, index) in gallery" 
            :key="index" 
            v-animate-on-scroll="`${(index % 4) * 100}ms`" 
            :class="[
              'snap-center shrink-0 w-[85%] sm:w-[60%] lg:w-auto relative rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-700 border border-slate-100 bg-slate-50',
              getGridSpan(index)
            ]"
          >
            <NuxtImg 
              :src="img" 
              alt="Registro do procedimento veterinário" 
              class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              format="webp"
              loading="lazy"
            />
            
            <!-- Premium Hover Overlay (Glassmorphism & Storytelling) -->
            <div class="absolute inset-0 bg-gradient-to-t from-burgundy-900/90 via-burgundy-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none flex flex-col justify-end p-6 md:p-10">
              
              <div class="translate-y-6 group-hover:translate-y-0 transition-transform duration-700 ease-out">
                 <div class="w-12 h-12 bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl flex items-center justify-center mb-5 shadow-lg">
                    <Icon name="ph:magnifying-glass-plus-bold" size="24" class="text-white" aria-hidden="true" />
                 </div>
                 <h3 class="text-white font-bold text-xl mb-1">Registro Real</h3>
                 <p class="text-white/80 text-xs uppercase tracking-widest font-black">Atendimento em Domicílio</p>
              </div>
              
            </div>

            <!-- Subtle Border Inner Glow -->
            <div class="absolute inset-0 border-[12px] border-white/0 group-hover:border-white/5 transition-all duration-1000 pointer-events-none"></div>
          </div>
        </div>

        <!-- Mobile Scroll Hint -->
        <div class="lg:hidden flex justify-center items-center gap-2 mt-4 text-slate-300">
          <div class="w-1.5 h-1.5 rounded-full bg-burgundy-200"></div>
          <div class="w-1.5 h-1.5 rounded-full bg-slate-100"></div>
          <div class="w-1.5 h-1.5 rounded-full bg-slate-100"></div>
        </div>
      </div>
      
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  gallery: string[]
}>()

/**
 * Calculates the grid span for a Bento Grid effect
 */
const getGridSpan = (index: number) => {
  const patterns = [
    'lg:col-span-2 lg:row-span-2', // Featured Large
    'lg:col-span-1 lg:row-span-1',
    'lg:col-span-1 lg:row-span-1',
    'lg:col-span-2 lg:row-span-1', // Wide
    'lg:col-span-1 lg:row-span-2', // Tall
    'lg:col-span-1 lg:row-span-1',
    'lg:col-span-2 lg:row-span-2', // Repeat pattern logic
  ]
  return patterns[index % patterns.length]
}
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
