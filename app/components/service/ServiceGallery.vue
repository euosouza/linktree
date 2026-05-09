<template>
  <section v-if="gallery && gallery.length" class="py-16 md:py-32 bg-white relative overflow-hidden" aria-labelledby="gallery-title">
    
    <!-- Subtle Background Decors -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div class="absolute -left-[10%] top-[20%] w-[40rem] h-[40rem] bg-burgundy-500/5 rounded-full blur-[100px]"></div>
    </div>

    <div class="main-container mx-auto px-6 md:px-12 relative z-10">
      
      <div class="text-center mb-16 flex flex-col items-center">
        <!-- Premium Badge -->
        <div v-animate-on-scroll class="inline-flex items-center gap-2 text-burgundy-800 font-bold bg-burgundy-100/50 px-4 py-2 rounded-full mb-6 backdrop-blur-sm border border-burgundy-200/50">
          <Icon name="ph:camera-plus-bold" size="18" aria-hidden="true" />
          <span class="text-xs sm:text-sm uppercase tracking-wider">Por dentro</span>
        </div>

        <h2 id="gallery-title" v-animate-on-scroll="'100ms'" class="text-4xl md:text-5xl lg:text-6xl font-black font-headline-lg text-tertiary mb-6 leading-tight">
          Galeria do <span class="text-transparent bg-clip-text bg-gradient-to-r from-burgundy-700 to-burgundy-500">Procedimento</span>
        </h2>
        
        <p v-animate-on-scroll="'200ms'" class="text-lg md:text-xl text-on-tertiary-fixed-variant leading-relaxed max-w-2xl">
          Veja registros reais de atendimentos realizados e sinta a tranquilidade que levamos até sua casa.
        </p>
      </div>
      
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <div 
          v-for="(img, index) in gallery" 
          :key="index" 
          v-animate-on-scroll="`${(index % 3) * 150}ms`" 
          class="group relative aspect-square rounded-3xl md:rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-slate-100 bg-slate-50"
        >
          <NuxtImg 
            :src="img" 
            alt="Registro do procedimento veterinário" 
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            format="webp"
            loading="lazy"
          />
          
          <!-- Hover Overlay Gradient -->
          <div class="absolute inset-0 bg-gradient-to-t from-burgundy-900/90 via-burgundy-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none flex items-center justify-center">
            
            <!-- Icon floating up -->
            <div class="w-16 h-16 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
              <Icon name="ph:magnifying-glass-plus-bold" size="32" class="text-white drop-shadow-lg" aria-hidden="true" />
            </div>
            
          </div>
        </div>
      </div>
      
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  gallery: string[]
}>()
</script>
