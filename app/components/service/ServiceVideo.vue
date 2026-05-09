<template>
  <section v-if="videoUrl" class="py-16 md:py-32 bg-slate-50 relative overflow-hidden" aria-labelledby="video-title">
    
    <!-- Subtle Background Decors -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div class="absolute top-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      <div class="absolute -left-[10%] top-[30%] w-[40rem] h-[40rem] bg-teal-500/10 rounded-full blur-[120px]"></div>
    </div>

    <div class="main-container mx-auto px-6 md:px-12 relative z-10">
      
      <div class="text-center mb-16 flex flex-col items-center">
        <!-- Premium Badge -->
        <div v-animate-on-scroll class="inline-flex items-center gap-2 text-teal-800 font-bold bg-teal-100/50 px-4 py-2 rounded-full mb-6 backdrop-blur-sm border border-teal-200/50">
          <Icon name="ph:play-circle-bold" size="18" aria-hidden="true" />
          <span class="text-xs sm:text-sm uppercase tracking-wider">Assista ao vídeo</span>
        </div>

        <h2 id="video-title" v-animate-on-scroll="'100ms'" class="text-4xl md:text-5xl lg:text-6xl font-black font-headline-lg text-tertiary mb-6 leading-tight">
          Entenda o <span class="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-teal-500">Procedimento</span>
        </h2>
        
        <p v-animate-on-scroll="'200ms'" class="text-lg md:text-xl text-on-tertiary-fixed-variant leading-relaxed max-w-2xl">
          Preparamos um material em vídeo para você entender todos os detalhes de como realizamos nosso atendimento.
        </p>
      </div>
      
      <!-- Video Player Glass Frame -->
      <div v-animate-on-scroll="'300ms'" class="max-w-5xl mx-auto p-3 md:p-6 bg-white/40 backdrop-blur-xl rounded-[2rem] md:rounded-[3rem] border border-white/60 shadow-xl shadow-teal-900/5 relative group">
        
        <!-- Glow behind the frame -->
        <div class="absolute inset-0 bg-gradient-to-r from-teal-400/0 via-teal-400/5 to-teal-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rounded-[3rem]" aria-hidden="true"></div>

        <div class="aspect-video rounded-xl md:rounded-[2rem] overflow-hidden bg-slate-900 relative z-10 shadow-inner">
          <iframe 
            class="w-full h-full object-cover"
            :src="videoUrl" 
            title="Vídeo explicativo do procedimento" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen
          ></iframe>
        </div>
        
      </div>
      
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  videoUrl?: string
}>()
</script>
